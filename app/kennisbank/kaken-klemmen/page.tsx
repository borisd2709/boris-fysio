import Link from "next/link"
import Image from "next/image"


export default function Page() {
  return (
    <main className="bg-white text-gray-900">

      <article className="max-w-3xl mx-auto px-6 pt-28 pb-20">

        
{/* BEELD (subtiel!) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div
            className="h-[400px] bg-cover bg-center rounded"
            style={{
              backgroundImage: "url('/images/body awareness.jpg')",
            }}
          />

          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Waarom klem je je kaken zonder dat je het doorhebt?
            </h2>

            <p className="text-gray-700 mb-4">
              Veel mensen ontdekken pas dat ze hun kaken klemmen
          wanneer ze klachten krijgen.
            </p>

            <p className="text-gray-700">
              Maar klemmen gebeurt vaak onbewust — als reactie van het lichaam.
            </p>
          </div>

        </div>
      </section>
        {/* Sectie 1 */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Wat is kaken klemmen eigenlijk?
        </h2>

        <p className="mb-6 text-gray-700">
          Kaken klemmen betekent dat je tanden of kiezen tegen elkaar staan,
          vaak met kracht.
          Dit gebeurt meestal zonder dat je het doorhebt.
        </p>

        {/* Sectie 2 */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Waarom gebeurt het onbewust?
        </h2>

        <p className="mb-4 text-gray-700">
          Klemmen is geen slechte gewoonte, maar een reactie van het lichaam.
        </p>

        <p className="mb-6 text-gray-700">
          Wanneer je lichaam gespannen is, spannen spieren zich automatisch aan —
          en de kaak hoort daar vaak bij.
        </p>

        {/* Sectie 3 */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Wanneer gebeurt het vaak?
        </h2>

        <ul className="space-y-3 text-gray-700 mb-8">
          <li>Geconcentreerd werken</li>
          <li>Achter een scherm zitten</li>
          <li>Stressvolle situaties</li>
          <li>Piekeren of nadenken</li>
        </ul>

        <p className="mb-10 text-gray-700">
          Je aandacht zit ergens anders —
          en je lichaam spant zich ongemerkt aan.
        </p>

        {/* Sectie 4 */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Waarom het blijft doorgaan
        </h2>

        <p className="mb-6 text-gray-700">
          Als klemmen een patroon wordt, raakt je lichaam eraan gewend.
          Het gebeurt steeds vaker automatisch,
          zonder dat je het merkt.
        </p>

        {/* Sectie 5 */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Het probleem zit meestal niet alleen in de kaak
        </h2>

        <p className="mb-4 text-gray-700">
          Veel mensen proberen hun kaak bewust te ontspannen.
        </p>

        <p className="mb-6 text-gray-700">
          Dat helpt vaak maar kort,
          omdat de spanning vanuit het hele lichaam komt.
        </p>

        {/* Sectie 6 */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Verbinding met de rest van je lichaam
        </h2>

        <ul className="space-y-3 text-gray-700 mb-8">
          <li>Nek- en schouderklachten</li>
          <li>Hoofdpijn</li>
          <li>Hoge ademhaling</li>
          <li>Gevoel van “aan staan”</li>
        </ul>

        <p className="mb-10 text-gray-700">
          Het is geen los probleem,
          maar onderdeel van hoe je lichaam functioneert.
        </p>

        {/* Sectie 7 */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Wat helpt dan wel?
        </h2>

        <p className="mb-6 text-gray-700">
          Niet alleen proberen je kaak te ontspannen,
          maar werken met het systeem erachter.
        </p>

        <ul className="space-y-3 text-gray-700 mb-10">
          <li>Rustige ademhaling</li>
          <li>Bewustwording van spanning</li>
          <li>Ontspanning van kaak en nek</li>
        </ul>

        <p className="mb-12 text-gray-700">
          Niet als trucje, maar als manier om het lichaam weer flexibel te maken.
        </p>

        {/* ANKER LINK */}
        <div className="mt-16 max-w-2xl mx-auto p-6 bg-gray-50 rounded-2xl text-center border">
          <p className="text-gray-600 mb-4">
            Lees meer over hoe spanning zich opbouwt in het lichaam
          </p>

          <Link
            href="/stress-burnout"
            className="inline-block px-5 py-3 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition"
          >
            Stress en burnout
          </Link>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl mb-4">
            Wil je ervaren hoe je kaak weer kan ontspannen?
          </h2>

          <p className="text-gray-600 mb-6">
            Soms begint verandering bij één ervaring.
          </p>

          <Link
            href="/afspraak"
            className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition"
          >
            Maak een afspraak
          </Link>
        </div>

      </article>

    </main>
  )
}