'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useFadeIn } from '@/hooks/use-fade-in'

const faqs = [
  {
    q: "C'est quoi exactement un expert-comptable ?",
    a: "C'est le professionnel qui tient vos comptes, établit vos bilans, fait vos déclarations fiscales et vous conseille sur tout ce qui touche à la gestion de votre entreprise. En gros, votre meilleur allié pour ne pas finir avec le fisc aux trousses.",
  },
  {
    q: 'On est obligé de passer par un cabinet, ou on peut se débrouiller seul ?',
    a: "Techniquement non, certaines structures peuvent tenir leur compta elles-mêmes. Mais en pratique, une erreur comptable ou fiscale coûte toujours plus cher que les honoraires d'un cabinet. Et on vous libère un temps précieux.",
  },
  {
    q: 'Vous travaillez avec quels types de clients ?',
    a: "Des freelances aux PME, en passant par des holdings et des professions libérales. Peu importe le secteur — si vous avez une activité et des comptes à tenir, on peut travailler ensemble.",
  },
  {
    q: "C'est quoi vos tarifs, grosso modo ?",
    a: "Ça dépend vraiment de votre structure, de votre volume de transactions et des missions que vous nous confiez. On préfère vous faire un devis sur mesure plutôt que de vous balancer un prix qui ne correspondrait pas à votre réalité.",
  },
  {
    q: "Est-ce que vous pouvez reprendre une comptabilité déjà en cours ?",
    a: "Absolument. On récupère votre dossier là où il en est, on fait un état des lieux, et on repart sur des bases saines. Peu importe l'état dans lequel il se trouve — on a déjà vu pire.",
  },
  {
    q: 'Comment se passe le premier contact ?',
    a: "Un simple appel suffit. On échange sur votre situation, vos besoins, et on voit si on est le bon cabinet pour vous. Pas de prise de tête, pas de formulaire à remplir en 40 étapes.",
  },
]

export function FAQ() {
  const ref = useFadeIn()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-28 px-6 bg-[#F5F3EE]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div ref={ref} className="fade-in-up mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-[#B8973E] mb-4 font-sans font-medium">
            FAQ
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-[#0D1B2A] leading-tight text-balance">
            Les questions qu&apos;on nous pose souvent
          </h2>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-[#D4CEBC]">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i
            return (
              <FaqItem
                key={i}
                question={q}
                answer={a}
                isOpen={isOpen}
                onToggle={() => setOpen(isOpen ? null : i)}
                delay={i * 60}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
  delay,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  delay: number
}) {
  const ref = useFadeIn(delay)

  return (
    <div ref={ref} className="fade-in-up">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 py-7 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-lg text-[#0D1B2A] leading-snug group-hover:text-[#B8973E] transition-colors duration-200">
          {question}
        </span>
        <span className="shrink-0 mt-1 text-[#B8973E]">
          {isOpen ? <Minus size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-60 pb-7' : 'max-h-0'
        }`}
      >
        <p className="font-sans text-sm text-[#5A6475] leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}
