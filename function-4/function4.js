const request = require('superagent');

const fetchQuotes = async () => {
    const quotes = await request.get('https://futuramaapi.herokuapp.com/api/characters/Dr-Zoidberg')
    const randNum = quotes.body.length * Math.random();
    return quotes.body[Math.floor(randNum)];
}

module.exports = { fetchQuotes }
