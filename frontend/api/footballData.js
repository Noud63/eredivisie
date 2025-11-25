import axios from "axios";

const URL = "https://api.football-data.org/v4/competitions/DED/standings";
const URL2 = "https://api.football-data.org/v4/competitions/DED/matches";
const URL3 = "https://api.football-data.org/v4/competitions/DED/teams";
const URL4 = "https://api.football-data.org/v4/competitions/DED/scorers";


export default async function handler(req, res) {
  try {
    const [standings, matches, teams, scorers] =  await axios.all([
         axios.get(URL, {
           headers: {
             "X-Auth-Token": process.env.FOOTBALL__API_KEY,
           },
         }),
         axios.get(URL2, {
           headers: {
             "X-Auth-Token": process.env.FOOTBALL__API_KEY,
           },
         }),
         axios.get(URL3, {
           headers: {
             "X-Auth-Token": process.env.FOOTBALL__API_KEY,
           },
         }),
         axios.get(URL4, {
           headers: {
             "X-Auth-Token": process.env.FOOTBALL__API_KEY,
           },
         }),
       ]);

res.status(200).json({
  standings: response[0].data, matches: response[1].data, topScorers: response[3].data, teams: response[2].data
});
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({
      error: "Failed to fetch data from Football-Data API",
      details: error.response?.data || error.message,
    });
  }
}