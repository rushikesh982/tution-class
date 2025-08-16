let mysql = require("mysql");
let util = require("util");

let conn = mysql.createConnection({
  host: process.env.MYSQL_ADDON_HOST,
  port: process.env.MYSQL_ADDON_PORT || 3306,   // Clever Cloud gives you exact port
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB,
  ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: true } : undefined
});

let exe = util.promisify(conn.query).bind(conn);

module.exports = exe;
