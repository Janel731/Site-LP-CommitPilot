import React from "react";



export default function ReviewsCTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center rounded-3xl bg-gradient-to-b from-blue-700 to-blue-950 p-10 md:p-16 text-white">

        {/* Users */}
        <div className="flex flex-wrap items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm backdrop-blur">

          <div className="flex items-center">
            <img
              className="h-7 w-7 rounded-full border-2 border-white"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
              alt=""
            />

            <img
              className="-ml-2 h-7 w-7 rounded-full border-2 border-white"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
              alt=""
            />

            <img
              className="-ml-2 h-7 w-7 rounded-full border-2 border-white"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50"
              alt=""
            />
          </div>

          <p className="ml-2 font-medium">
            Déjà adopté par des développeurs passionnés
          </p>
        </div>

        {/* Title */}
        <h2 className="mt-6 max-w-3xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Découvrez ce que les développeurs pensent de CommitPilot
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-blue-100">
          Consultez les retours, expériences et avis des utilisateurs qui
          automatisent déjà leur workflow Git avec CommitPilot.
        </p>

        {/* Button */}
        <a
          href="/avis"
          className="mt-8 rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase text-blue-700 transition hover:scale-105 hover:bg-blue-50"
        >
          Voir les avis
        </a>
      </div>
    </section>
  );
}