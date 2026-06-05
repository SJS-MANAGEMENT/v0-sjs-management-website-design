'use client'

import { Phone } from 'lucide-react'
import { useFadeIn } from '@/hooks/use-fade-in'

export function Hero() {
  const ref = useFadeIn()

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 text-center"
    >
      <div ref={ref} className="fade-in-up max-w-3xl mx-auto">
        {/* Eyebrow */}
        <p className="text-xs tracking-[0.25em] uppercase text-[#B8973E] mb-8 font-sans font-medium">
          Experts-Comptables · sjsmanagement.fr
        </p>

        {/* Firm name */}
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#0D1B2A] leading-[1.05] tracking-tight text-balance mb-6">
          SJS
          <br />
          Management
        </h1>

        {/* Thin rule */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-[#B8973E]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#B8973E]" />
          <div className="h-px w-12 bg-[#B8973E]" />
        </div>

        {/* Tagline */}
        <p className="font-sans text-lg sm:text-xl text-[#5A6475] font-light leading-relaxed text-pretty mb-12 max-w-xl mx-auto">
          Votre expertise comptable,{' '}
          <span className="text-[#0D1B2A] font-normal">à votre service.</span>
          <br className="hidden sm:block" /> Un accompagnement rigoureux, une
          relation de confiance.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+33625155513"
            className="inline-flex items-center gap-3 bg-[#0D1B2A] text-[#F5F3EE] px-7 py-4 text-sm tracking-widest uppercase font-sans font-medium hover:bg-[#1A2E42] transition-colors duration-200 w-full sm:w-auto justify-center"
          >
            <Phone size={16} strokeWidth={1.5} />
            <span>Appeler Samuel Smia</span>
          </a>
          <a
            href="tel:+33699462627"
            className="inline-flex items-center gap-3 border border-[#B8973E] text-[#B8973E] px-7 py-4 text-sm tracking-widest uppercase font-sans font-medium hover:bg-[#B8973E] hover:text-white transition-colors duration-200 w-full sm:w-auto justify-center"
          >
            <Phone size={16} strokeWidth={1.5} />
            <span>Appeler Sacha Pariente</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="mt-20 flex flex-col items-center gap-2 text-[#D4CEBC]">
        <div className="h-12 w-px bg-[#D4CEBC]" />
        <span className="text-xs tracking-[0.2em] uppercase font-sans text-[#B8B0A2]">
          Découvrir
        </span>
      </div>
    </section>
  )
}
