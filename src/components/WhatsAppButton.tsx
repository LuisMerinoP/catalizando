import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '50765503340';
const WHATSAPP_MESSAGE = encodeURIComponent('Hello! I am interested in your services.');

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent/90 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  );
}
