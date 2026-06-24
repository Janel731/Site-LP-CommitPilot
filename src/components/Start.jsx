export default function Start() {
  return (
    <section
      id="start"
      className="scroll-mt-24 border-b border-zinc-800 py-10 md:py-16"
    >
      <div className="max-w-4xl">

        <span className="text-sm font-medium text-blue-400">
          Utilisation
        </span>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
          commitpilot start
        </h2>

        <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-400 md:text-lg">
          Une fois CommitPilot configuré, utilisez la commande
          <code className="mx-1 text-blue-400">
            commitpilot start
          </code>
          pour analyser votre projet et générer automatiquement un commit
          intelligent basé sur les modifications détectées.
        </p>

        {/* Commande */}

        <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">

          <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">

            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>

            <span className="ml-2 text-xs text-zinc-500">
              CommitPilot CLI
            </span>

          </div>

          <pre className="overflow-x-auto p-4 text-sm text-blue-400 md:p-6">
{`commitpilot start`}
          </pre>

        </div>

        {/* Fonctionnement */}

        <div className="mt-10">

          <h3 className="text-xl font-semibold text-white">
            Comment ça fonctionne ?
          </h3>

          <div className="mt-6 grid gap-4 md:grid-cols-3">

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                1
              </div>

              <h4 className="font-medium text-white">
                Analyse
              </h4>

              <p className="mt-2 text-sm text-zinc-400">
                CommitPilot inspecte les fichiers modifiés dans votre dépôt Git.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                2
              </div>

              <h4 className="font-medium text-white">
                Génération IA
              </h4>

              <p className="mt-2 text-sm text-zinc-400">
                L'IA comprend les changements et rédige un message de commit pertinent.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                3
              </div>

              <h4 className="font-medium text-white">
                Commit
              </h4>

              <p className="mt-2 text-sm text-zinc-400">
                Le commit est créé automatiquement avec le message généré.
              </p>
            </div>

          </div>

        </div>

        {/* Exemple */}

        <div className="mt-12">

          <h3 className="mb-4 text-xl font-semibold text-white">
            Exemple complet
          </h3>

          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">

            <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">

              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>

              <span className="ml-2 text-xs text-zinc-500">
                CommitPilot CLI
              </span>

            </div>

            <pre className="overflow-x-auto p-4 text-sm text-zinc-300 md:p-6">
{`$ commitpilot start

⚡ Analyse du projet...

✓ Repository détecté

✓  fichiers modifiés

🤖 Génération du commit...

feat: ajout du système d'authentification

✓ Commit créé avec succès`}
            </pre>

          </div>

        </div>

        {/* Succès */}

        <div className="mt-8 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">

          <p className="text-sm text-emerald-400">
            ✓ Votre historique Git reste propre et cohérent sans avoir à rédiger manuellement vos commits.
          </p>

        </div>

      </div>
    </section>
  );
}