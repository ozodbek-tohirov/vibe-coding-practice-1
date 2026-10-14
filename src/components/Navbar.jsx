import React, { useState, useEffect } from 'react';
import { 
  Rocket, 
  Menu, 
  X, 
  Sparkles, 
  Award, 
  Calendar, 
  Layers, 
  HelpCircle, 
  ChevronRight,
  Heart
} from 'lucide-react';

export default function Navbar({ onNavigate, activeSection, userVotesCount = 0 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Asosiy', href: '#hero', id: 'hero' },
    { label: 'Ko\'rgazma', href: '#about', id: 'about' },
    { label: 'Mukofotlar', href: '#prizes', id: 'prizes' },
    { label: 'Dastur', href: '#agenda', id: 'agenda' },
    { label: 'Startaplar', href: '#startups', id: 'startups' },
    { label: 'Hakamlar', href: '#judges', id: 'judges' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
  ];

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#070b14]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <div 
            onClick={() => handleLinkClick('hero')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-[2px] shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-400/40 transition-all">
              <div className="w-full h-full bg-[#090e1a] rounded-[10px] flex items-center justify-center">
                <Rocket className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-75" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-xl tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  IT PARK
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  EXPO '26
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium">
                Mintaqaviy Yoshlar Startap Ko'rgazmasi
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-sm font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white bg-emerald-500/20 text-emerald-300 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {userVotesCount > 0 && (
              <div className="flex items-center gap-1.5 bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs px-2.5 py-1.5 rounded-full">
                <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                <span>{userVotesCount} ovoz</span>
              </div>
            )}

            <button
              onClick={() => handleLinkClick('register')}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white transition-all bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl hover:from-emerald-400 hover:to-teal-400 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 cursor-pointer active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Ariza Topshirish</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none cursor-pointer"
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090e1a]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-emerald-400 transition-colors cursor-pointer"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => handleLinkClick('register')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/20 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>O'z Loyihangizni Ro'yxatdan O'tkazing</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
