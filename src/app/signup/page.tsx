import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-50 to-amber-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-zinc-100 p-8">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-rose-600 font-bold text-xl">
            <span>❤️</span> Kenya Match
          </Link>
          <h1 className="mt-4 text-2xl font-bold text-zinc-900">Create your account</h1>
          <p className="mt-2 text-sm text-zinc-600">
            Join thousands of Kenyans finding real connections nearby.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Full name</label>
            <input
              type="text"
              placeholder="e.g. Amina Otieno"
              className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">County</label>
            <select className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white">
              <option value="">Select your county</option>
              <option>Nairobi</option>
              <option>Mombasa</option>
              <option>Kisumu</option>
              <option>Kiambu</option>
              <option>Nakuru</option>
              <option>Uasin Gishu</option>
              <option>Other</option>
            </select>
          </div>
          <button
            type="button"
            className="w-full rounded-xl bg-rose-600 text-white font-semibold py-3.5 hover:bg-rose-700 transition"
          >
            Continue (UI only for now)
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <Link href="/login" className="text-rose-600 font-medium hover:underline">
            Log in
          </Link>
        </p>
        <p className="mt-4 text-xs text-center text-zinc-400">
          Auth will be connected to Supabase / Netlify Identity in the next step.
        </p>
      </div>
    </div>
  );
}
