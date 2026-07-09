import Link from "next/link"

export default function Page() {
  return (
    <main className="bg-white text-gray-900">

      <article className="max-w-3xl mx-auto px-6 pt-28 pb-20">

        <h1 className="text-4xl font-semibold mb-6 leading-tight">
          Wat doet stress met tinnitus?
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          Veel mensen merken dat tinnitus sterker wordt tijdens drukke periodes.
          Soms ontstaat de piep of suis juist in een periode van stress. Bij anderen
          was tinnitus al aanwezig, maar lijkt het geluid meer op de voorgrond te staan.
        </p>

        <p className="mb-10 text-gray-700 leading-relaxed">
          Dat is geen toeval. Stress heeft invloed op hoe het brein prikkels verwerkt.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Tinnitus is niet alleen een probleem van het oor
        </h2>

        <p className="mb-4 text-gray-700 leading-relaxed">
          Vaak wordt gedacht dat tinnitus alleen te maken heeft met het gehoor.
        </p>

        <p className="mb-4 text-gray-700 leading-relaxed">
          Maar geluid wordt niet alleen in het oor geregistreerd.
          Het brein bepaalt uiteindelijk welke signalen belangrijk zijn
          en welke naar de achtergrond mogen verdwijnen.
        </p>

        <p className="mb-10 text-gray-700 leading-relaxed">
          Normaal gesproken filtert het zenuwstelsel voortdurend informatie weg.
          Denk aan het geluid van een koelkast, verkeer op de achtergrond
          of het tikken van een klok.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Wat gebeurt er bij stress?
        </h2>

        <p className="mb-4 text-gray-700 leading-relaxed">
          Wanneer het lichaam onder spanning staat, komt het systeem in een staat
          van verhoogde alertheid.
        </p>

        <p className="mb-10 text-gray-700 leading-relaxed">
          Het brein wordt gevoeliger voor signalen die mogelijk belangrijk zijn.
          Dat is nuttig wanneer er gevaar dreigt, maar het heeft ook een nadeel:
          geluiden die normaal naar de achtergrond verdwijnen,
          blijven meer op de voorgrond aanwezig.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          De poort blijft als het ware open
        </h2>

        <p className="mb-4 text-gray-700 leading-relaxed">
          Je kunt tinnitus zien als een signaal waarvoor het brein moeilijker
          de volumeknop naar beneden draait.
        </p>

        <p className="mb-10 text-gray-700 leading-relaxed">
          Bij een ontspannen systeem worden prikkels beter gefilterd.
          Bij langdurige stress blijft die "poort" vaker openstaan.
          Daardoor valt het geluid meer op en wordt het moeilijker om het los te laten.
        </p>

        {/* KENNISCLIP */}
        <div className="my-16 max-w-lg mx-auto">

           <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
    Kennisclip
  </p>
        <a
          href="https://www.youtube.com/watch?v=-NbNozRheBI"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src="https://i.ytimg.com/vi/IgNgT-vRnEk/maxresdefault.jpg"
            alt="Tinnitus en stress"
            className="rounded-lg mb-4"
          />


          <h3 className="text-xl font-semibold mb-2">Tinnitus en stress</h3>


          <p className="text-gray-600">Waarom lijkt tinnitus soms sterker te worden bij spanning, stress, depressie en/of angst?</p>


        </a>
</div>


        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Angst en tinnitus versterken elkaar
        </h2>

        <p className="mb-6 text-gray-700 leading-relaxed">
          Wat veel mensen herkennen is deze cirkel:
        </p>

        <div className="bg-gray-50 border rounded-xl p-6 mb-10">
          <p className="text-gray-700 font-medium">
            Tinnitus
            <br />↓
            <br />Onrust
            <br />↓
            <br />Meer aandacht voor het geluid
            <br />↓
            <br />Meer spanning
            <br />↓
            <br />Tinnitus wordt sterker ervaren
          </p>
        </div>

        <p className="mb-10 text-gray-700 leading-relaxed">
          De piep roept spanning op.
          Die spanning maakt het geluid vervolgens belangrijker.
          Daardoor blijft het systeem alert.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Niet alleen stress
        </h2>

        <p className="mb-4 text-gray-700 leading-relaxed">
          Ook andere factoren kunnen ervoor zorgen dat tinnitus meer
          op de voorgrond komt te staan.
        </p>

        <ul className="space-y-3 mb-10 text-gray-700">
          <li>Slecht slapen</li>
          <li>Langdurige vermoeidheid</li>
          <li>Angst</li>
          <li>Somberheid</li>
          <li>Overbelasting</li>
        </ul>

        <p className="mb-10 text-gray-700 leading-relaxed">
          Al deze factoren beïnvloeden hoe het zenuwstelsel prikkels verwerkt.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          De relatie met kaak en nek
        </h2>

        <p className="mb-4 text-gray-700 leading-relaxed">
          Bij veel mensen met tinnitus zien we ook:
        </p>

        <ul className="space-y-3 mb-10 text-gray-700">
          <li>Kaakspanning</li>
          <li>Tandenknarsen</li>
          <li>Kaken klemmen</li>
          <li>Nekspanning</li>
          <li>Hoofdpijn</li>
        </ul>

        <p className="mb-10 text-gray-700 leading-relaxed">
          Daarom kijken we niet alleen naar het geluid zelf,
          maar ook naar de spanning die elders in het lichaam aanwezig kan zijn.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Wat helpt dan wel?
        </h2>

        <ul className="space-y-3 mb-10 text-gray-700">
          <li>Het zenuwstelsel tot rust brengen</li>
          <li>Spanning leren herkennen</li>
          <li>Aandacht voor ademhaling</li>
          <li>Ontspanning van kaak en nek</li>
          <li>Voldoende herstel en slaap</li>
        </ul>

        <p className="mb-10 text-gray-700 leading-relaxed">
          Wanneer het systeem minder alert wordt,
          krijgt tinnitus vaak een minder dominante plek.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Belangrijk inzicht
        </h2>

        <p className="mb-12 text-gray-700 leading-relaxed">
          Hoe sterker het lichaam in een staat van alertheid blijft,
          hoe moeilijker het wordt om tinnitus naar de achtergrond te laten verdwijnen.
        </p>

        {/* INTERNE LINK */}
        <div className="p-6 bg-gray-50 rounded-xl border">

          <p className="mb-4 text-gray-700">
            Wil je meer lezen over de relatie tussen tinnitus,
            spanning en het lichaam als geheel?
          </p>

          <Link
            href="/kennisbank/tinnitus-spanning"
            className="inline-block px-5 py-3 bg-[#5E6F52] text-white rounded-lg hover:bg-[#4F5D45] transition"
          >
            Lees meer over tinnitus
          </Link>

        </div>

      </article>

    </main>
  )
}