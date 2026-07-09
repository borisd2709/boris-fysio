import Link from "next/link"

export default function Page() {
  return (
    <main className="bg-white text-gray-900">

      <article className="max-w-3xl mx-auto px-6 pt-28 pb-20">

        {/* Titel */}
        <h1 className="text-4xl font-semibold mb-6 leading-tight">
          Kan kaakspanning hoofdpijn veroorzaken?
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-600 mb-10">
          Veel mensen met hoofdpijn merken dat de pijn samen lijkt te hangen
          met spanning in hun kaak.
          <br /><br />
          Maar hoe zit dat precies?
          En kan kaakspanning daadwerkelijk hoofdpijn veroorzaken?
        </p>

        {/* Uitleg */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          De verbinding tussen kaak en hoofdpijn
        </h2>

        <p className="mb-4 text-gray-700">
          De spieren van je kaak staan in nauwe verbinding met je gezicht,
          je slapen en je nek.
        </p>

        <p className="mb-6 text-gray-700">
          Wanneer deze spieren langdurig gespannen zijn,
          kan dat leiden tot een zeurend, drukkend of vermoeiend gevoel rond het hoofd.
        </p>

        {/* Herkenning */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Hoe herken je dit?
        </h2>

        <ul className="space-y-3 text-gray-700 mb-8">
          <li>Druk of pijn bij je slapen</li>
          <li>Hoofdpijn aan het einde van de dag</li>
          <li>Gevoel van vermoeidheid in je gezicht</li>
          <li>Combinatie met nek- of schouderklachten</li>
        </ul>

        <p className="mb-10 text-gray-700">
          Vaak gaat deze hoofdpijn samen met onbewust klemmen van de kaken.
        </p>

        {/* Waarom het gebeurt */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Waarom kaakspanning hoofdpijn kan geven
        </h2>

        <p className="mb-4 text-gray-700">
          Wanneer je kaken langdurig gespannen zijn,
          staan ook omliggende spieren onder druk.
        </p>

        <p className="mb-6 text-gray-700">
          Deze spanning kan zich uitbreiden naar je slapen, achterhoofd en nek,
          waardoor hoofdpijn ontstaat.
        </p>

        {/* Belangrijk inzicht */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Het zit vaak niet alleen in de kaak
        </h2>

        <p className="mb-4 text-gray-700">
          Veel mensen proberen hun kaak bewust te ontspannen.
        </p>

        <p className="mb-6 text-gray-700">
          Maar zolang je lichaam als geheel gespannen blijft,
          blijft de hoofdpijn vaak terugkomen.
        </p>

        {/* Systeem */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Het gaat om het hele systeem
        </h2>

        <p className="mb-6 text-gray-700">
          Kaakspanning staat vaak niet op zichzelf,
          maar maakt deel uit van hoe je lichaam omgaat met spanning.
        </p>

        {/* 🔗 Link naar ankerpagina */}
        <div className="mt-10 mb-12 max-w-2xl mx-auto p-6 bg-gray-50 rounded-2xl text-center border">
          <p className="text-gray-600 mb-4">
            Wil je begrijpen hoe spanning zich opbouwt in het lichaam?
          </p>

          <Link href="/stress-burnout" className="underline">
            Stress en burnout
          </Link>
        </div>

        {/* Wat helpt */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Wat helpt bij hoofdpijn door kaakspanning?
        </h2>

        <p className="mb-6 text-gray-700">
          De ingang ligt vaak niet alleen in de kaak,
          maar in het tot rust brengen van het lichaam.
        </p>

        <ul className="space-y-3 text-gray-700 mb-10">
          <li>Ontspanning van kaak en tong</li>
          <li>Verminderen van nek- en schouderspanning</li>
          <li>Rustige ademhaling</li>
          <li>Bewustwording van spanning gedurende de dag</li>
        </ul>

        <p className="mb-12 text-gray-700">
          Wanneer die spanning afneemt,
          vermindert vaak ook de hoofdpijn.
        </p>

        {/* 🔗 Link naar kaakpagina */}
        <div className="mt-12 mb-12 max-w-2xl mx-auto text-center">
          <p className="text-gray-600 mb-2 text-sm">
            Lees ook
          </p>

          <Link href="/kaakspanning" className="underline">
            Meer over kaakspanning en klemmen
          </Link>
        </div>

        {/* 🔗 Link naar vorige blog */}
        <div className="mt-8 mb-16 max-w-2xl mx-auto text-center">
          <p className="text-gray-600 mb-2 text-sm">
            Of lees
          </p>

          <Link href="/kennisbank/kaken-klemmen" className="underline">
            Waarom klem je je kaken zonder dat je het doorhebt?
          </Link>
        </div>

        {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-2xl mb-4">
          Wil je ervaren wat er verandert als de spanning afneemt?
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