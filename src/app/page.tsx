import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-zinc-100 bg-white/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">❤️</span>
            <span className="font-bold text-xl tracking-tight text-rose-600">
              Kenya Match
            </span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-zinc-600">
            <a href="#how-it-works" className="hover:text-rose-600 transition">
              How it works
            </a>
            <a href="#features" className="hover:text-rose-600 transition">
              Features
            </a>
            <a href="#counties" className="hover:text-rose-600 transition">
              Counties
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-zinc-700 hover:text-rose-600 transition px-3 py-2"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="text-sm font-semibold bg-rose-600 text-white px-4 py-2 rounded-full hover:bg-rose-700 transition shadow-sm"
            >
              Sign up free
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-rose-600 tracking-wide uppercase mb-4">
              Made for Kenya 🇰🇪
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 leading-tight">
              Meet people near you.
              <span className="block text-rose-600">Real connections, real places.</span>
            </h1>
            <p className="mt-6 text-lg text-zinc-600 leading-relaxed max-w-xl">
              Location-based matchmaking for Kenyans. Filter by county, town,
              age, interests, tribe, religion or lifestyle. Swipe, match and
              chat with people around Nairobi, Mombasa, Kisumu and beyond.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-rose-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-rose-200 hover:bg-rose-700 transition"
              >
                Create free account
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-8 py-3.5 text-base font-semibold text-zinc-800 hover:bg-zinc-50 transition"
              >
                See how it works
              </a>
            </div>
            <p className="mt-4 text-sm text-zinc-500">
              Free to start · Location privacy respected · Report & safety tools
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-zinc-900">
            How location-based matching works
          </h2>
          <p className="mt-3 text-center text-zinc-600 max-w-2xl mx-auto">
            We use your approximate location (with permission) so you can
            discover people nearby — then refine with filters that matter in
            Kenya.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Create your profile",
                desc: "Photos, age, bio, interests, county and optional details like tribe or religion.",
              },
              {
                step: "2",
                title: "Share location",
                desc: "We request GPS once (or use your chosen county/town). You control visibility.",
              },
              {
                step: "3",
                title: "Discover & filter",
                desc: "See people near you. Filter by distance, county, age, interests and more.",
              },
              {
                step: "4",
                title: "Match & chat",
                desc: "Like, match, and start real-time conversations safely.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-zinc-100 bg-zinc-50/50 p-6"
              >
                <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-700 font-bold flex items-center justify-center mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg text-zinc-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-zinc-900">
            Built for Kenyan dating
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "County & town filters",
                desc: "Nairobi, Mombasa, Kisumu, Kiambu, Nakuru, Eldoret and more — match within your area.",
              },
              {
                title: "Local preferences",
                desc: "Optional filters for tribe, religion, lifestyle, student / professional / church modes.",
              },
              {
                title: "Safety first",
                desc: "Report system, block tools, and profile verification options to keep the community safe.",
              },
              {
                title: "Photo-first profiles",
                desc: "Upload multiple photos. Clear, modern cards that feel like a real dating app.",
              },
              {
                title: "Real-time chat",
                desc: "Message your matches instantly once both of you like each other.",
              },
              {
                title: "M-Pesa ready (planned)",
                desc: "Premium features with local payment options so upgrading is easy.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-white border border-zinc-100 p-6 shadow-sm"
              >
                <h3 className="font-semibold text-zinc-900">{f.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counties teaser */}
      <section id="counties" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-zinc-900">
            Active across Kenya
          </h2>
          <p className="mt-2 text-zinc-600">
            Start in the big cities or your home county.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Nairobi",
              "Mombasa",
              "Kisumu",
              "Kiambu",
              "Nakuru",
              "Uasin Gishu",
              "Machakos",
              "Kajiado",
              "Nyeri",
              "Kilifi",
            ].map((c) => (
              <span
                key={c}
                className="px-4 py-2 rounded-full bg-rose-50 text-rose-700 text-sm font-medium"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Ready to meet someone near you?</h2>
          <p className="mt-4 text-rose-100">
            Join Kenya Match and start connecting with people in your area
            today.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white text-rose-700 px-8 py-3.5 text-base font-semibold hover:bg-rose-50 transition"
          >
            Sign up free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <span>❤️</span>
            <span className="font-semibold text-zinc-700">Kenya Match</span>
          </div>
          <p>© {new Date().getFullYear()} Kenya Match. Location-based dating for Kenya.</p>
        </div>
      </footer>
    </div>
  );
}
