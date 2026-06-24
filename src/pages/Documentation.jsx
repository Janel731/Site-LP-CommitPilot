import FAQ from "@/components/FAQ";
import GroqApi from "@/components/GroqApi";
import Init from "@/components/Init";
import Installation from "@/components/Installation";
import Introduction from "@/components/Introduction";
import Prerequis from "@/components/Prerequis";
import Start from "@/components/Start";
import Workflow from "@/components/Workflow";

import React from "react";

const Documentation = () => {
  return (
    <>
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[260px_1fr] gap-12">
          {/* Sidebar */}
          <aside className="sticky top-24 hidden h-fit lg:block">
            <nav className="space-y-8">
              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#1B4FD8] ">
                  Guide
                </h3>

                <ul className="space-y-2">
                  <li>
                    <a
                      href="#getting-started"
                      className="text-[#1E1E2E] transition hover:text-[#1B4FD8]"
                    >
                      Introduction
                    </a>
                  </li>

                  <li>
                    <a
                      href="#prerequisites"
                      className="text-[#1E1E2E] transition hover:text-[#1B4FD8]"
                    >
                      Prérequis
                    </a>
                  </li>

                  <li>
                    <a
                      href="#installation"
                      className="text-[#1E1E2E] transition hover:text-[#1B4FD8]"
                    >
                      Installation
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#1B4FD8]">
                  Commandes
                </h3>

                <ul className="space-y-2">
                  <li>
                    <a
                      href="#init"
                      className="text-[#1E1E2E] transition hover:text-[#1B4FD8]"
                    >
                      commitpilot init
                    </a>
                  </li>

                   <li>
                    <a
                      href="#groq-api"
                      className="text-[#1E1E2E] transition hover:text-[#1B4FD8]"
                    >
                      Créer votre clé API
                    </a>
                  </li>

                  <li>
                    <a
                      href="#start"
                      className="text-[#1E1E2E] transition hover:text-[#1B4FD8]"
                    >
                      commitpilot start
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#1B4FD8]">
                  Référence
                </h3>

                <ul className="space-y-2">
                  <li>
                    <a
                      href="#workflow"
                      className="text-[#1E1E2E] transition hover:text-[#1B4FD8]"
                    >
                      Workflow
                    </a>
                  </li>

                  <li>
                    <a
                      href="#faq"
                      className="text-[#1E1E2E] transition hover:text-[#1B4FD8]"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </aside>

          {/* Contenu */}
          <main>
            <Introduction />
            <Prerequis />
            <Installation />
            <Init />
            <GroqApi />
            <Start />
            <Workflow />
            <FAQ />
          </main>
        </div>
      </div>
    </>
  );
};

export default Documentation;
