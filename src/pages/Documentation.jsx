import Introduction from "@/components/Introduction";
Prerequis
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
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Guide
                </h3>

                <ul className="space-y-2">
                  <li>
                    <a
                      href="#getting-started"
                      className="text-zinc-400 transition hover:text-white"
                    >
                      Introduction
                    </a>
                  </li>

                  <li>
                    <a
                      href="#prerequisites"
                      className="text-zinc-400 transition hover:text-white"
                    >
                      Prérequis
                    </a>
                  </li>

                  <li>
                    <a
                      href="#installation"
                      className="text-zinc-400 transition hover:text-white"
                    >
                      Installation
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Commandes
                </h3>

                <ul className="space-y-2">
                  <li>
                    <a
                      href="#init"
                      className="text-zinc-400 transition hover:text-white"
                    >
                      commitpilot init
                    </a>
                  </li>

                  <li>
                    <a
                      href="#start"
                      className="text-zinc-400 transition hover:text-white"
                    >
                      commitpilot start
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Référence
                </h3>

                <ul className="space-y-2">
                  <li>
                    <a
                      href="#workflow"
                      className="text-zinc-400 transition hover:text-white"
                    >
                      Workflow
                    </a>
                  </li>

                  <li>
                    <a
                      href="#faq"
                      className="text-zinc-400 transition hover:text-white"
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
            {/* 
            <Installation />
            <Init />
            <GroqApi />
            <Start />
            <Workflow />
            <Faq /> */}
          </main>
        </div>
      </div>
    </>
  );
};

export default Documentation;
