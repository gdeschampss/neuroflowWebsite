'use client';

import React from 'react';
import { FORM_URL, WHATSAPP_URL } from '@/components/ui/Button';
import { MessageCircle, ArrowRight } from 'lucide-react';

export const MobileStickyBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-gray-200/80 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] flex items-center justify-between gap-2">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-3 px-3 rounded-xl bg-emerald-50 text-[#03AD97] border border-[#03AD97]/30 flex items-center justify-center gap-2 text-xs font-bold active:scale-95 transition-all"
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp
      </a>

      <a
        href={FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-[1.4] py-3 px-4 rounded-xl bg-[#03AD97] text-white flex items-center justify-center gap-1.5 text-xs font-bold shadow-md hover:bg-[#028F7C] active:scale-95 transition-all"
      >
        <span>Diagnóstico IA</span>
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};
