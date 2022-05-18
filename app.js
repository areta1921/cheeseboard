const {sequelize} = require('./db')
const {Cheese, Board} = require('./index.js')
const express = require('express')

const app = express()

const port = 3000

app.get('/cheeses', async(req, res) =>{
    let ad = req.params.cheeses
    let ag = await Cheese.findAll(ad)
    res.json({ag})
})

app.get('/boards', async(req, res) =>{

    let ag = await Board.findAll(req.params.boards)
    res.json({ag})
})
app.get('/cheeses/:id', async(req, res)=>{
    let ah = await Cheese.findByPk(req.params.id)
    res.json({ah})
})

app.get('/boards/:id', async(req, res)=>{
    let ah = await Board.findByPk(req.params.id)
    res.json({ah})
})



app.listen(port, async() =>{
       await seed()
    console.log(`listining port ${port}`)
})


async function seed(){
   await sequelize.sync({force: true})

let b1 = await Board.create({type: 'abreham franch'})

   let c1 = await Cheese.create({title: 'gdf'})
   let c2 = await Cheese.create({title: 'dfgd'})
   let c3 = await Cheese.create({title: 'gdsg'})
   let c4 = await Cheese.create({title: 'dfgd'})

let b2 = await Board.create({type: 'nani faverare'})

let c6 = await Cheese.create({title: 'wetw'})
let c7 = await Cheese.create({title: 'as'})
let c8 = await Cheese.create({title: 'we'})
let c9 = await Cheese.create({title: 'q3er'})


await b1.addCheese(c1)
await b1.addCheese(c2)
await b1.addCheese(c3)
await b1.addCheese(c4)


await b2.addCheese(c6)
await b2.addCheese(c7)
await b2.addCheese(c8)
await b2.addCheese(c9)


}