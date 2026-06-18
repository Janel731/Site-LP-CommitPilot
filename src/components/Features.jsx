import React from "react";
import { GitBranch, Bot, Zap } from "lucide-react";
import StartImg from "../assets/commitpilot_Start.webp";
import CommitImg from "../assets/commitpilot_Commit.webp";
import { BlurFade } from "@/components/ui/blur-fade";

const Features = () => {
  const features = [
    {
      icon: <Bot className="h-5 w-5" />,
      title: "Assistant IA",
      description:
        "Analyse automatiquement vos modifications et génère des messages de commit pertinents.",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Workflow Automatisé",
      description:
        "Réduisez plusieurs commandes Git à une seule action intelligente avec CommitPilot.",
    },
    {
      icon: <GitBranch className="h-5 w-5" />,
      title: "Gestion Git Simplifiée",
      description:
        "Travaillez plus efficacement avec une gestion optimisée des commits et des branches.",
    },
  ];

  return (
    <section className="py-32 bg-[#121213]">
      <div className="container mx-auto px-6 overflow-hidden">
        {/* Heading */}
        <div className="mb-20 flex flex-col items-center gap-6 text-center">
          <BlurFade delay={0.25} inView>
            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              Fonctionnalités
            </span>
          </BlurFade>

          <BlurFade delay={0.25} inView>
            <h2 className="text-4xl font-semibold text-white lg:text-5xl">
              Tout ce dont vous avez besoin pour
              <br />
              automatiser votre workflow Git
            </h2>
          </BlurFade>
          <BlurFade delay={0.25} inView>
            <p className="max-w-2xl text-zinc-400">
              CommitPilot simplifie vos tâches répétitives et vous permet de
              vous concentrer sur ce qui compte vraiment : écrire du code.
            </p>
          </BlurFade>
        </div>

        {/* Visual */}
        <div className="container mx-auto px-6">
          <div className="relative mx-auto max-w-screen-xl">
            {/* Glow */}
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl"></div>

            {/* Images */}

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
              <BlurFade delay={0.25} inView>
                <div className="flex items-center justify-center overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-4">
                  <img
                    src={StartImg}
                    alt="CommitPilot Terminal start"
                    className="w-full h-full aspect-video object-contain object-center"
                  />
                </div>
              </BlurFade>
              <BlurFade delay={0.25} inView>
                <div className="flex items-center justify-center overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-4">
                  <img
                    src={CommitImg}
                    alt="CommitPilot Commit"
                    className="w-full h-full aspect-video object-contain object-center"
                  />
                </div>
              </BlurFade>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mx-auto mt-16 grid max-w-screen-lg gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <BlurFade delay={0.25} inView>
              <div
                key={index}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                  {feature.icon}
                </div>

                <h3 className="mb-3 text-lg font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
