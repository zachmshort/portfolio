export default function Home() {
  return (
    <main className="bg-[#1a1a1a] text-gray-100 min-h-screen ">
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}

export function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-[#121212] sticky h-20 top-0 z-50 border-b border-gray-700 shadow-xl">
      <h1 className="text-3xl font-bold tracking-wide ">zs</h1>
      <nav className="space-x-6 text-sm font-light">
        <a href="#contact" className="hover:text-white transition">
          About
        </a>
        <a href="#projects" className="hover:text-white transition">
          Projects
        </a>
        <a href="#contact" className="hover:text-white transition">
          Contact
        </a>
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center h-120 text-center py-40 px-4 bg-[#1a1a1a] border-y border-gray-700">
      <h2 className="text-6xl md:text-7xl  mb-6 leading-tight tracking-tight">
        Hi, I'm Zach
      </h2>
      <p className="text-lg md:text-xl max-w-2xl mb-10 text-gray-400 italic font-light">
        Tired of slow devs, sluggish sites, and overcomplicated apps? Me too.
      </p>
      <a
        href="#projects"
        className="px-6 py-3 border border-gray-500 text-gray-300 font-medium rounded-full hover:bg-white hover:text-black transition"
      >
        Explore Projects
      </a>
    </section>
  );
}

const sampleProjects = [
  {
    title: "EZHomesteading",
    description:
      "A peer-to-peer marketplace connected small organic farms & gardens with locals.",
    tech: ["Next.js", "Expo", "MongoDB"],
    link: "projects/ezhomesteading",
  },
  {
    title: "E-Money",
    description: "A minimal real time monopoly funds & properties tracker.",
    tech: ["Go", "WebSocket", "Next.js"],
    link: "projects/emoney",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
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
            <a
              href={project.link}
              className="text-sm text-gray-400 hover:text-white transition"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

// components/Footer.tsx
export function Footer() {
  return (
    <footer
      id="contact"
      className="text-center p-16 mt-32 bg-[#121212] border-t border-gray-700"
    >
      <p className="mb-6 text-gray-500 italic font-light">
        Let's build something that meets your needs on a timeline you deserve.
      </p>
      <div className="space-x-6 text-sm">
        <a
          href="mailto:zach.short@fantomworks.com"
          className="hover:text-white transition"
        >
          Email
        </a>
        <a
          href="https://github.com/zachmshort"
          className="hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/zachary-short-12a1ab2a8/"
          className="hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
