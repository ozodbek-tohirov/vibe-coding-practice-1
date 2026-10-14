import React from 'react';
import { CheckCircle2, Heart, Sparkles, X, Info } from 'lucide-react';

export default function NotificationToast({ toast, onClose }) {
  if (!toast) return null;

  const icons = {
    vote: <Heart className="w-5 h-5 fill-rose-500 text-rose-500 shrink-0" />,
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-cyan-400 shrink-0" />,
    sparkle: <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="glass-panel bg-[#0b1324]/95 border border-emerald-500/30 rounded-2xl p-4 shadow-2xl flex items-start gap-3 text-sm">
        {icons[toast.type] || icons.info}
        <div className="flex-1">
          {toast.title && (
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-0.5">
              {toast.title}
            </h4>
          )}
          <p className="text-slate-300 text-xs leading-relaxed">
            {toast.message}
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-slate-500 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
