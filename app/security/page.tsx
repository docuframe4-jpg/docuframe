export default function SecurityPage() {
  const securityItems = [
    "SOC2 Ready",
    "GDPR Compliance",
    "SSO Authentication",
    "Encrypted Storage",
    "Audit Logs",
    "Role-Based Access Control",
  ]

  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-6xl font-black">Security & Compliance</h1>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {securityItems.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8"
            >
              <h2 className="text-2xl font-bold">{item}</h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}