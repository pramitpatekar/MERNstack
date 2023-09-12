require('dotenv').config()

const express = require('express')

const workoutRoutes = require('./routes/workouts')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


//  app.get('/', (req,res) => {
//  res.json({mssg:'Welcome to the App'})
//  })

app.use('/api/workouts',workoutRoutes)


app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})




