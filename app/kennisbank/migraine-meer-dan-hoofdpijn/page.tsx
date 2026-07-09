import Link from "next/link"

export default function Page() {
  return (
    <main className="bg-white text-gray-900">

      <article className="max-w-3xl mx-auto px-6 pt-28 pb-20">

        <h1 className="text-4xl font-semibold mb-6">
          Migraine: meer dan alleen hoofdpijn
        </h1>

        <p className="text-gray-600 mb-10 text-lg leading-relaxed">
          Migraine wordt vaak gezien als een vorm van heftige hoofdpijn.
          Maar wie migraine ervaart weet dat het meestal veel meer is dan dat.
          Het kan invloed hebben op energie, concentratie, slaap, stemming
          en het dagelijks functioneren.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Wat is migraine?
        </h2>

        <p className="mb-4 text-gray-700 leading-relaxed">
          Migraine behoort tot de primaire hoofdpijnvormen.
          Dat betekent dat de hoofdpijn niet direct wordt veroorzaakt
          door bijvoorbeeld een blessure of een andere aandoening.
        </p>

        <p className="mb-6 text-gray-700 leading-relaxed">
          Tijdens een migraineaanval kunnen klachten ontstaan zoals:
        </p>

        <ul className="space-y-3 mb-10 text-gray-700">
          <li>Bonzende hoofdpijn, vaak aan één kant</li>
          <li>Misselijkheid</li>
          <li>Overgevoeligheid voor licht</li>
          <li>Overgevoeligheid voor geluid</li>
          <li>Vermoeidheid</li>
          <li>Een aura met visuele verschijnselen</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          De rol van het zenuwstelsel
        </h2>

        <p className="mb-4 text-gray-700 leading-relaxed">
          Migraine lijkt niet alleen een probleem van het hoofd te zijn.
          Het zenuwstelsel speelt een belangrijke rol in hoe prikkels
          worden verwerkt.
        </p>

        <p className="mb-10 text-gray-700 leading-relaxed">
          Wanneer het systeem gevoeliger wordt voor stress, vermoeidheid
          of overbelasting, kan de drempel voor een migraineaanval lager worden.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Stress als belangrijke factor
        </h2>

        <p className="mb-4 text-gray-700 leading-relaxed">
          Veel mensen herkennen dat migraine samenhangt met drukke periodes.
        </p>

        <p className="mb-4 text-gray-700 leading-relaxed">
          Opvallend genoeg ontstaat migraine niet altijd tijdens stress,
          maar juist wanneer de spanning afneemt.
          Bijvoorbeeld in het weekend of tijdens een vakantie.
        </p>

        <p className="mb-10 text-gray-700 leading-relaxed">
          Het lichaam schakelt dan van voortdurende alertheid naar herstel.
          Voor sommige mensen lijkt juist die overgang een migraineaanval
          uit te lokken.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          De verbinding tussen darmen en brein
        </h2>

        <p className="mb-4 text-gray-700 leading-relaxed">
          Steeds meer onderzoek richt zich op de zogenaamde
          darm-breinverbinding.
        </p>

        <p className="mb-4 text-gray-700 leading-relaxed">
          Het spijsverteringssysteem en het zenuwstelsel communiceren
          voortdurend met elkaar.
        </p>

        <p className="mb-10 text-gray-700 leading-relaxed">
          Daarom merken sommige mensen dat migraine samenhangt met voeding,
          darmklachten, een onregelmatig eetpatroon of grote schommelingen
          in energie gedurende de dag.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Slaap en herstel
        </h2>

        <p className="mb-4 text-gray-700 leading-relaxed">
          Een goede slaap speelt een belangrijke rol bij herstel.
        </p>

        <p className="mb-6 text-gray-700 leading-relaxed">
          Veel mensen met migraine herkennen:
        </p>

        <ul className="space-y-3 mb-10 text-gray-700">
          <li>Moeite met inslapen</li>
          <li>Vroeg wakker worden</li>
          <li>Onrustige nachten</li>
          <li>Vermoeid wakker worden</li>
        </ul>

        <p className="mb-10 text-gray-700 leading-relaxed">
          Wanneer herstel onvoldoende plaatsvindt, kan het lichaam
          gevoeliger worden voor prikkels en spanning.
        </p>

        {/* KENNISCLIP */}
        <div className="my-16 max-w-lg mx-auto">

          <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
            Kennisclip
          </p>

          <a href="#" className="block bg-white rounded-lg shadow-sm overflow-hidden">
            <img src="/images/migraine-thumbnail.jpg" alt="Migraine: meer dan alleen hoofdpijn" className="w-full" />

            <div className="p-4">
              <h3 className="font-semibold mb-2">
                Migraine: meer dan alleen hoofdpijn
              </h3>

              <p className="text-sm text-gray-600">
                Over de rol van stress, slaap, voeding en de verbinding
                tussen darmen en brein.
              </p>
            </div>
          </a>

        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Wat kun je zelf onderzoeken?
        </h2>

        <p className="mb-6 text-gray-700 leading-relaxed">
          Migraine heeft zelden één duidelijke oorzaak.
          Vaak ontstaat het vanuit een combinatie van factoren.
        </p>

        <ul className="space-y-3 mb-10 text-gray-700">
          <li>Slaap</li>
          <li>Stress</li>
          <li>Voeding</li>
          <li>Beweging</li>
          <li>Herstelmomenten gedurende de dag</li>
        </ul>

        <p className="mb-10 text-gray-700 leading-relaxed">
          Het bijhouden van een dagboek kan helpen om patronen
          beter te herkennen.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Belangrijk inzicht
        </h2>

        <p className="mb-12 text-gray-700 leading-relaxed">
          Migraine gaat vaak niet alleen over hoofdpijn.
          Het is eerder een signaal dat meerdere systemen in het lichaam
          uit balans zijn geraakt. Daarom kijken we niet alleen naar de pijn,
          maar ook naar stress, herstel, slaap, leefstijl en het zenuwstelsel.
        </p>

        <div className="p-6 bg-gray-50 rounded-xl border">

          <p className="mb-4 text-gray-700">
            Meer lezen over hoofdpijn, slaap en herstel?
          </p>

          <div className="flex flex-wrap gap-3">

            <Link href="/hoofdpijn" className="inline-block px-5 py-3 bg-gray-100 rounded-lg hover:bg-gray-200">
              Hoofdpijn
            </Link>

            <Link href="/slaap" className="inline-block px-5 py-3 bg-[#5E6F52] text-white rounded-lg hover:bg-[#4F5D45] transition">
              Slaap
            </Link>

            <Link href="/stress-burnout" className="inline-block px-5 py-3 bg-gray-100 rounded-lg hover:bg-gray-200">
              Stress & herstel
            </Link>

          </div>

        </div>

      </article>

    </main>
  )
}