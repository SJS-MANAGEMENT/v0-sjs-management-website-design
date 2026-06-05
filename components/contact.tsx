'use client'

import { Phone, Globe } from 'lucide-react'
import { useFadeIn } from '@/hooks/use-fade-in'

const contacts = [
  {
    name: 'Samuel Smia',
    phone: '06 25 15 55 13',
    href: 'tel:+33625155513',
  },
  {
    name: 'Sacha Pariente',
    phone: '06 99 46 26 27',
    href: 'tel:+33699462627',
  },
]

export function Contact() {
  const headerRef = useFadeIn()

  return (
    <section id="contact" className="py-28 px-6 bg-[#0D1B2A]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div ref={headerRef} className="fade-in-up mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-[#B8973E] mb-4 font-sans font-medium">
            Nous Contacter
          </p>
          <div className="flex items-end justify-between">
            <h2 className="font-heading text-4xl sm:text-5xl text-[#F5F3EE] leading-tight max-w-sm text-balance">
              Parlons de votre projet
            </h2>
            <div className="hidden md:block h-px flex-1 bg-[#1E3040] ml-10 mb-3" />
          </div>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contacts.map(({ name, phone, href }, i) => (
            <ContactCard key={name} name={name} phone={phone} href={href} delay={i * 150} />
          ))}
        </div>

        {/* Website link */}
        <div className="flex items-center gap-3 border-t border-[#1E3040] pt-8">
          <Globe size={16} strokeWidth={1.5} className="text-[#B8973E]" />
          <a
            href="https://sjsmanagement.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm tracking-widest uppercase text-[#B8973E] hover:text-[#D4AF5A] transition-colors duration-200"
          >
            sjsmanagement.fr
          </a>
        </div>
      </div>
    </section>
  )
}

function ContactCard({
  name,
  phone,
  href,
  delay,
}: {
  name: string
  phone: string
  href: string
  delay: number
}) {
  const ref = useFadeIn(delay)

  return (
    <div
      ref={ref}
      className="fade-in-up border border-[#1E3040] p-8 group hover:border-[#B8973E]/50 transition-colors duration-300"
    >
      <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#5A6475] mb-3">
        Expert-Comptable
      </p>
      <h3 className="font-heading text-2xl text-[#F5F3EE] mb-6">{name}</h3>
      <a
        href={href}
        className="inline-flex items-center gap-3 text-[#B8973E] hover:text-[#D4AF5A] transition-colors duration-200 group/link"
      >
        <div className="w-8 h-8 border border-[#B8973E]/40 flex items-center justify-center group-hover/link:border-[#D4AF5A] transition-colors duration-200">
          <Phone size={14} strokeWidth={1.5} />
        </div>
        <span className="font-sans text-base tracking-wide">{phone}</span>
      </a>
    </div>
  )
}
