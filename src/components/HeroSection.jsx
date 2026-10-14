import React, { useState, useEffect } from 'react';
import { 
  Rocket, 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Trophy, 
  Users, 
  Coins, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export default function HeroSection({ onExplore, onRegister, totalStartups = 8 }) {
  // Live Countdown to exhibition date: October 24, 2026 09:00:00
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 16,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    // Target date: set to 14 days ahead for realistic dynamic timer
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 13);
    targetDate.setHours(9, 0, 0, 0);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow & geometric grid */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Decorative blurred glow orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>IT Park Mintaqaviy Filiali Taqdim Etadi</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs sm:text-sm backdrop-blur-md">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            <span>24-25 Oktyabr, 2026</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs sm:text-sm backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            <span>IT Park Ko'rgazmalar Zali</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Yoshlar Startap Loyihalari{' '}
            <span className="gradient-text-itpark inline-block">
              Ko'rgazmasi 2026
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Mintaqamizning eng iqtidorli yosh dasturchilari, muhandislari va novatorlari o'z loyihalarini namoyish etadi. 
            Investitsiya jalb qiling, tajribali mentorlar bilan tanishing va startapingizni yangi bosqichga olib chiqing!
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              onClick={onRegister}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all cursor-pointer active:scale-95 group"
            >
              <Rocket className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              <span>O'z Loyihangizni Ro'yxatdan O'tkazing</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExplore}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all cursor-pointer active:scale-95 backdrop-blur-md"
            >
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <span>Startaplar Bilan Tanishish ({totalStartups})</span>
            </button>
          </div>

          {/* Countdown Clock */}
          <div className="max-w-2xl mx-auto glass-panel rounded-2xl p-6 mb-16 border border-emerald-500/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-80" />
            
            <div className="text-xs uppercase tracking-wider font-semibold text-emerald-400 mb-4 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Ko'rgazma Boshlanishiga Qoldi
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              <div className="bg-[#090e1a]/80 border border-white/5 rounded-xl p-3 sm:p-4 text-center">
                <span className="font-heading text-2xl sm:text-4xl font-extrabold text-white block">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-wider font-medium">
                  Kun
                </span>
              </div>

              <div className="bg-[#090e1a]/80 border border-white/5 rounded-xl p-3 sm:p-4 text-center">
                <span className="font-heading text-2xl sm:text-4xl font-extrabold text-white block">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-wider font-medium">
                  Soat
                </span>
              </div>

              <div className="bg-[#090e1a]/80 border border-white/5 rounded-xl p-3 sm:p-4 text-center">
                <span className="font-heading text-2xl sm:text-4xl font-extrabold text-white block">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-wider font-medium">
                  Daqiqa
                </span>
              </div>

              <div className="bg-[#090e1a]/80 border border-white/5 rounded-xl p-3 sm:p-4 text-center">
                <span className="font-heading text-2xl sm:text-4xl font-extrabold text-emerald-400 block">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-wider font-medium">
                  Soniya
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          
          <div className="glass-panel glass-panel-hover rounded-2xl p-5 border border-white/10 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
              <Trophy className="w-6 h-6 text-amber-400" />
            </div>
            <div className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-1">
              100M+ <span className="text-amber-400 text-lg">UZS</span>
            </div>
            <div className="text-xs text-slate-400 font-medium">
              Umumiy Mukofot Jamg'armasi
            </div>
          </div>

          <div className="glass-panel glass-panel-hover rounded-2xl p-5 border border-white/10 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3">
              <Rocket className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-1">
              50+
            </div>
            <div className="text-xs text-slate-400 font-medium">
              Saralangan Startap Loyihalar
            </div>
          </div>

          <div className="glass-panel glass-panel-hover rounded-2xl p-5 border border-white/10 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-3">
              <Coins className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-1">
              20+
            </div>
            <div className="text-xs text-slate-400 font-medium">
              Venchur Fondlar & Investorlar
            </div>
          </div>

          <div className="glass-panel glass-panel-hover rounded-2xl p-5 border border-white/10 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-3">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <div className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-1">
              1,500+
            </div>
            <div className="text-xs text-slate-400 font-medium">
              Kutilayotgan Ishtirokchilar
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
