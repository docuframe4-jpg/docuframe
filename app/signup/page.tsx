export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900 p-10">
        <h1 className="text-4xl font-black">Start Free Trial</h1>

        <div className="mt-8 space-y-4">
          <input
            className="w-full rounded-2xl border border-zinc-700 bg-black px-4 py-3"
            placeholder="Full Name"
          />

          <input
            className="w-full rounded-2xl border border-zinc-700 bg-black px-4 py-3"
            placeholder="Work Email"
          />

          <input
            type="password"
            className="w-full rounded-2xl border border-zinc-700 bg-black px-4 py-3"
            placeholder="Password"
          />

          <button className="w-full rounded-2xl bg-white px-6 py-3 font-semibold text-black">
            Create Account
          </button>
        </div>
      </div>
    </main>
  )
}