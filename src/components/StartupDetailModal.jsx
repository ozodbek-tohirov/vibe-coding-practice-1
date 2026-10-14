import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  ExternalLink, 
  Users, 
  MapPin, 
  Tag, 
  Layers, 
  CheckCircle2, 
  Share2, 
  Check, 
  FileText, 
  Sparkles,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import { Button, Chip } from '@heroui/react';

export default function StartupDetailModal({ 
  startup, 
  isOpen, 
  onClose, 
  onVote, 
  hasVoted = false 
}) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !startup) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-3xl glass-panel bg-[#090e1a]/95 border border-emerald-500/30 rounded-3xl shadow-2xl shadow-emerald-500/10 overflow-hidden z-10 animate-in zoom-in-95 duration-200 my-8">
        
        {/* Top Accent bar */}
        <div className="h-2 w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />

        {/* Modal Header */}
        <div className="p-6 sm:p-8 pb-4 border-b border-white/10 flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                {startup.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-slate-300 border border-white/10">
                Bosqich: {startup.stage}
              </span>
              {startup.isVerified && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  Ekspert Tasdiqlagan
                </span>
              )}
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              {startup.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-300">
              {startup.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
            aria-label="Yopish"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[68vh] overflow-y-auto">
          
          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs">
            <div>
              <span className="text-slate-400 block mb-1">Hududiy filial:</span>
              <span className="font-semibold text-white flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                {startup.region}
              </span>
            </div>

            <div>
              <span className="text-slate-400 block mb-1">Jamoa rahbari:</span>
              <span className="font-semibold text-white flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-cyan-400" />
                {startup.leader}
              </span>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <span className="text-slate-400 block mb-1">To'plangan ovozlar:</span>
              <span className="font-bold text-rose-400 flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                {startup.votes} ta ovoz
              </span>
            </div>
          </div>

          {/* Problem Section */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-400" />
              Hal Qilinayotgan Muammo (Problem)
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed bg-[#0d1527]/60 p-4 rounded-xl border border-white/5">
              {startup.problem}
            </p>
          </div>

          {/* Solution Section */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Innovatsion Yechim (Solution)
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed bg-[#0d1527]/60 p-4 rounded-xl border border-white/5">
              {startup.solution}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-cyan-400" />
              Texnologik Stak (Tech Stack)
            </h3>
            <div className="flex flex-wrap gap-2">
              {startup.techStack && startup.techStack.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Team Members */}
          {startup.team && startup.team.length > 0 && (
            <div className="space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-purple-400" />
                Jamoa A'zolari ({startup.team.length} kishi)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {startup.team.map((member, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center text-xs">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{member.name}</div>
                      <div className="text-[11px] text-slate-400">{member.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer / Actions */}
        <div className="p-6 sm:p-8 pt-4 border-t border-white/10 bg-[#070b14]/90 flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => onVote(startup.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                hasVoted
                  ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/25'
                  : 'bg-rose-500/15 text-rose-300 border border-rose-500/30 hover:bg-rose-500/25'
              }`}
            >
              <Heart className={`w-4 h-4 ${hasVoted ? 'fill-white' : ''}`} />
              <span>{hasVoted ? 'Ovoz berildi!' : 'Ovoz berish'} ({startup.votes})</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              <span>{copied ? 'Nusxalandi!' : 'Ulashish'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            {startup.pitchDeckUrl && (
              <a
                href={startup.pitchDeckUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Pitch Deck</span>
              </a>
            )}

            {startup.demoUrl && (
              <a
                href={startup.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 rounded-xl transition-all shadow-md shadow-emerald-500/20"
              >
                <span>Demo Sinab Ko'rish</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
