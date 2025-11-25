const express = require('express')
const axios = require('axios')
const asyncHandler = require('express-async-handler')

const URL = "https://api.football-data.org/v4/competitions/DED/standings";
const URL2 = "https://api.football-data.org/v4/competitions/DED/matches";
const URL3 = "https://api.football-data.org/v4/competitions/DED/teams";
const URL4 = "https://api.football-data.org/v4/competitions/DED/scorers";


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
     await axios.get(URL4, {
       headers: {
         "X-Auth-Token": process.env.REACT_APP_API_KEY,
       },
     }),
   ]);
   

    const allData = { standings: response[0].data, matches: response[1].data, topScorers: response[3].data, teams: response[2].data };

    console.log("data:", allData.topScorers);

    return res.status(200).send(allData);
} catch (error) {
  console.log(error)
}
})

module.exports = getFootballData