import Link from "next/link"

export default function SlaapPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
          Slaap, herstel en het lichaam
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl">
          Slaap is meer dan uitrusten.
          <br /><br />
          Tijdens de slaap herstelt het lichaam zich, worden ervaringen verwerkt
          en krijgt het zenuwstelsel de kans om opnieuw in balans te komen.
        </p>

        <p className="text-lg text-gray-600 max-w-2xl mt-6">
          Wanneer slapen moeilijk wordt, zie je dat vaak terug in andere klachten
          zoals hoofdpijn, tinnitus, kaakspanning of vermoeidheid.
        </p>
      </section>

      {/* HERKENNING */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Misschien herken je dit
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>Moeite met inslapen</li>
            <li>Vaak wakker liggen door piekeren</li>
            <li>Vroeg wakker worden en niet meer kunnen slapen</li>
            <li>Vermoeid wakker worden</li>
            <li>Nachtelijk tandenknarsen of kaakklemmen</li>
            <li>Het gevoel dat je lichaam niet goed herstelt</li>
          </ul>

        </div>
      </section>

      {/* INSLAPEN */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Moeite met inslapen
          </h2>

          <p className="text-gray-700 mb-4">
            Veel mensen die moeite hebben met inslapen ervaren onrust,
            piekeren of somberheid.
          </p>

          <p className="text-gray-700">
            Het lichaam schakelt dan onvoldoende over van activiteit naar herstel.
            Hierdoor blijft het systeem actief terwijl het eigenlijk tot rust zou moeten komen.
          </p>

        </div>
      </section>

      {/* VROEG WAKKER */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Vroeg wakker worden
          </h2>

          <p className="text-gray-700 mb-4">
            Sommige mensen vallen prima in slaap, maar worden vroeg wakker
            en kunnen daarna niet meer doorslapen.
          </p>

          <p className="text-gray-700 mb-4">
            In de vroege ochtend stijgt de cortisolspiegel van nature.
            Dit helpt het lichaam om wakker te worden en zich voor te bereiden op de dag.
          </p>

          <p className="text-gray-700">
            Wanneer het systeem gevoeliger is voor spanning of stress,
            kan dit aanvoelen als een te krachtige "awakening call".
          </p>

        </div>
      </section>

      {/* RITME HERSTEL */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Het ritme van herstel
          </h2>

          <p className="text-gray-700 mb-6">
            Gedurende de dag verandert het lichaam voortdurend.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-3">
                In de avond
              </h3>

              <ul className="space-y-2 text-gray-700 text-sm">
                <li>Melatonine neemt toe</li>
                <li>Het lichaam bereidt zich voor op rust</li>
                <li>Herstelprocessen komen op gang</li>
              </ul>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-3">
                In de ochtend
              </h3>

              <ul className="space-y-2 text-gray-700 text-sm">
                <li>Cortisol neemt toe</li>
                <li>Energie wordt gemobiliseerd</li>
                <li>Het lichaam wordt actiever</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* IMMUUNSYSTEEM */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Slaap en het immuunsysteem
          </h2>

          <p className="text-gray-700 mb-4">
            Slaap heeft niet alleen invloed op energie, maar ook op herstel.
          </p>

          <p className="text-gray-700 mb-4">
            Tijdens de nacht vinden belangrijke herstelprocessen plaats
            die bijdragen aan een goed functionerend immuunsysteem.
          </p>

          <p className="text-gray-700">
            Wanneer slaap langdurig verstoord raakt,
            wordt het lichaam vaak gevoeliger voor overbelasting,
            spanning en vermoeidheid.
          </p>

        </div>
      </section>

      {/* BRUXISME */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Nachtelijk tandenknarsen en kaakklemmen
          </h2>

          <p className="text-gray-700 mb-4">
            Veel mensen merken niet dat zij tijdens de slaap tandenknarsen
            of de kaken aanspannen.
          </p>

          <p className="text-gray-700 mb-4">
            Dit wordt ook wel bruxisme genoemd.
          </p>

          <p className="text-gray-700 mb-6">
            Bruxisme hangt vaak samen met spanning,
            verhoogde alertheid en moeite met ontspannen.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>Kaakspanning</li>
            <li>Hoofdpijn</li>
            <li>Nekklachten</li>
            <li>Vermoeide kaken bij het opstaan</li>
          </ul>

        </div>
      </section>

      {/* GEHEEL */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Het gaat vaak niet alleen om slapen
          </h2>

          <p className="text-gray-700 mb-4">
            Slaapproblemen zijn vaak geen los probleem.
          </p>

          <p className="text-gray-700">
            Ze hangen samen met spanning in het lichaam,
            het zenuwstelsel, herstelvermogen
            en de belasting die je overdag ervaart.
          </p>

        </div>
      </section>

      {/* INTERNE LINKS */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6">

          <h2 className="text-center text-2xl font-semibold mb-8">
            Lees ook
          </h2>

          <div className="space-y-4 text-center">

            <div>
              <Link href="/hoofdpijn" className="underline">
                Meer over hoofdpijn
              </Link>
            </div>

            <div>
              <Link href="/kaakspanning" className="underline">
                Meer over kaakspanning
              </Link>
            </div>

            <div>
              <Link href="/stress-en-overbelasting" className="underline">
                Meer over stress en overbelasting
              </Link>
            </div>

            <div>
              <Link href="/hormonen-menopauze" className="underline">
                Meer over hormonen en de (peri)menopauze
              </Link>
            </div>

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

            <div className="p-6 bg-white border rounded-xl">
              <h3 className="font-semibold mb-2">Ademhaling</h3>
              <p className="text-gray-700 text-sm">
                Rustige ademhaling ondersteunt herstel en ontspanning.
              </p>
            </div>

            <div className="p-6 bg-white border rounded-xl">
              <h3 className="font-semibold mb-2">Kaak en nek</h3>
              <p className="text-gray-700 text-sm">
                Verminderen van spanning die invloed heeft op slaapkwaliteit.
              </p>
            </div>

            <div className="p-6 bg-white border rounded-xl">
              <h3 className="font-semibold mb-2">Zenuwstelsel</h3>
              <p className="text-gray-700 text-sm">
                Leren schakelen tussen activiteit en rust.
              </p>
            </div>

            <div className="p-6 bg-white border rounded-xl">
              <h3 className="font-semibold mb-2">Dagelijkse balans</h3>
              <p className="text-gray-700 text-sm">
                Herstel begint niet alleen 's nachts, maar ook overdag.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-2xl mb-4">
          Wil je ervaren wat jouw slaap beïnvloedt?
        </h2>

        <p className="text-gray-600 mb-6">
          Soms begint verandering bij beter begrijpen hoe jouw lichaam herstelt.
        </p>

        <Link href="/afspraak" className="underline text-lg font-semibold">
          Maak een afspraak
        </Link>
      </section>

    </main>
  )
}