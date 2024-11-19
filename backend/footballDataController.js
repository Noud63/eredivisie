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
         "Access-Control-Allow-Origin": "https://eredivisie.vercel.app",
       },
     }),
     await axios.get(URL2, {
       headers: {
         "X-Auth-Token": process.env.REACT_APP_API_KEY,
         "Access-Control-Allow-Origin": "https://eredivisie.vercel.app",
       },
     }),
     await axios.get(URL3, {
       headers: {
         "X-Auth-Token": process.env.REACT_APP_API_KEY,
         "Access-Control-Allow-Origin": "https://eredivisie.vercel.app",
       },
     }),
   ]);

    const allData = { standings: response[0].data, matches: response[1].data };

    console.log("data:", allData.standings);

    res.status(200).send(allData);
} catch (error) {
  console.log(error)
}
})

module.exports = getFootballData