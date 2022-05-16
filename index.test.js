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
    test('create Cheese model', async() =>{
            const myCheese =await Cheese.create({title: 'cheese',
                                                description: 'cheese is sweet'
                                                })

           expect(myCheese.title).toBe('cheese') 
           expect(myCheese.description).toBe('cheese is sweet')      
           console.log(myCheese.toJSON())                              
    })
     
    test('user can have many boards', async() =>{
         const uAbraham = await User.create({name: 'ayle', email: 'absho1921@gmail.com'})

         board1 = await Board.create({type: 'french',
                                      description: 'hard type of board',
                                      rating: 5})
         board2 = await Board.create({type: 'ethiopian',
                                    description: 'hard type of board',
                                    rating: 3.7})  
        board3 = await Board.create({type: 'nigerian',
                                    description: 'hard type of board',
                                    rating: 2.2})   
                                    
                                    
             await uAbraham.addBoard(board1)
             await uAbraham.addBoard(board2)    
             await uAbraham.addBoard(board3)   
             const ab = await uAbraham.getBoards() 
             expect(ab.length).toBe(3)  
             
             console.log(uAbraham.toJSON())
                                    
    })
    test('board to many cheese and cheese to be many board  ', async() =>{

    })
    

})

