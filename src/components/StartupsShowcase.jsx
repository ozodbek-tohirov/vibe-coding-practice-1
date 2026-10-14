import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Heart, 
  MapPin, 
  Users, 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  X,
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  Button,
  Chip
} from '@heroui/react';
import { CATEGORIES } from '../data/startups';
import StartupDetailModal from './StartupDetailModal';

export default function StartupsShowcase({ 
  startups = [], 
  onVote, 
  userVotedIds = new Set(), 
  onRegisterClick 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Barchasi');
  const [selectedStage, setSelectedStage] = useState('Barchasi');
  const [sortBy, setSortBy] = useState('votes'); // 'votes' | 'newest' | 'name'
  const [activeModalStartup, setActiveModalStartup] = useState(null);

  const stagesList = ['Barchasi', 'MVP', 'Early Stage', 'Prototip / MVP', 'G\'oya'];

  // Filter and sort startups
  const filteredStartups = useMemo(() => {
    return startups.filter((item) => {
      // Category match
      const matchesCategory = 
        selectedCategory === 'Barchasi' || 
        item.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        (selectedCategory === 'AI & ML' && (item.category.includes('AI') || item.category.includes('ML')));

      // Stage match
      const matchesStage = 
        selectedStage === 'Barchasi' || 
        item.stage.toLowerCase().includes(selectedStage.toLowerCase());

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery = 
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.tagline.toLowerCase().includes(query) ||
        item.region.toLowerCase().includes(query) ||
        item.leader.toLowerCase().includes(query) ||
        (item.techStack && item.techStack.some(t => t.toLowerCase().includes(query)));

      return matchesCategory && matchesStage && matchesQuery;
    }).sort((a, b) => {
      if (sortBy === 'votes') {
        return (b.votes || 0) - (a.votes || 0);
      }
      if (sortBy === 'newest') {
        return (b.id === 'new' ? 1 : 0) - (a.id === 'new' ? 1 : 0);
      }
      if (sortBy === 'name') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  }, [startups, searchQuery, selectedCategory, selectedStage, sortBy]);

  const handleVoteClick = (e, startupId) => {
    e.stopPropagation();
    onVote(startupId);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('Barchasi');
    setSelectedStage('Barchasi');
    setSortBy('votes');
  };

  return (
    <section id="startups" className="py-24 relative overflow-hidden bg-[#070b14]">
      {/* Background soft glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ko'rgazma Vitrinasi</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Taqdim Etilgan{' '}
            <span className="gradient-text-itpark">
              Startap Loyihalar
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Mintaqamizning yosh iqtidorlari tomonidan yaratilgan innovatsion startaplar bilan tanishing, 
            ularning pitch-decklarini ko'ring va eng yaxshilariga o'z ovozingizni bering!
          </p>
        </div>

        {/* Search & Filter Controls Card */}
        <div className="glass-panel rounded-2xl p-4 sm:p-6 mb-10 border border-white/10 space-y-5">
          
          {/* Top row: Search input & Sort dropdown */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Startap nomi, muammo, hudud yoki texnologiya bo'yicha qidiring..."
                className="w-full pl-12 pr-10 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort & Stage Controls */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                <SlidersHorizontal className="w-4 h-4 text-emerald-400" />
                <span className="text-xs text-slate-400 font-medium hidden sm:inline">Saralash:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer"
                >
                  <option value="votes" className="bg-[#0b1222] text-white">Eng ko'p ovoz olganlar</option>
                  <option value="newest" className="bg-[#0b1222] text-white">Yangi qo'shilganlar</option>
                  <option value="name" className="bg-[#0b1222] text-white">Alifbo bo'yicha (A-Z)</option>
                </select>
              </div>

              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                <span className="text-xs text-slate-400 font-medium">Bosqich:</span>
                <select
                  value={selectedStage}
                  onChange={(e) => setSelectedStage(e.target.value)}
                  className="bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer"
                >
                  {stagesList.map((stage) => (
                    <option key={stage} value={stage} className="bg-[#0b1222] text-white">
                      {stage}
                    </option>
                  ))}
                </select>
              </div>
            </div>

          </div>

          {/* Category Chips Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-semibold px-4 py-2 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Counter & Reset */}
        <div className="flex items-center justify-between mb-8 px-1">
          <div className="text-sm text-slate-400">
            Jami <strong className="text-emerald-400 font-bold">{filteredStartups.length}</strong> ta startap loyiha ko'rsatilmoqda
          </div>

          {(searchQuery || selectedCategory !== 'Barchasi' || selectedStage !== 'Barchasi') && (
            <button
              onClick={clearFilters}
              className="text-xs text-rose-400 hover:text-rose-300 font-medium flex items-center gap-1 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Filtrlarni tozalash</span>
            </button>
          )}
        </div>

        {/* Startups Grid using HeroUI Card & Chip */}
        {filteredStartups.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredStartups.map((startup) => {
              const hasVoted = userVotedIds.has(startup.id);
              return (
                <div
                  key={startup.id}
                  onClick={() => setActiveModalStartup(startup)}
                  className="glass-panel glass-panel-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
                >
                  {/* Subtle top glow line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Header: Category & Stage */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        {startup.category}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
                        {startup.stage}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors flex items-center justify-between gap-2">
                      <span>{startup.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors shrink-0" />
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-5 line-clamp-3">
                      {startup.tagline}
                    </p>

                    {/* Meta info (Region & Leader) */}
                    <div className="space-y-2 mb-5 text-xs text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                        <span className="truncate">{startup.region}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{startup.leader} (Jamoa: {startup.teamSize || startup.team?.length || 2} kishi)</span>
                      </div>
                    </div>

                    {/* Tech Stack Chips preview */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {startup.techStack && startup.techStack.slice(0, 3).map((tech, i) => (
                        <span 
                          key={i}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                      {startup.techStack && startup.techStack.length > 3 && (
                        <span className="text-[11px] text-slate-500 self-center">
                          +{startup.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Footer: Vote Button & Details Action */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <button
                      onClick={(e) => handleVoteClick(e, startup.id)}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        hasVoted
                          ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30'
                          : 'bg-rose-500/10 text-rose-300 hover:bg-rose-500/20 border border-rose-500/30'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${hasVoted ? 'fill-white' : ''}`} />
                      <span>{startup.votes} ovoz</span>
                    </button>

                    <span className="text-xs font-semibold text-emerald-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      <span>Batafsil</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="glass-panel rounded-3xl p-12 text-center max-w-lg mx-auto border border-white/10 mb-16">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 text-slate-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-2">
              Startap topilmadi
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              Kiritilgan qidiruv mezonlari bo'yicha hech qanday startap loyiha mavjud emas. Filtrlarni tozalab ko'ring.
            </p>
            <button
              onClick={clearFilters}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-400 transition-all cursor-pointer"
            >
              Barcha loyihalarni ko'rsatish
            </button>
          </div>
        )}

        {/* Register CTA Banner */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-[#0a1529]/60 to-teal-950/40 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Sizning ham innovatsion g'oyangiz yoki startapingiz bormi?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              Ko'rgazmada o'z loyihangizni namoyish qiling, investorlarni jalb qiling va 100M so'mlik mukofot uchun kurashing!
            </p>
          </div>

          <button
            onClick={onRegisterClick}
            className="px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 shadow-xl shadow-emerald-500/25 transition-all shrink-0 cursor-pointer active:scale-95 flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            <span>Loyihani Ro'yxatdan O'tkazish</span>
          </button>
        </div>

      </div>

      {/* Startup Detail Modal */}
      <StartupDetailModal
        startup={activeModalStartup}
        isOpen={Boolean(activeModalStartup)}
        onClose={() => setActiveModalStartup(null)}
        onVote={onVote}
        hasVoted={activeModalStartup ? userVotedIds.has(activeModalStartup.id) : false}
      />
    </section>
  );
}
