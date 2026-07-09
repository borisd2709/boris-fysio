import Link from "next/link"

export default function AfspraakPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO / INTRO */}
      <section className="max-w-3xl mx-auto px-6 pt-28 pb-16 text-center">

        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
          Maak een afspraak
        </h1>

        <p className="text-gray-600 leading-relaxed mb-6">
          De eerste afspraak is een rustige ruimte om te kijken wat er speelt in je lichaam.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Je hoeft het niet perfect te verwoorden —
          we verkennen het samen.
        </p>

      </section>


      {/* FORMULIER */}
      <section className="pb-24">

        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-gray-50 p-6 md:p-10 rounded-2xl">

            <p className="text-gray-600 text-sm mb-6">
              Neem rustig de tijd om het formulier in te vullen.
              Een korte beschrijving van je klacht is voldoende.
            </p>
          <ul className="text-sm text-gray-600 mb-6 space-y-2">
  <li>• Duur: ± 30 minuten</li>
  <li>• Geen verwijzing nodig</li>
  <li>• Contractvrije zorg</li>
</ul>

            {/* IFRAME NAAR JE BESTAANDE FORM */}
            <div className="w-full h-[700px] border rounded-xl overflow-hidden bg-white">
  
              https://www.borisdrogtfysio.nl/afspraak
            </div>

          </div>

        </div>

      </section>


      {/* LAST MINUTE BLOK */}
      <section className="pb-24">
        <div className="max-w-2xl mx-auto px-6 text-center">

          <p className="text-gray-600 mb-4">
            Op zoek naar een eerdere plek?
          </p>

          <p className="text-gray-700 mb-6">
            Soms komt er onverwacht een plek vrij.
            Deze bied ik aan bestaande patiënten aan tegen een gereduceerd tarief.
          </p>

          <Link href="/afspraak#last-minute" className="text-blue-600 hover:underline">
            Bekijk last-minute beschikbaarheid
          </Link>

        </div>
      </section>


      {/* EXTRA GERUSTSTELLING */}
      <section className="pb-24">
        <div className="max-w-2xl mx-auto px-6 text-center">

          <p className="text-gray-600 text-sm">
            Na het plannen ontvang je een bevestiging per mail.
            Mocht er iets veranderen, dan kun je altijd contact opnemen.
          </p>

        </div>
      </section>

    </main>
  )
}
``