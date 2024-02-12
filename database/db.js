const Database = require("better-sqlite3");

const db = new Database(process.env.DB_FILE);
console.log(db);

// Using prepared statements 
const select_date = db.prepare("SELECT DATE()");
const result = select_date.get();
console.log(result);

