export default function FeaturesPage() {
  const features = [
    {
      title: "AI Screenshot Automation",
      description:
        "Automatically navigate workflows and generate documentation screenshots.",
    },
    {
      title: "Localization Engine",
      description:
        "Generate screenshots in multiple languages automatically.",
    },
    {
      title: "AI Annotation",
      description:
        "Highlight UI elements intelligently using AI.",
    },
    {
      title: "Review Workflow",
      description:
        "Approve, comment, edit, and export screenshots collaboratively.",
    },
    {
      title: "Browser Automation",
      description:
        "Powered by Playwright for enterprise-grade workflow automation.",
    },
    {
      title: "Export System",
      description:
        "Export PNG, JPG, ZIP packages, and localized documentation assets.",
    },
  ]

  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-6xl font-black">Features</h1>

        <p className="mt-6 max-w-3xl text-lg text-zinc-400">
          Enterprise-grade AI documentation automation for modern SaaS teams.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8"
            >
              <h2 className="text-2xl font-bold">
                {feature.title}
              </h2>

              <p className="mt-4 text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}