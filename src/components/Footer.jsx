import React from 'react';
import { 
  Rocket, 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  Globe, 
  Heart,
  ExternalLink
} from 'lucide-react';

export default function Footer({ onNavigate }) {
  const handleLinkClick = (id) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#05080f] border-t border-white/10 text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-[2px] shadow-lg shadow-emerald-500/20">
                <div className="w-full h-full bg-[#090e1a] rounded-[10px] flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg text-white tracking-tight">
                  IT PARK EXPO '26
                </span>
                <span className="text-[11px] text-slate-400">
                  Mintaqaviy Yoshlar Startap Ko'rgazmasi
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              IT Park mintaqaviy filiali tomonidan yoshlar uchun tashkil etilgan eng yirik startap va innovatsiyalar ko'rgazmasi. 
              G'oyalarni qo'llab-quvvatlash, investitsiya jalb qilish va kelajak texnologiyalarini rivojlantirish maydoni.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://t.me/itpark_uz"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-500/40 transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>

              <a
                href="https://it-park.uz"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-500/40 transition-colors"
                aria-label="Veb-sayt"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Bo'limlar
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => handleLinkClick('hero')} 
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Asosiy Sahifa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('about')} 
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Ko'rgazma Haqida
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('prizes')} 
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Mukofot Jamg'armasi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('agenda')} 
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  2 Kunlik Dastur
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('startups')} 
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Startaplar Vitrinasi
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Ishtirokchilar Uchun
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => handleLinkClick('register')} 
                  className="text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Ariza Yuborish</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('judges')} 
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Hakamlar va Mentorlar
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('faq')} 
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Ko'p Beriladigan Savollar
                </button>
              </li>
              <li>
                <a 
                  href="https://it-park.uz/uz/itpark/residents" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <span>IT Park Rezidentligi</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Aloqa va Manzil
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>IT Park Mintaqaviy Filiali Binosi, Markaziy Xiyobon ko'chasi 18</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>+998 (71) 209-11-99</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>info@it-park.uz</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Send className="w-4 h-4 text-blue-400 shrink-0" />
                <span>@itpark_regional_expo</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 IT Park Uzbekistan Mintaqaviy Filiali. Barcha huquqlar himoyalangan.
          </div>
          <div className="flex items-center gap-1">
            <span>Raqamli texnologiyalar vazirligi ko'magida yaratildi</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
