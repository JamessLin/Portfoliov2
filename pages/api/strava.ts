import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

interface StravaRun {
  id: number;
  name: string;
  distance: string;
  time: string;
  date: string;
  pace: string;
}

interface StravaData {
  totalRuns: number;
  totalDistance: string;
  totalTime: string;
  recentRuns: StravaRun[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StravaData | { error: string }>
) {
  try {
    const { STRAVA_ACCESS_TOKEN } = process.env;
    if (!STRAVA_ACCESS_TOKEN) {
      return res.status(400).json({ error: "Missing Strava access token" });
    }
    
    console.log("Strava Access Token:", STRAVA_ACCESS_TOKEN);
    
    // Define an array of recent activity IDs (update these with valid IDs)
    const recentActivityIds = [123456789, 987654321, 1122334455, 5566778899];
    
    // Fetch each activity's detailed data using the getActivityById endpoint
    const activityPromises = recentActivityIds.map((id) =>
      axios.get(`https://www.strava.com/api/v3/activities/${id}`, {
        headers: {
          Authorization: `Bearer ${STRAVA_ACCESS_TOKEN}`,
        },
        params: {
          include_all_efforts: true,
        },
      })
    );
    
    const activityResponses = await Promise.all(activityPromises);
    const activities = activityResponses.map((response) => response.data);
    
    // Compute total runs, distance, and total elapsed time
    const totalRuns = activities.length;
    const totalDistanceMeters = activities.reduce(
      (sum: number, activity: any) => sum + (activity.distance || 0),
      0
    );
    const totalDistanceKm = (totalDistanceMeters / 1000).toFixed(2);
    
    const totalElapsedTime = activities.reduce(
      (sum: number, activity: any) => sum + (activity.elapsed_time || 0),
      0
    );
    // Convert seconds to HH:MM:SS format
    const hours = Math.floor(totalElapsedTime / 3600);
    const minutes = Math.floor((totalElapsedTime % 3600) / 60);
    const seconds = totalElapsedTime % 60;
    const totalTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
    
    // Build recentRuns array using detailed data
    const recentRuns: StravaRun[] = activities.map((activity: any) => ({
      id: activity.id,
      name: activity.name,
      distance: (activity.distance / 1000).toFixed(1), // convert meters to km
      time: new Date(activity.elapsed_time * 1000).toISOString().substr(11, 8),
      date: activity.start_date_local.split("T")[0],
      pace: "5:30", // You can compute the pace based on distance and elapsed time if needed
    }));
    
    return res.status(200).json({
      totalRuns,
      totalDistance: totalDistanceKm,
      totalTime,
      recentRuns,
    });
  } catch (error: any) {
    console.error("Error fetching Strava data:", error);
    return res.status(500).json({ error: error.message });
  }
}
