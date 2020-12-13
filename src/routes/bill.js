module.exports = (app) => {
    app.get("/api/bill", (req, res) => {
      res.json("it working");
    });
  };
  