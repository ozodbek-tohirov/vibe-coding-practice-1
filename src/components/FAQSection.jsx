import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { FAQ_ITEMS } from '../data/startups';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#070b14]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Savol-Javoblar</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ko'p Beriladigan{' '}
            <span className="gradient-text-itpark">
              Savollar
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base">
            Ko'rgazmada ishtirok etish, arizalarni baholash va mukofotlar bo'yicha barcha kerakli ma'lumotlar.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-white">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-emerald-400' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white/5 border border-white/10">
          <p className="text-sm text-slate-300 mb-3">
            Savolingizga javob topa olmadingizmi? Tashkiliy qo'mita bilan bog'laning!
          </p>
          <a
            href="https://t.me/ITPark_Support"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 shadow-md shadow-emerald-500/20 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Telegram Orqali Savol Berish</span>
          </a>
        </div>

      </div>
    </section>
  );
}
