import Image from "next/image"

const clips = [
  {
    id: "fysio-tegen-tandenknarsen",
    title: "Fysio tegen tandenknarsen",
    description: "Item over tandenknarsen.",
    youtubeId: "TCF87JvsmhY",
    
  },
  {
    id: "Houding en kaakklachten",
    title: "Houding en kaakklachten",
    description: "Item over houding en kaakklachten.",
    youtubeId: "_Xlvk_1OqA0",
    
  },
  {
    id: "Hoofdpijn en functie kaak",
    title: "Hoofdpijn en functie kaak",
    description: "Item over hoofdpijn en functie kaak.",
    youtubeId: "Xb6zClHJ40I",
    
  },
  {
    id: "Goede ademhaling",
    title: "Goede ademhaling",
    description: "Item over goede ademhaling.",
    youtubeId: "WZIapfXD6vk",
    
  },
  {
    id: "Langdurige pijn: pijnmatrix",
    title: "Langdurige pijn: pijnmatrix",
    description: "Item over langdurige pijn.",
    youtubeId: "RVqzMnFSxtk",
    
  },
  {
    id: "tinnitus-stress",
    title: "Tinnitus en stress",
    description: "Waarom tinnitus vaak sterker wordt bij spanning.",
    youtubeId: "-NbNozRheBI",
  },
  ]

export default function KennisclipsPage() {
  return (
    <main className="bg-white text-gray-900">

      <section className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-4xl font-semibold mb-6">
          Kennisclips
        </h1>

        <p className="text-gray-600 max-w-2xl">
          Sommige onderwerpen zijn makkelijker te begrijpen
          wanneer je ze kunt zien.
          Daarom maak ik korte video's over onderwerpen
          die regelmatig in de praktijk terugkomen.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {clips.map((clip) => (
            <div
              key={clip.id}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
            >

              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${clip.youtubeId}`}
                  title={clip.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-6">
                <h2 className="font-semibold mb-2">
                  {clip.title}
                </h2>

                <p className="text-sm text-gray-600">
                  {clip.description}
                </p>
              </div>

            </div>
          ))}

        </div>
<footer className="bg-[#F7F7F4] border-t">
        <div className="max-w-6xl mx-auto px-6 py-16">

          <div className="grid md:grid-cols-4 gap-12">

            <div>
              <img src="/images/logo.png" alt="Boris Drogt" className="h-32 w-auto mb-6" />
              <div className="space-y-3 text-gray-600">
                
                <p>Sloetstraat 14</p>
                <p>6524 AS</p>
                <p>Nijmegen</p>
                <p>info@borisdrogtfysio.nl</p>
                <p>+31 6 11628553</p>
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

      </section>

    </main>
  )
}