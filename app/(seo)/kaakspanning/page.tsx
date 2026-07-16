import Link from "next/link"

export default function KaakspanningPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
          Kaakspanning en klemmen
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl">
          Veel mensen merken dat hun kaken gespannen zijn —
          vaak zonder dat ze het doorhebben.
          <br /><br />
          Kaakspanning staat zelden op zichzelf, maar hangt vaak samen
          met hoe je lichaam omgaat met spanning.
        </p>
      </section>
      <div className="max-w-5xl mx-auto px-6">

    <div className="grid md:grid-cols-2 gap-12">

      {/* herkenning */}
      <div className="border rounded-xl p-8">

        <h2 className="text-2xl font-semibold mb-6">
          Misschien herken je dit
        </h2>

        

        <ul className="space-y-3 text-gray-700">
          
          <li>Je kaken staan vaak gespannen</li>
            <li>Je klemt of knarst met je tanden</li>
            <li>Je hebt pijn of vermoeidheid in je kaak</li>
            <li>Je merkt spanning in je gezicht of slapen</li>
            <li>Je hebt hoofdpijn of nekklachten</li>
            <li>Ontspannen voelt moeilijk</li>
        </ul>

      </div>

      {/* klachten */}
      <div className="border rounded-xl p-8">

        <h2 className="text-2xl font-semibold mb-6">
          
        </h2>

        

        <ul className="space-y-3 text-gray-700">
          <li>crepiteren, knoepen, kraken kaakgewricht</li>
          <li>"tandpijn"</li>
          <li>beperkte kaakopening</li>
          
          <li>tinnitus/oorsuizen</li>
          <li>gespannen houding</li>
          <li>uitgebreid pijnbeeld</li>
          <li>uitstraling naar de schouder, arm</li>
          <li>"oorpijn"</li>
          <li>voorhoofdsholte ontsteking</li>
        </ul>

      </div>

    </div>

  </div>

      
      {/* UITLEG */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Waarom kaakspanning ontstaat
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            De kaak is één van de plekken waar spanning zich snel vastzet in het lichaam.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Dat gebeurt vaak onbewust.
            Bijvoorbeeld wanneer je:
          </p>

          <ul className="space-y-2 text-gray-700 mb-6">
            <li>geconcentreerd bent</li>
            <li>stress ervaart</li>
            <li>veel nadenkt</li>
            <li>je aanpast of controle probeert te houden</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            De kaak wordt dan onderdeel van een groter patroon van spanning in het lichaam.
          </p>

        </div>
      </section>

      {/* LINK NAAR ANKERPAGINA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Het is vaak geen los probleem
          </h2>

          <p className="text-gray-700 mb-6">
            Kaakspanning staat zelden op zichzelf.
            Het hangt vaak samen met hoe je lichaam met spanning omgaat.
          </p>

          <div className="max-w-xl mx-auto p-6 bg-white rounded-xl text-center border">
            <p className="text-gray-600 mb-4">
              Lees meer over hoe spanning zich opbouwt in het lichaam
            </p>

            <Link href="/stress-burnout" className="underline text-gray-900">
              Stress en burnout
            </Link>
          </div>

        </div>
      </section>

      {/* HOE HET BLIJFT */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-8">
            Waarom spanning blijft hangen
          </h2>

          <p className="text-gray-700 mb-4">
            Veel mensen proberen hun kaak bewust te ontspannen.
            Maar dat lukt vaak maar kort.
          </p>

          <p className="text-gray-700 mb-4">
            Dat komt omdat het probleem niet alleen in de kaak zit,
            maar in hoe het lichaam als geheel spanning vasthoudt.
          </p>

          <p className="text-gray-700">
            Zolang dat systeem “aan” staat,
            blijft de spanning terugkomen.
          </p>

        </div>
      </section>

      {/* JOUW AANPAK */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-10">
            Hoe we hiermee werken
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="p-6 bg-white rounded-xl border">
              <h3 className="font-semibold mb-2">Kaak en tong</h3>
              <p className="text-gray-700 text-sm">
                Bewustwording en ontspanning van klemmen en spanning.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border">
              <h3 className="font-semibold mb-2">Ademhaling</h3>
              <p className="text-gray-700 text-sm">
                Rustige ademhaling helpt het lichaam tot ontspanning te komen.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border">
              <h3 className="font-semibold mb-2">Nek en houding</h3>
              <p className="text-gray-700 text-sm">
                Spanning rond nek en schouders verminderen.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border">
              <h3 className="font-semibold mb-2">Zenuwstelsel</h3>
              <p className="text-gray-700 text-sm">
                Werken met spanning en ontspanning in het hele systeem.
              </p>
            </div>

          </div>

          <div className="max-w-3xl mt-12">
            <p className="text-gray-700 leading-relaxed">
              Het doel is niet om alleen de kaak te behandelen,
              maar om te veranderen hoe je lichaam met spanning omgaat.
            </p>
          </div>

        </div>
      </section>

      {/* BLOG LINK */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">

          <p className="text-gray-600 mb-2 text-sm">
            Lees ook
          </p>

          <Link href="/kennisbank/kaken-klemmen" className="underline text-gray-900">
            Waarom klem je je kaken zonder dat je het doorhebt?
          </Link>

        </div>
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
