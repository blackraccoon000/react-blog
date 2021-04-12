const path = require("path")
const express = require('express')
const cookieSession = require("cookie-session")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const app = express()
const publicPath = path.join(__dirname, "..", "public")
const port = process.env.PORT || 3000

// app.use(cookieParser())
app.use(express.static(publicPath))

app.get("*", (req,res,next)=>{
  // console.log("req.cookies: ",req.cookies)
  res.sendFile(path.join(publicPath,"index.html"))
})

app.listen(port, () => {
  console.log(`Project is running at http://localhost:${port}/`)
})
