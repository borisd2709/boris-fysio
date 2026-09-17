import Link from "next/link"

const categories = [
  {
    title: "Tinnitus",
    posts: [
      {
        title: "Waarom wordt tinnitus erger bij stress?",
        slug: "tinnitus-stress",
      },
    ],
  },

  {
    title: "Kaak & Ademhaling",
    posts: [
      {
        title: "Waarom klem je je kaken zonder dat je het doorhebt?",
        slug: "kaken-klemmen",
      },
      {
        title: "Kan kaakspanning hoofdpijn veroorzaken?",
        slug: "kaakspanning-hoofdpijn",
      },
    ],
  },

  {
    title: "Hoofdpijn",
    posts: [
      {
        title: "Waarom krijg je hoofdpijn in het weekend?",
        slug: "hoofdpijn-weekend",
      },
    ],
  },

  {
    title: "Rug, Bekken & Ademhaling",
    posts: [
      {
        title: "Wat heeft je ademhaling met rugklachten te maken?",
        slug: "ademhaling-rugklachten",
      },
    ],
  },

  {
    title: "Opgetrokken schouders",
    posts: [
      {
        title: "Waarom blijven je schouders gespannen?",
        slug: "schouders-gespannen",
      },
    ],
  },

  {
    title: "Nek-hoofdpijn",
    posts: [
      {
        title: "Kan spanning in je nek hoofdpijn veroorzaken?",
        slug: "nek-hoofdpijn",
      },
    ],
  },

  {
    title: "Stress & Herstel",
    posts: [
      {
        title: "Wanneer je lichaam niet meer tot rust komt",
        slug: "stress-burnout",
      },],
  },

  {
    title: "Slaap",
    posts: [
      {
        title: "Slaap, herstel en het lichaam",
        slug: "slaap",
      },
    ],
  },

  {
    title: "Hormonen",
    posts: [
      {
        title: "Hormonen, spanning en de (peri)menopauze",
        slug: "hormonen-menopauze",
      },
    ],
  },
]

export default function Kennisbank() {
  return (
    <main className="bg-white text-gray-900">

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-4xl font-semibold mb-6">
          Kennisbank
        </h1>

        <p className="text-gray-600 max-w-2xl">
          Vragen en inzichten uit de praktijk over tinnitus,
          kaakspanning, hoofdpijn, ademhaling, slaap en herstel.
        </p>
      </section>

      {/* Categorieën */}
      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="space-y-16">

          {categories.map((category) => (
            <div key={category.title}>

              <h2 className="text-2xl font-semibold mb-6">
                {category.title}
              </h2>

              {category.posts.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">

                  {category.posts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/kennisbank/${post.slug}`}
                      className="block p-6 border rounded-xl hover:bg-gray-50 transition"
                    >
                      <h3 className="font-medium">
                        {post.title}
                      </h3>
                    </Link>
                  ))}

                </div>
              ) : (
                <p className="text-gray-500">
                  Artikelen volgen binnenkort.
                </p>
              )}

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
