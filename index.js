const express = require("express")
const path = require("path")


const Rollbar = require("rollbar");
const rollbar = new Rollbar({
  accessToken: '5fa4855f6b004ec687e9c1c67d00586c',
  captureUncaught: true,
  captureUnhandledRejections: true
});


rollbar.log('Taking Chances!')


const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))

})
app.get("/testrollbar", (req, res) => {
  try {
    doesnotexist();
  } catch (e) {
    rollbar.log("This function does not exist", e);
  }
  
 })
app.get("/cake", (req, res) => {
  try {
    burnedcake();
  } catch (e) { 
  rollbar.critical("The oven is turned on too high");
  }
}) 
app.get("cookies", (req, res) => {
  try {
    tooMuchFlour();
  } catch (e) {
    rollbar.error("the cookies will be too hard");
  }
})
app.get("cupcake", (req, res) => {
  try {
    overFill();
  } catch (e) {
    rollbar.warning(" Overfill will cause side spill");
  }
})






const port = process.env.PORT || 4004


app.listen(port, () => console.log(`Take us to warp ${port}`))
