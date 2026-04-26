/**
 * Shared runtime helpers for city map pages.
 * Keeps cross-page behavior in one place while each page still owns its data.
 */
(function () {
  const interactiveSelector = '.tg-btn,.type-btn,.comp-btn,.ovl-btn,.ts-btn';
  let lastPlannerTrigger = null;
  let pressedObserver = null;

  function syncPressedStates() {
    document.querySelectorAll(interactiveSelector).forEach((button) => {
      button.setAttribute('aria-pressed', button.classList.contains('active') ? 'true' : 'false');
    });

    const overlay = document.getElementById('planner-overlay');
    if (overlay) {
      overlay.setAttribute('aria-hidden', overlay.classList.contains('open') ? 'false' : 'true');
    }
  }

  function moveSection(sidebar, id, afterNode) {
    const marker = document.getElementById(id);
    if (!marker) return afterNode;
    const section = marker.closest('.sec');
    if (!section) return afterNode;
    sidebar.insertBefore(section, afterNode ? afterNode.nextSibling : sidebar.firstChild);
    return section;
  }

  function reorderSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    let last = null;
    last = moveSection(sidebar, 'sec-type', last);
    last = moveSection(sidebar, 'sec-companion', last);
    last = moveSection(sidebar, document.getElementById('sec-overlay') ? 'sec-overlay' : 'sec-overlays', last);
    last = moveSection(sidebar, 'sec-legend', last);
    last = moveSection(sidebar, 'sec-subway', last);
    moveSection(sidebar, 'sec-notes', last);
  }

  function enhancePlannerDialog() {
    const overlay = document.getElementById('planner-overlay');
    const panel = overlay?.querySelector('.planner-panel');
    if (!overlay || !panel) return;

    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-modal', 'true');
    const title = panel.querySelector('[id*="pn-title"]');
    if (title) panel.setAttribute('aria-labelledby', title.id);
    overlay.setAttribute('aria-hidden', overlay.classList.contains('open') ? 'false' : 'true');
  }

  function focusPlanner() {
    const overlay = document.getElementById('planner-overlay');
    const target = overlay?.querySelector('input,button,[href],select,textarea,[tabindex]:not([tabindex="-1"])');
    target?.focus({ preventScroll: true });
  }

  function wrapPlannerFunctions() {
    if (typeof window.openPlanner === 'function' && !window.openPlanner.__cityWrapped) {
      const originalOpen = window.openPlanner;
      window.openPlanner = function (...args) {
        lastPlannerTrigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        const result = originalOpen.apply(this, args);
        syncPressedStates();
        setTimeout(focusPlanner, 0);
        return result;
      };
      window.openPlanner.__cityWrapped = true;
    }

    if (typeof window.closePlanner === 'function' && !window.closePlanner.__cityWrapped) {
      const originalClose = window.closePlanner;
      window.closePlanner = function (...args) {
        const result = originalClose.apply(this, args);
        syncPressedStates();
        if (lastPlannerTrigger?.isConnected) {
          lastPlannerTrigger.focus({ preventScroll: true });
        }
        return result;
      };
      window.closePlanner.__cityWrapped = true;
    }
  }

  function getActiveCityId() {
    const path = window.location.pathname;
    const match = path.match(/\/cities\/([^/]+)\//);
    if (match) return match[1];

    const title = document.getElementById('h-title')?.textContent || '';
    if (title.includes('오사카')) return 'osaka';
    if (title.includes('서울')) return 'seoul';
    return 'tokyo';
  }

  function buildDokidokiChrome() {
    if (document.querySelector('.dd-city-tabs')) return;

    const cities = [
      { id: 'tokyo', ko: '도쿄', emoji: '🗼', href: '../tokyo/' },
      { id: 'osaka', ko: '오사카', emoji: '🏯', href: '../osaka/' },
      { id: 'seoul', ko: '서울', emoji: '🏙️', href: '../seoul/' },
    ];
    const active = getActiveCityId();

    const tabs = document.createElement('nav');
    tabs.className = 'dd-city-tabs';
    tabs.setAttribute('aria-label', '도시 선택');
    tabs.innerHTML = cities.map((city) => `
      <a class="dd-city-tab ${city.id === active ? 'active' : ''}" href="${city.href}">
        <span>${city.emoji}</span><span>${city.ko}</span>
      </a>
    `).join('');

    const header = document.querySelector('header');
    header?.insertAdjacentElement('afterend', tabs);

    const bottom = document.createElement('nav');
    bottom.className = 'dd-bottom-nav';
    bottom.setAttribute('aria-label', '모바일 하단 메뉴');
    bottom.innerHTML = `
      <a class="dd-bottom-item" href="../../index.html"><span class="dd-bottom-icon">⌂</span><span>홈</span></a>
      <a class="dd-bottom-item" href="../../index.html#cities"><span class="dd-bottom-icon">⌕</span><span>탐색</span></a>
      <a class="dd-bottom-item center active" href="#"><span class="dd-bottom-icon">⌖</span><span>지도</span></a>
      <a class="dd-bottom-item" href="../../index.html#routes"><span class="dd-bottom-icon">♡</span><span>찜</span></a>
      <a class="dd-bottom-item" href="../../index.html"><span class="dd-bottom-icon">☻</span><span>마이</span></a>
    `;
    document.body.appendChild(bottom);
  }

  function syncPlannerInitialState() {
    const overlay = document.getElementById('planner-overlay');
    if (!overlay) return;

    if (typeof window.renderTravelTypeGrid === 'function') {
      window.renderTravelTypeGrid();
    }

    if (window.matchMedia('(min-width: 769px)').matches) {
      overlay.classList.add('open');
    }
  }

  window.cityCreateBaseTile = function cityCreateBaseTile(map, lang, previousLayer) {
    if (previousLayer) map.removeLayer(previousLayer);

    let fallbackAdded = false;
    const layerGroup = L.layerGroup();
    const stadiaLayer = L.tileLayer(
      `https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?language=${lang}`,
      {
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
        maxZoom: 20,
      }
    );

    stadiaLayer.on('tileerror', () => {
      if (fallbackAdded) return;
      fallbackAdded = true;
      layerGroup.clearLayers();
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(layerGroup);
    });

    stadiaLayer.addTo(layerGroup);
    return layerGroup.addTo(map);
  };

  window.citySyncPressedStates = syncPressedStates;

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.getElementById('planner-overlay')?.classList.contains('open')) {
      if (typeof window.closePlanner === 'function') window.closePlanner();
    }
  });

  window.addEventListener('load', () => {
    buildDokidokiChrome();
    syncPlannerInitialState();
    reorderSidebar();
    enhancePlannerDialog();
    wrapPlannerFunctions();
    syncPressedStates();

    pressedObserver?.disconnect();
    pressedObserver = new MutationObserver(syncPressedStates);
    pressedObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
      childList: true,
      subtree: true,
    });
  });
})();
