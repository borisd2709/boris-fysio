import Link from "next/link"

export default function Page() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
          Nek- en schouderspanning
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl">
          Veel mensen lopen rond met spanning in hun nek en schouders.
          <br /><br />
          Vaak zonder duidelijke oorzaak —
          maar het lichaam blijft gespannen aanvoelen.
        </p>
      </section>

      {/* HERKENNING */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Misschien herken je dit
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>Je schouders staan vaak hoog of gespannen</li>
            <li>Je nek voelt stijf of vermoeid</li>
            <li>Je hebt regelmatig hoofdpijn</li>
            <li>Ontspannen lukt maar tijdelijk</li>
            <li>Je hebt het gevoel dat je lichaam “aan” blijft staan</li>
          </ul>

        </div>
      </section>

      {/* UITLEG */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Waarom spanning zich hier vastzet
          </h2>

          <p className="text-gray-700 mb-4">
            De nek en schouders zijn plekken waar spanning zich snel ophoopt.
          </p>

          <p className="text-gray-700 mb-4">
            Wanneer het lichaam onder druk staat,
            reageren deze spieren vaak als eerste.
          </p>

          <p className="text-gray-700">
            Niet als los probleem, maar als onderdeel van hoe je lichaam met spanning omgaat.
          </p>

        </div>
      </section>

      {/* LINK NAAR ANKERPAGINA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">

          <p className="text-gray-700 mb-6">
            Nek- en schouderspanning hangt vaak samen met overbelasting en stress.
          </p>

          <Link href="/stress-burnout" className="underline">
            Lees meer over stress en spanning
          </Link>

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
              <h3 className="font-semibold mb-2">Nek en schouders</h3>
              <p className="text-gray-700 text-sm">
                Verminderen van spanning en verbeteren van beweging.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">Ademhaling</h3>
              <p className="text-gray-700 text-sm">
                Rustige ademhaling helpt het systeem ontspannen.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">Bindweefsel</h3>
              <p className="text-gray-700 text-sm">
                Werken met spanning in middenrug en ribben.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">Zenuwstelsel</h3>
              <p className="text-gray-700 text-sm">
                Leren schakelen tussen spanning en rust.
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

        <Link href="/kennisbank/schouders-gespannen" className="underline">
          Waarom blijven je schouders gespannen?
        </Link>
        <br />
        <Link href="/kennisbank/nek-hoofdpijn" className="underline">
          Kan spanning in je nek hoofdpijn veroorzaken?
        </Link>
      </section>
    
      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-2xl mb-4">
          Wil je ervaren hoe spanning kan verminderen?
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