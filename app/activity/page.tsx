"use client"

import { Card, Chip } from "@heroui/react"
import { Timer, TrendingUp } from "lucide-react"
import { FaTrophy, FaRunning, FaCode } from "react-icons/fa"
import { useState, useEffect } from "react"

interface LeetCodeProblem {
  id: number
  name: string
  difficulty: string
  date: string
}

interface LeetCodeData {
  totalSolved: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
  recentProblems: LeetCodeProblem[]
}

interface StravaRun {
  id: number
  name: string
  distance: number | string
  time: string
  date: string
  pace: string
}

interface StravaData {
  totalRuns: number
  totalDistance: number | string
  totalTime: string
  recentRuns: StravaRun[]
}

export default function Activity() {
  const [activeTab, setActiveTab] = useState<"leetcode" | "strava">("leetcode")
  const [leetcodeData, setLeetcodeData] = useState<LeetCodeData | null>(null)
  const [stravaData, setStravaData] = useState<StravaData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch both endpoints concurrently
        const [leetcodeRes, stravaRes] = await Promise.all([
          fetch("/api/leetcode"),
          fetch("/api/strava"),
        ])
        const leetcodeJson = await leetcodeRes.json()
        const stravaJson = await stravaRes.json()
        setLeetcodeData(leetcodeJson)
        setStravaData(stravaJson)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading || !leetcodeData || !stravaData) {
    return <div>Loading...</div>
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <Chip className="mb-4 font-medium" color="primary" variant="solid">
            For Fun!
          </Chip>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            my activity tracker
          </h1>
          <p className="text-muted-foreground">
            tracking my coding challenges, running progress, and daily activities
            to stay motivated and improve consistently.
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setActiveTab("leetcode")}
              className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                activeTab === "leetcode"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}
            >
              <FaCode /> LeetCode
            </button>
            <button
              onClick={() => setActiveTab("strava")}
              className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                activeTab === "strava"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}
            >
              <FaRunning /> Strava
            </button>
          </div>
        </div>

        {/* LeetCode Section */}
        {activeTab === "leetcode" && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">LeetCode Progress</h2>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="p-4">
                <div className="flex flex-col items-center">
                  <FaTrophy className="text-yellow-500 mt-3 mb-3" size={24} />
                  <h3 className="text-lg font-semibold">
                    {leetcodeData.totalSolved}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Problems Solved
                  </p>
                </div>
              </div>

              <div className="p-4">
                <div className="flex flex-col items-center">
                  <div className="text-green-500 mb-2 text-2xl">●</div>
                  <h3 className="text-lg font-semibold">
                    {leetcodeData.easySolved}
                  </h3>
                  <p className="text-sm text-muted-foreground">Easy</p>
                </div>
              </div>

              <div className="p-4">
                <div className="flex flex-col items-center">
                  <div className="text-yellow-500 mb-2 text-2xl">●</div>
                  <h3 className="text-lg font-semibold">
                    {leetcodeData.mediumSolved}
                  </h3>
                  <p className="text-sm text-muted-foreground">Medium</p>
                </div>
              </div>

              <div className="p-4">
                <div className="flex flex-col items-center">
                  <div className="text-red-500 mb-2 text-2xl">●</div>
                  <h3 className="text-lg font-semibold">
                    {leetcodeData.hardSolved}
                  </h3>
                  <p className="text-sm text-muted-foreground">Hard</p>
                </div>
              </div>
            </div>

            {/* Recent Problems */}
            <Card shadow="none" className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                Recently Solved Problems
              </h3>
              <div className="space-y-4">
                {leetcodeData.recentProblems.map((problem) => (
                  <div
                    key={problem.id}
                    className="flex items-center justify-between border-b pb-3"
                  >
                    <div>
                      <h4 className="font-medium">{problem.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Chip
                          size="sm"
                          className={
                            problem.difficulty === "Easy"
                              ? "bg-green-100 text-green-800"
                              : problem.difficulty === "Medium"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }
                        >
                          {problem.difficulty}
                        </Chip>
                        <span className="text-xs text-muted-foreground">
                          {problem.date}
                        </span>
                      </div>
                    </div>
                    <a href="#" className="text-primary text-sm hover:underline">
                      View Solution
                    </a>
                  </div>
                ))}
              </div>
            </Card>
          </section>
        )}

        {/* Strava Section */}
        {activeTab === "strava" && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Running Activity</h2>

            {/* Stats Overview */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <Card shadow="none" className="border p-4">
                <div className="flex flex-col items-center">
                  <FaRunning className="text-primary mb-2" size={24} />
                  <h3 className="text-lg font-semibold">
                    {stravaData.totalRuns}
                  </h3>
                  <p className="text-sm text-muted-foreground">Total Runs</p>
                </div>
              </Card>

              <Card shadow="none" className="border p-4">
                <div className="flex flex-col items-center">
                  <TrendingUp className="text-primary mb-2" size={24} />
                  <h3 className="text-lg font-semibold">
                    {stravaData.totalDistance} km
                  </h3>
                  <p className="text-sm text-muted-foreground">Total Distance</p>
                </div>
              </Card>

              <Card shadow="none" className="border p-4">
                <div className="flex flex-col items-center">
                  <Timer className="text-primary mb-2" size={24} />
                  <h3 className="text-lg font-semibold">
                    {stravaData.totalTime}
                  </h3>
                  <p className="text-sm text-muted-foreground">Total Time</p>
                </div>
              </Card>
            </div>

            {/* Recent Runs */}
            <h3 className="text-xl font-semibold mb-4">Recent Runs</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {stravaData.recentRuns.map((run) => (
                <Card key={run.id} className="overflow-hidden group">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-semibold text-lg">{run.name}</h4>
                        <p className="text-sm text-muted-foreground">{run.date}</p>
                      </div>
                      <Chip color="primary" variant="flat">
                        {run.distance} km
                      </Chip>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="text-sm text-muted-foreground">Time</div>
                        <div className="font-medium">{run.time}</div>
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="text-sm text-muted-foreground">Pace</div>
                        <div className="font-medium">{run.pace} min/km</div>
                      </div>
                    </div>

                    {/* Simplified elevation chart */}
                    <div className="h-16 bg-muted rounded-lg overflow-hidden">
                      <svg width="100%" height="100%" viewBox="0 0 100 30">
                        <path
                          d={`M0,30 ${Array.from(
                            { length: 20 },
                            (_, i) =>
                              `L${i * 5},${20 -
                                Math.sin(i * 0.5) * 10 -
                                Math.random() * 5}`
                          ).join(" ")} L100,30 Z`}
                          fill="rgba(var(--primary), 0.2)"
                          stroke="rgb(var(--primary))"
                          strokeWidth="1"
                        />
                      </svg>
                    </div>

                    <div className="mt-4 flex justify-end">
                      <a href="#" className="text-primary text-sm hover:underline">
                        View on Strava
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Monthly Progress */}
            <Card className="p-6 mt-8">
              <h3 className="text-xl font-semibold mb-4">Monthly Progress</h3>
              <div className="h-64 bg-muted rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-xs text-muted-foreground">Jan</span>
                  <span className="text-xs text-muted-foreground">Feb</span>
                  <span className="text-xs text-muted-foreground">Mar</span>
                  <span className="text-xs text-muted-foreground">Apr</span>
                  <span className="text-xs text-muted-foreground">May</span>
                  <span className="text-xs text-muted-foreground">Jun</span>
                </div>
                <div className="relative h-48">
                  {/* Distance bars */}
                  <div className="absolute bottom-0 left-0 w-full h-full flex justify-between items-end">
                    {Array.from({ length: 6 }).map((_, i) => {
                      const height = 20 + Math.random() * 80
                      return (
                        <div key={i} className="w-12 flex flex-col items-center">
                          <div
                            className="w-8 bg-primary rounded-t-md"
                            style={{ height: `${height}%` }}
                          ></div>
                          <div className="text-xs mt-2 font-medium">
                            {Math.floor(height / 2)} km
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </Card>
          </section>
        )}
      </div>
    </main>
  )
}
