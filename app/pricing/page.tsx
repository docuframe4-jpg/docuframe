export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      features: [
        "100 screenshots/month",
        "Basic localization",
        "Export ZIP packages",
      ],
    },
    {
      name: "Team",
      price: "$199",
      features: [
        "Unlimited screenshots",
        "AI annotations",
        "Team collaboration",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "SSO",
        "Audit logs",
        "Custom automation workflows",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-6xl font-black">Pricing</h1>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10"
            >
              <h2 className="text-3xl font-bold">{plan.name}</h2>

              <p className="mt-6 text-5xl font-black">
                {plan.price}
              </p>

              <ul className="mt-8 space-y-4 text-zinc-400">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>

              <button className="mt-10 w-full rounded-2xl bg-white px-6 py-3 font-semibold text-black">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}