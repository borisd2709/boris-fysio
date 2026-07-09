import Link from "next/link"

export default function OnlineTinnitusFunnel() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="max-w-3xl mx-auto px-6 pt-28 pb-20 text-center">

        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
          Blijf je hangen in tinnitus?
        </h1>

        <p className="text-lg text-gray-600">
          Je hoeft het niet eerst op te lossen.
          <br />
          Je kunt leren hoe je lichaam er anders op reageert.
        </p>

      </section>


      {/* HERKENNING */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Misschien herken je dit
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>Het geluid trekt steeds je aandacht</li>
            <li>Het wordt sterker bij stress of vermoeidheid</li>
            <li>Je probeert het te negeren, maar dat lukt niet</li>
            <li>Je lichaam voelt gespannen of onrustig</li>
          </ul>

        </div>
      </section>


      {/* INZICHT */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Het gaat vaak niet om het geluid zelf
          </h2>

          <p className="text-gray-700 mb-4">
            Veel mensen zoeken een oplossing in het geluid.
          </p>

          <p className="text-gray-700 mb-4">
            Maar wat tinnitus sterk maakt is vaak hoe je lichaam erop reageert:
            spanning, aandacht en alertheid.
          </p>

          <p className="text-gray-700">
            Daar ligt ook de ingang voor verandering.
          </p>

        </div>
      </section>


      {/* HOE HET WERKT — 6 MODULES */}
<section className="py-24 bg-gray-50">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-3xl font-semibold mb-12 text-center">
      Hoe de online begeleiding is opgebouwd
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Module 1 */}
      <div className="p-6 bg-white border rounded-xl">
        <h3 className="font-semibold mb-2">
          1. Jouw situatie in kaart
        </h3>
        <p className="text-gray-700 text-sm">
          Met vragenlijsten (tinnitus, stress en coping) krijg je inzicht
          in hoe tinnitus zich bij jou uit.
        </p>
      </div>

      {/* Module 2 */}
      <div className="p-6 bg-white border rounded-xl">
        <h3 className="font-semibold mb-2">
          2. Spanning en alertheid verminderen
        </h3>
        <p className="text-gray-700 text-sm">
          Je leert hoe je lichaam reageert in een fight/flight stand
          en hoe je dit kunt trainen.
        </p>
      </div>

      {/* Module 3 */}
      <div className="p-6 bg-white border rounded-xl">
        <h3 className="font-semibold mb-2">
          3. Het brein opnieuw trainen
        </h3>
        <p className="text-gray-700 text-sm">
          Met exposure en aandachtsoefeningen leer je anders omgaan met tinnitus,
          angst en focus.
        </p>
      </div>

      {/* Module 4 */}
      <div className="p-6 bg-white border rounded-xl">
        <h3 className="font-semibold mb-2">
          4. Het lichaam laten herstellen
        </h3>
        <p className="text-gray-700 text-sm">
          Je werkt aan balans, veiligheid en regulatie —
          zodat het lichaam weer kan ontspannen.
        </p>
      </div>

      {/* Module 5 */}
      <div className="p-6 bg-white border rounded-xl">
        <h3 className="font-semibold mb-2">
          5. Integratie in je dagelijks leven
        </h3>
        <p className="text-gray-700 text-sm">
          Kleine veranderingen in leefstijl en gedrag die het herstel ondersteunen.
        </p>
      </div>

      {/* Module 6 */}
      <div className="p-6 bg-white border rounded-xl">
        <h3 className="font-semibold mb-2">
          6. Blijven toepassen
        </h3>
        <p className="text-gray-700 text-sm">
          Je leert hoe je dit blijvend inzet —
          afgestemd op wat voor jou belangrijk is.
        </p>
      </div>

    </div>

    {/* Belangrijke nuance */}
    <div className="max-w-3xl mx-auto text-center mt-16">
      <p className="text-gray-700 leading-relaxed">
        Iedereen doorloopt dezelfde modules,
        maar de nadruk ligt voor iedereen ergens anders.
      </p>
    </div>

  </div>
</section>

      {/* LAAGDREMPELIGE START */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">

          <h2 className="text-2xl font-semibold mb-6">
            Begin in je eigen tempo
          </h2>

          <p className="text-gray-700 mb-6">
            Je hoeft niet alles direct te begrijpen of goed te doen.
          </p>

          <p className="text-gray-700">
            Vaak is één oefening al genoeg om te merken dat er iets kan veranderen.
          </p>

        </div>
      </section>


      {/* CTA */}
      <section className="py-24 text-center">

        <h2 className="text-2xl mb-4">
          Wil je ervaren wat invloed heeft op jouw tinnitus?
        </h2>

        <p className="text-gray-600 mb-8">
          Start vandaag en werk in je eigen tempo.
        </p>

        <a
          href="https://hoofdkaaknekfysio.nl"
          target="_blank"
          className="inline-block bg-black text-white px-6 py-3"
        >
          Start de online begeleiding
        </a>

        {/* SUBTIEL alternatief */}
        <div className="mt-6 text-sm text-gray-500">
          / Liever eerst meer lezen over tinnitus?
        </div>

      </section>

    </main>
  )
}