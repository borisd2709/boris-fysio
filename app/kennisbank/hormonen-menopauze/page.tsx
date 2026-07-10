import Link from "next/link"

export default function HormonenMenopauzePage() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
          Hormonen, spanning en de (peri)menopauze
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl">
          Veranderingen in hormonen hebben invloed op hoe je lichaam reageert op spanning,
          herstel en prikkels.
          <br /><br />
          Klachten zoals hoofdpijn, slaapproblemen of onrust staan vaak niet op zichzelf.
        </p>
      </section>

      {/* HERKENNING */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Misschien herken je dit
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>Meer hoofdpijn rondom menstruatie</li>
            <li>Slaapproblemen of onrust</li>
            <li>Sneller overprikkeld of gevoelig</li>
            <li>Duizeligheid of vermoeidheid</li>
            <li>Het gevoel dat je lichaam sneller uit balans raakt</li>
          </ul>

        </div>
      </section>

      {/* HOOFDPIJN */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Waarom klachten toenemen rond je cyclus
          </h2>

          <p className="text-gray-700 mb-4">
            Wanneer hoofdpijn al op de achtergrond aanwezig is,
            kan deze rond de menstruatie sterker naar voren komen.
          </p>

          <p className="text-gray-700 mb-4">
            In deze fase is het lichaam gevoeliger voor prikkels,
            en reageert het sneller op spanning.
          </p>

          <p className="text-gray-700">
            Klachten die eerst mild waren,
            kunnen in deze periode duidelijker worden.
          </p>

        </div>
      </section>

      {/* LEREN & INPRENTING */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Leren, spanning en het brein
          </h2>

          <p className="text-gray-700 mb-4">
            In bepaalde fases van de cyclus is het makkelijker om nieuwe dingen te leren.
          </p>

          <p className="text-gray-700 mb-4">
            Maar diezelfde gevoeligheid kan er ook voor zorgen
            dat stressvolle of intensieve ervaringen sterker “blijven hangen”.
          </p>

          <p className="text-gray-700">
            Daarom is het belangrijk om na spanning of stress bewust ruimte te maken
            om te ontladen en het lichaam weer tot rust te brengen.
          </p>

        </div>
      </section>

      {/* PMS */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            PMS en gevoeligheid voor hormonen
          </h2>

          <p className="text-gray-700 mb-4">
            Klachten rondom PMS worden vaak niet alleen bepaald
            door de hoeveelheid hormonen.
          </p>

          <p className="text-gray-700 mb-4">
            Het gaat ook om hoe gevoelig je lichaam daarop reageert.
          </p>

          <p className="text-gray-700">
            Stress en spanning kunnen die gevoeligheid vergroten,
            waardoor klachten sneller ontstaan.
          </p>

        </div>
      </section>

      {/* MENOPAUZE */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Veranderingen in de (peri)menopauze
          </h2>

          <p className="text-gray-700 mb-4">
            In de perimenopauze verandert de balans tussen hormonen.
          </p>

          <p className="text-gray-700 mb-4">
            Hierdoor kunnen klachten ontstaan of toenemen, zoals:
          </p>

          <ul className="space-y-3 text-gray-700 mb-6">
            <li>Slaapproblemen</li>
            <li>Duizeligheid</li>
            <li>Brain fog</li>
          </ul>

          <p className="text-gray-700">
            Als er al lichte problemen aanwezig waren,
            kunnen deze in deze fase duidelijker worden.
          </p>

        </div>
      </section>

      {/* SYSTEEM */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Het gaat om het hele systeem
          </h2>

          <p className="text-gray-700 mb-4">
            Hormonen beïnvloeden niet alleen je cyclus,
            maar ook hoe je lichaam omgaat met spanning en herstel.
          </p>

          <p className="text-gray-700">
            Wanneer het systeem gevoeliger wordt,
            zie je klachten eerder terug in het lichaam.
          </p>

        </div>
      </section>

      {/* LINK NAAR ANKER */}
      <section className="py-20 text-center bg-gray-50">
        <div className="max-w-2xl mx-auto px-6">

          <p className="text-gray-700 mb-4">
            Wil je begrijpen hoe spanning zich opbouwt in het lichaam?
          </p>

          <Link href="/stress-burnout" className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
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
              <h3 className="font-semibold mb-2">Ademhaling</h3>
              <p className="text-gray-700 text-sm">
                Het lichaam tot rust brengen via ademhaling.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">Spanning reguleren</h3>
              <p className="text-gray-700 text-sm">
                Bewust worden en verminderen van spanning in het lichaam.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">Herstel</h3>
              <p className="text-gray-700 text-sm">
                Ruimte creëren voor herstel en ontlading.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">Balans</h3>
              <p className="text-gray-700 text-sm">
                Werken met belasting en rustmomenten.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-2xl mb-4">
          Wil je ervaren wat je lichaam nodig heeft in deze fase?
        </h2>

        <Link href="/afspraak" className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Maak een afspraak
        </Link>
      </section>

    </main>
  )
}