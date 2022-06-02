const path = require('path')

const controlador = {
    login : (req, res) => {
        res.sendFile(path.resolve('src/views/login.html'))
    },
    home : (req, res) => {
        res.sendFile(path.resolve('src/views/home.html'))
    },
    company : (req, res) => {
        res.sendFile(path.resolve('src/views/company.html'))
    },
    MTB : (req, res) => {
        res.sendFile(path.resolve('src/views/MTB.html'))
    },
    register : (req, res) => {
        res.sendFile(path.resolve('src/views/register.html'))
    },
    road : (req, res) => {
        res.sendFile(path.resolve('src/views/road.html'))
    },
}

module.exports = controlador;

