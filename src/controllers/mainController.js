
const controller = {
    login : (req, res) => {
        res.render ('login')
        },
    register : (req, res) => {
        res.render ('register')
    },
    home : (req, res) => {
        res.render ('home')
    },
    mtb : (req, res) => {
        res.render ('mtb')
    },
    road : (req, res) => {
        res.render ('road')
    },
    city : (req, res) => {
        res.render ('city')
    },
    kids : (req, res) => {
        res.render ('kids')
    },
    track : (req, res) => {
        res.render ('track')
    },
    shopCart : (req, res) => {
        res.render ('shopCart')
    },
}

module.exports = controller;

