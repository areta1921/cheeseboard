const { Sequelize, Model } = require('sequelize');


//cretae a sequelize connection
const sequelize = new Sequelize('absho-db','abraham','agetahun@',{
    dialect: 'sqlite',
    storage: './sqlite',
    logging: false
})


module.exports = { sequelize, Sequelize }

