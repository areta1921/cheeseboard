const {Board} = require('./Board')
const {Cheese} = require('./Cheese')
const{User} = require('./User')

Board.belongsTo(User)
User.hasMany(Board)





module.exports ={
    Board,
    Cheese,
    User
}