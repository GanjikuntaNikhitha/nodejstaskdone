const express = require('express')
require('./db/mongoose')

const User = require('./models/user')
const Task = require('./models/task')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())


app.post('/tasks', (req, res) => {
    const task1 = new Task(req.body)

    task1.save().then( () => {
res.send(task1)

    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.get('/users', (req, res) => {
    User.find({}) .then((users) => {

        res.send(users)
    }).catch((e) => {


    })
})
    

  app.get('/tasks', (req, res) => {

        Task.find({}) .then((tasks) => {

            res.send(tasks)
        }).catch((e) => {
            res.status(400).send("number not found")
          })
 })



 app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id

    Task.findById(_id).then((task) => {
        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    }).catch((e) => {
        res.status(500).send()
    })
})


app.post('/users', (req, res) => {
     const user1 = new User(req.body)

     user1.save().then( () => {
res.send(user1)

    }).catch((e) => {
        res.status(400).send(e)
    })

// res.send('hello')
})

app.post('/checkMobileExists', (req, res) => {

    Task.findOne({mobilenumber:req.body.mobile}, function(err, data){
        if(err){
            res.status(400).send(err)
        }else if(data){
            res.status(400).send('Mobile Number already exists!')
        }else{
            res.status(200).send('Mobile Number not exists!')
        }
    })


})


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})