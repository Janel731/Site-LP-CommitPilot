import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-16">
      <div className="container mx-auto px-6">

        <div className="flex flex-col items-center">

          {/* Logo */}
          <div className="mb-8">
            <h2 className="text-4xl font-black tracking-tight text-white">
              Commit
              <span className="text-blue-500">Pilot</span>
            </h2>

            <p className="mt-2 text-center text-sm text-zinc-500">
              Automatiser les commits Git n'a jamais été aussi simple.
            </p>
          </div>

          {/* Navigation */}
          <nav className="mb-10 flex flex-wrap justify-center gap-6 text-zinc-400">
            <a href="/" className="hover:text-blue-400 transition">
              Accueil
            </a>

            <a href="/documentation" className="hover:text-blue-400 transition">
              Documentation
            </a>

            <a href="/avis" className="hover:text-blue-400 transition">
              Avis
            </a>

            <a href="#installation" className="hover:text-blue-400 transition">
              Installation
            </a>
          </nav>

          {/* Socials */}
          <div className="mb-10 flex gap-4">

            <a
              href="#"
              className="rounded-full border border-zinc-800 p-3 text-zinc-400 transition hover:border-blue-500 hover:text-blue-400"
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="#"
              className="rounded-full border border-zinc-800 p-3 text-zinc-400 transition hover:border-blue-500 hover:text-blue-400"
            >
              <FaTwitter size={18} />
            </a>

            <a
              href="#"
              className="rounded-full border border-zinc-800 p-3 text-zinc-400 transition hover:border-blue-500 hover:text-blue-400"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="rounded-full border border-zinc-800 p-3 text-zinc-400 transition hover:border-blue-500 hover:text-blue-400"
            >
              <FaLinkedin size={18} />
            </a>

          </div>

          {/* Newsletter */}
          <div className="mb-10 w-full max-w-lg">

            <h3 className="mb-2 text-center text-lg font-semibold text-white">
              Restez informé des nouveautés
            </h3>

            <p className="mb-6 text-center text-sm text-zinc-400">
              Recevez les nouvelles fonctionnalités, mises à jour et annonces de CommitPilot.
            </p>

            <form className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-blue-500"
              />

              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
              >
                S'inscrire
              </button>
            </form>

          </div>

          {/* Copyright */}
          <div className="border-t border-zinc-800 pt-6 text-center text-sm text-zinc-500 w-full">
            © {new Date().getFullYear()} CommitPilot. Tous droits réservés.
          </div>

        </div>
      </div>
    </footer>
  );
}