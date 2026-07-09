import Link from "next/link"

export default function BekkenRugPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
          Bekken- en rugspanning
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl">
          Spanning in onderrug of bekken staat zelden op zichzelf.
          <br /><br />
          Het hangt vaak samen met ademhaling, houding en hoe je lichaam als geheel functioneert.
        </p>
      </section>

      {/* HERKENNING */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Misschien herken je dit
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>Spanning in je onderrug of bekken</li>
            <li>Moeite met ontspannen in je buik</li>
            <li>Gevoel van “vastzitten” in je lichaam</li>
            <li>Ademhaling blijft hoog of oppervlakkig</li>
            <li>Combinatie met kaak- of nekspanning</li>
          </ul>

        </div>
      </section>

      {/* UITLEG */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            De verbinding tussen kaak, ademhaling en bekken
          </h2>

          <p className="text-gray-700 mb-4">
            Het lichaam functioneert als één geheel.
          </p>

          <p className="text-gray-700 mb-4">
            Spanning in de kaak hangt vaak samen met spanning lager in het lichaam,
            zoals in het bekken.
          </p>

          <p className="text-gray-700">
            Een belangrijke rol hierin speelt de ademhaling —
            en hoe het middenrif samenwerkt met de bekkenbodem.
          </p>

        </div>
      </section>

      {/* ADEMHALING */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Als de ademhaling stagneert
          </h2>

          <p className="text-gray-700 mb-4">
            Wanneer je ademhaling hoog blijft of niet goed verdiept,
            zie je dat terug in het hele lichaam.
          </p>

          <p className="text-gray-700 mb-4">
            Het middenrif beweegt minder,
            de middenrug wordt stijver,
            en de bekkenbodem gaat vaak meespannen.
          </p>

          <p className="text-gray-700">
            Hierdoor kan spanning zich opstapelen in de onderrug en het bekken.
          </p>

        </div>
      </section>

      {/* HOUDING */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Wat je vaak ziet in houding
          </h2>

          <p className="text-gray-700 mb-4">
            Wanneer de ademhaling en spanning veranderen,
            zie je dat ook terug in houding:
          </p>

          <ul className="space-y-3 text-gray-700 mb-6">
            <li>Hoofd meer naar voren</li>
            <li>Stijve nek</li>
            <li>Spanning in de kaak</li>
            <li>Weinig beweging in de middenrug</li>
          </ul>

          <p className="text-gray-700">
            Het lichaam verliest als het ware zijn “houvast”.
          </p>

        </div>
      </section>

      {/* SYSTEEM */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Het gaat niet alleen om je rug
          </h2>

          <p className="text-gray-700 mb-4">
            Bekken- en rugspanning zijn zelden een lokaal probleem.
          </p>

          <p className="text-gray-700">
            Het gaat vaak om hoe het hele systeem samenwerkt:
            ademhaling, houding, spanning en het zenuwstelsel.
          </p>

        </div>
      </section>

      {/* LINK ANKER */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">

          <p className="text-gray-700 mb-4">
            Wil je begrijpen hoe spanning zich opbouwt in het lichaam?
          </p>

          <Link href="/stress-burnout" className="underline">
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
                Rustige neusademhaling en buikademhaling als basis.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">Kaak en tong</h3>
              <p className="text-gray-700 text-sm">
                Ontspanning in kaak en tong heeft invloed op het hele systeem.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">Middenrif en romp</h3>
              <p className="text-gray-700 text-sm">
                Meer beweging in middenrug en ribben.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">Bekkenbodem</h3>
              <p className="text-gray-700 text-sm">
                Leren ontspannen en meebewegen met ademhaling.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-2xl mb-4">
          Wil je ervaren hoe je lichaam weer ruimte krijgt?
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