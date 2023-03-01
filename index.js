import express from 'express'
import path from 'path'
import {requestTime, logger} from './middlewares.js'
import serverRoutes from './routes/server.js'

const __dirname = path.resolve()
const app = express()
const PORT = process.env.PORT ?? 3000

app.use(express.static(path.resolve(__dirname, 'static'))) // делаем папку статичной
app.use(requestTime)
app.use(logger)
app.use(serverRoutes)

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))
console.log(app.get('views'))

app.get('/', (req, res) => {
    res.render('index', {title: 'Main page1', active: 'main'})
})

app.get('/feature', (req, res) => {
    res.render('feature', {title: 'Feature page1', active: 'feature'})
})

// app.get('/', (req, res)=>{
//    // res.send('<h1>Hello</h1>')
//     res.sendFile(path.resolve(__dirname, 'static', 'index.html')) //Возвращает нам страничку
// })

// app.get('/download', (req, res)=>{
//     console.log(req.requestTime)
//     res.download(path.resolve(__dirname, 'static', 'index.html')) //Скачивает страничку
// })


app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`)
})