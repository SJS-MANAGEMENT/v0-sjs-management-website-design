'use client'

import { useState, useEffect } from 'react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5F3EE]/95 backdrop-blur-sm border-b border-[#D4CEBC]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a
          href="#hero"
          className="font-heading text-lg tracking-[0.12em] uppercase text-[#0D1B2A]"
        >
          SJS Management
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Services', href: '#services' },
            { label: 'Contact', href: '#contact' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm tracking-widest uppercase text-[#5A6475] hover:text-[#0D1B2A] transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
