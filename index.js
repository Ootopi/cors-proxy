const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 8080
const cors_proxy = require('cors-anywhere')
cors_proxy.createServer({
    originWhitelist: ['https://ootopi.github.io/wheelerkk', 'https://ootopi.github.io/cheropepero', 'https://ootopi.github.io'],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, _ => {
    console.log(`Running CORS Proxy on ${host}:${port}`)
})
