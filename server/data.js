let mysql = require('mysql')
let util = require('util')


let conn = mysql.createConnection({
    host:'bfzrsc6p2jgqojbyksvj-mysql.services.clever-cloud.com',
    user:'uudfmprfthahkqmp',
    password:'3vQYNjeOE8mX45DPgSeE',
    database:'bfzrsc6p2jgqojbyksvj'
})

let exe = util.promisify(conn.query).bind(conn)


module.exports = exe
