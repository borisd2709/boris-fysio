import Link from "next/link";

export default function GlobusgevoelPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="max-w-4xl mx-auto px-6 pt-28 pb-24">

        <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">
          Kennisbank
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold mb-8">
          Waarom voelt het alsof er iets in je keel zit?
        </h1>

        <p className="text-xl text-gray-600 leading-relaxed mb-12">
          Sommige mensen hebben het gevoel dat er een brok in de keel zit.
          Alsof ze voortdurend moeten slikken. Alsof er iets vastzit, terwijl
          onderzoek door huisarts of specialist geen duidelijke afwijking laat zien.
        </p>

        <p className="mb-8 leading-relaxed">
          Dit wordt ook wel een <strong>globusgevoel</strong> genoemd.
          Hoewel het globusgevoel onschuldig kan zijn, voelt het vaak erg
          vervelend en kan het aanleiding geven tot onrust.
        </p>

        <h2 className="text-2xl font-semibold mt-16 mb-6">
          Het lichaam staat op scherp
        </h2>

        <p className="mb-6 leading-relaxed">
          Wanneer mensen langdurig gespannen zijn, verandert vaak de
          lichaamshouding.
        </p>

        <p className="mb-4">
          Veel mensen ontwikkelen ongemerkt:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
          <li>opgetrokken schouders;</li>
          <li>een voorwaarts gehouden hoofd;</li>
          <li>spanning rondom nek en kaak;</li>
          <li>een hogere ademhaling.</li>
        </ul>

        <p className="mb-8 leading-relaxed">
          Deze houding vraagt veel van een belangrijke spier aan de voorkant
          van de hals: de musculus sternocleidomastoideus.
        </p>

        <h2 className="text-2xl font-semibold mt-16 mb-6">
          Een spier met veel verantwoordelijkheden
        </h2>

        <p className="mb-6 leading-relaxed">
          De musculus sternocleidomastoideus helpt bij:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
          <li>het dragen van het hoofd;</li>
          <li>het draaien van de nek;</li>
          <li>de ademhaling;</li>
          <li>de samenwerking tussen hoofd, hals en borstkas.</li>
        </ul>

        <p className="mb-4">
          Wanneer deze spier voortdurend actief is kan de halsregio gespannen
          aanvoelen.
        </p>

        <p className="mb-4">
          Sommige mensen ervaren dan:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
          <li>druk in de keel;</li>
          <li>veel slikken;</li>
          <li>een globusgevoel;</li>
          <li>spanning rondom de kaak.</li>
        </ul>

        <div className="mt-12 p-6 bg-[#F7F7F4] rounded-xl">
          <p className="mb-4 text-gray-700">
            Herken je een brokgevoel in de keel, spanning in de nek of
            kaakklachten? Dan kan het zinvol zijn om te onderzoeken hoe
            houding, ademhaling en spierspanning hierbij een rol spelen.
          </p>

          <Link href="/afspraak" className="inline-flex items-center rounded-lg bg-gray-900 px-5 py-3 font-medium text-white hover:bg-gray-700">
            Maak een afspraak
          </Link>
        </div>

        <h2 className="text-2xl font-semibold mt-16 mb-6">
          De relatie met de nervus vagus
        </h2>

        <p className="mb-6 leading-relaxed">
          Door de hals lopen verschillende belangrijke zenuwen.
          Eén daarvan is de nervus vagus.
        </p>

        <p className="mb-4">
          Deze zenuw speelt een rol bij:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
          <li>herstel;</li>
          <li>ontspanning;</li>
          <li>hartslag;</li>
          <li>ademhaling;</li>
          <li>maag- en darmfunctie.</li>
        </ul>

        <p className="mb-4">
          Wanneer mensen langdurig onder spanning staan zien we vaak dat
          meerdere systemen tegelijkertijd veranderen:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
          <li>ademhaling wordt hoger;</li>
          <li>spieren worden actiever;</li>
          <li>herstel neemt af;</li>
          <li>maag- en darmklachten kunnen toenemen.</li>
        </ul>

        <p className="mb-8 leading-relaxed">
          Het lichaam lijkt dan meer gericht op overleven dan op herstellen.
        </p>

        <h2 className="text-2xl font-semibold mt-16 mb-6">
          Kaakklemmen en ademhaling
        </h2>

        <p className="mb-6 leading-relaxed">
          Veel mensen met een globusgevoel blijken ook regelmatig de
          kaken te klemmen.
        </p>

        <p className="mb-6 leading-relaxed">
          Soms gebeurt dit overdag. Soms vooral tijdens de slaap.
        </p>

        <p className="mb-4">
          Wanneer iemand daarnaast minder goed door de neus kan ademen,
          bijvoorbeeld door:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
          <li>hooikoorts;</li>
          <li>chronische neusverstopping;</li>
          <li>sinusklachten;</li>
        </ul>

        <p className="mb-8 leading-relaxed">
          kan de neiging ontstaan om meer door de mond te ademen.
          Daardoor blijven spieren van nek, hals en kaak vaak actiever.
        </p>

        <h2 className="text-2xl font-semibold mt-16 mb-6">
          Wat kun je zelf doen?
        </h2>

        <p className="mb-8 leading-relaxed">
          Een globusgevoel kan verschillende oorzaken hebben. Bespreek
          aanhoudende of verergerende klachten met je huisarts, zeker als je
          moeite hebt met slikken of onverklaard gewicht verliest.
        </p>
      </section>
    </main>
  );
}