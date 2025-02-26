import { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if user has previously set a preference
    const savedPreference = localStorage.getItem("darkMode");
    if (savedPreference !== null) {
      return JSON.parse(savedPreference);
    }
    // Otherwise use system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Listen for system color scheme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't manually set a preference
      if (localStorage.getItem("darkMode") === null) {
        setDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    // Save user preference
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen ${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        aria-label="Toggle theme"
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      <main className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2 dark:text-white">Magesh K</h1>
          <h2 className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            Frontend Developer
          </h2>
          <div className="flex justify-center gap-4 mb-4">
            <a
              href="mailto:mageshkumar1598@gmail.com"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            <a
              href="tel:+918248054655"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Phone className="w-4 h-4" />
              <span>Phone</span>
            </a>
            <a
              href="https://github.com/mageshk98"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mageshkumarofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            With over 7 years of experience in web development, I specialize in
            ReactJS and JavaScript, crafting high-performance, scalable
            applications that elevate user experiences. As a self-taught,
            proactive developer, I focus on reusable components, efficient
            development, and performance optimization to deliver seamless and
            impactful solutions.
            <br />
            <br />I hold a Bachelor's in Computer Applications from the
            University of Madras and currently thrive as a Senior Software
            Engineer at Kissflow. I take ownership of projects, ensuring
            precision, quality, and innovation in every solution I build. I
            excel in both independent and team environments, collaborating
            closely with cross-functional teams to develop robust, scalable
            solutions that prioritize UI, functionality, and customer
            satisfaction.
            <br />
            <br />
            Passionate about continuous learning and technological innovation,
            I'm always exploring ways to push the boundaries of frontend
            development. 🚀 Let's connect and chat about ReactJS, performance
            optimization, and creating exceptional user experiences!
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">
            Work Experience
          </h2>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold dark:text-white">
                    Senior Software Engineer
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">Kissflow</p>
                </div>
                <span className="text-gray-500 dark:text-gray-400">
                  Apr 2021 - Present
                </span>
              </div>

              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>
                  Led development of the core revenue module, delivering stable
                  and reusable components for client needs.
                </li>
                <li>
                  Worked closely with Product Managers, Designers, and Backend
                  Engineers to drive successful product releases.
                </li>
                <li>
                  Improved performance by implementing Separation of Concerns
                  (SoC), reducing Total Blocking Time by ~25.8%, improving
                  JavaScript execution time by ~11.2%, and enhancing Cumulative
                  Layout Shift (CLS) by ~83.1%.
                </li>
                <li>
                  Optimized React form rendering using colocation techniques,
                  cutting scripting time by ~43% and execution time by ~34% by
                  reducing unnecessary re-renders.
                </li>
                <li>
                  Developed key product features like Scanner and Geolocation, a
                  major selling point of Kissflow.
                </li>
                <li>
                  Strengthened security by implementing input sanitization,
                  preventing XSS attacks and securing user data.
                </li>
                <li>
                  Improved accessibility and user experience by adding keyboard
                  shortcuts, enhancing productivity.
                </li>
                <li>
                  Took full ownership of features, ensuring 100% production
                  quality and on-time delivery.
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold dark:text-white">
                    Web Application Developer
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Jasmin Infotech
                  </p>
                </div>
                <span className="text-gray-500 dark:text-gray-400">
                  Aug 2017 - Apr 2021
                </span>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>
                  Developed a cloud-based Automated Test solution as a Single
                  Page Application (SPA) using React, JavaScript, HTML, and CSS.
                </li>
                <li>
                  Designed wireframes and translated them into fully functional,
                  responsive web pages using Bootstrap.
                </li>
                <li>
                  Worked closely with backend engineers to resolve complex
                  issues in Node.js and MongoDB, integrating APIs and optimizing
                  performance.
                </li>
                <li>
                  Mentored and trained teammates and junior developers in web
                  development best practices.
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold dark:text-white">
                    Software Test Engineer
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Jasmin Infotech
                  </p>
                </div>
                <span className="text-gray-500 dark:text-gray-400">
                  Aug 2016 - Apr 2017
                </span>
              </div>

              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>
                  Worked in certification testing to validate software
                  development kit packages using Automation tools.
                </li>
                <li>
                  Had a responsibility to create, analyze, test, and report the
                  test cases on the quality of products through the entire
                  production cycle.
                </li>
                <li>
                  Organized and prioritized work to complete assignments in a
                  timely, efficient manner.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Skills</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 dark:text-white">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React",
                    "Zustand",
                    "Redux",
                    "Bootstrap",
                    "Tailwind CSS",
                    "Ant Design",
                    "Wireframe",
                    "PWA",
                    "Storybook",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 dark:text-white">
                  Backend & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "NodeJS",
                    "Express",
                    "MongoDB",
                    "Git",
                    "VS Code",
                    "Jenkins",
                    "AWS",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Startup Official Website
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Developed official webpage for Research and Product Development
                firm using Javascript and NodeJS
              </p>
              <a
                href="https://missileingeniator.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Project <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                E-Education Platform with Custom CMS
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Managed a team of 4 software engineers to develop a React-based
                website with a custom CMS for the client, utilizing React,
                NodeJS, Express, and MongoDB
              </p>
              <a
                href="https://rajalas-academy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Project <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Chitty - Chat Application
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Chitty chat is a real time messaging app implemented using React
                JS and Redux.
              </p>
              <a
                href="https://chatapp-seven-omega.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Project <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
