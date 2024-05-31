const mongoose = require("mongoose")

const DBConnection = () => {
    mongoose.connect(process.env.DB_URI).then((conn) => {
        console.log(`connection ${conn.connection.host}`)
    })
}

module.exports = DBConnection
