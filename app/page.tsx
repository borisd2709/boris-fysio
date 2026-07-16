import { BodySystems } from "./components/BodySystems";
import approaches from "./data/approaches.json"
import ApproachCard from "./components/ApproachCard"
import Testimonials from "./components/Testimonials";

interface Approach {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
}

export default function Home() {
  
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center">

        {/* Achtergrondbeeld */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('/images/hero-calm.jpg')", // rustige foto (geen behandeling!)
          }}
        />
        

        <div className="relative max-w-4xl mx-auto px-6 py-32">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
            Je hoeft niet alles nog beter te begrijpen.
            <br />
            Soms ligt de volgende stap in het ervaren wat je lichaam al weet.
          </h1>

          <p className="text-lg text-gray-700 mb-10 max-w-2xl">
            Wanneer spanning zich vastzet in je kaak, nek, ademhaling of gehoor,
            is meer uitleg niet altijd de oplossing.
            Soms begint verandering bij aandacht, beweging en het opnieuw leren voelen. Boris Drogt. Gespecialiseerd in kaakfysiotherapie en manuele therapie bij tinnitus, hoofdpijn, kaakspanning, nekspaning, bekkenspanning en stressgerelateerde klachten.
          </p>

          <div className="flex gap-4">
            <a href="/afspraak" className="bg-black text-white px-6 py-3">
              Maak een afspraak
            </a>
            <a href="/werkwijze" className="border px-6 py-3">
              Ontdek mijn werkwijze
            </a>
          </div>
        </div>
      </section>

      {/* HERKENNING (GEEN BEELD!) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">
            Misschien herken je dit
          </h2>

          <ul className="space-y-4 text-gray-600 text-lg">
            <li>Je kaken staan vaak gespannen zonder dat je het wil</li>
            <li>Je blijft nadenken over wat er aan de hand is</li>
            <li>Je lichaam voelt onrustig, zelfs als je “snapt” wat er speelt</li>
            <li>Je hebt al van alles geprobeerd, maar niets landt echt</li>
            <li>Je aandacht gaat steeds terug naar je klacht</li>
          </ul>

          <p className="mt-8 text-lg">
            En ergens voel je: <em>ik snap het wel… maar het verandert niet echt</em>
          </p>
        </div>
      </section>

      {/* VISIE */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">
            Niet alleen begrijpen — maar ervaren
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Veel klachten zijn geen fout in het lichaam, maar een patroon dat is vastgelopen.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Het lichaam probeert zich voortdurend aan te passen.
            Soms blijft dat systeem “aan” staan.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Verandering ontstaat vaak pas wanneer je lichaam weer gaat ervaren
            dat het ook anders kan.
          </p>
        </div>
      </section>

      {/* INGANGEN */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12">
            Waar merk je het?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-lg">
            
            <a href="/kaakspanning" className="p-6 border hover:bg-white">
              Kaakspanning
            </a>
            <a href="/tinnitus" className="p-6 border hover:bg-white">
              Tinnitus / oorsuizen
            </a>
            <a href="/hoofdpijn" className="p-6 border hover:bg-white">
              Hoofdpijn
            </a>
            <a href="/nek-schouderspanning" className="p-6 border hover:bg-white">
              Nek/schouderspanning
            </a>
            <a href="/bekken-rugspanning" className="p-6 border hover:bg-white">
              bekken/rugspanning
            </a>
            
          </div>
        </div>
      </section>

      {/* KENNISCLIP */}
        <div className="my-16 max-w-lg mx-auto">

           <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
    Video
  </p>
        <a
          href="https://www.youtube.com/watch?v=RQHI7Y_V6iI"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src="https://i.ytimg.com/vi/RQHI7Y_V6iI/maxresdefault.jpg"
            alt="Mijn visie en mijn praktijk"
            className="rounded-lg mb-4"
          />


          <h3 className="text-xl font-semibold mb-2">Mijn visie en mijn praktijk</h3>
        </a>
</div>
          <section className="py-24 bg-white">
  <div className="max-w-5xl mx-auto px-6">

    <div className="grid md:grid-cols-2 gap-12">

      {/* Kaakfysiotherapie */}
      <div className="border rounded-xl p-8">

        <h2 className="text-2xl font-semibold mb-6">
          Kaakfysiotherapie
        </h2>

        <p className="text-gray-600 mb-6">
          Gespecialiseerd in klachten waarbij spanning,
          ademhaling en het kaakgebied een rol spelen.
        </p>

        <ul className="space-y-3 text-gray-700">
          
          <li>Kaakspanning</li>
          <li>Kaken klemmen</li>
          <li>Bruxisme (tandenknarsen)</li>
          <li>Tinnitus</li>
        </ul>

      </div>

      {/* Manuele therapie */}
      <div className="border rounded-xl p-8">

        <h2 className="text-2xl font-semibold mb-6">
          Manuele therapie
        </h2>

        <p className="text-gray-600 mb-6">
          Gericht op het verbeteren van beweging,
          verminderen van spanning en herstellen van balans in het lichaam. We gebruiken ook technieken vanuit de osteopathie.
        </p>

        <ul className="space-y-3 text-gray-700">
          <li>Nek/schouderklachten</li>
          <li>Middenrugklachten</li>
          <li>Hoofdpijn</li>
          <li>Bewegingsbeperkingen</li>
        </ul>

      </div>

    </div>

  </div>
</section>
      {/* WERKWIJZE + SUBTIEL BEELD */}
      <section className="py-24">
        <div className="grid md:grid-cols-4 gap-8 mt-12">
          

          <div>
            <h3 className="font-semibold mb-2">Verkennen</h3>
            <p className="text-sm text-gray-600">kijken naar het geheel</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Ervaren</h3>
            <p className="text-sm text-gray-600">voelen wat er gebeurt</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Bewegen</h3>
            <p className="text-sm text-gray-600">nieuwe patronen</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Integreren</h3>
            <p className="text-sm text-gray-600">in je dagelijks leven</p>
          </div>

        </div>

        <a href="/werkwijze" className="inline-block mt-8 border px-6 py-3">
          Bekijk mijn werkwijze
        </a>

        {/* Beeld */}
        <div
          className="h-[400px] bg-cover bg-center rounded"
          style={{
            backgroundImage: "url('/images/body awareness.jpg')",
          }}
        />
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">

            <ApproachCard
              title="Ademhaling"
              shortDescription="Meer ruimte creëren in het lichaam."
              description="
De ademhaling vormt een belangrijke basis voor hoe het lichaam functioneert. Wanneer de ademhaling hoog of gespannen wordt, zie je dat vaak terug in de nek, schouders, kaak en zelfs het bekken.

Een rustige ademhaling helpt het lichaam schakelen van alertheid naar herstel. Daarbij speelt niet alleen de hoeveelheid lucht een rol, maar vooral hoe het lichaam meebeweegt tijdens het ademen.

Daarom besteden we veel aandacht aan de samenwerking tussen middenrif, ribbenkast, bekkenbodem en houding. Meer ruimte in de ademhaling betekent vaak ook meer ruimte in de rest van het lichaam.
"
            />

            <ApproachCard
              title="Kaak en nek"
              shortDescription="Spanning herkennen en loslaten."
              description={`
Veel mensen bouwen ongemerkt spanning op in hun kaak, nek en keelgebied. Zeker wanneer er veel gevraagd wordt op het werk of privé, raakt de aandacht vooral gericht op de buitenwereld en minder op wat het lichaam aangeeft.

Spanning in de kaak en nek kan samenhangen met klachten zoals tinnitus, hoofdpijn en een gevoel van voortdurend "aan staan".

Door bewust te worden van deze spanning en het lichaam hierin te begeleiden, ontstaat er ruimte voor verandering. Het brein leert opnieuw welke signalen belangrijk zijn en welke minder aandacht hoeven te krijgen.
`}
            />

            <ApproachCard
              title="Bindweefsel"
              shortDescription="Het lichaam weer soepel laten bewegen."
              description={`Ons lichaam beweegt niet alleen op spieren, maar ook op bindweefsel. Vanuit de evolutie werd het menselijk lichaam steeds beter in lopen en hardlopen. Daarbij ontstond een slim systeem dat energie opslaat en weer afgeeft tijdens bewegen.

Bindweefsel speelt hierin een belangrijke rol. Het vormt een netwerk door het hele lichaam en verbindt onder andere spieren, huid en gewrichten met elkaar.

Wanneer dit systeem soepel beweegt, voelt bewegen licht en efficiënt. Bij spanning, vermoeidheid of verminderde beweeglijkheid kunnen klachten ontstaan. Daarom besteden we aandacht aan gebieden zoals de middenrug, ribben en nek, zodat het lichaam weer vrijer kan bewegen en spanning beter kan afvoeren.`}
            />

            <ApproachCard
              title="Zenuwstelsel"
              shortDescription="Herstel van balans tussen spanning en ontspanning."
              description={`Ons zenuwstelsel is voortdurend bezig met de vraag: ben ik veilig of moet ik alert blijven?

Wanneer er veel spanning is, blijft het lichaam vaak in een actieve stand staan. We noemen dat ook wel de "aan-stand". Spieren spannen zich aan, de ademhaling wordt hoger en herstel komt minder goed op gang.

Via ademhaling, aandacht, beweging en lichaamsgerichte therapie leren we het lichaam weer schakelen tussen inspanning en herstel.

Daarbij kijken we niet alleen naar klachten, maar ook naar hoe spanning zich vastzet in bijvoorbeeld de kaak, nek, buik of bekken. Het doel is niet om spanning weg te duwen, maar om het lichaam weer te laten ervaren hoe ontspanning voelt.`}
            />

          </div>
        </div>
      </section>

      

      {/* OVER BORIS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div
            className="h-[400px] bg-cover bg-center rounded"
            style={{
              backgroundImage: "url('/images/boris.jpg')",
            }}
          />

          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Over Boris
            </h2>

            <p className="text-gray-700 mb-6">
              Met meer dan 25 jaar ervaring werk ik met mensen die vaak al een lange zoektocht achter zich hebben.
            </p>

            <p className="text-gray-700">
              Mijn manier van werken richt zich niet alleen op de klacht,
              maar op het herstellen van vertrouwen in het lichaam zelf.
            </p>

            <a href="/over-boris" className="inline-block mt-8 border px-6 py-3">
              Lees meer
            </a>
          </div>
        </div>
      </section>
            <Testimonials />
      

      {/* LAST-MINUTE AFSPRAKEN */}
<section className="py-20 bg-[#F7F7F4]">
  <div className="max-w-3xl mx-auto px-6">

    <div className="border rounded-xl bg-white p-8">

      <h2 className="text-2xl font-semibold mb-4">
        Last-minute afspraak
      </h2>

      <p className="text-gray-700 mb-6 leading-relaxed">
        Soms komen er op korte termijn plaatsen vrij in de agenda. Deze momenten zijn bedoeld voor bestaande patiënten en kunnen tegen een gereduceerd tarief worden geboekt.
      </p>

      <p className="text-gray-700 mb-8">
        Bekijk de actuele beschikbaarheid.
      </p>

      <a
        href="/last-minute"
        className="inline-block px-6 py-3 bg-[#5E6F52] text-white rounded-lg"
      >
        Bekijk beschikbaarheid
      </a>

    </div>
  </div>
</section>
{/* CTA MET NATUUR */}
      <section className="relative py-24 text-center text-white">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/images/nature.jpg')",
          }}
        />

        <div className="relative">
          <h2 className="text-3xl mb-6">
            Wil je dit niet alleen begrijpen, maar ook ervaren?
          </h2>

          <a href="/afspraak" className="bg-black text-white px-6 py-3">
            Maak een afspraak
          </a>
        </div>
      </section>

      <footer className="bg-[#F7F7F4] border-t">
        <div className="max-w-6xl mx-auto px-6 py-16">

          <div className="grid md:grid-cols-4 gap-12">

            <div>
              <img src="/images/logo.png" alt="Boris Drogt" className="h-32 w-auto mb-6" />
              <div className="space-y-3 text-gray-600">
                <p>Nijmegen</p>
                <a href="mailto:info@borisdrogtfysio.nl" className="block hover:text-black transition">info@borisdrogtfysio.nl</a>
                <a href="tel:+31612345678" className="block hover:text-black transition">+31 6 11628553</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold tracking-wide mb-6">VERDER LEZEN</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="/werkwijze" className="hover:text-black transition">Werkwijze</a></li>
                <li><a href="/voor-wie" className="hover:text-black transition">Voor wie</a></li>
                <li><a href="/kennisbank" className="hover:text-black transition">Kennisbank</a></li>
                <li><a href="/kennisclips" className="hover:text-black transition">Kennisclips</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold tracking-wide mb-6">KLACHTEN</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="/tinnitus" className="hover:text-black transition">Tinnitus</a></li>
                <li><a href="/hoofdpijn" className="hover:text-black transition">Hoofdpijn</a></li>
                <li><a href="/kaakspanning" className="hover:text-black transition">Kaakfysiotherapie</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold tracking-wide mb-6">PRAKTISCH</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="/afspraak" className="hover:text-black transition">Maak een afspraak</a></li>
                <li><a href="/praktisch" className="hover:text-black transition">Praktische info</a></li>
                
                <li><a href="https://www.linkedin.com/company/boris-drogt-fysio-manuele-therapie" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">LinkedIn</a></li>
              </ul>
            </div>

          </div>

          <div className="border-t mt-12 pt-6 text-sm text-gray-500">© {new Date().getFullYear()} Boris Drogt</div>

        </div>
      </footer>

    </main>
  );
}
