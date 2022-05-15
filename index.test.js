const {sequelize} = require('./db');
const {Board, Cheese, User} = require('./index')




describe('User cheese and Board models',() =>{
    beforeAll(  async () =>{
        await sequelize.sync({force: true})
    })
    test('create user model', async () =>{
        const myUser = await User.create({name: 'abraham', 
                                        email: 'agetahun567@gmail.com'
                                    })
        expect(myUser.name).toBe('abraham')
        expect(myUser.email).toBe('agetahun567@gmail.com')
        console.log(myUser.toJSON())
    })
    test('create board model', async() => {
            const myBoard = await Board.create({type: 'gouada' , 
                                                description: 'it is very testy', 
                                                rating: 4
                                            })
            expect(myBoard.type).toBe('gouada')
            expect(myBoard.description).toBe('it is very testy')
            expect(myBoard.rating).toBe(4)
            console.log(myBoard.toJSON())
    })
    test('', async() =>{
            const myCheese =await Cheese.create({title: 'cheese',
                                                description: 'cheese is sweet'
                                                })

           expect(myCheese.title).toBe('cheese') 
           expect(myCheese.description).toBe('cheese is sweet')      
           console.log(myCheese.toJSON())                              
    })
     
    test('Multiple Boards can be added to a User', async() =>{
         
    })
    test('board to many cheese and cheese to be many board  ', async() =>{

    })
    

})

