import { Terminal, Rocket, GitCommit } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Terminal className="h-6 w-6" />,
      number: "01",
      title: "Installation",
      description:
        "Installez CommitPilot directement dans votre terminal et préparez votre environnement Git.",
      command: "npm install -g commitpilot",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      number: "02",
      title: "Lancement",
      description:
        "Lancez une seule commande pour analyser votre projet et démarrer l'automatisation.",
      command: "commitpilot start",
    },
    {
      icon: <GitCommit className="h-6 w-6" />,
      number: "03",
      title: "Commit",
      description:
        "CommitPilot analyse vos changements et crée un commit propre automatiquement.",
      command: "feat: Mise à jour du système de tri",
    },
  ];

  return (
    <section className="py-32 bg-neutral-950">
      <div className="container mx-auto px-6 ">

        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Comment ça fonctionne ?
          </span>

          <h2 className="mt-6 text-4xl font-semibold text-white lg:text-5xl">
            De votre code à un commit propre
            <br />
            en quelques secondes
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            CommitPilot simplifie votre workflow Git avec une expérience
            rapide et automatisée.
          </p>
        </div>


        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-3">

          {steps.map((step, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-blue-500/40"
            >

              {/* Icon */}
              <div className="mb-6 flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  {step.icon}
                </div>

                <span className="text-4xl font-bold text-zinc-800">
                  {step.number}
                </span>

              </div>


              <h3 className="mb-3 text-xl font-semibold text-white">
                {step.title}
              </h3>


              <p className="mb-6 text-sm leading-relaxed text-zinc-400">
                {step.description}
              </p>


              {/* Terminal */}
              <div className="rounded-xl border border-zinc-800 bg-black p-4">

                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
                </div>

                <code className="text-sm text-blue-400">
                  $ {step.command}
                </code>

              </div>


            </div>
          ))}

        </div>

      </div>
    </section>
  );
}