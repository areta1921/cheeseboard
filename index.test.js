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
        const board6 = await Board.create({type: 'italian',
                                          description: 'made of italy',
                                        rating: 4.2})
        const board7 = await Board.create({type: 'franch',
                                         description: 'made of franch',
                                         rating: 4.6})     
        const cheese1 = await Cheese.create({title: 'AGED FRESH',
                                            description: 'White Fuzzy Rind'})  
        const cheese2 = await Cheese.create({title: 'SEMI-SOFT',
                                            description: 'Fine to thick grey-brown rind or orange'})        
        const cheese3 = await Cheese.create({title: 'HARD',
                                            description: 'crusty, grey often polished, waxed or oiled'})       
        const cheese4 = await Cheese.create({title: 'BLUE',
                                            description: 'Gritty, rough, sometimes sticky rind'})  
                                            
        await board6.addCheese(cheese1)
        await board7.addCheese(cheese2)
        await board6.addCheese(cheese4)
        await board7.addCheese(cheese3)

        const boardSix = await board6.getCheeses()
        const boardSeven = await board7.getCheeses()

        expect(boardSix.length).toBe(2)
        expect(boardSeven.length).toBe(2)
       console.log(boardSeven)

        // const someboard = await Board.findByPk(2)
        // await someboard.addCheese(2)
                                         
    })
    

})

