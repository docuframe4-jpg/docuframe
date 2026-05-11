export default function CaseStudiesPage() {
  const studies = [
    {
      company: "CloudSync",
      result: "Reduced documentation workload by 80%",
    },
    {
      company: "SecureStack",
      result: "Generated screenshots across 14 languages automatically",
    },
    {
      company: "DevPilot",
      result: "Reduced release documentation time from 2 days to 30 minutes",
    },
  ]

  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-6xl font-black">Case Studies</h1>

        <div className="mt-16 space-y-8">
          {studies.map((study) => (
            <div
              key={study.company}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10"
            >
              <h2 className="text-3xl font-bold">{study.company}</h2>

              <p className="mt-4 text-lg text-zinc-400">
                {study.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}