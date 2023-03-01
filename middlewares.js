import colors from 'colors'

export const requestTime = (req, res, next) => {
    req.requestTime = Date.now()

    next() // запускает следующий метод
}

export const logger = (req, res, next) =>{
    console.log(colors.green(`Req.time: ${req.requestTime}`))

    next()
}