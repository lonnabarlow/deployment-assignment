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
    res.sendFile(path.join(__dirname, "../public/index.html"))

})







const port = process.env.PORT || 4004


app.listen(port, () => console.log(`Take us to warp ${port}`))
