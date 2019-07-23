
module.exports = {
    randomHouse: (updateHouseInfo, historyPush) => {
        const randomNum = Math.ceil(Math.random() * 4)

        const house = randomNum === 1 ? 'Gryffindor'
        :randomNum === 2 ? 'Hufflepuff'
        : randomNum === 3 ? 'Slytherin'
        : 'Ravenclaw'
        const mainColor 
        = randomNum === 1 ? '#740001' 
        : randomNum === 2 ? '#372e29' 
        : randomNum === 3 ? '#000000' 
        : '#000000'
        const secondaryColor = 
        randomNum === 1 ? '#d3a625'
        : randomNum === 2 ? '	#ecb939' 
        : randomNum === 3 ? '#2a623d' 
        : '#0066e2'

        //this following line sets state in app.js
        updateHouseInfo({house, mainColor, secondaryColor})
        historyPush(`/house/${house}`)
    }

}