
import Link from "next/link"

export default function StressBurnoutPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
          Wanneer je lichaam niet meer tot rust komt
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl">
          Stress en burnout gaan vaak niet alleen over hoe druk het is in je hoofd,
          maar vooral over hoe je lichaam is blijven reageren.
        </p>
      </section>

      {/* HERKENNING */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Misschien herken je dit
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>Je voelt je vaak gespannen, ook als je niets doet</li>
            <li>Ontspannen lukt niet echt</li>
            <li>Je blijft “aan staan”</li>
            <li>Je merkt spanning in kaak, nek of ademhaling</li>
            <li>Je lichaam lijkt niet mee te werken</li>
            <li>Je begrijpt het, maar het verandert niet</li>
          </ul>

          <p className="mt-6 text-gray-800">
            Het voelt alsof je lichaam niet meer terug kan schakelen.
          </p>

        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">

          <p className="text-gray-700 leading-relaxed">
            Stress en burnout worden vaak gezien als iets mentaals.
          </p>

          <p className="text-gray-700 mt-4 leading-relaxed">
            Maar in de praktijk zie je vooral een lichaam dat langdurig onder spanning heeft gestaan —
            en moeite heeft om daar weer uit te komen.
          </p>

        </div>
      </section>

      {/* 3 FASEN */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-8">
            Hoe spanning zich opbouwt in het lichaam
          </h2>

          <div className="space-y-12">

            <div>
              <h3 className="text-xl font-semibold mb-3">1. Overbelasting</h3>
              <p className="text-gray-700 leading-relaxed">
                In een periode van druk of spanning ga je vaak door.
                Je lichaam past zich aan — maar vaak met meer spanning.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">2. Blijven hangen in spanning</h3>
              <p className="text-gray-700 leading-relaxed">
                Het lichaam blijft in een “aan-stand”.
                Spieren blijven gespannen, ademhaling blijft hoog en aandacht blijft alert.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">3. Opnieuw afstemmen</h3>
              <p className="text-gray-700 leading-relaxed">
                Herstel begint wanneer het lichaam weer leert dat het ook anders kan —
                dat spanning kan afnemen en er weer ruimte ontstaat.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* KOPPELING NAAR KLACHTEN */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Hoe dit samenhangt met klachten
          </h2>

          <p className="text-gray-700 mb-6">
            Wanneer het lichaam langdurig onder spanning staat,
            zie je dat op verschillende plekken terug.
          </p>

          <ul className="space-y-3 text-gray-700 mb-8">
            <li>Kaakspanning of klemmen</li>
            <li>Nek- en schouderklachten</li>
            <li>Hoofdpijn</li>
            <li>Tinnitus</li>
          </ul>

          <div className="space-y-2">
            <Link href="/kaakspanning" className="underline">Lees meer over kaakspanning</Link>
            <br />
            <Link href="/tinnitus" className="underline">Lees meer over tinnitus</Link>
          </div>

        </div>
      </section>

      {/* AANPAK */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-10">
            Hoe we hiermee werken
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="p-6 bg-white rounded-xl border">
              <h3 className="font-semibold mb-2">Ademhaling</h3>
              <p className="text-gray-700 text-sm">
                Rustige ademhaling helpt het lichaam uit de “aan-stand” te komen.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border">
              <h3 className="font-semibold mb-2">Kaak en nek</h3>
              <p className="text-gray-700 text-sm">
                Loslaten van spanning op plekken waar het zich vaak vastzet.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border">
              <h3 className="font-semibold mb-2">Bindweefsel</h3>
              <p className="text-gray-700 text-sm">
                Behandeling van middenrug en ribben helpt het systeem te ontspannen.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border">
              <h3 className="font-semibold mb-2">Zenuwstelsel</h3>
              <p className="text-gray-700 text-sm">
                Werken met aandacht, spanning en regulatie van het lichaam.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* RICHTING */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Ruimte om opnieuw te voelen wat belangrijk is
          </h2>

          <p className="text-gray-700">
            Wanneer spanning afneemt, ontstaat er ruimte om weer te voelen
            wat belangrijk voor je is — en waar je energie van krijgt.
          </p>

        </div>
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
