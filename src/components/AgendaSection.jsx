import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Sparkles, 
  Tag, 
  ChevronRight,
  Flame
} from 'lucide-react';
import { AGENDA_DAYS } from '../data/startups';

export default function AgendaSection() {
  const [activeDay, setActiveDay] = useState(1);

  const currentDayData = AGENDA_DAYS.find((d) => d.dayNumber === activeDay) || AGENDA_DAYS[0];

  return (
    <section id="agenda" className="py-24 relative overflow-hidden bg-[#070b14]/70 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>Ko'rgazma Dasturi</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            2 Kunlik Qizg'in{' '}
            <span className="gradient-text-itpark">
              Tadbirlar Jadvali
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Demo-stendlar, master-klasslar, venchur investorlar bilan speed-networking va final pitch bahslari.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            {AGENDA_DAYS.map((day) => {
              const isSelected = activeDay === day.dayNumber;
              return (
                <button
                  key={day.dayNumber}
                  onClick={() => setActiveDay(day.dayNumber)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <div className="text-left">
                    <span className="block text-xs uppercase opacity-80">{day.dayNumber}-Kun</span>
                    <span className="text-sm font-semibold">{day.date.split('(')[0]}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Current Day Title Card */}
        <div className="max-w-4xl mx-auto mb-8 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-0.5">
              {currentDayData.title}
            </h3>
            <span className="text-xs text-emerald-400 font-medium">
              {currentDayData.date}
            </span>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold hidden sm:inline-block">
            {currentDayData.events.length} ta asosiy bosqich
          </span>
        </div>

        {/* Timeline Events List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {currentDayData.events.map((event, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 relative transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                
                {/* Time & Badge */}
                <div className="sm:w-48 shrink-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-emerald-400 font-mono text-xs font-bold mb-2">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{event.time}</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase px-2.5 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                      {event.tag}
                    </span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex-1">
                  <h4 className="font-heading text-lg sm:text-xl font-bold text-white mb-1.5">
                    {event.title}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed mb-3">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <User className="w-3.5 h-3.5 text-slate-500" />
                    <span>Mas'ul: <strong className="text-slate-300">{event.speaker}</strong></span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
