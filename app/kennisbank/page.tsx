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

      </section>

    </main>
  )
}
