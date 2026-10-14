import React from 'react';
import { 
  Trophy, 
  Medal, 
  Crown, 
  Sparkles, 
  CheckCircle2, 
  Gift, 
  Flame,
  HeartHandshake,
  Star
} from 'lucide-react';
import { PRIZES, SPECIAL_NOMINATIONS } from '../data/startups';

export default function PrizesSection() {
  return (
    <section id="prizes" className="py-24 relative overflow-hidden bg-[#070b14]">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>Mukofot Jamg'armasi</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            100 000 000 UZS{' '}
            <span className="gradient-text-gold">
              Grant va Sovrinlar
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Eng kuchli startap loyihalar nafaqat qimmatbaho pul mukofotlarini, balki o'z loyihasini xalqaro miqyosga 
            olib chiqish uchun to'liq IT Park ekotizimi ko'magini qo'lga kiritadi.
          </p>
        </div>

        {/* Podium Prize Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          
          {/* 2nd Place */}
          <div className="order-2 lg:order-1 glass-panel rounded-3xl p-8 border border-white/10 relative flex flex-col justify-between glass-panel-hover">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-500/20 text-slate-300 border border-slate-500/30">
                  {PRIZES[1].badge}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-slate-500/10 border border-slate-500/20 flex items-center justify-center">
                  <Medal className="w-6 h-6 text-slate-300" />
                </div>
              </div>

              <div className="mb-6">
                <span className="text-sm font-semibold text-slate-400 block mb-1">{PRIZES[1].place}</span>
                <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                  {PRIZES[1].amount}
                </h3>
              </div>

              <div className="space-y-3 mb-8">
                {PRIZES[1].perks.map((perk, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full py-2.5 rounded-xl bg-slate-500/10 border border-slate-500/20 text-center text-xs font-semibold text-slate-300">
              Kumush Diplom & Sertifikat
            </div>
          </div>

          {/* 1st Place (Grand Prix - Highlighted) */}
          <div className="order-1 lg:order-2 glass-panel rounded-3xl p-8 sm:p-9 border-2 border-amber-500/50 bg-gradient-to-b from-amber-500/10 via-[#0d1627]/90 to-[#090e1a]/95 relative flex flex-col justify-between shadow-2xl shadow-amber-500/15 lg:-translate-y-4">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5">
              <Crown className="w-3.5 h-3.5 fill-slate-950" />
              <span>G'oliblar G'olibi</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6 pt-2">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  {PRIZES[0].badge}
                </span>
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shadow-lg shadow-amber-500/25">
                  <Crown className="w-8 h-8 text-amber-400" />
                </div>
              </div>

              <div className="mb-6">
                <span className="text-sm font-semibold text-amber-400 block mb-1">{PRIZES[0].place}</span>
                <h3 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                  {PRIZES[0].amount}
                </h3>
              </div>

              <div className="space-y-3.5 mb-8">
                {PRIZES[0].perks.map((perk, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/40 text-center text-xs font-bold text-amber-300">
              Oltin Statuetka & Rasmiy Grant Shartnomasi
            </div>
          </div>

          {/* 3rd Place */}
          <div className="order-3 glass-panel rounded-3xl p-8 border border-white/10 relative flex flex-col justify-between glass-panel-hover">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-700/20 text-amber-500 border border-amber-700/30">
                  {PRIZES[2].badge}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-amber-700/10 border border-amber-700/20 flex items-center justify-center">
                  <Medal className="w-6 h-6 text-amber-600" />
                </div>
              </div>

              <div className="mb-6">
                <span className="text-sm font-semibold text-slate-400 block mb-1">{PRIZES[2].place}</span>
                <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                  {PRIZES[2].amount}
                </h3>
              </div>

              <div className="space-y-3 mb-8">
                {PRIZES[2].perks.map((perk, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full py-2.5 rounded-xl bg-amber-700/10 border border-amber-700/20 text-center text-xs font-semibold text-amber-500">
              Bronza Diplom & Sertifikat
            </div>
          </div>

        </div>

        {/* Special Nominations */}
        <div className="glass-panel rounded-3xl p-8 border border-white/10 bg-[#090e1a]/80">
          <div className="text-center mb-8">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
              Maxsus Nominatsiyalar va Qo'shimcha Mukofotlar
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Har bir yo'nalishdagi alohida yutuqlar uchun ta'sis etilgan maxsus statuetkalar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPECIAL_NOMINATIONS.map((nom, idx) => {
              const icons = [Sparkles, HeartHandshake, Trophy];
              const Icon = icons[idx] || Star;
              return (
                <div 
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">{nom.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed mb-3">{nom.desc}</p>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 text-center">
                    {nom.reward}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
