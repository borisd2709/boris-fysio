import Link from "next/dist/client/link";

export default function TinnitusPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
          Tinnitus en spanning in je lichaam
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl">
          Veel mensen merken dat tinnitus niet alleen een oorprobleem is.
          Spanning in je lichaam en aandacht voor het geluid spelen vaak een grote rol.
        </p>
      </section>
    <div className="max-w-2xl mx-auto py-12">
  <p className="text-2xl italic text-gray-800">
    Het probleem zit vaak niet in de klacht,
    maar in hoe het lichaam probeert zich aan te passen.
  </p>
</div>
      {/* UITLEG (SEO belangrijk) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Wat is tinnitus?
          </h2>

          <p className="text-gray-700 mb-4">
            Tinnitus, ook wel oorsuizen genoemd, is het horen van een geluid zonder externe bron.
            Bijvoorbeeld een piep, ruis of toon.
          </p>

          <p className="text-gray-700">
            Voor sommige mensen is het mild aanwezig,
            voor anderen kan het veel spanning en onrust geven.
          </p>
        </div>
      </section>

      {/* HERKENNING */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Misschien herken je dit
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>Het geluid trekt steeds je aandacht</li>
            <li>Het wordt sterker in stilte of bij stress</li>
            <li>Je bent er voortdurend mee bezig</li>
            <li>Je probeert het te negeren, maar dat lukt niet</li>
            <li>Je lichaam voelt gespannen of onrustig</li>
          </ul>

        </div>
      </section>

      {/* JOUW INVALSHOEK (heel belangrijk!) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Tinnitus is vaak meer dan het geluid zelf
          </h2>

          <p className="text-gray-700 mb-4">
            Veel mensen merken dat tinnitus verandert afhankelijk van spanning,
            vermoeidheid of aandacht.
          </p>

          <p className="text-gray-700 mb-4">
            Dat betekent niet dat het “tussen de oren zit” —
            maar dat het zenuwstelsel een belangrijke rol speelt.
          </p>

          <p className="text-gray-700">
            Wanneer het lichaam voortdurend in een staat van alertheid staat,
            blijft het geluid vaak sterker op de voorgrond aanwezig.
          </p>

        </div>
      </section>
      
        <div className="my-16 max-w-md mx-auto">

  <h3 className="text-xl font-semibold mb-3">
    Meer begrijpen?
  </h3>

  <p className="text-gray-600 mb-6">
    In deze kennisclip leg ik uit waarom tinnitus niet alleen
    samenhangt met het oor, maar ook met de verwerking van geluid
    in het brein.
  </p>

  <a
    href="https://www.youtube.com/watch?v=epl6BRmZ3Q0"
    target="_blank"
    rel="noopener noreferrer"
    className="block border rounded-xl overflow-hidden hover:shadow-md transition"
  >
    <img
      src="https://i.ytimg.com/vi/epl6BRmZ3Q0/maxresdefault.jpg"
      alt="Tinnitus, geen probleem van het oor"
      className="w-full"
    />

    <div className="p-4">
      <p className="font-medium">
        Bekijk kennisclip →
      </p>
    </div>
  </a>

</div>
    {/* 3 FASEN MODEL */}
<section className="py-24">
  <div className="max-w-3xl mx-auto px-6">

    <h2 className="text-3xl font-semibold mb-8">
      Waarom tinnitus soms blijft hangen
    </h2>

    <p className="text-gray-700 mb-10 leading-relaxed">
      Veel mensen met tinnitus hebben niet alleen last van het geluid zelf,
      maar vooral van hoe hun lichaam erop reageert.
      <br /><br />
      Daarin zie je vaak een proces in drie fases.
    </p>

    <div className="space-y-12">

      {/* FASE 1 */}
      <div>
        <h3 className="text-xl font-semibold mb-3">
          1. Overbelasting
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Tinnitus ontstaat vaak in een periode van belasting.
          Bijvoorbeeld door langdurige stress, veel “aan staan”,
          of steeds over je grenzen heen gaan.
        </p>

        <p className="text-gray-700 mt-3">
          Het lichaam raakt overbelast en blijft in een verhoogde staat van alertheid.
        </p>
      </div>

      {/* FASE 2 */}
      <div>
        <h3 className="text-xl font-semibold mb-3">
          2. Blijven hangen in spanning
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Na het ontstaan van tinnitus blijft het lichaam vaak in die spanning hangen.
        </p>

        <p className="text-gray-700 mt-3">
          De aandacht gaat steeds naar het geluid.
          Er ontstaat onrust, controle en soms angst.
        </p>

        <p className="text-gray-700 mt-3">
          Je probeert het te begrijpen of op te lossen,
          maar het lichaam blijft reageren alsof er iets mis is.
        </p>
      </div>

      {/* FASE 3 */}
      <div>
        <h3 className="text-xl font-semibold mb-3">
          3. De mogelijkheid tot verandering
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Verandering ontstaat wanneer het lichaam weer leert dat het veilig genoeg is.
        </p>

        <p className="text-gray-700 mt-3">
          Dat spanning kan afnemen,
          en dat aandacht niet steeds naar het geluid hoeft te gaan.
        </p>

        <p className="text-gray-700 mt-3">
          Niet door het geluid weg te duwen,
          maar door te ervaren dat je er anders op kunt reageren.
        </p>
      </div>

    </div>

  </div>
</section>
{/* ANALOGIE */}
<section className="py-20 bg-gray-50">
  <div className="max-w-3xl mx-auto px-6">

    <h2 className="text-2xl font-semibold mb-6">
      Een manier om het te begrijpen
    </h2>

    <p className="text-gray-700 leading-relaxed">
      Je kunt tinnitus vergelijken met een heftige ervaring in het lichaam.
      <br /><br />
      Niet de gebeurtenis zelf blijft het probleem,
      maar de spanning die in het systeem blijft hangen.
      <br /><br />
      Herstel ontstaat wanneer het lichaam weer leert die spanning los te laten.
      <br /><br />
      Bij tinnitus werkt dat vaak op een vergelijkbare manier.
    </p>

  </div>
</section>
      {/* JOUW AANPAK (HIER WIN JE) */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-10">
            Hoe we hiermee werken
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">Ademhaling</h3>
              <p className="text-gray-700 text-sm">
                Rustige neusademhaling helpt het lichaam uit de “aan-stand” te komen.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">Kaak en nek</h3>
              <p className="text-gray-700 text-sm">
                Spanning in kaak en nek kan invloed hebben op hoe tinnitus wordt ervaren.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">Bindweefsel</h3>
              <p className="text-gray-700 text-sm">
                Behandeling van middenrug en ribben helpt het lichaam te ontspannen.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">Zenuwstelsel</h3>
              <p className="text-gray-700 text-sm">
                We werken met aandacht en regulatie van spanning en alertheid.<b>Het doel is niet om tinnitus weg te nemen,
maar om te veranderen hoe je lichaam erop reageert.</b>
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ERVARING */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Wat je kunt ervaren
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>Meer rust in je lichaam</li>
            <li>Minder focus op het geluid</li>
            <li>Meer invloed op momenten van toename</li>
            <li>Betere omgang met tinnitus</li>
          </ul>

        </div>
      </section>
    <div className="mt-20 max-w-2xl mx-auto p-8 bg-gray-50 rounded-2xl text-center border">
  <p className="text-gray-600 mb-4">
    Lees ook
  </p>

  <a
    href="/kennisbank/tinnitus-stress"
    className="text-lg font-medium underline hover:no-underline"
  >
    Waarom tinnitus erger wordt bij stress
  </a>
</div>
      
  



      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-2xl mb-4">
          Wil je ervaren wat invloed heeft op jouw tinnitus?
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