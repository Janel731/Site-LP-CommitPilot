import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      question: "Quand dois-je exécuter commitpilot init ?",
      answer:
        "La commande commitpilot init est généralement exécutée une seule fois lors de la configuration initiale de votre projet.",
    },
    {
      question: "Quand utiliser commitpilot start ?",
      answer:
        "Utilisez commitpilot start chaque fois que vous souhaitez analyser les modifications de votre projet et générer un commit automatiquement.",
    },
    {
      question: "CommitPilot modifie-t-il mon code ?",
      answer:
        "Non. CommitPilot analyse uniquement les fichiers modifiés afin de comprendre les changements et générer un message de commit pertinent.",
    },
    {
      question: "Ai-je besoin d'une clé API Groq ?",
      answer:
        "Oui. Une clé API Groq est nécessaire pour utiliser les fonctionnalités d'intelligence artificielle de CommitPilot.",
    },
    {
      question: "Puis-je utiliser CommitPilot sur plusieurs projets ?",
      answer:
        "Oui. Une fois installé globalement, CommitPilot peut être utilisé sur tous vos dépôts Git.",
    },
    {
      question: "Git doit-il être installé ?",
      answer:
        "Oui. CommitPilot repose sur Git pour analyser les modifications et créer les commits.",
    }
  ];

  return (
    <section
      id="faq"
      className="scroll-mt-24 py-10 md:py-16"
    >
      <div className="max-w-4xl">

        <span className="text-sm font-medium text-[#1B4FD8]">
          FAQ
        </span>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1E1E2E] md:text-4xl">
          Questions fréquentes
        </h2>

        <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#3D3D4E] md:text-lg">
          Tout ce qu'il faut savoir pour utiliser CommitPilot efficacement.
        </p>

        <div className="mt-10 space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#1E1E2E]"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-white">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`h-5 w-5 text-zinc-400 transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="border-t border-zinc-800 px-5 py-4">
                  <p className="leading-relaxed text-zinc-400">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}

        </div>

        {/* Bloc support */}

        <div className="mt-10 rounded-2xl border border-blue-500/20 bg-[#1B4FD8]/25 p-6">

          <h3 className="text-lg font-semibold text-[#1B4FD8]">
            Besoin d'aide supplémentaire ?
          </h3>

          <p className="mt-2 text-[#3D3D4E] ">
            Si vous ne trouvez pas la réponse à votre question,
            veuillez nous écrire sur <a class="text-[#1B4FD8]" href="https://www.facebook.com/JanelGuedemey" target="_blank">Facebook</a> ou via <a class="text-green-700" href="https://wa.me/22951212249" target="_blank">WhatsApp</a>.
          </p>

        </div>

      </div>
    </section>
  );
}