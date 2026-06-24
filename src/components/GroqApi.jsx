export default function GroqApi() {
  const steps = [
    {
      number: "01",
      title: "Accéder à Groq Console",
      description:
        "Connectez-vous à votre compte Groq et ouvrez votre espace développeur.",
    },
    {
      number: "02",
      title: "Créer une clé API",
      description:
        "Allez dans la section API Keys puis générez une nouvelle clé.",
    },
    {
      number: "03",
      title: "Copier la clé",
      description:
        "Copiez immédiatement votre clé API avant de fermer l'onglet.",
    },
  ];

  return (
    <section
      id="groq-api"
      className="scroll-mt-24 border-b border-zinc-800 py-10 md:py-16"
    >
      <div className="max-w-4xl">

        <span className="text-sm font-medium text-blue-400">
          Configuration
        </span>


        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Créer une clé API Groq
        </h2>


        <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-400 md:text-lg">
          CommitPilot utilise l'intelligence artificielle de Groq pour
          analyser votre projet et générer des commits pertinents.
          Une clé API est nécessaire pour activer cette fonctionnalité.
        </p>



        {/* Warning */}

        <div className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5">

          <h3 className="font-semibold text-yellow-400">
            Important
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-zinc-300 md:text-base">
            Groq affiche votre clé API une seule fois après sa création.
            Pensez à la copier immédiatement et à la conserver dans un
            endroit sécurisé.
          </p>

        </div>



        {/* Steps */}

        <div className="mt-10 grid gap-4 md:grid-cols-3">

          {steps.map((step) => (

            <div
              key={step.number}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5"
            >

              <span className="text-sm font-medium text-blue-400">
                {step.number}
              </span>


              <h3 className="mt-3 font-semibold text-white">
                {step.title}
              </h3>


              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {step.description}
              </p>


            </div>

          ))}

        </div>


         <div className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5">

          <h3 className="font-semibold text-yellow-400">
            Enregrister la clé
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-zinc-300 md:text-base">
            Apres avoir creer la clé revener dans le terminal de votre éditeur de texte et coller la clé dans l'
          </p>

        </div>



        {/* Return terminal */}

        <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">


          <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">

            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />


            <span className="ml-2 text-xs text-zinc-500">
              CommitPilot CLI
            </span>

          </div>


          <pre className="overflow-x-auto p-4 text-sm text-zinc-300 md:p-6">
{`$ commitpilot init

? Enter your Groq API Key:

gsk_xxxxxxxxxxxxxxxxx

✓ API key validated

✓ Setup completed`}
          </pre>


        </div>


      </div>
    </section>
  );
}