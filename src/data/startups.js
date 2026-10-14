// IT Park Mintaqaviy Filiali — Startap loyihalari va ko'rgazma ma'lumotlari

export const INITIAL_STARTUPS = [
  {
    id: 'agro-ai-vision',
    title: 'AgroAI Vision',
    tagline: "Sun'iy intellekt yordamida ekin kasalliklarini erta aniqlash va hosildorlikni bashorat qilish tizimi",
    category: 'AI & GreenTech',
    stage: 'MVP',
    region: "Farg'ona filiali",
    leader: 'Jasur Qodirov',
    teamSize: 4,
    team: [
      { name: 'Jasur Qodirov', role: 'AI Lead & Bosh dasturchi' },
      { name: 'Madina Aliyeva', role: 'Agronom & Data Specialist' },
      { name: 'Bobur Saidov', role: 'IoT & Hardware Engineer' },
      { name: 'Sardor Omonov', role: 'Product Manager' }
    ],
    problem: "Qishloq xo'jaligida ekin zararkunandalari va kasalliklari kech aniqlangani sababli dehqonlar har yili 30-40% gacha hosilni yo'qotadi. An'anaviy agronomik tekshiruvlar esa ko'p vaqt va xarajat talab qiladi.",
    solution: "Dronlar va mobil ilovadan olingan fotosuratlarni kompyuter ko'rishi (Computer Vision) orqali tahlil qiluvchi neyrotarmoq yaratildi. Tizim 96% aniqlik bilan 50 dan ortiq kasallikni erta aniqlaydi va zarur o'g'it miqdorini hisoblab beradi.",
    techStack: ['Python', 'PyTorch', 'React Native', 'FastAPI', 'YOLOv8', 'IoT Sensors'],
    votes: 248,
    pitchDeckUrl: 'https://example.com/pitch/agro-ai.pdf',
    demoUrl: 'https://agro-ai-vision-demo.uz',
    logoColor: 'from-emerald-500 to-teal-700',
    iconName: 'Sprout',
    createdDate: '2026-09-15',
    featured: true,
    isVerified: true
  },
  {
    id: 'edu-verse-vr',
    title: 'EduVerse VR',
    tagline: 'Maktab va litseylar uchun virtual kimyo-fizika laboratoriyasi',
    category: 'EdTech',
    stage: 'MVP',
    region: 'Samarqand filiali',
    leader: 'Shahzod Temirov',
    teamSize: 3,
    team: [
      { name: 'Shahzod Temirov', role: 'Unity / VR Dasturchi' },
      { name: 'Dilnoza Karimova', role: 'Ta\'lim metodisti' },
      { name: 'Bekzod Rahmonov', role: '3D Modeller & Animator' }
    ],
    problem: "Mintaqalardagi maktablarning 68% idan ko'prog'ida kimyoviy reaktivlar yoki xavfli fizika asboblari yo'q. O'quvchilar nazariyani amaliyotsiz o'rganishga majbur.",
    solution: "VR ko'zoynaklari va oddiy kompyuterlar uchun xavfsiz, interaktiv 3D laboratoriya simulyatsiyasi ishlab chiqildi. O'quvchilar xavfli portlashlar yoki reaksiyalarni bevosita virtual olamda sinab ko'radi.",
    techStack: ['Unity 3D', 'WebXR', 'C#', 'React.js', 'Tailwind CSS'],
    votes: 312,
    pitchDeckUrl: 'https://example.com/pitch/eduverse.pdf',
    demoUrl: 'https://eduverse-vr-demo.uz',
    logoColor: 'from-purple-500 to-indigo-700',
    iconName: 'GraduationCap',
    featured: true,
    isVerified: true
  },
  {
    id: 'medscan-ai',
    title: 'MedScan AI Radiology',
    tagline: 'Rentgen va MRT tasvirlarini soniyalar ichida tahlil qiluvchi tibbiy yordamchi',
    category: 'MedTech',
    stage: 'MVP',
    region: 'Toshkent viloyati filiali',
    leader: 'Dr. Sardorbek Yusupov',
    teamSize: 5,
    team: [
      { name: 'Dr. Sardorbek Yusupov', role: 'Radiolog & Loyiha asoschisi' },
      { name: 'Javohir Rustamov', role: 'Deep Learning Engineer' },
      { name: 'Umida Karimova', role: 'Tibbiy ma\'lumotlar tahlilchisi' }
    ],
    problem: "Tuman va viloyat shifoxonalarida yuqori malakali radiologlar yetishmaydi. Bemorlar MRT va rentgen xulosalarini olish uchun kunlab kutishadi.",
    solution: "100 000 dan ortiq klinik tasvirlar asosida o'qitilgan neyron tarmog'i pnevmoniya, o'pka saratoni va suyak shikastlanishlarini 3 soniyada 98.2% aniqlik bilan belgilab beradi.",
    techStack: ['TensorFlow', 'FastAPI', 'Next.js', 'DICOM Processing', 'PostgreSQL'],
    votes: 429,
    pitchDeckUrl: 'https://example.com/pitch/medscan.pdf',
    demoUrl: 'https://medscan-ai-demo.uz',
    logoColor: 'from-rose-500 to-red-700',
    iconName: 'Activity',
    featured: true,
    isVerified: true
  },
  {
    id: 'payquick-agro',
    title: 'PayQuick Agro',
    tagline: 'Fermer xo\'jaliklari va hosil xaridorlari uchun raqamli to\'lov va faktoring platformasi',
    category: 'FinTech',
    stage: 'Early Stage',
    region: 'Namangan filiali',
    leader: 'Azizbek Rahimov',
    teamSize: 3,
    team: [
      { name: 'Azizbek Rahimov', role: 'Fintech arxitektori' },
      { name: 'Kamola Yunusova', role: 'Biznes tahlilchi' },
      { name: 'Otabek Jo\'rayev', role: 'Mobile Developer' }
    ],
    problem: "Qishloq xo'jaligi mahsulotlarini sotishda naqd pulsiz hisob-kitoblar qiyin kechadi, ko'plab fermerlar mablag'larini 30-60 kunga kechiktirib oladilar.",
    solution: "Escrow va tezkor mikro-faktoring tizimi orqali fermer mahsulotini topshirishi bilan kafolatlangan to'lovni oladi, xaridor esa mahsulot sifatini tasdiqlaganidan so'ng mablag' o'tkaziladi.",
    techStack: ['Golang', 'Flutter', 'PostgreSQL', 'Docker', 'Redis'],
    votes: 195,
    pitchDeckUrl: 'https://example.com/pitch/payquick.pdf',
    demoUrl: 'https://payquick-agro.uz',
    logoColor: 'from-amber-500 to-orange-700',
    iconName: 'CreditCard',
    featured: false,
    isVerified: true
  },
  {
    id: 'ecologix-waste',
    title: 'EcoLogix Smart Waste',
    tagline: 'Chiqindilarni saralash va qayta ishlash ekotizimi uchun aqlli konteynerlar va tokenlashtirish',
    category: 'GreenTech',
    stage: 'Prototip / MVP',
    region: 'Buxoro filiali',
    leader: 'Malika Ergasheva',
    teamSize: 4,
    team: [
      { name: 'Malika Ergasheva', role: 'Ekolog & Jamoa rahbari' },
      { name: 'Timur Soliyev', role: 'Embedded Systems / IoT' },
      { name: 'Zilola Fayzullayeva', role: 'UI/UX Dizayner' }
    ],
    problem: "Shahar chiqindilarining atigi 12% i qayta ishlanadi. Aholining chiqindini saralashga qiziqishi va infratuzilmasi yetarli emas.",
    solution: "Sensorlar bilan jihozlangan aqlli konteynerlar plastik va metallni avtomatik taniydi. Foydalanuvchilar har bir topshirilgan shisha uchun mobil ilovada Eco-ball to'playdi va do'konlarda chegirmaga almashtiradi.",
    techStack: ['IoT ESP32', 'React.js', 'Node.js', 'Supabase', 'Tailwind CSS'],
    votes: 168,
    pitchDeckUrl: 'https://example.com/pitch/ecologix.pdf',
    demoUrl: 'https://ecologix-uz.uz',
    logoColor: 'from-green-500 to-emerald-700',
    iconName: 'Leaf',
    featured: false,
    isVerified: true
  },
  {
    id: 'smart-logist-saas',
    title: 'SmartLogist Pro',
    tagline: 'O\'zbekiston va Markaziy Osiyo bo\'ylab yuk tashuvlar uchun AI logistika birjasi',
    category: 'SaaS & AI',
    stage: 'MVP',
    region: 'Andijon filiali',
    leader: 'Farrux Islomov',
    teamSize: 3,
    team: [
      { name: 'Farrux Islomov', role: 'Bosh dasturchi' },
      { name: 'Otabek Nazarov', role: 'Logistika koordinatori' },
      { name: 'Diyorbek Qosimov', role: 'Backend Dev' }
    ],
    problem: "Yuk mashinalari qaytish yo'lida 45% holatda bo'sh yuradi. Bu transport xarajatlarini keraksiz oshiradi va yoqilg'i isrofiga olib keladi.",
    solution: "AI algoritmi yuklar va bo'sh marshrutlarni avtomatik juftlashtiradi. Yo'l harakati va yuk og'irligiga qarab eng tejamkor yo'nalishni hisoblaydi.",
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Mapbox GL', 'Socket.io'],
    votes: 214,
    pitchDeckUrl: 'https://example.com/pitch/smartlogist.pdf',
    demoUrl: 'https://smartlogist-app.uz',
    logoColor: 'from-blue-500 to-cyan-700',
    iconName: 'Truck',
    featured: false,
    isVerified: true
  },
  {
    id: 'cybershield-uz',
    title: 'CyberShield Bot',
    tagline: 'Telegram bizneslar va do\'konlar uchun fishing va kiber-hujumlardan avtomatik himoya',
    category: 'CyberSecurity',
    stage: 'MVP',
    region: 'Qashqadaryo filiali',
    leader: 'Bekzod Karimov',
    teamSize: 2,
    team: [
      { name: 'Bekzod Karimov', role: 'Security Researcher' },
      { name: 'Umidjon Soliyev', role: 'Python Developer' }
    ],
    problem: "Telegram orqali savdo qiluvchi 8 000 dan ziyod kichik do'konlar soxta cheklar va fishing havolalari orqali har oy yuz millionlab so'm yo'qotmoqda.",
    solution: "Skrinshotlardagi qalbaki bank cheklarini (OCR + AI) tahlil qiluvchi va zararli linklarni lahzada bloklovchi avtomatlashtirilgan xavfsizlik boti.",
    techStack: ['Python', 'Tesseract OCR', 'Telegram Bot API', 'Redis', 'Docker'],
    votes: 147,
    pitchDeckUrl: 'https://example.com/pitch/cybershield.pdf',
    demoUrl: 'https://t.me/CyberShieldUz_bot',
    logoColor: 'from-violet-500 to-purple-800',
    iconName: 'ShieldCheck',
    featured: false,
    isVerified: true
  },
  {
    id: 'tour-uz-ai',
    title: 'TourUz AI Guide',
    tagline: 'Tarixiy obidalar uchun aqlli audio-gid va AR rejimli shaxsiy sayyohlik yordamchisi',
    category: 'AI & Tourism',
    stage: 'MVP',
    region: 'Xorazm filiali',
    leader: 'Ziyodaxon Mahmudova',
    teamSize: 4,
    team: [
      { name: 'Ziyodaxon Mahmudova', role: 'Loyiha yetakchisi & Tarjimon' },
      { name: 'Eldor Nurmatov', role: 'Mobile AR Dasturchi' },
      { name: 'Sanjar Matrasulov', role: 'Audio & Tarixiy kontent' }
    ],
    problem: "Xorijiy sayyohlar barcha tildagi gid xizmatidan foydalana olmaydi, tarixiy obidalar haqidagi ma'lumotlar ko'pincha cheklangan va zerikarli taqdim etiladi.",
    solution: "Smartfon kamerasini obidaga qaratganda tarixiy qahramonlar 3D AR formatda gavdalanadi va 12 tilda jonli interaktiv audio ekskursiya o'tkazadi.",
    techStack: ['React Native', 'ARKit/ARCore', 'OpenAI API', 'ElevenLabs TTS'],
    votes: 276,
    pitchDeckUrl: 'https://example.com/pitch/touruz.pdf',
    demoUrl: 'https://tour-uz-ai.uz',
    logoColor: 'from-teal-500 to-emerald-800',
    iconName: 'Compass',
    featured: true,
    isVerified: true
  }
];

export const CATEGORIES = [
  'Barchasi',
  'AI & ML',
  'FinTech',
  'EdTech',
  'MedTech',
  'GreenTech',
  'CyberSecurity',
  'SaaS & B2B'
];

export const REGIONS = [
  'Toshkent shahri',
  'Toshkent viloyati',
  'Samarqand filiali',
  'Farg\'ona filiali',
  'Andijon filiali',
  'Namangan filiali',
  'Buxoro filiali',
  'Xorazm filiali',
  'Qashqadaryo filiali',
  'Surxondaryo filiali',
  'Navoiy filiali',
  'Jizzax filiali',
  'Sirdaryo filiali',
  'Qoraqalpog\'iston filiali'
];

export const STAGES = [
  'G\'oya bosqichida',
  'MVP (Prototip tayyor)',
  'Sinov / Ilk foydalanuvchilar',
  'O\'sish va daromad bosqichida'
];

export const AGENDA_DAYS = [
  {
    dayNumber: 1,
    title: '1-kun: Ko\'rgazma, Demo-stendlar & Investorlar uchrashuvi',
    date: '2026-yil 24-oktyabr (Shanba)',
    events: [
      {
        time: '09:00 - 10:00',
        title: 'Ishtirokchilar va mehmonlarni ro\'yxatga olish',
        description: 'Ko\'rgazma stendlarini joylashtirish, startapchilarga beydj va esdalik sovg\'alarini topshirish',
        tag: 'Ro\'yxatdan o\'tish',
        speaker: 'IT Park Tashkiliy qo\'mitasi'
      },
      {
        time: '10:00 - 10:45',
        title: 'Ko\'rgazmaning tantanali ochilishi',
        description: 'Raqamli texnologiyalar vazirligi va IT Park mintaqaviy filiali rahbariyati nutqi',
        tag: 'Ochilish',
        speaker: 'Viloyat hokimligi & IT Park Direktorati'
      },
      {
        time: '11:00 - 13:30',
        title: 'Startap stendlari ko\'rigi va VIP ekskursiya',
        description: 'Hakamlar hay\'ati va mehmonlar har bir stend bilan tanishib, loyihalar taqdimotini ko\'zdan kechiradi',
        tag: 'Ko\'rgazma',
        speaker: '50+ Startap jamoalari'
      },
      {
        time: '14:30 - 16:00',
        title: 'Master-klass: "G\'oyadan xalqaro bozorga: 1M$ investitsiya jalb qilish sirlari"',
        description: 'Venture Capital fondi boshqaruvchilari va muvaffaqiyatli startap asoschilari tajriba almashadi',
        tag: 'Master-klass',
        speaker: 'Sherzod Qodirov (Venture Partner)'
      },
      {
        time: '16:15 - 18:00',
        title: 'B2B Speed-Networking & Investorlar bilan yakkama-yakka muloqot',
        description: 'Startap asoschilari potensial farishta investorlar bilan 10 daqiqalik mini-suhbatlar o\'tkazadi',
        tag: 'Networking',
        speaker: 'Biznes-farishtalar uyushmasi'
      }
    ]
  },
  {
    dayNumber: 2,
    title: '2-kun: Top-15 Pitch Day & Taqdirlash Gala Marosimi',
    date: '2026-yil 25-oktyabr (Yakshanba)',
    events: [
      {
        time: '09:30 - 10:00',
        title: 'Pitch Day tayyorgarligi',
        description: 'Saralangan eng kuchli 15 ta startap jamoasi uchun texnik tayyorgarlik va ko\'rsatmalar',
        tag: 'Tayyorgarlik',
        speaker: 'Pitching koordinatori'
      },
      {
        time: '10:00 - 13:00',
        title: 'Top-15 Startaplar Final Pitch Sessiyasi',
        description: 'Har bir jamoaga 3 daqiqa taqdimot va 2 daqiqa hakamlar hay\'ati savol-javobi uchun vaqt beriladi',
        tag: 'Final Pitch',
        speaker: 'Finalchi jamoalar'
      },
      {
        time: '14:00 - 15:30',
        title: 'Panel munozara: "O\'zbekiston mintaqalarida innovatsion ekotizim kelajagi"',
        description: 'Ekotizim yetakchilari, universitet rektorlari va texnologiya kompaniyalari rahbarlari ishtirokida',
        tag: 'Panel sessiya',
        speaker: 'Ekotizim ekspertlari'
      },
      {
        time: '16:00 - 17:30',
        title: 'Tantanali Taqdirlash va G\'oliblarni e\'lon qilish',
        description: '100 000 000 so\'mlik vaucherlar, IT Park inkubatsiya grantlari va esdalik statuetkalari topshiriladi',
        tag: 'Gala marosim',
        speaker: 'Bosh hakamlar va Mehmonlar'
      },
      {
        time: '17:30 - 19:00',
        title: 'After-party, Furshet va Erkin muloqot',
        description: 'Jonli musiqa, norasmiy muloqot va yangi hamkorlik shartnomalari muhokamasi',
        tag: 'After-party',
        speaker: 'Barcha ishtirokchilar'
      }
    ]
  }
];

export const PRIZES = [
  {
    place: '1-O\'rin',
    amount: '50 000 000 UZS',
    badge: 'Bosh Sovrin',
    color: 'from-amber-400 via-yellow-500 to-amber-600',
    perks: [
      '50 million so\'m to\'g\'ridan-to\'g\'ri pul mukofoti',
      'IT Park Inkubatsiyasiga imtihonsiz qabul',
      'Toshkent xalqaro startap sammitiga bepul yo\'llanma',
      'Xususiy venture investorlar bilan 1-on-1 uchrashuvlar',
      '$10 000 lik bulutli infratuzilma grantlari (AWS / Google Cloud)'
    ]
  },
  {
    place: '2-O\'rin',
    amount: '30 000 000 UZS',
    badge: 'Kumush Mukofot',
    color: 'from-slate-300 via-gray-400 to-slate-500',
    perks: [
      '30 million so\'m naqd pul mukofoti',
      'IT Park kovorkingida 1 yillik bepul rezidentlik',
      '6 oylik professional yuridik va buxgalteriya ko\'magi',
      '$5 000 lik server va servis kreditlari',
      'OAV va matbuotda loyiha haqida keng yoritish'
    ]
  },
  {
    place: '3-O\'rin',
    amount: '20 000 000 UZS',
    badge: 'Bronza Mukofot',
    color: 'from-amber-600 via-orange-600 to-amber-800',
    perks: [
      '20 million so\'m pul mukofoti',
      '6 oylik IT Park mentorlik va akseleratsiya yordami',
      'Kompaniyani IT Park rezidentligiga ro\'yxatdan o\'tkazish ko\'magi',
      '$3 000 lik marketing va reklama vaucheri'
    ]
  }
];

export const SPECIAL_NOMINATIONS = [
  {
    title: 'Eng Yaxshi Sun\'iy Intellekt Yechimi',
    reward: '10 000 000 UZS + AI Hub Akseleratsiyasi',
    icon: 'Sparkles',
    desc: 'Eng samarali neyrotarmoq va amaliy foydali AI modelini yaratgan jamoaga'
  },
  {
    title: 'Ijtimoiy Ta\'sirga Ega Startap (Impact Award)',
    reward: '10 000 000 UZS + GreenTech Grant',
    icon: 'HeartHandshake',
    desc: 'Mintaqa aholisi hayotini yaxshilash va ekologiyaga ijobiy ta\'sir ko\'rsatgan loyiha'
  },
  {
    title: 'Tomoshabinlar Mehri (Xalq Tanlovi)',
    reward: 'Eng Ko\'p Ovoz To\'plagan Jamoa Sovrini',
    icon: 'Trophy',
    desc: 'Sayt orqali eng ko\'p haqiqiy ovoz va qo\'llab-quvvatlash olgan startap'
  }
];

export const JUDGES_MENTORS = [
  {
    name: 'Alisher Rahmonov',
    role: 'Venture Partner & Investor',
    company: 'Central Asia Tech Fund',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    specialty: 'Investitsiyalar va miqyoslash'
  },
  {
    name: 'Nigora Usmonova',
    role: 'IT Park Mintaqaviy Boshqarmasi Rahbari',
    company: 'IT Park Uzbekistan',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    specialty: 'Innovatsion ekotizim va qonunchilik'
  },
  {
    name: 'Dilshod Muxtorov',
    role: 'Bosh Texnik Direktor (CTO)',
    company: 'Fintech Solutions Group',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    specialty: 'FinTech, Xavfsizlik va Bulutli tizimlar'
  },
  {
    name: 'Feruza Karimova',
    role: 'AI Tadqiqotchi & Ekspert',
    company: 'DeepTech Lab Uzbekistan',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    specialty: 'Sun\'iy Intellekt va Mashinali O\'rganish'
  }
];

export const FAQ_ITEMS = [
  {
    question: "Ko'rgazmada kimlar ishtirok etishi mumkin?",
    answer: "O'zbekistonning barcha viloyatlaridagi 16 yoshdan 35 yoshgacha bo'lgan yoshlar, talabalar, yosh dasturchilar, tadbirkorlar va startap jamoalari qatnashishi mumkin. Startapingiz g'oya, MVP yoki faoliyat boshlagan bosqichda bo'lishi kifoya."
  },
  {
    question: "Ko'rgazmada ishtirok etish va ro'yxatdan o'tish bepulmi?",
    answer: "Ha, IT Park tomonidan o'tkazilayotgan ushbu ko'rgazmada qatnashish, o'z stendini joylashtirish va master-klasslarda ishtirok etish mutlaqo BEPUL."
  },
  {
    question: "Arizalar qanday saralab olinadi va hakamlar nimalarga e'tibor beradi?",
    answer: "Ekspertlar kengashi loyihalarni quyidagi 4 ta asosiy mezon bo'yicha baholaydi: 1) Muammoning dolzarbligi va bozordagi hajmi; 2) Yechimning innovatsionligi va texnologik darajasi; 3) Jamoaning salohiyati va loyihani amalga oshirish qobiliyati; 4) Biznes model va miqyoslash (scalability) imkoniyati."
  },
  {
    question: "Arizani topshirgandan so'ng nima bo'ladi?",
    answer: "Arizangiz qabul qilingach, loyiha darhol saytimizning startaplar vitrinasida paydo bo'ladi va boshqalar unga ovoz berishi mumkin. IT Park ekspertlari siz bilan 24 soat ichida Telegram yoki telefon orqali bog'lanib, stend tayyorgarligi bo'yicha qo'llanmani taqdim etadilar."
  },
  {
    question: "Viloyatlardan kelgan jamoalar uchun yotoqxona va sharoitlar bormi?",
    answer: "Saralashdan muvaffaqiyatli o'tgan top-startapchilar uchun IT Park mintaqaviy filiali tomonidan bepul kovorking, yuqori tezlikdagi internet va qulay taqdimot zonalari taqdim etiladi."
  }
];
