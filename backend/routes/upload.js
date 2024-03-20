const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    // console.log(file)
    cb(
      null,
      path.basename(file.originalname) +
        '-' +
        uniqueSuffix +
        path.extname(file.originalname),
    )
  },
})

const upload = multer({ storage })

/* GET users listing. */
router.post('/', upload.single('myfile'), function (req, res, next) {
  console.log('a file uploaded')
  res.send('file uploaded!')
})

module.exports = router
