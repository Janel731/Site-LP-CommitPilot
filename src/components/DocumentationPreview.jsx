import { ArrowRight, Check } from "lucide-react";

export default function DocumentationPreview() {
  const items = [
    "Guide d'installation rapide",
    "Liste complète des commandes",
    "Exemples d'utilisation",
    "Configuration avancée",
    "Bonnes pratiques Git",
  ];

  return (
    <section className="py-32 bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <div className="max-w-6xl w-full">

            <div className="flex flex-col gap-10 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm md:flex-row md:items-center md:justify-between lg:p-12">

              {/* Left */}
              <div className="md:w-1/2">
                <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                  Documentation
                </span>

                <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl">
                  Tout ce qu'il faut pour maîtriser CommitPilot
                </h2>

                <p className="mt-4 text-zinc-400">
                  Découvrez les commandes, les exemples pratiques et les
                  configurations avancées pour tirer le meilleur parti de
                  CommitPilot.
                </p>

                <a
                  href="/documentation"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
                >
                  Voir la documentation
                  <ArrowRight size={18} />
                </a>
              </div>

              {/* Right */}
              <div className="md:w-1/3">
                <ul className="space-y-4">
                  {items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center text-zinc-300"
                    >
                      <Check className="mr-3 h-5 w-5 text-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}