import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LeetCodeData | { error: string }>
) {
  try {
    const { LEETCODE_USERNAME } = process.env
    if (!LEETCODE_USERNAME) {
      return res.status(400).json({ error: "Missing LeetCode username" })
    }

    const query = `
      query getUserProfile($username: String!) {
        matchedUser(username: $username) {
          username
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }
          recentSubmissionList {
            title
            timestamp
            statusDisplay
            lang
          }
        }
      }
    `

    const variables = { username: LEETCODE_USERNAME }

    // Adding headers explicitly
    const response = await axios.post(
      "https://leetcode.com/graphql",
      { query, variables },
      { headers: { "Content-Type": "application/json" } }
    )

    const data = response.data.data
    if (!data || !data.matchedUser) {
      return res.status(404).json({ error: "LeetCode user not found" })
    }

    const submissionStats = data.matchedUser.submitStats.acSubmissionNum
    let totalSolved = 0,
      easySolved = 0,
      mediumSolved = 0,
      hardSolved = 0

    submissionStats.forEach((stat: any) => {
      if (stat.difficulty === "All") totalSolved = stat.count
      if (stat.difficulty === "Easy") easySolved = stat.count
      if (stat.difficulty === "Medium") mediumSolved = stat.count
      if (stat.difficulty === "Hard") hardSolved = stat.count
    })

    const recentSubmissions = data.matchedUser.recentSubmissionList || []
    const recentProblems: LeetCodeProblem[] = recentSubmissions.map(
      (submission: any, index: number) => ({
        id: index,
        name: submission.title,
        difficulty: "N/A", // LeetCode doesn’t provide difficulty in recentSubmissionList
        date: new Date(submission.timestamp * 1000)
          .toISOString()
          .split("T")[0],
      })
    )

    return res.status(200).json({
      totalSolved,
      easySolved,
      mediumSolved,
      hardSolved,
      recentProblems,
    })
  } catch (error: any) {
    console.error("Error fetching LeetCode data:", error)
    return res.status(500).json({ error: error.message })
  }
}
