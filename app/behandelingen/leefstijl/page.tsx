
import Link from "next/dist/client/link";

export default function LeefstijlPage() {
  return (<section className="max-w-4xl mx-auto px-6 py-24">

  <h1 className="text-4xl md:text-5xl font-semibold mb-8">
    Leefstijl, ademhaling en herstel
  </h1>

  <p className="text-xl text-gray-600 leading-relaxed mb-12">
    Soms blijft een klacht terugkomen ondanks behandeling,
    oefeningen of rust.
  </p>

  <p className="mb-8 leading-relaxed">
    In dat soort situaties kan het waardevol zijn om verder
    te kijken dan de plek waar de klacht zich uit.
    Hoe adem je? Hoe slaap je? Hoeveel hersteltijd krijgt je
    lichaam? Hoe ga je om met spanning en stress?
  </p>

  <p className="mb-8 leading-relaxed">
    Het lichaam is voortdurend bezig om balans te vinden
    tussen inspanning en herstel. Wanneer die balans langere
    tijd verstoord raakt, kunnen klachten ontstaan of langer
    aanhouden dan nodig is.
  </p>

  <p className="mb-8 leading-relaxed">
    Binnen mijn begeleiding besteed ik daarom aandacht aan
    factoren die invloed hebben op herstel, zoals
    ademhaling, slaap, leefstijl en de manier waarop het
    zenuwstelsel reageert op belasting.
  </p>

  <p className="mb-12 leading-relaxed">
    Het doel is niet om alles perfect te doen, maar om beter
    te begrijpen welke factoren jouw lichaam helpen
    herstellen.
  </p>

  <h2 className="text-2xl font-semibold mb-6">
    Onderwerpen die aan bod kunnen komen
  </h2>
  

  <ul className="space-y-3 text-gray-700 mb-12">
    <li>Neusademhaling en mondademhaling</li>
    <li>Stress en spanningsregulatie</li>
    <li>Vermoeidheid en herstel</li>
    <li>Slaapkwaliteit</li>
    <li>Hooikoorts en ademhaling</li>
    <li>Leefstijl en belastbaarheid</li>
  </ul>
<section className="py-24 text-center">
        <h2 className="text-2xl mb-4">
          Ben je nieuwsgierig naar deze onderwerpen?
        </h2>

        <p className="text-gray-600 mb-6">
          Soms begint verandering bij één inzicht.
        </p>

        <Link href="/kennisbank" className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-white font-medium hover:bg-gray-800 transition">
          Bekijk de kennisbank
        </Link>
      
        </section>
  <h2 className="text-2xl font-semibold mb-6">
    Binnen deze benadering onderzoeken we onder andere
  </h2>

  <ul className="space-y-3 text-gray-700 mb-12">
    <li>Waarom blijf je "aan" staan?</li>
    <li>Waarom lukt ontspannen soms niet?</li>
    <li>Hoe beïnvloedt ademhaling je lichaam?</li>
    <li>Welke factoren ondersteunen herstel?</li>
    <li>Hoe vind je een betere balans tussen inspanning en ontspanning?</li>
  </ul>

  <h2 className="text-2xl font-semibold mb-6">
    Tot slot
  </h2>

  <p className="leading-relaxed">
    Soms ligt de sleutel tot herstel niet alleen in het
    behandelen van een spier of gewricht, maar in het
    begrijpen van de omstandigheden waarin het lichaam
    probeert te functioneren. Kleine veranderingen in
    ademhaling, herstel of leefstijl kunnen soms een
    verrassend grote invloed hebben op hoe iemand zich voelt.
  </p>

</section>

  );
}