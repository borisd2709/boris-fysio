export default function VoorWie() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
          Voor mensen die al veel hebben geprobeerd —  
          maar voelen dat er iets niet klopt
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Je hebt uitleg gehad. Misschien zelfs behandelingen.  
          Maar je lichaam blijft gespannen, alert of onrustig.  
          Dan ligt de volgende stap vaak niet in méér begrijpen —
          maar in anders ervaren.
        </p>

        <a href="/afspraak" className="inline-block rounded bg-black px-6 py-3 text-white">
          Plan een afspraak
        </a>
      </section>

      {/* HERKENNING */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">
            Misschien herken je jezelf hierin
          </h2>

          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li>Je hebt al informatie opgezocht over je klachten</li>
            <li>Je hebt behandelingen gehad of oefeningen geprobeerd</li>
            <li>Je blijft nadenken over wat er aan de hand is</li>
            <li>Je probeert te ontspannen, maar dat lukt niet echt</li>
            <li>Je lichaam blijft gespannen, ook in rust</li>
            <li>Je aandacht gaat steeds terug naar je klacht</li>
          </ul>

          <p className="mt-6 text-gray-800">
            En ergens voel je: <em>ik snap het wel… maar het verandert niet echt</em>
          </p>
        </div>
      </section>

      {/* FRUSTRATIE */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">
            Wat vaak gebeurt
          </h2>

          <p className="text-gray-700 mb-4">
            Veel mensen blijven hangen in zoeken en analyseren:
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>Nog een verklaring</li>
            <li>Nog een techniek</li>
            <li>Nog een oefening</li>
            <li>Nog een behandeling</li>
          </ul>

          <p className="mt-6 text-gray-700">
            Maar het lichaam verandert niet vanzelf mee met wat je begrijpt.
          </p>
        </div>
      </section>
{/* VOOR WIE */}
      {/* BEELD (subtiel!) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div
            className="h-[400px] bg-cover bg-center rounded"
            style={{
              backgroundImage: "url('/images/kaak-rust.jpg')",
            }}
          />

          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Deze begeleiding past bij je als
            </h2>

            <ul className="space-y-3 text-gray-700">
            <li>Je openstaat voor een andere invalshoek</li>
            <li>Je bereid bent om niet alleen te begrijpen, maar te ervaren</li>
            <li>Je merkt dat controle je niet verder brengt</li>
            <li>Je wilt onderzoeken wat je lichaam aangeeft</li>
          </ul>
          </div>

        </div>
      </section>
      {/* INVALSHOEK */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">
            De stap die vaak ontbreekt
          </h2>

          <p className="text-gray-700 mb-4">
            Niet nóg meer begrijpen.
            Maar ervaren wat er in je lichaam gebeurt — en wat er mogelijk is.
          </p>

          <p className="text-gray-700 mb-4">
            Veel klachten hebben te maken met patronen van spanning,
            controle en alertheid.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>Dat spieren los kunnen laten</li>
            <li>Dat ademhaling kan zakken</li>
            <li>Dat aandacht kan verschuiven</li>
            <li>Dat er ruimte ontstaat</li>
          </ul>
        </div>
      </section>

      
      

      {/* NIET VOOR */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">
            Dit is waarschijnlijk niet wat je zoekt als
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>Je alleen een snelle oplossing wilt</li>
            <li>Je puur een technische behandeling verwacht</li>
            <li>Je geen ruimte hebt om stil te staan bij je lichaam</li>
          </ul>

          <p className="mt-6 text-gray-600">
            Dat is helemaal oké — maar dan is dit waarschijnlijk niet de juiste plek.
          </p>
        </div>
      </section>

      {/* KLACHTEN */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-10">
            Klachten waarbij dit vaak speelt
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <a href="/kaakspanning" className="rounded border border-gray-200 bg-white p-6 text-center text-gray-700 hover:border-black">
              Kaakspanning
            </a>
            <a href="/tinnitus" className="rounded border border-gray-200 bg-white p-6 text-center text-gray-700 hover:border-black">
              Tinnitus
            </a>
            <a href="/hoofdpijn" className="rounded border border-gray-200 bg-white p-6 text-center text-gray-700 hover:border-black">
              Hoofdpijn
            </a>
            <a href="/nekspanning" className="rounded border border-gray-200 bg-white p-6 text-center text-gray-700 hover:border-black">
              Nekspanning
            </a>
            <a href="/bekken-rugspanning" className="rounded border border-gray-200 bg-white p-6 text-center text-gray-700 hover:border-black">
              Bekken- en rugspanning
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-2xl mb-4">
          Wil je dit niet alleen begrijpen, maar ook ervaren?
        </h2>

        <a href="/afspraak" className="inline-block rounded bg-white px-6 py-3 text-black">
          Maak een afspraak
        </a>
      </section>

    </main>
  )
}