/**
* A variables configuration.
*
* @return   JSON
*/
module.exports = {
    algoritma : 'aes192',
    secret : 'm@rsyof1e',
    path : 'D:\\Work\\training\\Project1\\pdf\\',
    env : 'local',
    server: {
        local: {
            host: 'localhost',
            port: 2000
        },
        development: {
            host: '11.0.0.184',
            port: 2000
        },
        production: {
            host: 'localhost',
            port: 2000
        }
    },
    database: {
        local: {
            connection: 'mysql',
            host: '127.0.0.1',
            name: 'pdf',
            username: 'root',
            password: '123456'
        },
        development: {
            connection: 'mysql',
            host: '192.168.173.9',
            name: 'pdf',
            username: 'root',
            password: 'root'
        },
        production: {
            connection: 'mysql',
            host: '127.0.0.1',
            name: 'pdf',
            username: 'root',
            password: '123456'
        }
    },
};
