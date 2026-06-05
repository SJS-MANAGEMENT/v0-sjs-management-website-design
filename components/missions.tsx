'use client'

import { useFadeIn } from '@/hooks/use-fade-in'

const missions = [
  {
    number: '01',
    title: 'Création & accompagnement au démarrage',
    body: "Vous lancez votre boîte ? On s'occupe du choix de la structure juridique, de l'immatriculation et de la mise en place d'une compta propre dès le premier jour. Pas de mauvaises surprises.",
  },
  {
    number: '02',
    title: 'Tenue comptable & déclarations',
    body: 'Saisie, lettrage, rapprochements bancaires, TVA, liasse fiscale — on gère l\'ensemble du cycle comptable pour que vous puissiez vous concentrer sur votre activité.',
  },
  {
    number: '03',
    title: 'Bilan annuel & diagnostic financier',
    body: "Chaque année, on clôture vos comptes, on dépose votre bilan et on vous donne une lecture claire de votre situation : ce qui va, ce qui peut mieux faire, ce qu'il faut anticiper.",
  },
  {
    number: '04',
    title: 'Optimisation fiscale',
    body: "IS, IR, dividendes, holding — on analyse votre situation et on vous propose des montages adaptés pour payer ce que vous devez, ni plus, ni moins.",
  },
  {
    number: '05',
    title: 'Audit & commissariat aux comptes',
    body: "Certification légale des comptes, vérification des procédures internes, rapports d'audit — on intervient avec rigueur et indépendance.",
  },
  {
    number: '06',
    title: 'Conseil RH & social',
    body: "Fiches de paie, DPAE, contrats, charges sociales — on vous accompagne sur le volet social pour que votre équipe soit bien gérée et vos obligations respectées.",
  },
]

export function Missions() {
  const ref = useFadeIn()

  return (
    <section id="missions" className="py-28 px-6 bg-[#0D1B2A]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={ref} className="fade-in-up mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-[#B8973E] mb-4 font-sans font-medium">
            Nos Accompagnements
          </p>
          <div className="flex items-end gap-10">
            <h2 className="font-heading text-4xl sm:text-5xl text-[#F5F3EE] leading-tight text-balance">
              On est là pour quoi, exactement ?
            </h2>
            <div className="hidden md:block h-px flex-1 bg-[#1E3040] mb-3" />
          </div>
          <p className="mt-5 font-sans text-sm text-[#8898AA] leading-relaxed max-w-xl">
            De la création à la croissance, on couvre l&apos;ensemble des besoins comptables,
            fiscaux et juridiques des entrepreneurs et des PME.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1E3040]">
          {missions.map(({ number, title, body }, i) => (
            <MissionCard key={number} number={number} title={title} body={body} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MissionCard({
  number,
  title,
  body,
  delay,
}: {
  number: string
  title: string
  body: string
  delay: number
}) {
  const ref = useFadeIn(delay)

  return (
    <div
      ref={ref}
      className="fade-in-up bg-[#0D1B2A] p-10 group hover:bg-[#112135] transition-colors duration-300"
    >
      <span className="font-sans text-xs tracking-[0.2em] text-[#B8973E] mb-5 block">
        {number}
      </span>
      <h3 className="font-heading text-xl text-[#F5F3EE] mb-3 leading-snug">{title}</h3>
      <p className="font-sans text-sm text-[#8898AA] leading-relaxed">{body}</p>
    </div>
  )
}
