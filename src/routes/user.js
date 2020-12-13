module.exports = (app) => {
  app.get("/api/user", (req, res) => {
    res.json("it working");
  });
};
