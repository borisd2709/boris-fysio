import Link from "next/link";

export default function TarievenVergoedingen() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-28 pb-16">

        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
          Tarieven & vergoedingen
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl">
          Hier vind je informatie over tarieven, vergoeding door de
          zorgverzekeraar en de voorwaarden rondom afspraken.
        </p>

      </section>

      {/* TARIEVEN */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-10">
            Tarieven
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white border rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">
                Intake, onderzoek en behandelplan
              </h3>

              <p className="text-3xl font-semibold mb-3">
                € 55,-
              </p>

              <p className="text-gray-600">
                Per consult (2 consulten)
              </p>
            </div>

            <div className="bg-white border rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">
                Vervolgbehandeling
              </h3>

              <p className="text-3xl font-semibold mb-3">
                € 47,50
              </p>

              <p className="text-gray-600">
                Per consult
              </p>
            </div>

          </div>

          <p className="mt-8 text-gray-700">
            Een consult duurt ongeveer 30 minuten.
          </p>

        </div>

      </section>

      {/* VERGOEDING */}
      <section className="py-20">

        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-8">
            Vergoeding
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            De praktijk werkt contractvrij.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Je ontvangt na behandeling een factuur die je zelf kunt
            indienen bij je zorgverzekeraar.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Afhankelijk van je aanvullende verzekering worden de kosten
            vaak geheel of gedeeltelijk vergoed.
          </p>

        </div>

      </section>

      {/* CONTRACTVRIJ */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-8">
            Waarom contractvrij?
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Ik heb ervoor gekozen om zonder contracten met zorgverzekeraars
            te werken.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Hierdoor kan ik meer tijd besteden aan de inhoud van de
            behandeling en minder aan administratieve verplichtingen.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Dat geeft ruimte voor persoonlijke aandacht, maatwerk en een
            aanpak die aansluit bij jouw situatie.
          </p>

        </div>

      </section>

      {/* VERHINDERING */}
      <section className="py-20">

        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-8">
            Verhindering
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Neem contact op als je verhinderd bent, bij voorkeur 24 uur van tevoren.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Bij te late afmelding kunnen kosten in rekening worden gebracht.
          </p>

        </div>

      </section>

    </main>
  )
}

         