import Link from "next/dist/client/link";

export default function ManueleTherapiePage() {
  return (
    
<section className="max-w-4xl mx-auto px-6 py-24">

  <h1 className="text-4xl md:text-5xl font-semibold mb-8">
    Manuele therapie
  </h1>

  <p className="text-xl text-gray-600 leading-relaxed mb-12">
    Soms voelt het lichaam stijf, gespannen of beperkt.
  </p>

  <p className="mb-8 leading-relaxed">
    Je merkt dat bewegen meer moeite kost dan vroeger.
    De nek draait minder goed, de rug voelt vast of de
    schouders blijven trekken ondanks rekken en oefenen.
  </p>

  <p className="mb-8 leading-relaxed">
    Manuele therapie richt zich op het herstellen van
    beweging en balans in het lichaam.
  </p>
  <div className="aspect-video rounded-xl overflow-hidden shadow-md">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/u1cN9shq8ZY"
      
      title="Manuele therapie - Boris Fysio"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
    <br /><br />
  <p className="mb-8 leading-relaxed">
    Daarbij kijk ik niet alleen naar de plek waar de klacht
    zit. Een stijve nek kan bijvoorbeeld samenhangen met
    spanning in de borstkas. Schouderklachten kunnen worden
    beïnvloed door ademhaling, houding of de manier waarop
    het lichaam probeert stabiliteit te creëren.
  </p>

  <p className="mb-12 leading-relaxed">
    Met gerichte technieken onderzoek ik waar beweging
    verloren is gegaan en waar het lichaam mogelijk
    compenseert. Het doel is niet alleen meer beweeglijkheid,
    maar vooral een lichaam dat minder hard hoeft te werken
    om zichzelf overeind te houden.
  </p>

  <h2 className="text-2xl font-semibold mb-6">
    Veelvoorkomende klachten
  </h2>

  <ul className="space-y-3 text-gray-700">
    <li>Nek- en schouderklachten</li>
    <li>Hoofdpijn</li>
    <li>Middenrugklachten</li>
    <li>Bewegingsbeperkingen</li>
    <li>Spanningsgerelateerde klachten</li>
  </ul>

<section className="py-24 text-center">
        <h2 className="text-2xl mb-4">
          Wil je ervaren welke invloed manuele therapie heeft op jouw klachten?
        </h2>

        <p className="text-gray-600 mb-6">
          Soms begint verandering bij één ervaring.
        </p>

        <Link href="/afspraak" className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-white font-medium hover:bg-gray-800 transition">
          Maak een afspraak
        </Link>
      
        </section>
    </section>
  );
}