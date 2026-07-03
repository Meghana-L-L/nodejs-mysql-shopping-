const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "info123",
    database: "shopping2"
});

connection.connect(function(err) {
    if (err) throw err;

    console.log("Connected Successfully!");

    connection.query("DELETE FROM customer WHERE cname='golu'", function(err, result) {
        if (err) throw err;

        console.log("Customer deleted successfully.");
        console.log(result);

        connection.end();
    });
});