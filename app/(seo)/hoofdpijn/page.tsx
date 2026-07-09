import Link from "next/link"

export default function HoofdpijnPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
          Hoofdpijn en spanning in je lichaam
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl">
          Hoofdpijn ontstaat niet altijd door één duidelijke oorzaak.
          <br /><br />
          Vaak heeft het te maken met hoe je lichaam omgaat met spanning,
          prikkels en herstel.
        </p>
      </section>

      {/* HERKENNING */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Misschien herken je dit
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>Hoofdpijn aan het einde van de dag</li>
            <li>Spanning in nek en schouders</li>
            <li>Hoofdpijn in het weekend</li>
            <li>Klachten na sporten of juist na ontspanning</li>
            <li>Het gevoel dat je lichaam moeilijk tot rust komt</li>
          </ul>

        </div>
      </section>

      {/* OMGEKEERD KORTJAKJE */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Waarom hoofdpijn vaak pas komt als je ontspant
          </h2>

          <p className="text-gray-700 mb-4">
            Veel mensen herkennen dat hoofdpijn juist ontstaat
            op momenten dat de druk wegvalt.
          </p>

          <p className="text-gray-700 mb-4">
            Bijvoorbeeld in het weekend, tijdens vakantie,
            of na het sporten.
          </p>

          <p className="text-gray-700">
            Dit wordt ook wel een soort “omgekeerd kortjakje” genoemd:
            door de week staat er spanning op het systeem,
            en zodra die afneemt, reageert het lichaam.
          </p>

        </div>
      </section>

      {/* SCHOMMELING */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Schommelingen kunnen hoofdpijn triggeren
          </h2>

          <p className="text-gray-700 mb-4">
            Het lichaam reageert niet alleen op stress,
            maar ook op veranderingen daarin.
          </p>

          <p className="text-gray-700 mb-4">
            Daardoor kan hoofdpijn ontstaan:
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>na een drukke werkweek</li>
            <li>bij ontspanning</li>
            <li>bij sporten</li>
          </ul>

          <p className="text-gray-700 mt-6">
            Het probleem is dan niet de activiteit zelf,
            maar hoe het lichaam reageert op de overgang.
          </p>

        </div>
      </section>

      {/* SYSTEEM */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Het gaat vaak om het hele systeem
          </h2>

          <p className="text-gray-700 mb-4">
            Hoofdpijn is vaak geen los probleem,
            maar een signaal van hoe het lichaam functioneert.
          </p>

          <p className="text-gray-700 mb-4">
            Wanneer spanning zich opstapelt en moeilijk kan afnemen,
            wordt het systeem gevoeliger.
          </p>

          <p className="text-gray-700">
            Het lichaam staat dan sneller “aan”
            en reageert sterker op prikkels.
          </p>

        </div>
      </section>

      {/* LINK NAAR ANKER */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-2xl mx-auto px-6">

          <p className="text-gray-700 mb-4">
            Wil je beter begrijpen hoe spanning zich opbouwt in het lichaam?
          </p>

          <Link href="/stress-burnout" className="underline">
            Stress en spanning
          </Link>

        </div>
      </section>

      {/* FACTOREN */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-8">
            Factoren die een rol kunnen spelen
          </h2>

          <ul className="space-y-4 text-gray-700">
            <li>Langdurige spanning of stress</li>
            <li>Moeite met grenzen aangeven</li>
            <li>Veel willen doen of het goed willen doen</li>
            <li>Piekeren of veel nadenken</li>
            <li>Weinig herstelmomenten</li>
          </ul>

          <p className="mt-6 text-gray-700">
            Ook factoren zoals autonomie, werkdruk en sociale steun
            hebben invloed op hoe het lichaam spanning verwerkt.
          </p>

        </div>
      </section>

      {/* POLYVAGAAL */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Veiligheid en het zenuwstelsel
          </h2>

          <p className="text-gray-700 mb-4">
            Volgens inzichten vanuit het zenuwstelsel
            speelt het gevoel van veiligheid een belangrijke rol.
          </p>

          <p className="text-gray-700 mb-4">
            Wanneer het lichaam zich veilig voelt,
            kan het ontspannen en herstellen.
          </p>

          <p className="text-gray-700">
            Dit heeft te maken met houding, ademhaling,
            en zelfs hoe je contact maakt met anderen.
          </p>

        </div>
      </section>

      {/* AANPAK */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-10">
            Hoe we hiermee werken
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">Lichaamsspanning</h3>
              <p className="text-gray-700 text-sm">
                Bewustwording en verminderen van spanning in nek, schouders en kaak.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">Ademhaling</h3>
              <p className="text-gray-700 text-sm">
                Rustige ademhaling helpt het systeem reguleren.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">Balans</h3>
              <p className="text-gray-700 text-sm">
                Werken met belasting en herstel.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">Aandacht</h3>
              <p className="text-gray-700 text-sm">
                Leren herkennen wanneer spanning toeneemt.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BLOG LINKS */}
      <section className="py-20 text-center">
        <p className="text-gray-600 mb-2 text-sm">
          Lees ook
        </p>

        <Link href="/kennisbank/kaakspanning-hoofdpijn" className="underline">
          Kan kaakspanning hoofdpijn veroorzaken?
        </Link>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-2xl mb-4">
          Wil je ervaren hoe je kaak weer kan ontspannen?
        </h2>

        <p className="text-gray-600 mb-6">
          Soms begint verandering bij één ervaring.
        </p>

        <Link href="/afspraak" className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-white font-medium hover:bg-gray-800 transition">
          Maak een afspraak
        </Link>
      </section>

    </main>
  )
}