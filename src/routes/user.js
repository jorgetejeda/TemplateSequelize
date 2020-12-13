const userController = require("../controller/user");
module.exports = (app) => {
  app
    .post("/api/user/create", userController.create)
    .get("/api/users", userController.getAll)
    .delete("/api/user/:id", userController.delete);
};
