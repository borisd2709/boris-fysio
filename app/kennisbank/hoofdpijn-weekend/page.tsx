import Link from "next/link"

export default function Page() {
  return (
    <main className="bg-white text-gray-900">

      <article className="max-w-3xl mx-auto px-6 pt-28 pb-20">

        {/* TITEL */}
        <h1 className="text-4xl font-semibold mb-6 leading-tight">
          Waarom krijg je hoofdpijn in het weekend?
        </h1>

        {/* INTRO */}
        <p className="text-lg text-gray-600 mb-10">
          Veel mensen herkennen het:
          <br /><br />
          door de week gaat het redelijk,
          maar zodra het weekend begint… komt de hoofdpijn.
        </p>

        <p className="mb-10 text-gray-700">
          Je zou denken dat juist ontspanning helpt.
          Maar bij hoofdpijn werkt het vaak anders.
        </p>

        {/* OMGEKEERD KORTJAKJE */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Het “omgekeerd kortjakje” effect
        </h2>

        <p className="mb-4 text-gray-700">
          Bij veel mensen ontstaat hoofdpijn volgens een herkenbaar patroon:
        </p>

        <ul className="space-y-2 text-gray-700 mb-6">
          <li>Door de week houd je de spanning vast</li>
          <li>Je functioneert en blijft “aan”</li>
          <li>In het weekend valt de druk weg</li>
        </ul>

        <p className="mb-10 text-gray-700">
          En juist op dat moment reageert het lichaam.
        </p>

        {/* LICHAAM UITLEG */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Wat er in je lichaam gebeurt
        </h2>

        <p className="mb-4 text-gray-700">
          Tijdens een drukke week staat je lichaam vaak in een actieve stand:
        </p>

        <ul className="space-y-2 text-gray-700 mb-6">
          <li>Je spieren zijn gespannen</li>
          <li>Je ademhaling is hoger</li>
          <li>Je systeem is alert</li>
        </ul>

        <p className="mb-10 text-gray-700">
          Wanneer die spanning wegvalt,
          moet het lichaam opnieuw schakelen —
          en dat kan hoofdpijn geven.
        </p>

        {/* SCHOMMELING */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Niet alleen stress, maar vooral de overgang
        </h2>

        <p className="mb-4 text-gray-700">
          Het opvallende is dat hoofdpijn vaak ontstaat bij verandering:
        </p>

        <ul className="space-y-2 text-gray-700 mb-6">
          <li>Begin van het weekend</li>
          <li>Vakantie</li>
          <li>Na sporten</li>
          <li>Na ontspanning</li>
        </ul>

        <p className="mb-10 text-gray-700">
          Het lichaam reageert niet alleen op spanning,
          maar juist op de overgang van spanning naar rust.
        </p>

        {/* INZICHT */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Het gaat om hoe je lichaam schakelt
        </h2>

        <p className="mb-10 text-gray-700">
          Het gaat niet alleen om hoeveel spanning je hebt,
          maar om hoe je lichaam ermee omgaat en hoe snel het kan omschakelen.
        </p>

        {/* ACHTERGROND */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Wat je vaak terugziet bij weekendhoofdpijn
        </h2>

        <ul className="space-y-3 text-gray-700 mb-10">
          <li>Doorgaan ondanks vermoeidheid</li>
          <li>Moeite met grenzen aangeven</li>
          <li>Het goed willen doen</li>
          <li>Weinig herstelmomenten door de week</li>
        </ul>

        {/* ZENUWSTELSEL */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Wat dit te maken heeft met je zenuwstelsel
        </h2>

        <p className="mb-4 text-gray-700">
          Wanneer je lichaam langere tijd “aan” staat,
          voelt ontspanning niet meteen vanzelfsprekend.
        </p>

        <p className="mb-10 text-gray-700">
          Het systeem moet opnieuw leren dat het veilig is om los te laten —
          en die overgang kan spanning geven in nek, schouders en hoofd.
        </p>

        {/* WAT HELPT */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Wat helpt bij hoofdpijn in het weekend?
        </h2>

        <p className="mb-6 text-gray-700">
          De oplossing ligt meestal niet alleen in het weekend,
          maar juist in hoe je door de week met spanning omgaat.
        </p>

        <ul className="space-y-3 text-gray-700 mb-10">
          <li>Kleine momenten van rust gedurende de dag</li>
          <li>Bewust worden van spanning in je lichaam</li>
          <li>Minder grote pieken en dalen</li>
          <li>Grenzen beter voelen en bewaken</li>
        </ul>

        {/* LINK NAAR HOOFDPAGINA */}
        <div className="mt-16 max-w-2xl mx-auto p-6 bg-gray-50 rounded-2xl text-center border">
          <p className="text-gray-600 mb-4">
            Wil je begrijpen hoe hoofdpijn samenhangt met spanning in je lichaam?
          </p>

          <Link href="/hoofdpijn">
            Lees meer over hoofdpijn
          </Link>
        </div>

        {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-2xl mb-4">
          Wil je ervaren wat invloed heeft op jouw hoofdpijn?
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