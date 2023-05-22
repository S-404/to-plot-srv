const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()

const authRouter = require('./routes/auth-routes')
const usersRouter = require('./routes/users-routes')
const apiErrorMiddleware = require('./middlewares/error-middleware')
const authMiddleware = require('./middlewares/auth-middleware')

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials: true, origin: process.env.CLIENT_URL}))

app.use('/auth', authRouter)
app.use(authMiddleware) //req.user = userData
app.use(apiErrorMiddleware)

app.use('/api/user',usersRouter)
app.listen(PORT, function () {
	console.log(`Server is running on port ${PORT}`)
})