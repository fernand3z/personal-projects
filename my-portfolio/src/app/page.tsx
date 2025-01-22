"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Github } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown as ChevronDownIcon, ArrowRight as ArrowRightIcon } from "lucide-react"

const languages = [
  { name: "JavaScript", progress: 85 },
  { name: "Python", progress: 78 },
  { name: "HTML", progress: 92 },
  { name: "CSS", progress: 88 },
  { name: "SQL", progress: 75 },
  { name: "PHP", progress: 70 },
  { name: "TypeScript", progress: 82 },
  { name: "PowerShell", progress: 85 },
  { name: "Bash", progress: 80 },
  { name: "C++", progress: 65 },
  { name: "Java", progress: 60 },
  { name: "Ruby", progress: 55 }
]

const tools = [
  { name: "Git", progress: 88 },
  { name: "Docker", progress: 82 },
  { name: "Linux", progress: 90 },
  { name: "VS Code", progress: 95 },
  { name: "Node.js", progress: 80 },
  { name: "PostgreSQL", progress: 75 },
  { name: "AWS", progress: 75 },
  { name: "React", progress: 85 },
  { name: "Next.js", progress: 80 },
  { name: "MongoDB", progress: 70 },
  { name: "Nginx", progress: 75 },
  { name: "Jenkins", progress: 65 }
]

export default function Page() {
  const [showMoreSkills, setShowMoreSkills] = useState(false)
  const [showMoreCerts, setShowMoreCerts] = useState(false)
  const [visibleProjectCount, setVisibleProjectCount] = useState(6)
  const [visibleCertCount, setVisibleCertCount] = useState(8)

  const additionalProjects = Array(6).fill({
    title: "Coming Soon",
    description: "Future project planned",
    content: "Another exciting project in the pipeline. Stay tuned for updates!",
    status: "In Planning"
  });

  const handleShowMoreProjects = () => {
    if (visibleProjectCount >= 6 + additionalProjects.length) {
      setVisibleProjectCount(6) // Reset to initial count
    } else {
      setVisibleProjectCount(prev => Math.min(prev + 3, 6 + additionalProjects.length))
    }
  }

  const showingAllProjects = visibleProjectCount >= 6 + additionalProjects.length

  const handleShowMoreCerts = () => {
    if (visibleCertCount >= 12) { // Total number of certificates
      setVisibleCertCount(4) // Reset to initial count
    } else {
      setVisibleCertCount(prev => Math.min(prev + 4, 12))
    }
  }

  const showingAllCerts = visibleCertCount >= 12

  const handleContact = (platform: string) => {
    switch(platform) {
      case 'gmail':
        window.location.href = 'mailto:fernand3zdev@gmail.com';
        break;
      case 'whatsapp':
        window.location.href = 'https://wa.me/447479460160';
        break;
      case 'linkedin':
        window.location.href = 'https://www.linkedin.com/in/amoda-fernando';
        break;
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section id="about" className="mb-24 text-center">
          <h1 className="text-4xl font-bold mb-4 gradient-text animate-fade-in">
            Amoda Fernando
          </h1>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in delay-200">
            Passionate developer with a knack for solving complex problems through code. Mostly self-taught and driven by an unyielding curiosity to explore and master new technologies.
          </p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="default"
                className="bg-success hover:bg-success/90 text-success-foreground animate-fade-in delay-300 hover-lift"
              >
                Contact Me!
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuLabel>Get in touch</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => handleContact('gmail')}>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleContact('whatsapp')}>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>WhatsApp</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleContact('linkedin')}>
                  <Github className="mr-2 h-4 w-4" />
                  <span>LinkedIn</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-24 animate-fade-in">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Skills && Technologies</h2>
          <div className="card-spotify rounded-lg p-6">
            <div className="grid grid-cols-2 gap-8">
              <div className="animate-slide-in delay-100">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Languages</h3>
                <div className="space-y-4">
                  {/* Initial visible languages */}
                  {[
                    { name: "JavaScript", progress: 85 },
                    { name: "Python", progress: 78 },
                    { name: "HTML", progress: 92 },
                    { name: "CSS", progress: 88 },
                    { name: "SQL", progress: 75 },
                    { name: "PHP", progress: 70 }
                  ].slice(0, showMoreSkills ? languages.length : 6).map((lang, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <span className="text-sm font-medium text-foreground min-w-[100px]">{lang.name}</span>
                      <div className="flex-1 flex items-center gap-3">
                        <div className="flex-1 h-2.5 bg-[#2A2A2A] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#666] rounded-full transition-all duration-300"
                            style={{ width: `${lang.progress}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground w-[40px] text-right">{lang.progress}%</span>
                      </div>
                    </div>
                  ))}
                  
                  {/* Additional languages (hidden by default) */}
                  {showMoreSkills && [
                    { name: "TypeScript", progress: 82 },
                    { name: "PowerShell", progress: 85 },
                    { name: "Bash", progress: 80 },
                    { name: "C++", progress: 65 },
                    { name: "Java", progress: 60 },
                    { name: "Ruby", progress: 55 },
                    { name: "Go", progress: 70 },
                    { name: "Rust", progress: 60 },
                    { name: "Kotlin", progress: 65 },
                    { name: "Swift", progress: 55 },
                    { name: "Scala", progress: 50 },
                    { name: "R", progress: 45 }
                  ].map((lang, i) => (
                    <div key={lang.name} className="flex items-center gap-4">
                      <span className="text-sm font-medium text-foreground min-w-[100px]">{lang.name}</span>
                      <div className="flex-1 flex items-center gap-3">
                        <div className="flex-1 h-2.5 bg-[#2A2A2A] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#666] rounded-full transition-all duration-300"
                            style={{ width: `${lang.progress}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground w-[40px] text-right">{lang.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="animate-slide-in delay-200">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Tools & Technologies</h3>
                <div className="space-y-4">
                  {/* Initial visible tools */}
                  {[
                    { name: "Git", progress: 88 },
                    { name: "Docker", progress: 82 },
                    { name: "Linux", progress: 90 },
                    { name: "VS Code", progress: 95 },
                    { name: "Node.js", progress: 80 },
                    { name: "PostgreSQL", progress: 75 }
                  ].slice(0, showMoreSkills ? tools.length : 6).map((tool, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <span className="text-sm font-medium text-foreground min-w-[100px]">{tool.name}</span>
                      <div className="flex-1 flex items-center gap-3">
                        <div className="flex-1 h-2.5 bg-[#2A2A2A] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#666] rounded-full transition-all duration-300"
                            style={{ width: `${tool.progress}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground w-[40px] text-right">{tool.progress}%</span>
                      </div>
                    </div>
                  ))}
                  
                  {/* Additional tools (hidden by default) */}
                  {showMoreSkills && [
                    { name: "AWS", progress: 75 },
                    { name: "React", progress: 85 },
                    { name: "Next.js", progress: 80 },
                    { name: "MongoDB", progress: 70 },
                    { name: "Nginx", progress: 75 },
                    { name: "Jenkins", progress: 65 },
                    { name: "Kubernetes", progress: 60 },
                    { name: "Ansible", progress: 70 },
                    { name: "Terraform", progress: 65 },
                    { name: "Azure", progress: 70 },
                    { name: "WordPress", progress: 85 },
                    { name: "Figma", progress: 80 }
                  ].map((tool, i) => (
                    <div key={tool.name} className="flex items-center gap-4">
                      <span className="text-sm font-medium text-foreground min-w-[100px]">{tool.name}</span>
                      <div className="flex-1 flex items-center gap-3">
                        <div className="flex-1 h-2.5 bg-[#2A2A2A] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#666] rounded-full transition-all duration-300"
                            style={{ width: `${tool.progress}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground w-[40px] text-right">{tool.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Show More/Less Button */}
            <div className="flex justify-center mt-8">
              <Button
                onClick={() => setShowMoreSkills(!showMoreSkills)}
                variant="outline"
                className="mt-4 text-foreground hover:text-success hover:border-success transition-colors w-[140px]"
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>{showMoreSkills ? "Show Less" : "Show More"}</span>
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform duration-200 ${
                      showMoreSkills ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24 animate-fade-in">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Projects</h2>
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* First 6 cards (always visible) */}
              {/* Update Script */}
              <Card className="hover-lift flex flex-col">
                <CardHeader>
                  <CardTitle>Update Script</CardTitle>
                  <CardDescription>
                    A script for automating system updates and maintenance tasks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Streamlines the process of keeping your system up-to-date with automated checks and updates
                  </p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 text-foreground hover:text-success hover:border-success transition-colors"
                  >
                    <a
                      href="https://github.com/fernand3z/update-script"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              {/* Portfolio Website */}
              <Card className="hover-lift flex flex-col">
                <CardHeader>
                  <CardTitle>Portfolio Website</CardTitle>
                  <CardDescription>
                    Modern portfolio website built with Next.js and Tailwind CSS
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A responsive and animated portfolio showcasing my projects and skills
                  </p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 text-foreground hover:text-success hover:border-success transition-colors"
                  >
                    <a
                      href="https://github.com/fernand3z/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              {/* Task Manager */}
              <Card className="hover-lift flex flex-col">
                <CardHeader>
                  <CardTitle>Task Manager</CardTitle>
                  <CardDescription>
                    CLI task management application with priority scheduling
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Efficient task organization with priority-based scheduling and deadline tracking
                  </p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 text-foreground hover:text-success hover:border-success transition-colors"
                  >
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-1 transition-colors group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        Coming Soon
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              {/* First 3 "Coming Soon" cards (always visible) */}
              {[1, 2, 3].map((_, index) => (
                <Card key={`visible-${index}`} className="hover-lift opacity-75 flex flex-col">
                  <CardHeader>
                    <CardTitle>Coming Soon</CardTitle>
                    <CardDescription>
                      New project under development
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Exciting new project in the works. Stay tuned for updates!
                    </p>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <span className="text-muted-foreground inline-flex items-center space-x-1">
                      Under Development →
                    </span>
                  </CardFooter>
                </Card>
              ))}

              {/* Additional cards */}
              {additionalProjects.slice(0, visibleProjectCount - 6).map((project, index) => (
                <Card key={`hidden-${index}`} className="hover-lift opacity-75 flex flex-col animate-fade-in">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {project.content}
                    </p>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <span className="text-muted-foreground inline-flex items-center space-x-1">
                      {project.status} →
                    </span>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Show More Projects Button */}
            {visibleProjectCount < 6 + additionalProjects.length && (
              <div className="flex justify-center">
                <button
                  onClick={handleShowMoreProjects}
                  className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-2 transition-colors group"
                >
                  <div className="flex items-center space-x-2 group-hover:translate-y-[-2px] transition-transform duration-200">
                    <span>Show More</span>
                    <span className="transform transition-transform duration-200">↓</span>
                  </div>
                </button>
              </div>
            )}

            {/* Show Less Button - only visible when all projects are shown */}
            {showingAllProjects && (
              <div className="flex justify-center">
                <button
                  onClick={handleShowMoreProjects}
                  className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-2 transition-colors group"
                >
                  <div className="flex items-center space-x-2 group-hover:translate-y-[-2px] transition-transform duration-200">
                    <span>Show Less</span>
                    <span className="transform transition-transform duration-200 rotate-180">↓</span>
                  </div>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-24 animate-fade-in">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Work Experience</h2>
          <div className="space-y-8">
            {/* NUMBER PLATE CLINIC Experience */}
            <Card className="hover-lift">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-card">
                    <img 
                      src="/npc-logo.jpg" 
                      alt="NPC Logo" 
                      className="w-full h-full object-contain p-1" 
                    />
                  </div>
                  <div className="flex-grow">
                    <CardTitle>
                      <a 
                        href="https://www.linkedin.com/company/number-plate-clinic/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        NUMBER PLATE CLINIC
                      </a>
                    </CardTitle>
                    <CardDescription>
                      <span className="block text-muted-foreground">Part-time · 2 yrs</span>
                      <span className="block text-sm text-muted-foreground/60">Bolton, England, United Kingdom · Hybrid</span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* System Administrator Role */}
                <div className="mt-2">
                  <h4 className="text-lg font-semibold text-foreground">System Administrator</h4>
                  <p className="text-sm text-muted-foreground/60 mb-4">Feb 2024 - Present · 1 yr</p>
                  <p className="text-muted-foreground mb-4">
                    As a System Administrator at NUMBER PLATE CLINIC, I took on a more strategic and comprehensive role, directly managing and enhancing IT infrastructure to support organizational growth.
                  </p>
                  <div className="mb-4">
                    <h5 className="text-foreground font-medium mb-2">Key Achievements:</h5>
                    <ul className="space-y-3 text-muted-foreground list-disc pl-4">
                      {[
                        "Independently managed servers and networks, ensuring consistent uptime and robust security.",
                        "Optimized workflows by implementing AI tools and advanced automation strategies, increasing efficiency.",
                        "Enhanced cybersecurity measures and ensured compliance with industry regulations.",
                        "Provided expert user support, enabling seamless daily operations and reducing system downtime."
                      ].map((item, i) => (
                        <li key={i} className={`animate-fade-in delay-${(i + 1) * 100}`}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Skills:</span>
                    <span className="text-foreground">IT Service Management, Systems Management</span>
                    <button 
                      onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Show all 8 skills
                    </button>
                  </div>
                </div>

                {/* Assistant System Administrator Role */}
                <div className="mt-8 border-t border-border pt-6">
                  <h4 className="text-lg font-semibold text-foreground">Assistant System Administrator</h4>
                  <p className="text-sm text-muted-foreground/60 mb-4">Feb 2023 - 2024 · 1 yr</p>
                  <p className="text-muted-foreground mb-4">
                    As an Assistant System Administrator at NUMBER PLATE CLINIC, I supported the IT infrastructure to ensure reliable and secure operations. I worked closely with the IT team to maintain systems and assist in implementing solutions that enhanced workflow efficiency.
                  </p>
                  <div className="mb-4">
                    <h5 className="text-foreground font-medium mb-2">Key Responsibilities:</h5>
                    <ul className="space-y-3 text-muted-foreground list-disc pl-4">
                      {[
                        "Assisted in managing servers and networks, ensuring system reliability and security.",
                        "Supported infrastructure optimization for seamless business operations.",
                        "Utilized automation tools like PowerShell to improve efficiency and reduce manual tasks.",
                        "Contributed to strengthening cybersecurity measures and maintaining compliance with industry standards."
                      ].map((item, i) => (
                        <li key={i} className={`animate-fade-in delay-${(i + 1) * 100}`}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    This role allowed me to gain hands-on experience and build a solid foundation in IT systems management.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
                    <span>Skills:</span>
                    <span className="text-foreground">Systems Management, Management</span>
                    <button 
                      onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Show all 6 skills
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Adventa Technologies Experience */}
            <Card className="hover-lift">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-card">
                    <img 
                      src="/adventa-logo.jpg" 
                      alt="Adventa Logo" 
                      className="w-full h-full object-contain p-1" 
                    />
                  </div>
                  <div className="flex-grow">
                    <CardTitle>
                      <a 
                        href="https://www.linkedin.com/company/adventa-technologies/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        Adventa Technologies Pvt Ltd
                      </a>
                    </CardTitle>
                    <CardDescription>
                      <span className="block text-muted-foreground">Full-time · 1 yr 1 mo</span>
                      <span className="block text-sm text-muted-foreground/60">Colombo District, Western Province, Sri Lanka · Hybrid</span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Web Developer Role */}
                <div className="mt-2">
                  <h4 className="text-lg font-semibold text-foreground">Web Developer</h4>
                  <p className="text-sm text-muted-foreground/60 mb-4">Apr 2021 - Apr 2022 · 1 yr 1 mo</p>
                  <div className="mb-4">
                    <h5 className="text-foreground font-medium mb-2">Key Achievements:</h5>
                    <ul className="space-y-3 text-muted-foreground list-disc pl-4">
                      {[
                        "Developed and launched 7 custom web applications using Bubble.io, enabling rapid prototyping and deployment for startups and small businesses.",
                        "Designed and prototyped user-friendly web interfaces using Figma, ensuring visually appealing and intuitive user experiences that align with client branding.",
                        "Built and maintained dynamic WordPress websites, integrating custom themes and plugins to meet specific client needs and enhance functionality.",
                        "Utilized HTML5, CSS3, PHP and JavaScript to create responsive and interactive websites, ensuring optimal performance and user engagement across various devices and browsers.",
                        "Integrated third-party services and APIs, such as payment gateways, CRM tools, and social media platforms, to enhance website functionality and user interaction."
                      ].map((item, i) => (
                        <li key={i} className={`animate-fade-in delay-${(i + 1) * 100}`}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Skills:</span>
                    <span className="text-foreground">Prototyping, HTML5</span>
                    <button 
                      onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Show all 20 skills
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-24 animate-fade-in">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Education</h2>
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle>Associate's degree, Computer Science</CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Relevant Coursework</h4>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Introduction to Programming",
                  "Data Structures and Algorithms",
                  "Object-Oriented Programming",
                  "Web Development Fundamentals",
                  "Database Management Systems"
                ].map((course, i) => (
                  <li key={course} className={`animate-fade-in delay-${(i + 1) * 100}`}>
                    {course}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* License & Certifications Section */}
        <section id="certifications" className="animate-fade-in">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">License && Certifications</h2>
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First 4 certificates are always visible */}
              {/* Additional certificates are shown based on visibleCertCount */}
              {[
                {
                  title: "Career Essentials in GitHub",
                  type: "Professional Certificate",
                  issuer: "LinkedIn Learning and GitHub",
                  date: "January 2025"
                },
                {
                  title: "Career Essentials in System Administration",
                  type: "Professional Certificate",
                  issuer: "LinkedIn Learning and Microsoft",
                  date: "January 2025"
                },
                {
                  title: "Python Programming",
                  type: "Advanced Certificate",
                  issuer: "Coursera",
                  date: "December 2024"
                },
                {
                  title: "Full Stack Web Development",
                  type: "Professional Certificate",
                  issuer: "freeCodeCamp",
                  date: "November 2024"
                },
                {
                  title: "AWS Cloud Practitioner",
                  type: "Cloud Certificate",
                  issuer: "Amazon Web Services",
                  date: "October 2024"
                },
                {
                  title: "Docker Essentials",
                  type: "Technical Certificate",
                  issuer: "Docker",
                  date: "September 2024"
                },
                {
                  title: "Advanced JavaScript",
                  type: "Programming Certificate",
                  issuer: "Udemy",
                  date: "August 2024"
                },
                {
                  title: "Linux Administration",
                  type: "System Certificate",
                  issuer: "Linux Foundation",
                  date: "July 2024"
                },
                {
                  title: "React Development",
                  type: "Frontend Certificate",
                  issuer: "Meta",
                  date: "June 2024"
                },
                {
                  title: "TypeScript Mastery",
                  type: "Programming Certificate",
                  issuer: "Microsoft",
                  date: "May 2024"
                },
                {
                  title: "Node.js Development",
                  type: "Backend Certificate",
                  issuer: "OpenJS Foundation",
                  date: "April 2024"
                },
                {
                  title: "Database Management",
                  type: "Technical Certificate",
                  issuer: "MongoDB University",
                  date: "March 2024"
                }
              ].slice(0, visibleCertCount).map((cert, index) => (
                <div key={index} className={`card-spotify p-8 rounded-lg hover-lift animate-scale-in delay-${(index % 4 + 1) * 100} flex flex-col`}>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{cert.title}</h3>
                    <p className="text-muted-foreground mb-2">{cert.type}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">{cert.date}</p>
                    </div>
                  </div>
                  <div className="mt-auto pt-4">
                    <a href="#" className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-1 transition-colors group">
                      <span className="group-hover:translate-x-1 transition-transform duration-200">View Certificate</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More/Less Certificates Button */}
            {visibleCertCount < 12 && (
              <div className="flex justify-center">
                <button
                  onClick={handleShowMoreCerts}
                  className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-2 transition-colors group"
                >
                  <div className="flex items-center space-x-2 group-hover:translate-y-[-2px] transition-transform duration-200">
                    <span>Show More</span>
                    <span className="transform transition-transform duration-200">↓</span>
                  </div>
                </button>
              </div>
            )}

            {/* Show Less Button - only visible when all certificates are shown */}
            {showingAllCerts && (
              <div className="flex justify-center">
                <button
                  onClick={handleShowMoreCerts}
                  className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-2 transition-colors group"
                >
                  <div className="flex items-center space-x-2 group-hover:translate-y-[-2px] transition-transform duration-200">
                    <span>Show Less</span>
                    <span className="transform transition-transform duration-200 rotate-180">↓</span>
                  </div>
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
} 