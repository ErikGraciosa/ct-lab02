const request = require('superagent');

const fetchQuotes = async () => {
    const { body } = await request.get('https://futuramaapi.herokuapp.com/api/characters/Dr-Zoidberg')
    const randNum = body.length * Math.random();
    return body[Math.floor(randNum)];
}

module.exports = { fetchQuotes }
