import React from "react";



export default function ReviewsCTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center rounded-3xl bg-gradient-to-b from-blue-700 to-blue-950 p-10 md:p-16 text-white">

        

        {/* Title */}
        <h2 className="mt-6 max-w-3xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
         Que pensez-vous de CommitPilot ?
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