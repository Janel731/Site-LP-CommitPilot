export default function Introduction() {
  return (
    <section
      id="getting-started"
      className="border-b border-zinc-800 pb-12 md:pb-16"
    >
      <div className="w-full max-w-4xl">
        <span className="text-sm font-medium text-blue-400">
          Getting Started
        </span>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          CommitPilot
        </h1>

        <p className="mt-5 text-base leading-relaxed text-zinc-400 md:text-lg">
          CommitPilot est un assistant CLI conçu pour simplifier votre workflow
          Git grâce à l'intelligence artificielle.
        </p>

        <p className="mt-4 text-base leading-relaxed text-zinc-400 md:text-lg">
          Analysez vos modifications, générez des commits cohérents et gagnez du
          temps sur vos projets.
        </p>

        {/* Tags */}

        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "Node.js 18+",
            "Git Repository",
            "Groq API",
            "Windows",
            "Linux",
            "macOS",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-300 md:px-4 md:py-2 md:text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Terminal */}

        <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
          <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />

            <span className="ml-2 text-xs text-zinc-500">CommitPilot CLI</span>
          </div>

          <pre className="overflow-x-auto p-4 text-xs text-zinc-300 md:p-6 md:text-sm">
            {`$ commitpilot start

⚡ Analyse du projet...

✓ Repository détecté

✓ 12 fichiers modifiés

🤖 Génération du commit...

feat: ajout du système d'authentification

✓ Commit créé avec succès`}
          </pre>
        </div>
      </div>
    </section>
  );
}
