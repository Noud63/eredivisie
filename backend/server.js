const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')
const router = express.Router()
const axios = require("axios");
const footballDataRoute = require('./footballDataRoute')
const PORT = process.env.REACT_APP_PORT || 5000

app.use(cors())
app.use(express.json())
dotenv.config()

app.use(
  cors({
    origin:"https://eredivisie.vercel.app",
    methods: ["GET"],
    credentials: true,
  })
);

app.get("/api/footballData", async(req, res) => {

  const URL = "https://api.football-data.org/v4/competitions/DED/standings";
  const URL2 = "https://api.football-data.org/v4/competitions/DED/matches";

  const URL3 = "https://api.football-data.org/v4/competitions/DED/teams";

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
   

    const allData = { standings: response[0].data, matches: response[1].data };

    console.log("data:", allData.standings);


  return res.json(allData);
});

// app.use("/api/footballData", footballDataRoute);

app.use('/', express.static(path.join(__dirname, '../frontend/', 'build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
});

app.listen(PORT, console.log(`Server running on port ${PORT}`))

module.exports = app;