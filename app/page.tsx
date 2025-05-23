import Link from "next/link";

const Home = () => {
  return (
    <main className="bg-[#1a1a1a] text-gray-100 min-h-screen ">
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
};

export default Home;

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-[#121212] sticky h-20 top-0 z-50 border-b border-gray-700 shadow-xl">
      <h1 className="text-3xl font-bold tracking-wide ">zs</h1>
      <nav className="space-x-6 text-sm font-light">
        <Link href="#contact" className="hover:text-white transition">
          About
        </Link>
        <Link href="#projects" className="hover:text-white transition">
          Projects
        </Link>
        <Link href="#contact" className="hover:text-white transition">
          Contact
        </Link>
      </nav>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-120 text-center py-40 px-4 bg-[#1a1a1a] border-y border-gray-700">
      <h2 className="text-6xl md:text-7xl  mb-6 leading-tight tracking-tight">
        Hi, I'm Zach
      </h2>
      <p className="text-lg md:text-xl max-w-2xl mb-10 text-gray-400 italic font-light">
        Tired of slow devs, sluggish sites, and overcomplicated apps? Me too.
      </p>
      <div className={`gap-x-3 flex sm:flex-row flex-col gap-y-4`}>
        <Link
          href="#projects"
          className="px-6 py-3 border border-gray-500 w-52 text-gray-300 font-medium rounded-full hover:bg-white hover:text-black transition"
        >
          Explore Projects
        </Link>

        <Link
          href="/blog"
          className="px-6 py-3 border border-gray-500 w-52 text-gray-300 font-medium rounded-full hover:bg-white hover:text-black transition"
        >
          Blog
        </Link>
      </div>
    </section>
  );
};

const sampleProjects = [
  {
    title: "EZHomesteading",
    description:
      "A peer-to-peer marketplace connecting small organic farms & gardens with locals.",
    tech: ["Next.js", "Expo", "MongoDB"],
    link: "ezhomesteading.com",
    localLink: "projects/ezhomesteading",
  },
  {
    title: "E-Money",
    description: "A minimal real time monopoly funds & properties tracker.",
    tech: ["Go", "WebSocket", "Next.js"],
    link: "emoney.club",
    localLink: "projects/emoney",
  },
  {
    title: "Bocas Adventures",
    description:
      "A site exposing travellers to the beauty of island life in Bocas del Toro & connecting them to local attractions.",
    tech: ["Next.js"],
    link: "bocasadventures.com",
    localLink: "projects/bocas-adventures",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 px-6 max-w-7xl mx-auto">
      <h3 className="text-4xl  mb-20 text-center tracking-wide">
        Featured Works
      </h3>
      <div className="grid gap-14 md:grid-cols-2">
        {sampleProjects.map((project, i) => (
          <div
            key={i}
            className="bg-[#121212] rounded-2xl p-8 border border-gray-700 hover:border-gray-400 transition duration-300"
          >
            <h4 className="text-2xl mb-4 text-white uppercase tracking-widest ">
              {project.title}
            </h4>
            <p className="mb-6 text-gray-400 italic font-light">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-600"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className={`flex flex-row justify-between`}>
              <Link
                href={project.localLink}
                className="text-sm text-gray-400 hover:text-white transition"
              >
                View Project →
              </Link>
              <Link
                href={project.localLink}
                className="text-sm text-gray-400 hover:text-white transition"
              >
                Go to Site →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

function Footer() {
  return (
    <footer
      id="contact"
      className="text-center p-16 mt-32 bg-[#121212] border-t border-gray-700"
    >
      <p className="mb-6 text-gray-500 italic font-light">
        Let's build something that meets your needs on a timeline you deserve.
      </p>
      <div className="space-x-6 text-sm">
        <Link
          href="mailto:zach.short@fantomworks.com"
          className="hover:text-white transition"
        >
          Email
        </Link>
        <Link
          href="https://github.com/zachmshort"
          className="hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/zachary-short-12a1ab2a8/"
          className="hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
      </div>
    </footer>
  );
}
