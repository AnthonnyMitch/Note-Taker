var db = require("../db/db.json");
var store = require("../db/store");


module.exports = function(app) {




// GET ROUTE 


app.get("/api/db", function(req, res) {
    res.json(db);
  });

  app.get("/api/", function(req, res) {
    res.json(store);
  });
// POST ROUTE 
app.post("/api/db", function(req, res) {
    
    if (db.length) {
      db.push(req.body);
      res.json(true);
    }
    else {
      store.push(req.body);
      res.json(false);
    }
  });


//DELETE 
app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    db.length = 0;
    store.length = 0;

    res.json({ ok: true });
  });
};