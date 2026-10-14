import React, { useState } from 'react';
import { 
  Rocket, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle, 
  Layers, 
  Users, 
  Link as LinkIcon, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CATEGORIES, REGIONS, STAGES } from '../data/startups';

export default function RegisterStartupForm({ onAddStartup, onShowSuccessInShowcase }) {
  const [formData, setFormData] = useState({
    title: '',
    category: 'AI & ML',
    tagline: '',
    stage: 'MVP',
    region: 'Toshkent shahri',
    problem: '',
    solution: '',
    techStackInput: '',
    leader: '',
    phone: '+998 ',
    email: '',
    telegram: '',
    teamSize: '3',
    pitchDeckUrl: '',
    demoUrl: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStartup, setSubmittedStartup] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.title.trim()) newErrors.title = 'Loyiha nomini kiriting';
      if (!formData.tagline.trim() || formData.tagline.length < 15) {
        newErrors.tagline = 'Loyiha shiori kamida 15 ta belgidan iborat bo\'lishi kerak';
      }
    }

    if (step === 2) {
      if (!formData.problem.trim() || formData.problem.length < 30) {
        newErrors.problem = 'Muammo tavsifi kamida 30 ta belgidan iborat bo\'lishi kerak';
      }
      if (!formData.solution.trim() || formData.solution.length < 30) {
        newErrors.solution = 'Yechim tavsifi kamida 30 ta belgidan iborat bo\'lishi kerak';
      }
      if (!formData.techStackInput.trim()) {
        newErrors.techStackInput = 'Ishlatilgan kamida 1-2 ta texnologiyani kiriting (masalan: React, Python, AI)';
      }
    }

    if (step === 3) {
      if (!formData.leader.trim()) newErrors.leader = 'Jamoa yetakchisi F.I.Sh.ni kiriting';
      if (!formData.phone.trim() || formData.phone.length < 9) {
        newErrors.phone = 'To\'g\'ri telefon raqam kiriting (+998...)';
      }
      if (!formData.email.trim() || !formData.email.includes('@')) {
        newErrors.email = 'Haqiqiy elektron pochta manzilini kiriting';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateStep(1) || !validateStep(2) || !validateStep(3)) {
      return;
    }

    setIsSubmitting(true);

    // Parse tech stack tags
    const parsedTech = formData.techStackInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    // Generate random application tracking code
    const regCode = `ITP-EXP-${Math.floor(1000 + Math.random() * 9000)}`;

    const newStartupObj = {
      id: `startup-${Date.now()}`,
      title: formData.title,
      tagline: formData.tagline,
      category: formData.category,
      stage: formData.stage,
      region: formData.region,
      leader: formData.leader,
      teamSize: parseInt(formData.teamSize) || 3,
      team: [
        { name: formData.leader, role: 'Loyiha Yetakchisi / Asoschi' },
        { name: 'Texnik Hammuassis', role: 'Dasturchi / Muhandis' }
      ],
      problem: formData.problem,
      solution: formData.solution,
      techStack: parsedTech.length > 0 ? parsedTech : ['React.js', 'Node.js', 'AI'],
      votes: 1, // initial vote
      pitchDeckUrl: formData.pitchDeckUrl || '#',
      demoUrl: formData.demoUrl || '#',
      logoColor: 'from-emerald-500 to-cyan-600',
      iconName: 'Rocket',
      createdDate: new Date().toISOString().split('T')[0],
      featured: false,
      isVerified: true,
      regCode: regCode,
      contactEmail: formData.email,
      contactPhone: formData.phone,
      telegram: formData.telegram
    };

    setTimeout(() => {
      onAddStartup(newStartupObj);
      setSubmittedStartup(newStartupObj);
      setIsSubmitting(false);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.error(err);
      }
    }, 700);
  };

  const resetForm = () => {
    setSubmittedStartup(null);
    setCurrentStep(1);
    setFormData({
      title: '',
      category: 'AI & ML',
      tagline: '',
      stage: 'MVP',
      region: 'Toshkent shahri',
      problem: '',
      solution: '',
      techStackInput: '',
      leader: '',
      phone: '+998 ',
      email: '',
      telegram: '',
      teamSize: '3',
      pitchDeckUrl: '',
      demoUrl: ''
    });
    setErrors({});
  };

  return (
    <section id="register" className="py-24 relative overflow-hidden bg-[#070b14] border-t border-white/5">
      {/* Background accents */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4">
            <Rocket className="w-3.5 h-3.5" />
            <span>Rasmiy Ro'yxatdan O'tish</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            O'z Loyihangizni{' '}
            <span className="gradient-text-itpark">
              Ro'yxatga Qo'shing
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base">
            Arizani to'ldiring va loyihangizni bir zumda ko'rgazma vitrinasida paydo bo'lishini ko'ring. 
            IT Park mutaxassislari siz bilan tez orada bog'lanadi.
          </p>
        </div>

        {/* If successfully submitted: Voucher / Confirmation Card */}
        {submittedStartup ? (
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border-2 border-emerald-500/40 bg-gradient-to-b from-[#0b1626]/90 via-[#070b14] to-[#0b1626]/90 shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="text-center max-w-lg mx-auto">
              
              <div className="w-18 h-18 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto mb-6 text-emerald-400 shadow-xl shadow-emerald-500/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 mb-3 inline-block">
                Ro'yxatdan o'tish muvaffaqiyatli yakunlandi!
              </span>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-3">
                "{submittedStartup.title}" Ko'rgazma Ro'yxatiga Kiritildi!
              </h3>

              <p className="text-sm text-slate-300 mb-8 leading-relaxed">
                Tabriklaymiz! Loyihangiz avtomatik ravishda tasdiqlandi va startaplar vitrinasiga qo'shildi. 
                Endi barcha tashrif buyuruvchilar va hakamlar sizning loyihangizga ovoz bera oladi.
              </p>

              {/* Application Certificate Ticket */}
              <div className="bg-[#090f1e] rounded-2xl p-6 border border-emerald-500/30 text-left mb-8 space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs text-slate-400 font-medium">Ariza raqami:</span>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/30">
                    {submittedStartup.regCode}
                  </span>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs text-slate-400 font-medium">Loyiha yo'nalishi:</span>
                  <span className="text-xs font-bold text-white">{submittedStartup.category}</span>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs text-slate-400 font-medium">Hududiy filial:</span>
                  <span className="text-xs font-bold text-white">{submittedStartup.region}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">Aloqa shaxsi:</span>
                  <span className="text-xs font-bold text-cyan-400">{submittedStartup.leader}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => onShowSuccessInShowcase(submittedStartup.id)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 shadow-lg shadow-emerald-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Startapni Vitrinada Ko'rish</span>
                </button>

                <button
                  onClick={resetForm}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
                >
                  Yana bitta loyiha qo'shish
                </button>
              </div>

            </div>
          </div>
        ) : (
          /* Multi-step Application Form */
          <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 relative shadow-2xl">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
              {[
                { num: 1, title: 'Loyiha ma\'lumotlari' },
                { num: 2, title: 'Muammo va Yechim' },
                { num: 3, title: 'Jamoa va Aloqa' }
              ].map((step) => {
                const isActive = currentStep === step.num;
                const isPassed = currentStep > step.num;
                return (
                  <div key={step.num} className="flex items-center gap-2.5">
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        isPassed 
                          ? 'bg-emerald-500 text-white' 
                          : isActive 
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500' 
                            : 'bg-white/5 text-slate-500 border border-white/10'
                      }`}
                    >
                      {isPassed ? <Check className="w-4 h-4" /> : step.num}
                    </div>
                    <span className={`text-xs font-semibold hidden sm:inline ${
                      isActive ? 'text-white' : 'text-slate-500'
                    }`}>
                      {step.title}
                    </span>
                  </div>
                );
              })}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* STEP 1: Basic Info */}
              {currentStep === 1 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Loyiha / Startap Nomi <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Masalan: AI AgroVision yoki PayQuick"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm focus:outline-none transition-all ${
                        errors.title 
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20' 
                          : 'border-white/10 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20'
                      }`}
                    />
                    {errors.title && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.title}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Yo'nalish / Kategoriya <span className="text-emerald-400">*</span>
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#090f1e] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500/50 cursor-pointer"
                      >
                        {CATEGORIES.filter(c => c !== 'Barchasi').map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Rivojlanish Bosqichi <span className="text-emerald-400">*</span>
                      </label>
                      <select
                        name="stage"
                        value={formData.stage}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#090f1e] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500/50 cursor-pointer"
                      >
                        <option value="G'oya">G'oya (Idea stage)</option>
                        <option value="MVP">MVP (Ishlaydigan prototip)</option>
                        <option value="Early Stage">Sinov / Ilk foydalanuvchilar</option>
                        <option value="Traction">O'sish va daromad bosqichida</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      IT Park Mintaqaviy Filiali <span className="text-emerald-400">*</span>
                    </label>
                    <select
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#090f1e] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500/50 cursor-pointer"
                    >
                      {REGIONS.map((reg) => (
                        <option key={reg} value={reg}>
                          {reg}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Qisqacha Shior (Tagline / Pitch) <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="tagline"
                      value={formData.tagline}
                      onChange={handleChange}
                      placeholder="Startapingiz nima qilishi haqida 1 jumla (masalan: Dehqonlar uchun AI diagnostika tizimi)"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm focus:outline-none transition-all ${
                        errors.tagline 
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20' 
                          : 'border-white/10 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20'
                      }`}
                    />
                    {errors.tagline && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.tagline}
                      </p>
                    )}
                  </div>

                </div>
              )}

              {/* STEP 2: Problem & Solution */}
              {currentStep === 2 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Hal Qilinayotgan Muammo (Problem) <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      name="problem"
                      rows={3}
                      value={formData.problem}
                      onChange={handleChange}
                      placeholder="Bozorda qanday aniq og'riq yoki muammo bor? Hozir odamlar uni qanday hal qilishmoqda?"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm focus:outline-none transition-all ${
                        errors.problem 
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20' 
                          : 'border-white/10 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20'
                      }`}
                    />
                    {errors.problem && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.problem}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Sizning Innovatsion Yechimingiz (Solution) <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      name="solution"
                      rows={3}
                      value={formData.solution}
                      onChange={handleChange}
                      placeholder="Siz taklif etayotgan startap bu muammoni qanday qilib arzonroq, tezroq yoki yaxshiroq yechadi?"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm focus:outline-none transition-all ${
                        errors.solution 
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20' 
                          : 'border-white/10 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20'
                      }`}
                    />
                    {errors.solution && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.solution}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Texnologik Stak (Tech Stack) <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="techStackInput"
                      value={formData.techStackInput}
                      onChange={handleChange}
                      placeholder="Vergul bilan ajrating, masalan: React, Python, FastApi, PyTorch, Supabase"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm focus:outline-none transition-all ${
                        errors.techStackInput 
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20' 
                          : 'border-white/10 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20'
                      }`}
                    />
                    {errors.techStackInput && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.techStackInput}
                      </p>
                    )}
                  </div>

                </div>
              )}

              {/* STEP 3: Team and Contact */}
              {currentStep === 3 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Jamoa Yetakchisi F.I.Sh. <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="leader"
                        value={formData.leader}
                        onChange={handleChange}
                        placeholder="Masalan: Sardorbek Yusupov"
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm focus:outline-none transition-all ${
                          errors.leader 
                            ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20' 
                            : 'border-white/10 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20'
                        }`}
                      />
                      {errors.leader && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.leader}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Jamoa A'zolari Soni
                      </label>
                      <select
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#090f1e] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500/50 cursor-pointer"
                      >
                        <option value="1">1 kishi (Yakka asoschi)</option>
                        <option value="2">2 kishi</option>
                        <option value="3">3 kishi</option>
                        <option value="4">4 kishi</option>
                        <option value="5">5+ kishi</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Telefon Raqam <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+998 90 123 45 67"
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm focus:outline-none transition-all ${
                          errors.phone 
                            ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20' 
                            : 'border-white/10 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Elektron Pochta (Email) <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="startup@example.uz"
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm focus:outline-none transition-all ${
                          errors.email 
                            ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20' 
                            : 'border-white/10 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Telegram Username
                      </label>
                      <input
                        type="text"
                        name="telegram"
                        value={formData.telegram}
                        onChange={handleChange}
                        placeholder="@username"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Demo yoki Web Havola (ixtiyoriy)
                      </label>
                      <input
                        type="url"
                        name="demoUrl"
                        value={formData.demoUrl}
                        onChange={handleChange}
                        placeholder="https://my-startup.uz"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Pitch Deck / Prezentatsiya Havolasi (Google Drive / Figma / PDF)
                    </label>
                    <input
                      type="url"
                      name="pitchDeckUrl"
                      value={formData.pitchDeckUrl}
                      onChange={handleChange}
                      placeholder="https://drive.google.com/..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-all"
                    />
                  </div>

                </div>
              )}

              {/* Form Navigation Buttons */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
                  >
                    Orqaga
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-emerald-500 hover:bg-emerald-400 shadow-md shadow-emerald-500/20 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Keyingisi</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 shadow-lg shadow-emerald-500/30 transition-all cursor-pointer flex items-center gap-2 active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Yuklanmoqda...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Arizani Yuborish</span>
                      </>
                    )}
                  </button>
                )}
              </div>

            </form>

          </div>
        )}

      </div>
    </section>
  );
}
