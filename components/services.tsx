'use client'

import { Calculator, Search, Scale } from 'lucide-react'
import { useFadeIn } from '@/hooks/use-fade-in'

const services = [
  {
    icon: Calculator,
    title: 'Expertise comptable',
    description: 'Tenue de comptes, bilans annuels et reporting financier sur mesure.',
  },
  {
    icon: Search,
    title: 'Commissariat aux comptes',
    description: "Certification légale des comptes et mission d'audit statutaire.",
  },
  {
    icon: Scale,
    title: 'Conseil fiscal & juridique',
    description: 'Optimisation fiscale, structuration juridique et accompagnement stratégique.',
  },
]

export function Services() {
  const ref = useFadeIn()

  return (
    <section id="services" className="py-28 px-6 bg-[#F5F3EE]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div ref={ref} className="fade-in-up mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-[#B8973E] mb-4 font-sans font-medium">
            Nos Prestations
          </p>
          <div className="flex items-end justify-between">
            <h2 className="font-heading text-4xl sm:text-5xl text-[#0D1B2A] leading-tight max-w-sm text-balance">
              Ce qu&apos;on fait, concrètement
            </h2>
            <div className="hidden md:block h-px flex-1 bg-[#D4CEBC] ml-10 mb-3" />
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#D4CEBC]">
          {services.map(({ icon: Icon, title, description }, i) => {
            return (
              <ServiceCard
                key={title}
                icon={Icon}
                title={title}
                description={description}
                delay={i * 120}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: React.ElementType
  title: string
  description: string
  delay: number
}) {
  const ref = useFadeIn(delay)

  return (
    <div
      ref={ref}
      className="fade-in-up bg-[#F5F3EE] p-10 group hover:bg-white transition-colors duration-300"
    >
      <div className="mb-6 w-10 h-10 flex items-center justify-center border border-[#D4CEBC] group-hover:border-[#B8973E] transition-colors duration-300">
        <Icon
          size={18}
          strokeWidth={1.5}
          className="text-[#0D1B2A] group-hover:text-[#B8973E] transition-colors duration-300"
        />
      </div>
      <h3 className="font-heading text-xl text-[#0D1B2A] mb-3 leading-snug">{title}</h3>
      <p className="font-sans text-sm text-[#5A6475] leading-relaxed">{description}</p>
    </div>
  )
}
