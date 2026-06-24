export default function Init() {
  return (
    <section
      id="init"
      className="scroll-mt-24 border-b border-zinc-800 py-10 md:py-16"
    >
      <div className="max-w-4xl">

        <span className="text-sm font-medium text-[#1B4FD8]">
          Configuration
        </span>


        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1E1E2E] md:text-4xl">
          Initialiser CommitPilot
        </h2>


        <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#3D3D4E] md:text-lg">
          Avant même de lancer Commitpilot , vous devez l'initialiser.
          Pour fourni les messages de commit , CommitPilot , utilise en background une IA qui génère les messages. Il vous faut donc activer cette fonction , d'où l'importance de <code className="text-blue-400">
          commitpilot init</code>.
        </p>


        {/* Commande */}

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
{`commitpilot init`}
          </pre>

        </div>



        {/* Fonctionnement */}

        <div className="mt-10 space-y-4">


          <h3 className="text-xl font-semibold text-white">
            Que fait cette commande ?
          </h3>


          <div className="grid gap-4 md:grid-cols-3">


            <div className="rounded-xl border border-zinc-800 bg-[#1E1E2E] p-5">

              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                1
              </div>

              <h4 className="font-medium text-white">
                Vérification
              </h4>

              <p className="mt-2 text-sm text-zinc-400">
                CommitPilot vérifie que votre projet est prêt.
              </p>

            </div>



            <div className="rounded-xl border border-zinc-800 bg-[#1E1E2E] p-5">

              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                2
              </div>

              <h4 className="font-medium text-white">
                Configuration
              </h4>

              <p className="mt-2 text-sm text-zinc-400">
                Votre environnement CommitPilot est configuré.
              </p>

            </div>



            <div className="rounded-xl border border-zinc-800 bg-[#1E1E2E] p-5">

              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                3
              </div>

              <h4 className="font-medium text-white">
                API Groq
              </h4>

              <p className="mt-2 text-sm text-zinc-400">
                Une clé API Groq vous sera demandée.
              </p>

            </div>


          </div>

        </div>



        {/* Exemple */}

        <div className="mt-10">


          <h3 className="mb-4 text-xl font-semibold text-[#1B4FD8]
          ">
            Exemple
          </h3>


          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">

            <div className="border-b border-zinc-800 px-4 py-3">

              <span className="text-xs text-zinc-500">
                CommitPilot CLI
              </span>

            </div>


            <pre className="overflow-x-auto p-4 text-sm text-zinc-300 md:p-6">
{`$ commitpilot init

? Enter your Groq API Key:

gsk_xxxxxxxxxxxxx

✓ Configuration saved

✓ CommitPilot is ready`}
            </pre>


          </div>


        </div>


        {/* Info */}

        <div className="mt-8 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">

          <p className="text-sm text-blue-300">
            Cette étape est  nécessaire une seule fois
            après l'installation de CommitPilot.
          </p>

        </div>


      </div>
    </section>
  );
}