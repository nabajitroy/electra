const mysql = require('mysql');
const todosSchema = mysql.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});
module.exports = mysql.model('todos', todosSchema);