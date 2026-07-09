export function BodySystems() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Waar we mee werken in je lichaam
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Klachten zoals kaakspanning, tinnitus of hoofdpijn staan zelden op zichzelf.
            Daarom werken we via verschillende ingangen in het lichaam —
            die direct invloed hebben op spanning en herstel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="p-8 bg-white rounded-2xl border hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">Ademhaling</h3>
            <p className="text-gray-700 mb-4">
              Je ademhaling heeft directe invloed op spanning in je lichaam.
            </p>
            <div className="text-sm font-medium">
              → meer rust en minder kaakspanning
            </div>
          </div>

          <div className="p-8 bg-white rounded-2xl border hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">Kaak en nek</h3>
            <p className="text-gray-700 mb-4">
              De kaak is sterk verbonden met spanning en controle.
            </p>
            <div className="text-sm font-medium">
              → minder druk en meer ontspanning
            </div>
          </div>

          <div className="p-8 bg-white rounded-2xl border hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">Fascia / bindweefsel</h3>
            <p className="text-gray-700 mb-4">
              Bindweefsel verbindt alles in je lichaam.
            </p>
            <div className="text-sm font-medium">
              → minder “vast” gevoel
            </div>
          </div>

          <div className="p-8 bg-white rounded-2xl border hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">Zenuwstelsel</h3>
            <p className="text-gray-700 mb-4">
              Spanning blijft vaak hangen in alertheid.
            </p>
            <div className="text-sm font-medium">
              → meer rust en herstel
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}