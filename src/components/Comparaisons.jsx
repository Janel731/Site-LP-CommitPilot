import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
const Comparaisons = () => {
  return (
    <section className="w-full py-24 px-6 bg-[#121213] rounded-t-3xl">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <BlurFade delay={0.25} inView>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Une seule commande.
              <br />
              Un workflow complet.
            </h2>
          </BlurFade>

          <BlurFade delay={0.25} inView>
          <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">
            Remplacez plusieurs commandes Git par une seule action intelligente.
          </p>
          </BlurFade>
        </div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Avant */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
            <div className="px-5 py-4 border-b border-zinc-800 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>

              <span className="ml-3 text-zinc-400 text-sm">❌ Avant</span>
            </div>

            <pre className="p-6 text-zinc-300 text-sm overflow-x-auto">
              {`git status
git add .
git commit -m ""
git push`}
            </pre>

            <div className="px-6 pb-6">
              <p className="text-zinc-500">
                Multiples étapes manuelles, perte de temps et répétition.
              </p>
            </div>
          </div>

          {/* Après */}
          <div className="bg-blue-950/30 border border-blue-500/30 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.15)]">
            <div className="px-5 py-4 border-b border-blue-500/20 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>

              <span className="ml-3 text-blue-400 text-sm">🚀 Après</span>
            </div>

            <pre className="p-6 text-blue-300 text-sm overflow-x-auto">
              {`commitpilot init
commitpilot start
              
              `}
            </pre>

            <div className="px-6 pb-6">
              <p className="text-zinc-400">
                Une seule commande pour automatiser votre workflow Git.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparaisons;
