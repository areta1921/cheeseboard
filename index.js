const {Board} = require('./Board')
const {Cheese} = require('./Cheese')
const{User} = require('./User')

Board.belongsTo(User)
User.hasMany(Board)


Board.belongsToMany(Cheese,{through: 'Cheeseab'})
Cheese.belongsToMany(Board,{through: 'Cheeseab'})




module.exports ={
    Board,
    Cheese,
    User
}