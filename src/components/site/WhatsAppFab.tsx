export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/33600000000?text=Bonjour%20Amyrel%2C%20j'aimerais%20un%20conseil%20beauté."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Amyrel sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-[0_12px_40px_-12px_rgba(37,211,102,0.6)] hover:scale-110 transition-transform"
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40 animate-ping" />
      <svg viewBox="0 0 32 32" className="relative h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M19.11 17.41c-.27-.13-1.59-.78-1.84-.87-.25-.09-.43-.13-.61.14-.18.27-.69.86-.85 1.04-.16.18-.31.2-.58.07-.27-.13-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.48.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.13-.61-1.46-.83-2-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.66 1.12 2.84.13.18 1.93 2.94 4.67 4.13.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.59-.65 1.82-1.28.22-.63.22-1.16.16-1.28-.07-.12-.25-.18-.52-.31zM16 5C9.93 5 5 9.93 5 16c0 1.95.51 3.78 1.4 5.36L5 27l5.79-1.36A10.95 10.95 0 0 0 16 27c6.07 0 11-4.93 11-11S22.07 5 16 5z" />
      </svg>
    </a>
  );
}