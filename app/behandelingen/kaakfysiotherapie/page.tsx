import Link from "next/dist/client/link";

export default function KaakfysiotherapiePage() {
  return (
    
<section className="max-w-4xl mx-auto px-6 py-24">

  <h1 className="text-4xl md:text-5xl font-semibold mb-8">
    Kaakfysiotherapie
  </h1>

  <p className="text-xl text-gray-600 leading-relaxed mb-12">
    De kaak speelt een grotere rol dan veel mensen denken.
  </p>

  <p className="mb-8 leading-relaxed">
    Spanning in het kaakgebied kan invloed hebben op de nek,
    schouders, ademhaling en soms zelfs op klachten zoals
    hoofdpijn of oorsuizen.
  </p>

  <p className="mb-8 leading-relaxed">
    Veel mensen merken niet dat zij hun kaken regelmatig op
    elkaar klemmen. Anderen worden wakker met vermoeide
    kauwspieren of ervaren een voortdurende spanning rondom
    het gezicht.
  </p>

  <p className="mb-8 leading-relaxed">
    Kaakfysiotherapie begint daarom niet alleen bij de kaak.
    We onderzoeken hoe de kaak samenwerkt met de nek, de
    ademhaling en het zenuwstelsel. Soms blijkt de kaak juist
    een plek te zijn waar spanning zichtbaar wordt die elders
    in het lichaam is opgebouwd.
  </p>
    <div className="aspect-video rounded-xl overflow-hidden shadow-md">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/AChCKxskSVI"
      
      title="Kaakfysiotherapie - Boris Fysio"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
  <p className="mb-12 leading-relaxed">
    Door beter te begrijpen waarom die spanning ontstaat,
    ontstaat vaak ook ruimte voor verandering.
  </p>

  <h2 className="text-2xl font-semibold mb-6">
    Veelvoorkomende klachten
  </h2>

  <ul className="space-y-3 text-gray-700">
    <li>Kaakspanning</li>
    <li>Kaken klemmen</li>
    <li>Bruxisme (tandenknarsen)</li>
    <li>Tinnitus</li>
    <li>Hoofdpijn</li>
    <li>Aangezichtsspanning</li>
  </ul>

<section className="py-24 text-center">
        <h2 className="text-2xl mb-4">
          Wil je ervaren welke invloed kaakfysiotherapie heeft op jouw klachten?
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