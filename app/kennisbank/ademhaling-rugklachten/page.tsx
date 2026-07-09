import Link from "next/link"

export default function Page() {
  return (
    <main className="bg-white text-gray-900">

      <article className="max-w-3xl mx-auto px-6 pt-28 pb-20">

        {/* TITEL */}
        {/* BEELD (subtiel!) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div
            className="h-[400px] bg-cover bg-center rounded"
            style={{
              backgroundImage: "url('/images/hero calm.jpg')",
            }}
          />

          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Wat heeft je ademhaling met rugklachten te maken?
            </h2>

            <p className="text-gray-700 mb-4">
              Rugklachten worden vaak gezien als een probleem van spieren of houding.
          <br /><br />
          Maar in veel gevallen speelt iets anders een belangrijke rol:
          je ademhaling.
            </p>

            <p className="text-gray-700">
              Veel mensen met rugklachten merken dat hun ademhaling hoog zit
          en hun lichaam gespannen blijft.
          Dat is geen toeval.
            </p>
          </div>

        </div>
      </section>
        

        {/* SECTIE */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          De link tussen ademhaling en rug
        </h2>

        <p className="mb-4 text-gray-700">
          Ademhaling is niet alleen lucht in en uit,
          maar een bewegingssysteem in je lichaam.
        </p>

        <ul className="space-y-2 text-gray-700 mb-6">
          <li>Het middenrif (diafragma)</li>
          <li>De ribben en middenrug</li>
          <li>De buik</li>
          <li>De bekkenbodem</li>
        </ul>

        <p className="mb-10 text-gray-700">
          Deze structuren werken samen.
          Als dat niet goed gebeurt, neemt spanning toe —
          ook in je rug.
        </p>

        {/* SECTIE */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Wat gebeurt er bij een hoge ademhaling?
        </h2>

        <ul className="space-y-2 text-gray-700 mb-6">
          <li>Minder beweging van het middenrif</li>
          <li>Meer spanning in nek en schouders</li>
          <li>Minder beweging in de middenrug</li>
        </ul>

        <p className="mb-10 text-gray-700">
          Je lichaam gaat compenseren —
          en vaak gebeurt dat in de onderrug.
        </p>

        {/* SECTIE */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Je rug werkt niet los van de rest
        </h2>

        <p className="mb-4 text-gray-700">
          Wanneer je ademhaling beperkt is,
          verliest het lichaam zijn flexibiliteit.
        </p>

        <p className="mb-10 text-gray-700">
          De onderrug gaat dan meer werk doen,
          wat kan leiden tot spanning of pijn.
        </p>

        {/* BEKKEN */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          De rol van het bekken
        </h2>

        <p className="mb-4 text-gray-700">
          De ademhaling heeft een directe relatie met het bekken.
        </p>

        <ul className="space-y-2 text-gray-700 mb-6">
          <li>Invloed op de buikdruk</li>
          <li>Invloed op de bekkenbodem</li>
          <li>Ondersteuning van de onderrug</li>
        </ul>

        <p className="mb-10 text-gray-700">
          Als de ademhaling niet goed doorloopt,
          blijft de bekkenbodem vaak gespannen —
          en dat kan de onderrug belasten.
        </p>

        {/* KAAK */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Verbinding met de kaak
        </h2>

        <p className="mb-4 text-gray-700">
          Wat minder bekend is:
          de kaak en ademhaling hangen samen.
        </p>

        <ul className="space-y-2 text-gray-700 mb-6">
          <li>Mondademhaling beïnvloedt stabiliteit</li>
          <li>Spanning in de kaak beïnvloedt ademritme</li>
          <li>Tongpositie speelt een belangrijke rol</li>
        </ul>

        <p className="mb-10 text-gray-700">
          Dit werkt door in het hele lichaam —
          van kaak tot bekken.
        </p>

        {/* HOUDING */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Wat je vaak ziet in houding
        </h2>

        <ul className="space-y-3 text-gray-700 mb-10">
          <li>Hoofd naar voren</li>
          <li>Stijve nek</li>
          <li>Weinig beweging in de middenrug</li>
          <li>Spanning in kaak en schouders</li>
        </ul>

        {/* INZICHT */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Belangrijk inzicht
        </h2>

        <p className="mb-10 text-gray-700">
          Rugklachten zitten vaak niet alleen in de rug,
          maar in hoe het lichaam als geheel beweegt en ademt.
        </p>

        {/* WAT HELPT */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Wat helpt dan wel?
        </h2>

        <p className="mb-6 text-gray-700">
          De oplossing ligt meestal niet alleen in oefeningen voor de rug,
          maar in het herstellen van beweging in het hele systeem.
        </p>

        <ul className="space-y-3 text-gray-700 mb-10">
          <li>Rustige neusademhaling</li>
          <li>Ontspannen tongpositie</li>
          <li>Meer beweging in ribben en middenrif</li>
          <li>Bewustwording van spanning in het lichaam</li>
        </ul>

        {/* LINK NAAR ANKER */}
        <div className="mt-16 max-w-2xl mx-auto p-6 bg-gray-50 rounded-2xl text-center border">
          <p className="text-gray-600 mb-4">
            Wil je beter begrijpen hoe spanning zich opbouwt in het lichaam?
          </p>

          <Link href="/stress-burnout">
            Lees meer over stress en spanning
          </Link>
        </div>

        {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-2xl mb-4">
          Wil je ervaren wat er verandert als je ademhaling meer ruimte krijgt?
        </h2>

        <p className="text-gray-600 mb-6">
          Soms begint verandering bij één ervaring.
        </p>

        <Link href="/afspraak" className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-white font-medium hover:bg-gray-800 transition">
          Maak een afspraak
        </Link>
      </section>

      </article>

    </main>
  )
}