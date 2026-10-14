import React from 'react';
import { 
  Users, 
  Sparkles, 
  ExternalLink,
  ShieldCheck,
  Award
} from 'lucide-react';
import { JUDGES_MENTORS } from '../data/startups';

export default function JudgesMentors() {
  return (
    <section id="judges" className="py-24 relative overflow-hidden bg-[#070b14]/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Ekspertlar Kengashi</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Hakamlar Hay'ati va{' '}
            <span className="gradient-text-itpark">
              Mentorlar
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Sizning loyihangizni xalqaro darajadagi venchur investorlar, IT Park yetakchi mutaxassislari 
            va muvaffaqiyatli startap asoschilari baholaydilar.
          </p>
        </div>

        {/* Judges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {JUDGES_MENTORS.map((judge, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-3xl p-6 border border-white/10 flex flex-col items-center text-center group"
            >
              {/* Photo with glowing ring */}
              <div className="relative w-28 h-28 mb-5 rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-500 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={judge.avatar}
                  alt={judge.name}
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>

              <h3 className="font-heading text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                {judge.name}
              </h3>

              <div className="text-xs font-semibold text-emerald-400 mb-1">
                {judge.company}
              </div>

              <div className="text-xs text-slate-400 mb-4">
                {judge.role}
              </div>

              <div className="mt-auto w-full pt-4 border-t border-white/5">
                <span className="text-[11px] font-medium text-slate-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/5 inline-block">
                  {judge.specialty}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mentorship Support Card */}
        <div className="mt-14 max-w-4xl mx-auto glass-panel rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Siz ham mentor yoki investor sifatida qatnashmoqchimisiz?</h4>
              <p className="text-xs text-slate-400">IT Park bilan hamkorlikda yosh startapchilarni qo'llab-quvvatlang va yangi sarmoya imkoniyatlarini toping.</p>
            </div>
          </div>
          <a
            href="https://t.me/ITPark_Expo2026_Bot"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-colors shrink-0"
          >
            Hamkorlik Qilish
          </a>
        </div>

      </div>
    </section>
  );
}
