import { MessageCircle } from 'lucide-react';
import { useT } from '../i18n/LanguageContext';

const WHATSAPP_NUMBER = '50764622131';

export default function WhatsAppButton() {
  const { t } = useT();
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsappTemplate)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent/90 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  );
}
