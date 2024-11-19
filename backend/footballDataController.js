const express = require('express')
const axios = require('axios')
const asyncHandler = require('express-async-handler')

const URL = "https://api.football-data.org/v4/competitions/DED/standings";
const URL2 = "https://api.football-data.org/v4/competitions/DED/matches";

const URL3 = "https://api.football-data.org/v4/competitions/DED/teams";
// const URL4 = "https://api.football-data.org/v4/competitions/DED/";

const getFootballData = asyncHandler(async (req, res) => {

try {
   const response = await axios.all([
     await axios.get(URL, {
       headers: {
         "X-Auth-Token": process.env.REACT_APP_API_KEY,
       },
     }),
     await axios.get(URL2, {
       headers: {
         "X-Auth-Token": process.env.REACT_APP_API_KEY,
       },
     }),
     await axios.get(URL3, {
       headers: {
         "X-Auth-Token": process.env.REACT_APP_API_KEY,
       },
     }),
   ]);

    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://eredivisie.vercel.app"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );

    if (req.method === "OPTIONS") {
      res.status(200).end(); // Handle preflight request
      return;
    }

    const allData = { standings: response[0].data, matches: response[1].data };

    console.log("data:", allData.standings);

    res.status(200).json(allData);
} catch (error) {
  console.log(error)
}
})

module.exports = getFootballData