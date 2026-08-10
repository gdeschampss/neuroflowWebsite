'use client';

import React from 'react';
import { WHATSAPP_URL } from '@/components/ui/Button';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsapp = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#25D366] text-white font-bold text-sm rounded-full shadow-lg border border-white/20 hover:bg-[#20bd5a] transition-all duration-200"
    >
      <MessageCircle className="w-5 h-5 fill-current" />
      <span className="hidden sm:inline">Falar no WhatsApp</span>
      <span className="sm:hidden">WhatsApp</span>
    </a>
  );
};
