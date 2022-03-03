const express = require('express')
const app = express()
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")
const port = 3000

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes)
app.use("/", htmlRoutes)




app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})