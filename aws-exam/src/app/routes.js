const routes = require('next-routes')()

routes
    .add('home', '/')
    .add('about', '/about')
    .add('blog', '/blog/:id')
    .add('user', '/user/:id', 'profile')
module.exports = routes
