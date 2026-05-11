export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="absolute right-20 top-20 h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute bottom-0 left-20 h-[350px] w-[350px] rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-32 text-center">
        <p className="mb-4 rounded-full border border-zinc-700 px-4 py-1 text-sm text-zinc-400">
          AI Documentation Infrastructure
        </p>

        <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">
          Automate Product Documentation Screenshots With AI
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          DocuFrame automatically captures, annotates, localizes,
          and exports product documentation screenshots for SaaS teams.
        </p>

        <div className="mt-10 flex gap-4">
          <a
  href="#waitlist"
  className="rounded-2xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-[1.02]"
>
  Join Beta
</a>

          <button className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold">
            Book Demo
          </button>
        </div>
      </section>

      <section
  
  className="relative z-10 border-t border-zinc-800 px-6 py-24"
>
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold">
            Why Teams Use DocuFrame
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur">
              <h3 className="text-2xl font-bold">
                AI Automation
              </h3>

              <p className="mt-4 text-zinc-400">
                Automatically navigate applications and capture screenshots.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur">
              <h3 className="text-2xl font-bold">
                Localization
              </h3>

              <p className="mt-4 text-zinc-400">
                Generate screenshots across multiple languages automatically.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur">
              <h3 className="text-2xl font-bold">
                Review Workflow
              </h3>

              <p className="mt-4 text-zinc-400">
                Review, approve, edit, and export screenshots collaboratively.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-10 px-6 py-24">
  <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
    <div>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
        Product Workflow
      </p>

      <h2 className="text-5xl font-black leading-tight">
        AI-Powered Screenshot Automation
      </h2>

      <p className="mt-6 text-lg leading-8 text-zinc-400">
        DocuFrame automatically navigates your product,
        captures screenshots, localizes UI flows,
        adds annotations, and exports production-ready
        documentation assets.
      </p>

      <div className="mt-10 space-y-5">
        <div className="flex items-start gap-4">
          <div className="mt-1 h-3 w-3 rounded-full bg-purple-500" />

          <div>
            <h3 className="font-semibold">
              Browser Automation
            </h3>

            <p className="text-zinc-400">
              AI-driven Playwright automation workflows.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="mt-1 h-3 w-3 rounded-full bg-blue-500" />

          <div>
            <h3 className="font-semibold">
              Localization Engine
            </h3>

            <p className="text-zinc-400">
              Generate screenshots in multiple languages.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="mt-1 h-3 w-3 rounded-full bg-pink-500" />

          <div>
            <h3 className="font-semibold">
              Review & Export
            </h3>

            <p className="text-zinc-400">
              Approve screenshots collaboratively and export instantly.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="relative">
      <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20 blur-3xl" />

      <div className="relative rounded-[40px] border border-zinc-800 bg-zinc-900/80 p-6 shadow-2xl backdrop-blur">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div>
            <h3 className="text-lg font-bold">
              DocuFrame Dashboard
            </h3>

            <p className="text-sm text-zinc-400">
              Screenshot Automation Queue
            </p>
          </div>

          <div className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
            Live
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-zinc-800 bg-black/50 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">
                  Login Flow Capture
                </p>

                <p className="text-sm text-zinc-400">
                  English • Desktop
                </p>
              </div>

              <div className="text-sm text-green-400">
                Completed
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-black/50 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">
                  Dashboard Localization
                </p>

                <p className="text-sm text-zinc-400">
                  Japanese • Mobile
                </p>
              </div>

              <div className="text-sm text-yellow-400">
                Processing
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-black/50 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">
                  Billing Export Pack
                </p>

                <p className="text-sm text-zinc-400">
                  German • Tablet
                </p>
              </div>

              <div className="text-sm text-blue-400">
                Export Ready
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-zinc-400">
              AI Workflow Progress
            </span>

            <span className="font-semibold">
              84%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="relative z-10 border-t border-zinc-800 px-6 py-24">
  <div className="mx-auto max-w-7xl">
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
        Trusted By Modern SaaS Teams
      </p>

      <h2 className="mt-4 text-5xl font-black">
        Teams Save Hundreds Of Hours
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
        Product, support, and documentation teams use DocuFrame
        to automate screenshot generation and reduce manual work.
      </p>
    </div>

    <div className="mt-16 grid gap-6 md:grid-cols-3">
      <div className="rounded-[32px] border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-500/20 text-xl font-bold text-purple-400">
            C
          </div>

          <div>
            <h3 className="font-bold">
              CloudSync
            </h3>

            <p className="text-sm text-zinc-400">
              Product Operations
            </p>
          </div>
        </div>

        <p className="mt-6 text-lg leading-8 text-zinc-300">
          “DocuFrame reduced our release documentation workload by 80%.
          What previously took two days now takes under 30 minutes.”
        </p>
      </div>

      <div className="rounded-[32px] border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/20 text-xl font-bold text-blue-400">
            S
          </div>

          <div>
            <h3 className="font-bold">
              SecureStack
            </h3>

            <p className="text-sm text-zinc-400">
              Enterprise Documentation
            </p>
          </div>
        </div>

        <p className="mt-6 text-lg leading-8 text-zinc-300">
          “Localization automation alone saved our team hundreds of hours
          across multilingual product documentation.”
        </p>
      </div>

      <div className="rounded-[32px] border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-pink-500/20 text-xl font-bold text-pink-400">
            D
          </div>

          <div>
            <h3 className="font-bold">
              DevPilot
            </h3>

            <p className="text-sm text-zinc-400">
              SaaS Infrastructure
            </p>
          </div>
        </div>

        <p className="mt-6 text-lg leading-8 text-zinc-300">
          “The review workflow and export system made collaboration
          between design, QA, and docs teams seamless.”
        </p>
      </div>
    </div>

    <div className="mt-20 grid gap-6 rounded-[40px] border border-zinc-800 bg-zinc-900/50 p-10 backdrop-blur md:grid-cols-3">
      <div className="text-center">
        <h3 className="text-5xl font-black text-purple-400">
          12k+
        </h3>

        <p className="mt-3 text-zinc-400">
          Screenshots Automated
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-5xl font-black text-blue-400">
          35+
        </h3>

        <p className="mt-3 text-zinc-400">
          Supported Languages
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-5xl font-black text-pink-400">
          98%
        </h3>

        <p className="mt-3 text-zinc-400">
          Export Accuracy
        </p>
      </div>
    </div>
  </div>
</section>
<section className="relative z-10 border-t border-zinc-800 px-6 py-24">
  <div className="mx-auto max-w-7xl">
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
        Pricing
      </p>

      <h2 className="mt-4 text-5xl font-black">
        Simple Pricing For Growing Teams
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
        Scale documentation automation across teams,
        languages, and release workflows.
      </p>
    </div>

    <div className="mt-20 grid gap-8 lg:grid-cols-3">
      <div className="rounded-[40px] border border-zinc-800 bg-zinc-900/60 p-10 backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
          Starter
        </p>

        <h3 className="mt-6 text-6xl font-black">
          $49
        </h3>

        <p className="mt-2 text-zinc-400">
          per month
        </p>

        <ul className="mt-10 space-y-4 text-zinc-300">
          <li>✓ 100 screenshots/month</li>
          <li>✓ Basic localization</li>
          <li>✓ PNG & JPG export</li>
          <li>✓ AI annotations</li>
        </ul>

        <button className="mt-10 w-full rounded-2xl border border-zinc-700 px-6 py-4 font-semibold transition hover:bg-zinc-800">
          Start Free Trial
        </button>
      </div>

      <div className="relative overflow-hidden rounded-[40px] border border-purple-500 bg-zinc-900/80 p-10 shadow-2xl shadow-purple-500/10 backdrop-blur">
        <div className="absolute right-4 top-4 rounded-full bg-purple-500 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
          Most Popular
        </div>

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
          Team
        </p>

        <h3 className="mt-6 text-6xl font-black">
          $199
        </h3>

        <p className="mt-2 text-zinc-400">
          per month
        </p>

        <ul className="mt-10 space-y-4 text-zinc-300">
          <li>✓ Unlimited screenshots</li>
          <li>✓ Multi-language automation</li>
          <li>✓ Team collaboration</li>
          <li>✓ Review workflows</li>
          <li>✓ AI export optimization</li>
        </ul>

        <button className="mt-10 w-full rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:scale-[1.02]">
          Start Free Trial
        </button>
      </div>

      <div className="rounded-[40px] border border-zinc-800 bg-zinc-900/60 p-10 backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
          Enterprise
        </p>

        <h3 className="mt-6 text-6xl font-black">
          Custom
        </h3>

        <p className="mt-2 text-zinc-400">
          contact sales
        </p>

        <ul className="mt-10 space-y-4 text-zinc-300">
          <li>✓ SSO Authentication</li>
          <li>✓ Audit Logs</li>
          <li>✓ Dedicated infrastructure</li>
          <li>✓ Advanced RBAC</li>
          <li>✓ Priority support</li>
        </ul>

        <button className="mt-10 w-full rounded-2xl border border-zinc-700 px-6 py-4 font-semibold transition hover:bg-zinc-800">
          Contact Sales
        </button>
      </div>
    </div>
  </div>
</section>
<section className="relative z-10 border-t border-zinc-800 px-6 py-24">
  <div className="mx-auto max-w-7xl">
    <div className="rounded-[40px] border border-zinc-800 bg-zinc-900/60 p-12 backdrop-blur">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
            Enterprise Security
          </p>

          <h2 className="mt-4 text-5xl font-black leading-tight">
            Built For Modern Enterprise Teams
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            DocuFrame is designed with enterprise-grade security,
            auditability, and compliance standards for modern SaaS organizations.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-zinc-800 bg-black/40 p-6">
            <h3 className="text-xl font-bold">
              SOC2 Ready
            </h3>

            <p className="mt-3 text-zinc-400">
              Secure infrastructure and operational standards.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-black/40 p-6">
            <h3 className="text-xl font-bold">
              GDPR Compliance
            </h3>

            <p className="mt-3 text-zinc-400">
              Privacy-first architecture for global teams.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-black/40 p-6">
            <h3 className="text-xl font-bold">
              SSO Authentication
            </h3>

            <p className="mt-3 text-zinc-400">
              Enterprise identity provider integration.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-black/40 p-6">
            <h3 className="text-xl font-bold">
              Encrypted Storage
            </h3>

            <p className="mt-3 text-zinc-400">
              Secure screenshot and export asset protection.
            </p>
          </div>
        </div>
      </div>
    </div>

    <footer className="mt-24 border-t border-zinc-800 pt-16">
      <div className="grid gap-12 md:grid-cols-4">
        <div>
          <h3 className="text-3xl font-black">
            DocuFrame
          </h3>

          <p className="mt-4 text-zinc-400">
            AI Documentation Infrastructure for modern SaaS teams.
          </p>
        </div>

        <div>
          <h4 className="font-bold">
            Product
          </h4>

          <ul className="mt-4 space-y-3 text-zinc-400">
            <li>Features</li>
            <li>Pricing</li>
            <li>Security</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold">
            Company
          </h4>

          <ul className="mt-4 space-y-3 text-zinc-400">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold">
            Legal
          </h4>

          <ul className="mt-4 space-y-3 text-zinc-400">
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
            <li>Cookie Policy</li>
            <li>Compliance</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 text-sm text-zinc-500 md:flex-row">
        <p>
          © 2026 DocuFrame. All rights reserved.
        </p>

        <div className="flex gap-6">
          <span>SOC2 Ready</span>
          <span>GDPR</span>
          <span>Enterprise SSO</span>
        </div>
      </div>
    </footer>
  </div>
</section>
<section
  id="waitlist"
  className="relative z-10 border-t border-zinc-800 px-6 py-24"
>
  <div className="mx-auto max-w-4xl rounded-[40px] border border-zinc-800 bg-zinc-900/60 p-12 text-center backdrop-blur">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
      Join The Beta
    </p>

    <h2 className="mt-4 text-5xl font-black leading-tight">
      Be First To Experience AI Documentation Automation
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
      Join the DocuFrame waitlist and get early access,
      feature updates, and private beta invitations.
    </p>

    <form
      action="https://formspree.io/f/xaqvalgk"
      method="POST"
      className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row"
    >
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your work email"
        className="flex-1 rounded-2xl border border-zinc-700 bg-black/40 px-6 py-4 text-white outline-none transition focus:border-purple-500"
      />

      <button
        type="submit"
        className="rounded-2xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-[1.02]"
      >
        Join Waitlist
      </button>
    </form>

    <p className="mt-6 text-sm text-zinc-500">
      No spam. Early access only.
    </p>
  </div>
</section>
    </main>
  )
}