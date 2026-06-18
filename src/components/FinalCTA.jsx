import React from "react";


export default function FinalCTA() {
  return (
    <section className="overflow-hidden py-24">
      <div className="relative mx-auto max-w-6xl px-6">

        {/* Glow */}
        <div className="absolute inset-0 bg-blue-500/10 blur-3xl"></div>

        {/* Card */}
        <div className="relative rounded-3xl border border-blue-500/20 bg-gradient-to-b from-blue-900/50 to-zinc-950 p-10 text-center md:p-16">

          {/* Badge */}
          <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            🚀 Commencez dès aujourd'hui
          </div>

          {/* Title */}
          <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Automatisez votre
            <br />
            workflow Git
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Analysez votre code, générez des commits intelligents et
            simplifiez votre processus de développement avec CommitPilot.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <a
              href="/documentation"
              className="rounded-xl bg-blue-600 px-8 py-4 font-medium text-white transition hover:bg-blue-500"
            >
              Voir la documentation
            </a>

            <a
              href="#installation"
              className="rounded-xl border border-zinc-700 px-8 py-4 font-medium text-zinc-300 transition hover:border-zinc-600 hover:bg-zinc-900"
            >
              Installer CommitPilot
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}