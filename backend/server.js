const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')
const router = express.Router()
const footballDataRoute = require('./footballDataRoute')
const PORT = process.env.REACT_APP_PORT || 5000

// app.use(cors())
app.use(express.json())
dotenv.config()

app.use(
  cors({
    origin:"https://eredivisie.vercel.app",
    methods: ["GET"],
    credentials: true,
  })
);

// app.get("/api/footballData", (req, res) => {
//   res.json({ message: "Success"});
// });


app.use("/api/footballData", footballDataRoute);

app.use('/', express.static(path.join(__dirname, '../frontend/', 'build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
});

app.listen(PORT, console.log(`Server running on port ${PORT}`))

module.exports = app;