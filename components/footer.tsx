export function Footer() {
  return (
    <footer className="bg-[#0D1B2A] border-t border-[#1E3040] px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-sans text-xs text-[#5A6475] tracking-wide text-center sm:text-left">
          © 2025 SJS MANAGEMENT — Experts-Comptables
        </p>
        <a
          href="https://sjsmanagement.fr"
          className="font-sans text-xs text-[#B8973E] tracking-widest uppercase hover:text-[#D4AF5A] transition-colors duration-200"
        >
          sjsmanagement.fr
        </a>
      </div>
    </footer>
  )
}
