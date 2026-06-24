export default function Prerequi() {
  const requirements = [
    {
      title: "Node.js 18+",
      description:
        "CommitPilot nécessite Node.js version 18 ou supérieure.",
    },
    {
      title: "Git",
      description:
        "Votre machine doit disposer de Git installé et configuré.",
    },
    {
      title: "Dépôt Git",
      description:
        "Le projet doit être initialisé avec Git avant d'utiliser CommitPilot.",
    },
    {
      title: "Compte Groq",
      description:
        "Un compte Groq est nécessaire pour utiliser les fonctionnalités IA.",
    },
  ];

  return (
    <section
      id="prerequisites"
      className="border-b border-zinc-800 py-10 md:py-16"
    >
      <div className="max-w-4xl">

        <span className="text-sm font-medium text-[#1B4FD8] ">
          Prérequis
        </span>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1E1E2E] md:text-4xl">
          Avant de commencer
        </h2>

        <p className="mt-5 text-base leading-relaxed text-[#3D3D4E] md:text-lg">
          Assurez-vous que votre environnement répond aux exigences
          suivantes avant d'installer CommitPilot.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">

          {requirements.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-zinc-800 bg-[#1E1E2E]/90 p-5 transition hover:border-blue-500/30"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                ✓
              </div>

              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-zinc-400 md:text-base">
                {item.description}
              </p>
            </div>
          ))}

        </div>

        {/* Vérification rapide */}

        <div className="mt-10 rounded-2xl border border-zinc-800 bg-[#1E1E2E]/90 p-5">

          <h3 className="text-lg font-semibold text-white">
            Vérification rapide
          </h3>

          <p className="mt-3 text-zinc-400">
            Vérifiez votre version de Node.js :
          </p>

          <div className="mt-4 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">

            <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>

              <span className="ml-2 text-xs text-zinc-500">
                Terminal
              </span>
            </div>

            <pre className="overflow-x-auto p-4 text-sm text-blue-400">
{`node -v`}
            </pre>

          </div>

        </div>

      </div>
    </section>
  );
}