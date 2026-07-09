import Image from "next/image"

const clips = [
  {
    id: "anatomie-kaak",
    title: "Anatomie van de kaak",

    description:
      "Korte uitleg over de werking van het kaakgewricht.",
    youtubeUrl: "https://youtube.com/watch?v=VIDEO_ID",
    thumbnail:
      "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg",
  },
  {
    id: "tinnitus-stress",
    title: "Tinnitus en stress",
    description:
      "Waarom tinnitus vaak sterker wordt bij spanning.",
    youtubeUrl: "https://www.youtube.com/watch?v=-NbNozRheBI",
    thumbnail:
      "https://img.youtube.com/vi/-NbNozRheBI/maxresdefault.jpg",
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
            <a
              key={clip.id}
              href={clip.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={clip.thumbnail}
                alt={clip.title}
                width={640}
                height={360}
                className="w-full aspect-video object-cover"
              />

              <div className="p-6">
                <h2 className="font-semibold mb-2">
                  {clip.title}
                </h2>

                <p className="text-sm text-gray-600">
                  {clip.description}
                </p>
              </div>
            </a>
          ))}

        </div>

      </section>

    </main>
  )
}