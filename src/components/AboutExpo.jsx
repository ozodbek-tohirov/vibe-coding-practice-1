import React from 'react';
import { 
  Building2, 
  Lightbulb, 
  Target, 
  ShieldCheck, 
  TrendingUp, 
  Users2, 
  Zap, 
  CheckCircle,
  Award,
  Sparkles
} from 'lucide-react';

export default function AboutExpo({ onRegister }) {
  const pillars = [
    {
      icon: TrendingUp,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      title: 'Investitsiyalar va Grantlar',
      description: 'O\'zbekiston va Markaziy Osiyo yetakchi venchur fondlari, akseleratorlari va biznes-farishtalari bilan to\'g\'ridan-to\'g\'ri yuzma-yuz uchrashish hamda ilk sarmoyani jalb qilish imkoniyati.'
    },
    {
      icon: Building2,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      title: 'IT Park Rezidentligi Imtiyozlari',
      description: 'Saralangan eng istiqbolli startaplar IT Park rezidenti maqomini olish va soliq imtiyozlari (0% korporativ soliq, daromad solig\'i 7.5%) va bepul kovorkingdan foydalanish huquqiga ega bo\'ladi.'
    },
    {
      icon: Lightbulb,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      title: 'Top Mentorlar Ekspertizasi',
      description: 'Silikon vodiysi va xalqaro kompaniyalar tajribasiga ega mentorlar, marketing bo\'yicha mutaxassislar loyihangiz arxitekturasi va biznes-modelini bepul tahlil qilib beradi.'
    },
    {
      icon: Users2,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
      title: 'Katta Jamoa va B2B Networking',
      description: 'O\'z startapingiz uchun iqtidorli dasturchilar, dizaynerlar, marketologlarni toping yoki yirik korporativ mijozlar bilan dastlabki hamkorlik shartnomalarini imzolang.'
    }
  ];

  const highlights = [
    'Ko\'rgazmada ishtirok etish va stend joylashtirish mutlaqo BEPUL',
    'Barcha viloyatlar va tumanlardan yosh startap jamoalari qabul qilinadi',
    'G\'oyadan tortib tayyor mahsulotga ega loyihalargacha teng imkoniyat',
    'Real vaqtda tomoshabinlar va mutaxassislar ovoz berish platformasi',
    'Top-15 jamoa uchun to\'g\'ridan-to\'g\'ri televideniye va matbuotda intervyular'
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070b14]/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ko'rgazma Haqida Ma'lumot</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Mintaqaviy Ekotizimning Eng Katta{' '}
            <span className="gradient-text-itpark">
              Startap Maydoni
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            IT Park mintaqaviy filiali tomonidan o'tkazilayotgan ushbu ko'rgazma — mintaqadagi innovatsion yoshlarni birlashtirish, 
            ularning texnologik ishlanmalarini qo'llab-quvvatlash va real investitsiya oqimini yo'naltirishga qaratilgan yirik platformadir.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={index}
                className="glass-panel glass-panel-hover rounded-2xl p-7 border border-white/10 relative group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl border flex items-center justify-center shrink-0 ${pillar.color}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Two-Column Feature Block */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-emerald-500/20 bg-gradient-to-br from-slate-900/90 via-[#0b1329]/80 to-slate-900/90 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-400 mb-2 block">
                Nima uchun aynan siz qatnashishingiz kerak?
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-6">
                O'z g'oyangizni bir xonada saqlamang — uni butun O'zbekistonga taniting!
              </h3>
              
              <div className="space-y-3.5 mb-8">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm sm:text-base text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={onRegister}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-emerald-500 hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 transition-all cursor-pointer active:scale-95"
              >
                <Zap className="w-4 h-4" />
                <span>Arizani Hozir To'ldirish</span>
              </button>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#070b14]/90 rounded-2xl p-6 border border-white/10 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-semibold text-slate-400">Tadbir Tashkilotchisi</span>
                  <span className="text-xs font-bold text-emerald-400">IT Park Filiali</span>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-semibold text-slate-400">Ko'rgazma muddati</span>
                  <span className="text-xs font-bold text-white">2 kun (24-25 Oktyabr)</span>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-semibold text-slate-400">Qatnashuvchilar yoshi</span>
                  <span className="text-xs font-bold text-white">16 — 35 yosh</span>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-semibold text-slate-400">Ariza qabul qilish</span>
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Ochiq
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">Kirish va ishtirok</span>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Bepul</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
