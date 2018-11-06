
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/paired', (req, res) => {
    res.render('paired', {
        data: {},
        errors: {}
    })
})

router.post('/paired', (req, res) => {
  res.render('paired', {
    data: req.body, // { userArray }
    errors: {
      userArray: {
        msg: 'An array of numbers is required'
      }
    }
  })
})

module.exports = router
