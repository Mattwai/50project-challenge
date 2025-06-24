"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Calendar, ExternalLink, Github, Rocket, Timer, Trophy } from "lucide-react"
import Link from "next/link"

// Sample project data - you can replace this with your actual projects
const projects = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  description:
    i < 15
      ? `A powerful B2B SaaS solution with modern architecture and scalable design`
      : `Coming soon - exciting B2B SaaS project in development`,
  status: i < 15 ? "completed" : i < 25 ? "in-progress" : "upcoming",
  githubUrl: `https://github.com/yourusername/project-${i + 1}`,
  liveUrl: `https://yourusername.github.io/project-${i + 1}`,
  day: i + 1,
  technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"].slice(0, Math.floor(Math.random() * 4) + 1),
}))

const completedCount = projects.filter((p) => p.status === "completed").length
const progressPercentage = (completedCount / 50) * 100

export default function Component() {
  const [filter, setFilter] = useState<"all" | "completed" | "in-progress" | "upcoming">("all")

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.status === filter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold text-white">50 Projects Challenge</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#projects" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors">
              Projects
            </Link>
            <Link href="#about" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors">
              About
            </Link>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-teal-600/20" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blue-900/50 text-blue-300 hover:bg-blue-800/50 border-blue-700">
              <Timer className="h-3 w-3 mr-1" />
              Challenge in Progress
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent mb-6">
              50 B2B SaaS Projects
              <br />
              <span className="text-3xl md:text-5xl">in 50 Days</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Building a new B2B SaaS solution every single day. From CRM systems to analytics platforms, each project
              showcases modern web development and business solutions.
            </p>

            {/* Progress Section */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-md mx-auto mb-8 border border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-300">Progress</span>
                <span className="text-sm font-bold text-blue-400">{completedCount}/50</span>
              </div>
              <Progress value={progressPercentage} className="h-3 mb-2 bg-gray-700" />
              <p className="text-xs text-gray-400">
                {completedCount} projects completed • {50 - completedCount} remaining
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Trophy className="h-5 w-5 mr-2" />
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <Github className="h-5 w-5 mr-2" />
                Follow Journey
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-gray-800 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { key: "all", label: "All Projects", count: projects.length },
              { key: "completed", label: "Completed", count: projects.filter((p) => p.status === "completed").length },
              {
                key: "in-progress",
                label: "In Progress",
                count: projects.filter((p) => p.status === "in-progress").length,
              },
              { key: "upcoming", label: "Upcoming", count: projects.filter((p) => p.status === "upcoming").length },
            ].map(({ key, label, count }) => (
              <Button
                key={key}
                variant={filter === key ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(key as any)}
                className={`transition-all duration-200 ${
                  filter === key
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {label} ({count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border ${
                  project.status === "completed"
                    ? "border-green-700 bg-green-900/20 hover:bg-green-900/30"
                    : project.status === "in-progress"
                      ? "border-blue-700 bg-blue-900/20 hover:bg-blue-900/30"
                      : "border-gray-700 bg-gray-800/50 hover:bg-gray-800/70"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="outline"
                      className={
                        project.status === "completed"
                          ? "bg-green-900/50 text-green-300 border-green-700 hover:bg-green-800/50"
                          : project.status === "in-progress"
                            ? "bg-blue-900/50 text-blue-300 border-blue-700 hover:bg-blue-800/50"
                            : "bg-gray-800/50 text-gray-400 border-gray-600 hover:bg-gray-700/50"
                      }
                    >
                      <Calendar className="h-3 w-3 mr-1" />
                      Day {project.day}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      {project.status === "completed" && (
                        <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
                      )}
                      {project.status === "in-progress" && (
                        <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse" />
                      )}
                      {project.status === "upcoming" && <div className="h-2 w-2 bg-gray-500 rounded-full" />}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs bg-gray-800/50 text-gray-300 border-gray-600"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.status === "completed" ? (
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                          asChild
                        >
                          <Link href={project.githubUrl} target="_blank">
                            <Github className="h-3 w-3 mr-1" />
                            Code
                          </Link>
                        </Button>
                        <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white" asChild>
                          <Link href={project.liveUrl} target="_blank">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Live
                          </Link>
                        </Button>
                      </>
                    ) : project.status === "in-progress" ? (
                      <Button size="sm" variant="outline" className="w-full border-gray-600 text-gray-400" disabled>
                        <Timer className="h-3 w-3 mr-1" />
                        In Development
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" className="w-full border-gray-600 text-gray-400" disabled>
                        <Calendar className="h-3 w-3 mr-1" />
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2 text-white">{completedCount}</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-white">{Math.round(progressPercentage)}%</div>
              <div className="text-blue-200">Challenge Progress</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-white">{50 - completedCount}</div>
              <div className="text-blue-200">Days Remaining</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-white">50</div>
              <div className="text-blue-200">Total Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Rocket className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-semibold text-white">50 Projects Challenge</span>
            </div>
            <p className="text-gray-400 mb-6">Building the future of B2B SaaS, one project at a time.</p>
            <div className="flex justify-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-800">
                Follow Journey
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
