export default function Workflow() {
  return (
    <section
      id="workflow"
      className="scroll-mt-24 border-b border-zinc-800 py-10 md:py-16"
    >
      <div className="max-w-5xl">

        <span className="text-sm font-medium text-blue-400">
          Workflow
        </span>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Simplifiez votre workflow Git
        </h2>

        <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-400 md:text-lg">
          CommitPilot réduit plusieurs étapes manuelles à une seule
          commande. Concentrez-vous sur votre code, pas sur la gestion
          des commits.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">

          {/* Avant */}

          <div className="overflow-hidden rounded-2xl border border-red-500/20 bg-red-500/5">

            <div className="border-b border-red-500/20 px-5 py-4">
              <h3 className="font-semibold text-red-400">
                Avant
              </h3>
            </div>

            <div className="p-5">

              <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">

                <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>

                  <span className="ml-2 text-xs text-zinc-500">
                    Terminal
                  </span>
                </div>

                <pre className="overflow-x-auto p-4 text-sm text-zinc-300">
{`git add .

git commit -m "..."

git push`}
                </pre>

              </div>

            </div>

          </div>

          {/* Après */}

          <div className="overflow-hidden rounded-2xl border border-blue-500/20 bg-blue-500/5">

            <div className="border-b border-blue-500/20 px-5 py-4">
              <h3 className="font-semibold text-blue-400">
                Avec CommitPilot
              </h3>
            </div>

            <div className="p-5">

              <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">

                <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>

                  <span className="ml-2 text-xs text-zinc-500">
                    CommitPilot CLI
                  </span>
                </div>

                <pre className="overflow-x-auto p-4 text-sm text-blue-400">
{`commitpilot start`}
                </pre>

              </div>

            </div>

          </div>

        </div>

        {/* Résultat */}

        <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">

          <h3 className="text-xl font-semibold text-white">
            Résultat
          </h3>

          <div className="mt-6 grid gap-4 md:grid-cols-3">

            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
              <div className="text-lg text-emerald-400">
                ✓
              </div>

              <h4 className="mt-3 font-medium text-white">
                Analyse
              </h4>

              <p className="mt-2 text-sm text-zinc-400">
                Détection automatique des modifications du projet.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
              <div className="text-lg text-emerald-400">
                ✓
              </div>

              <h4 className="mt-3 font-medium text-white">
                Commit
              </h4>

              <p className="mt-2 text-sm text-zinc-400">
                Génération intelligente du message de commit.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
              <div className="text-lg text-emerald-400">
                ✓
              </div>

              <h4 className="mt-3 font-medium text-white">
                Productivité
              </h4>

              <p className="mt-2 text-sm text-zinc-400">
                Moins de commandes, plus de temps pour coder.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}