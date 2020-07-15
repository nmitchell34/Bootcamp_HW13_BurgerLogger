const connection = require("./connection.js");

const orm = {
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },

  insertOne: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table + "(";

    queryString += cols.toString() + ") VALUES (?)";
    console.log(queryString);
    connection.query(queryString, vals, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },

  updateOne: function (table, col, val, condition, cb) {
    var queryString = "UPDATE " + table + " SET";
    queryString += col + "= " + val;
    queryString += " WHERE" + condition + ";";
    console.log(queryString);
    connection.query(queryString, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
};

module.exports = orm;
