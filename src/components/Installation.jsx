export default function Installation() {
  return (
    <section
      id="installation"
      className="scroll-mt-24 border-b border-zinc-800 py-10 md:py-16"
    >
      <div className="max-w-4xl">

        <span className="text-sm font-medium text-blue-400">
          Installation
        </span>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Installer CommitPilot
        </h2>

        <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-400 md:text-lg">
          Installez CommitPilot globalement sur votre machine afin
          d'utiliser la commande <code className="text-blue-400">
          commitpilot</code> depuis n'importe quel projet Git.
        </p>


        {/* Terminal */}

        <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">

          <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">

            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />

            <span className="ml-2 text-xs text-zinc-500">
              Terminal
            </span>

          </div>


          <pre className="overflow-x-auto p-4 text-sm text-blue-400 md:p-6">
{`npm install -g @janel731/commitpilot`}
          </pre>


        </div>


        {/* Explication */}

        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 md:p-6">

          <h3 className="text-lg font-semibold text-white">
            Vérifier l'installation
          </h3>


          <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
            Après l'installation, vérifiez que CommitPilot est bien
            disponible dans votre terminal.
          </p>


          <div className="mt-5 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">

            <div className="border-b border-zinc-800 px-4 py-3">
              <span className="text-xs text-zinc-500">
                CommitPilot CLI
              </span>
            </div>


            <pre className="overflow-x-auto p-4 text-sm text-zinc-300">
{`commitpilot --version`}
            </pre>

          </div>

        </div>


        {/* Success */}

        <div className="mt-8 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">

          <p className="text-sm text-emerald-400">
            ✓ CommitPilot est maintenant installé et prêt à être configuré.
          </p>

        </div>


      </div>
    </section>
  );
}