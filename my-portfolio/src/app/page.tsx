import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none animate-fade-up">
                Amoda Fernando
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 animate-fade-up [--animation-delay:200ms]">
                Passionate developer with a knack for solving complex problems through code. Mostly self-taught and driven by an unyielding curiosity to explore and master new technologies.
              </p>
            </div>
            <div className="space-x-4 animate-fade-up [--animation-delay:400ms]">
              <Link href="#contact">
                <Button className="px-8">
                  Contact Me
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 animate-fade-up">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-up [--animation-delay:200ms]">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Languages</h3>
              <div className="grid grid-cols-2 gap-2">
                {["JavaScript", "Python", "HTML", "CSS", "SQL", "PHP"].map((lang) => (
                  <div key={lang} className="p-2 bg-background rounded-md shadow-sm">
                    {lang}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Tools</h3>
              <div className="grid grid-cols-2 gap-2">
                {["Git", "Docker", "Linux", "VS Code", "Node.js", "PostgreSQL"].map((tool) => (
                  <div key={tool} className="p-2 bg-background rounded-md shadow-sm">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 animate-fade-up">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105 animate-fade-up [--animation-delay:200ms]">
              <div className="p-4">
                <h3 className="text-xl font-bold">Update Script</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  A script for automating system updates
                </p>
                <a
                  href="https://github.com/fernand3z/update-script"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-primary hover:underline"
                >
                  View on GitHub
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 animate-fade-up">
            Work Experience
          </h2>
          <div className="space-y-8 animate-fade-up [--animation-delay:200ms]">
            <div className="bg-background rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold">System Administrator</h3>
              <p className="text-gray-500 dark:text-gray-400">NUMBER PLATE CLINIC · Bolton, England</p>
              <p className="text-sm text-muted-foreground">Part-time · Hybrid · 2 years</p>
              <div className="mt-4 space-y-2">
                <p>Independently managed servers and networks, ensuring consistent uptime and robust security.</p>
                <p>Optimized workflows by implementing AI tools and advanced automation strategies.</p>
                <p>Enhanced cybersecurity measures and ensured compliance with industry regulations.</p>
                <p>Provided expert user support, enabling seamless daily operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 animate-fade-up">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-up [--animation-delay:200ms]">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Associate's degree, Computer Science</h3>
              <div className="space-y-2">
                <h4 className="font-medium">Relevant Coursework</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-500 dark:text-gray-400">
                  {[
                    "Introduction to Programming",
                    "Data Structures and Algorithms",
                    "Object-Oriented Programming",
                    "Web Development Fundamentals",
                    "Database Management Systems",
                  ].map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Certifications</h3>
              <div className="space-y-4">
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium">Career Essentials in GitHub Professional Certificate</h4>
                  <p className="text-sm text-gray-500">LinkedIn Learning and GitHub · January 2025</p>
                </div>
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium">Career Essentials in System Administration</h4>
                  <p className="text-sm text-gray-500">LinkedIn Learning and Microsoft · January 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 animate-fade-up">
            Let's Connect
          </h2>
          <div className="flex justify-center space-x-6 animate-fade-up [--animation-delay:200ms]">
            <a
              href="https://www.linkedin.com/in/amoda-fernando/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/fernand3z"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 