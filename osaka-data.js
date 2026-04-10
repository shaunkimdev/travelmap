// ══════════════════════════════════════════
// OSAKA ACCOMMODATION MAP — CITY DATA
// GPS coordinates verified for Leaflet map use
// Pricing: JPY, 2023-2024 Booking.com / market averages
// ══════════════════════════════════════════

window.CITY_DATA = {
  cityId: 'osaka',
  nativeCurrency: 'JPY',

  // Price thresholds (JPY) for color-coding circles
  // <3500 = very cheap (green), <7000 = cheap, <13000 = mid,
  // <20000 = pricier, <32000 = expensive, ≥32000 = luxury (purple)
  THRESH: [3500, 7000, 13000, 20000, 32000],

  // ══════════════════════════════════════════
  // AREAS  (12 key tourist / accommodation zones)
  // ══════════════════════════════════════════
  AREAS: [

    // 1. 난바 (Namba) — Osaka's beating entertainment heart
    {
      id: 'namba',
      ko: '난바', en: 'Namba', ja: '難波',
      coords: [34.6647, 135.5009],
      radius: 720,
      rec: true,
      icon: 'local_dining',
      prices: {
        capsule:  3200,
        hostel:   4500,
        budget:   9500,
        standard: 17000,
        premium:  34000,
        luxury:   72000
      },
      sKo: ['도톤보리', '쿠로몬 시장', '호젠지 요코초', '난바 워크스'],
      sEn: ['Dotonbori', 'Kuromon Market', 'Hozenji Yokocho', 'Namba Walk'],
      sJa: ['道頓堀', '黒門市場', '法善寺横丁', 'なんばウォーク']
    },

    // 2. 신사이바시 (Shinsaibashi) — Flagship shopping boulevard
    {
      id: 'shinsaibashi',
      ko: '신사이바시', en: 'Shinsaibashi', ja: '心斎橋',
      coords: [34.6726, 135.5005],
      radius: 620,
      rec: true,
      icon: 'shopping_bag',
      prices: {
        capsule:  3500,
        hostel:   4800,
        budget:   10500,
        standard: 19000,
        premium:  38000,
        luxury:   82000
      },
      sKo: ['신사이바시스지 상점가', '아메리카무라', '유럽 빌딩', '코에도 거리'],
      sEn: ['Shinsaibashisuji Shopping St.', 'Amerika-mura', 'Europa Building', 'Koedo Street'],
      sJa: ['心斎橋筋商店街', 'アメリカ村', 'ヨーロッパ通り', '小江戸通り']
    },

    // 3. 우메다 (Umeda) — Osaka's north gate, Kita district hub
    {
      id: 'umeda',
      ko: '우메다', en: 'Umeda', ja: '梅田',
      coords: [34.7024, 135.4959],
      radius: 750,
      rec: true,
      icon: 'train',
      prices: {
        capsule:  3800,
        hostel:   5200,
        budget:   11000,
        standard: 20000,
        premium:  42000,
        luxury:   90000
      },
      sKo: ['오사카 역', '그랑프론트 오사카', '우메다 스카이빌딩', 'HEP FIVE 관람차'],
      sEn: ['Osaka Station', 'Grand Front Osaka', 'Umeda Sky Building', 'HEP FIVE Ferris Wheel'],
      sJa: ['大阪駅', 'グランフロント大阪', '梅田スカイビル', 'HEP FIVEの観覧車']
    },

    // 4. 덴노지 (Tennoji) — Culture, zoo & Abeno Harukas gateway
    {
      id: 'tennoji',
      ko: '덴노지', en: 'Tennoji', ja: '天王寺',
      coords: [34.6464, 135.5136],
      radius: 660,
      rec: true,
      icon: 'account_balance',
      prices: {
        capsule:  2800,
        hostel:   3900,
        budget:   8500,
        standard: 15000,
        premium:  28000,
        luxury:   58000
      },
      sKo: ['아베노 하루카스', '덴노지 동물원', '시텐노지', '덴노지 공원'],
      sEn: ['Abeno Harukas', 'Tennoji Zoo', 'Shitennoji Temple', 'Tennoji Park'],
      sJa: ['あべのハルカス', '天王寺動物園', '四天王寺', '天王寺公園']
    },

    // 5. 오사카성 / 다니마치 (Osaka Castle / Tanimachi)
    {
      id: 'osaka_castle',
      ko: '오사카성·다니마치', en: 'Osaka Castle / Tanimachi', ja: '大阪城・谷町',
      coords: [34.6873, 135.5259],
      radius: 680,
      rec: true,
      icon: 'castle',
      prices: {
        capsule:  null,
        hostel:   4200,
        budget:   9000,
        standard: 16500,
        premium:  32000,
        luxury:   65000
      },
      sKo: ['오사카성', '오사카성 공원', '다니마치 항아리 거리', '오사카 역사박물관'],
      sEn: ['Osaka Castle', 'Osaka Castle Park', 'Tanimachi Antique St.', 'Osaka Museum of History'],
      sJa: ['大阪城', '大阪城公園', '谷町骨董街', '大阪歴史博物館']
    },

    // 6. 도톤보리 (Dotonbori) — Canal-front food-and-neon strip
    {
      id: 'dotonbori',
      ko: '도톤보리', en: 'Dotonbori', ja: '道頓堀',
      coords: [34.6687, 135.5014],
      radius: 540,
      rec: false,
      icon: 'nightlife',
      prices: {
        capsule:  3400,
        hostel:   4700,
        budget:   10000,
        standard: 18000,
        premium:  35000,
        luxury:   74000
      },
      sKo: ['글리코 간판', '돈키호테 도톤보리', '가니도라쿠', '도톤보리 운하 크루즈'],
      sEn: ['Glico Running Man', 'Don Quijote Dotonbori', 'Kani Doraku', 'Canal Cruise'],
      sJa: ['グリコ看板', 'ドン・キホーテ道頓堀', 'かに道楽', '道頓堀クルーズ']
    },

    // 7. 신세카이 (Shinsekai) — Old Osaka retro district
    {
      id: 'shinsekai',
      ko: '신세카이', en: 'Shinsekai', ja: '新世界',
      coords: [34.6517, 135.5062],
      radius: 560,
      rec: false,
      icon: 'ramen_dining',
      prices: {
        capsule:  2500,
        hostel:   3300,
        budget:   7500,
        standard: 13500,
        premium:  25000,
        luxury:   null
      },
      sKo: ['츠텐카쿠', '쟌쟌 요코초', '빌리켄 신사', '신세카이 시장'],
      sEn: ['Tsutenkaku Tower', 'Janjan Yokocho', 'Billiken Shrine', 'Shinsekai Market'],
      sJa: ['通天閣', 'ジャンジャン横丁', 'ビリケン神社', '新世界市場']
    },

    // 8. 오사카 베이 / USJ (Bay area / Universal Studios Japan)
    {
      id: 'bay_usj',
      ko: '오사카 베이·USJ', en: 'Osaka Bay / USJ', ja: '大阪ベイ・USJ',
      coords: [34.6654, 135.4323],
      radius: 750,
      rec: false,
      icon: 'attractions',
      prices: {
        capsule:  null,
        hostel:   4600,
        budget:   10500,
        standard: 19500,
        premium:  38000,
        luxury:   78000
      },
      sKo: ['유니버설 스튜디오 재팬', '오사카 아쿠아리움 카이유칸', '덴포잔 대관람차', '유니버설 시티워크'],
      sEn: ['Universal Studios Japan', 'Osaka Aquarium Kaiyukan', 'Tempozan Ferris Wheel', 'Universal CityWalk'],
      sJa: ['ユニバーサル・スタジオ・ジャパン', '海遊館', '天保山大観覧車', 'ユニバーシティウォーク']
    },

    // 9. 기타 / 나카노시마 (Kita / Nakanoshima cultural isle)
    {
      id: 'nakanoshima',
      ko: '나카노시마·기타', en: 'Nakanoshima / Kita', ja: '中之島・北区',
      coords: [34.6936, 135.5012],
      radius: 600,
      rec: false,
      icon: 'museum',
      prices: {
        capsule:  null,
        hostel:   5000,
        budget:   11500,
        standard: 22000,
        premium:  45000,
        luxury:   95000
      },
      sKo: ['오사카 시청', '나카노시마 공원', '오사카 시립 과학관', '리가 로열 호텔'],
      sEn: ['Osaka City Hall', 'Nakanoshima Park', 'Osaka Science Museum', 'Rihga Royal Hotel'],
      sJa: ['大阪市役所', '中之島公園', '大阪市立科学館', 'リーガロイヤルホテル']
    },

    // 10. 혼마치 (Honmachi) — Osaka CBD / business district
    {
      id: 'honmachi',
      ko: '혼마치', en: 'Honmachi', ja: '本町',
      coords: [34.6826, 135.5023],
      radius: 580,
      rec: false,
      icon: 'business_center',
      prices: {
        capsule:  null,
        hostel:   4800,
        budget:   11000,
        standard: 21000,
        premium:  42000,
        luxury:   88000
      },
      sKo: ['오사카 비즈니스 파크', '혼마치 그로멧', '센바 센터 빌딩', '미도스지 대로'],
      sEn: ['Osaka Business Park', 'Honmachi Gromet', 'Semba Center Building', 'Midosuji Boulevard'],
      sJa: ['大阪ビジネスパーク', '本町グロメット', '船場センタービル', '御堂筋']
    },

    // 11. 난코 / 오사카 남항 (Nanko / ATC / Intex Osaka)
    {
      id: 'nanko',
      ko: '난코·남항', en: 'Nanko / South Bay', ja: '南港・ナンコウ',
      coords: [34.6138, 135.4609],
      radius: 620,
      rec: false,
      icon: 'directions_boat',
      prices: {
        capsule:  null,
        hostel:   3800,
        budget:   8500,
        standard: 14500,
        premium:  26000,
        luxury:   null
      },
      sKo: ['인텍스 오사카', 'ATC (아시아 태평양 트레이드 센터)', '오사카 코즈모스퀘어', '페리 터미널'],
      sEn: ['Intex Osaka', 'ATC (Asia-Pacific Trade Center)', 'Osaka Cosmosquare', 'Ferry Terminal'],
      sJa: ['インテックス大阪', 'ATC（アジア太平洋トレードセンター）', 'コスモスクエア', 'フェリーターミナル']
    },

    // 12. 교바시 / 모리노미야 (Kyobashi / Morinomiya — east Osaka)
    {
      id: 'kyobashi',
      ko: '교바시·모리노미야', en: 'Kyobashi / Morinomiya', ja: '京橋・森ノ宮',
      coords: [34.6924, 135.5355],
      radius: 560,
      rec: false,
      icon: 'local_bar',
      prices: {
        capsule:  2600,
        hostel:   3600,
        budget:   8000,
        standard: 14000,
        premium:  26000,
        luxury:   null
      },
      sKo: ['교바시 술집 거리', '오사카성 동쪽 관문', '모리노미야 큐브', '오사카 교육대학'],
      sEn: ['Kyobashi Izakaya Strip', 'East Gate of Osaka Castle', 'Morinomiya Qross', 'Osaka Kyoiku Univ.'],
      sJa: ['京橋居酒屋街', '大阪城東側', '森ノ宮キューズモール', '大阪教育大学']
    }
  ],

  // ══════════════════════════════════════════
  // AREA META — taglines & multi-icon sets
  // ══════════════════════════════════════════
  AREA_META: {
    namba: {
      tagKo: '오사카 최대 번화가·먹거리 천국',
      tagEn: "Osaka's main entertainment and food paradise",
      tagJa: '大阪最大の繁華街・グルメの聖地',
      icons: ['local_dining', 'nightlife', 'shopping_bag']
    },
    shinsaibashi: {
      tagKo: '명품부터 패스트패션까지, 오사카 제1의 쇼핑 대로',
      tagEn: 'Osaka's premier shopping boulevard from luxury to fast-fashion',
      tagJa: 'ラグジュアリーからファストファッションまで、大阪随一のショッピング通り',
      icons: ['shopping_bag', 'style', 'local_cafe']
    },
    umeda: {
      tagKo: '오사카의 북쪽 관문, 교통·쇼핑·비즈니스의 허브',
      tagEn: 'Osaka\'s north gate — transport, shopping & business hub',
      tagJa: '大阪の北の玄関口、交通・ショッピング・ビジネスのハブ',
      icons: ['train', 'shopping_bag', 'business_center']
    },
    tennoji: {
      tagKo: '고대 사원과 최고층 빌딩이 공존하는 문화의 거점',
      tagEn: 'Ancient temples meet Japan\'s tallest skyscraper',
      tagJa: '古代の寺院と最高層ビルが共存する文化の拠点',
      icons: ['account_balance', 'temple_buddhist', 'pets']
    },
    osaka_castle: {
      tagKo: '도요토미 히데요시의 오사카성, 역사와 벚꽃의 성지',
      tagEn: 'Toyotomi\'s iconic fortress — history, cherry blossoms & skyline views',
      tagJa: '豊臣秀吉の大阪城、歴史と桜の聖地',
      icons: ['castle', 'park', 'museum']
    },
    dotonbori: {
      tagKo: '오사카의 상징 글리코 간판, 운하변 네온 야경의 중심',
      tagEn: 'Glico sign, neon canal-front & the soul of Osaka\'s nightlife',
      tagJa: 'グリコ看板と運河沿いのネオン夜景、大阪の象徴',
      icons: ['nightlife', 'local_dining', 'photo_camera']
    },
    shinsekai: {
      tagKo: '쇼와 레트로 분위기의 구시가, 오사카 서민 문화의 상징',
      tagEn: 'Retro Showa-era district — the working-class soul of old Osaka',
      tagJa: '昭和レトロの下町、大阪庶民文化の象徴',
      icons: ['ramen_dining', 'cell_tower', 'storefront']
    },
    bay_usj: {
      tagKo: '해리포터·슈퍼마리오가 기다리는 서일본 최대 테마파크',
      tagEn: 'Harry Potter, Super Mario & West Japan\'s biggest theme park',
      tagJa: 'ハリー・ポッターとスーパーマリオが待つ西日本最大のテーマパーク',
      icons: ['attractions', 'directions_boat', 'local_dining']
    },
    nakanoshima: {
      tagKo: '두 강 사이의 섬, 오사카의 문화·행정·고급 호텔 밀집지',
      tagEn: 'Island between two rivers — culture, city hall & luxury hotels',
      tagJa: '二つの川に挟まれた島、文化・行政・高級ホテルの集積地',
      icons: ['museum', 'park', 'business_center']
    },
    honmachi: {
      tagKo: '오사카 CBD의 핵심, 비즈니스맨들의 숙박 1번지',
      tagEn: 'Osaka\'s CBD core — top choice for business travellers',
      tagJa: '大阪CBDの中心、ビジネスマンの宿泊No.1エリア',
      icons: ['business_center', 'directions_subway', 'local_dining']
    },
    nanko: {
      tagKo: '국제 전시 도시·남항의 조용한 비즈니스·페리 거점',
      tagEn: 'International expo city, south harbour ferry hub',
      tagJa: '国際展示都市と南港のフェリー拠点',
      icons: ['directions_boat', 'business_center', 'anchor']
    },
    kyobashi: {
      tagKo: '서민적인 이자카야 거리, 오사카성 동쪽의 숨겨진 동네',
      tagEn: 'Unpretentious izakaya strip east of Osaka Castle',
      tagJa: '庶民的な居酒屋街、大阪城東側の隠れた街',
      icons: ['local_bar', 'castle', 'train']
    }
  },

  // ══════════════════════════════════════════
  // SUBWAY / METRO CONNECTIONS
  // Osaka Metro (大阪メトロ) main lines
  // ══════════════════════════════════════════
  CONNECTIONS: [

    // 1. 미도스지선 (Midosuji Line) — Red  #E5001B
    // Shin-Osaka → Umeda → Shinsaibashi → Namba → Tennoji → Nakamozu
    {
      ko: '미도스지선 (오사카 메트로)',
      en: 'Midosuji Line',
      ja: '御堂筋線',
      color: '#E5001B',
      weight: 6,
      coords: [
        [34.7338, 135.5001], // 신오사카 (Shin-Osaka)
        [34.7024, 135.4959], // 우메다 (Umeda)
        [34.6936, 135.5012], // 나카노시마 (Yodoyabashi area)
        [34.6826, 135.5023], // 혼마치 (Honmachi)
        [34.6726, 135.5005], // 신사이바시 (Shinsaibashi)
        [34.6647, 135.5009], // 난바 (Namba)
        [34.6517, 135.5062], // 신세카이 (Daikokucho area)
        [34.6464, 135.5136], // 덴노지 (Tennoji)
        [34.6294, 135.5196]  // 나카모즈 방향 (Nakamozu direction)
      ]
    },

    // 2. 요쓰바시선 (Yotsubashi Line) — Blue  #0068B7
    // Nishi-Umeda → Yotsubashi → Namba → Suminoekoen
    {
      ko: '요쓰바시선 (오사카 메트로)',
      en: 'Yotsubashi Line',
      ja: '四つ橋線',
      color: '#0068B7',
      weight: 4,
      coords: [
        [34.7017, 135.4908], // 니시우메다 (Nishi-Umeda)
        [34.6933, 135.4921], // 히고바시 (Higobashi)
        [34.6826, 135.4952], // 요쓰바시 (Yotsubashi)
        [34.6656, 135.4973], // 난바 서쪽 (Namba West)
        [34.6524, 135.4981], // 하나조노초 (Hanazonocho)
        [34.6138, 135.4609]  // 스미노에 공원 방향
      ]
    },

    // 3. 추오선 (Chuo Line) — Green  #00A650
    // Cosmosquare → Honmachi → Osaka Castle → Kadoma
    {
      ko: '추오선 (오사카 메트로)',
      en: 'Chuo Line',
      ja: '中央線',
      color: '#00A650',
      weight: 4,
      coords: [
        [34.6138, 135.4609], // 코즈모스퀘어 (Cosmosquare / Nanko)
        [34.6290, 135.4735], // 弁天町 (Bentenmachi)
        [34.6686, 135.4940], // 혼마치 서쪽 (Awaza)
        [34.6826, 135.5023], // 혼마치 (Honmachi)
        [34.6873, 135.5259], // 다니마치4초메 (Tanimachi 4-chome)
        [34.6924, 135.5355], // 모리노미야 (Morinomiya)
        [34.6970, 135.5547], // 오사카성 공원 (Osaka-jokoen)
        [34.7098, 135.5765]  // 카도마난바 방향 (Kadoma direction)
      ]
    },

    // 4. 나가호리 쓰루미 녹지선 (Nagahori Tsurumi-ryokuchi Line) — Yellow-green  #B5BE00
    // Taisho → Shinsaibashi → Kyobashi → Tsurumi-ryokuchi
    {
      ko: '나가호리 쓰루미 녹지선 (오사카 메트로)',
      en: 'Nagahori Tsurumi-ryokuchi Line',
      ja: '長堀鶴見緑地線',
      color: '#B5BE00',
      weight: 3,
      coords: [
        [34.6686, 135.4791], // 타이쇼 (Taisho)
        [34.6693, 135.4890], // 도미타 (Tomita)
        [34.6726, 135.5005], // 신사이바시 (Shinsaibashi)
        [34.6787, 135.5137], // 마쓰야마치 (Matsuyamachi)
        [34.6873, 135.5259], // 다니마치6초메 (Tanimachi 6-chome)
        [34.6924, 135.5355], // 교바시 (Kyobashi)
        [34.6985, 135.5572], // 조토구 방향 (Joto area)
        [34.7080, 135.5998]  // 쓰루미 녹지 (Tsurumi-ryokuchi)
      ]
    },

    // 5. 사카이스지선 (Sakaisuji Line) — Brown  #B5650D
    // Tenjimbashisuji 6-chome → Namba → Tengachaya
    {
      ko: '사카이스지선 (오사카 메트로)',
      en: 'Sakaisuji Line',
      ja: '堺筋線',
      color: '#B5650D',
      weight: 4,
      coords: [
        [34.7191, 135.5120], // 텐진바시스지 6초메 (Tenjimbashisuji 6-chome)
        [34.7077, 135.5110], // 텐진바시스지 (Tenjimbashisuji)
        [34.6936, 135.5062], // 키타하마 (Kitahama)
        [34.6826, 135.5100], // 다니마치 4초메 (Tanimachi 4-chome)
        [34.6726, 135.5074], // 나가호리바시 (Nagahoribashi)
        [34.6647, 135.5074], // 닛폰바시 (Nipponbashi)
        [34.6517, 135.5062], // 에비스초 (Ebisucho)
        [34.6380, 135.5062]  // 텐가차야 (Tengachaya)
      ]
    },

    // 6. 센니치마에선 (Sennichimae Line) — Pink  #E983A9
    // Noda → Honmachi → Namba → Tatsumi
    {
      ko: '센니치마에선 (오사카 메트로)',
      en: 'Sennichimae Line',
      ja: '千日前線',
      color: '#E983A9',
      weight: 3,
      coords: [
        [34.6830, 135.4797], // 노다 (Noda)
        [34.6826, 135.4960], // 아와자 (Awaza)
        [34.6826, 135.5023], // 혼마치 (Honmachi)
        [34.6750, 135.5062], // 사카이스지 혼마치 (Sakaisuji-Honmachi)
        [34.6647, 135.5062], // 난바 (Namba / Sennichimae)
        [34.6517, 135.5062], // 닛폰바시 (Nipponbashi)
        [34.6464, 135.5200], // 다쓰미 방향 (Tatsumi area)
        [34.6441, 135.5413]  // 다쓰미 (Tatsumi)
      ]
    }
  ],

  // ══════════════════════════════════════════
  // LABEL OFFSETS  { off:[latDelta, lngDelta], dir: 'n'|'s'|'e'|'w'|'ne'|'nw'|'se'|'sw' }
  // dir = which side the label box sits relative to the circle anchor
  // ══════════════════════════════════════════
  LABEL_OFFSETS: {
    namba:        { off: [ 0.000, -0.022], dir: 'w'  }, // west — avoids Dotonbori overlap
    shinsaibashi: { off: [ 0.018,  0.000], dir: 'n'  }, // north
    umeda:        { off: [ 0.020,  0.000], dir: 'n'  }, // north
    tennoji:      { off: [-0.018,  0.000], dir: 's'  }, // south
    osaka_castle: { off: [ 0.000,  0.024], dir: 'e'  }, // east
    dotonbori:    { off: [-0.018, -0.018], dir: 'sw' }, // southwest — below Namba
    shinsekai:    { off: [ 0.000, -0.022], dir: 'w'  }, // west
    bay_usj:      { off: [ 0.000, -0.026], dir: 'w'  }, // west — avoids water
    nakanoshima:  { off: [ 0.018,  0.000], dir: 'n'  }, // north
    honmachi:     { off: [-0.014, -0.018], dir: 'sw' }, // southwest
    nanko:        { off: [-0.018,  0.000], dir: 's'  }, // south
    kyobashi:     { off: [ 0.000,  0.022], dir: 'e'  }, // east
  },

  // ══════════════════════════════════════════
  // AREA COLORS  — distinct palette per area
  // ══════════════════════════════════════════
  AREA_COLORS: {
    namba:        '#E74C3C', // vivid red
    shinsaibashi: '#8E44AD', // purple
    umeda:        '#2471A3', // deep blue
    tennoji:      '#1E8449', // forest green
    osaka_castle: '#B7950B', // gold
    dotonbori:    '#D35400', // burnt orange
    shinsekai:    '#117A65', // teal
    bay_usj:      '#1A5276', // navy
    nakanoshima:  '#6C3483', // violet
    honmachi:     '#1B2631', // charcoal
    nanko:        '#0E6655', // dark teal
    kyobashi:     '#A04000'  // brown-orange
  }
};
