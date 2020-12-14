const userController = require("../controller/user");
module.exports = (app) => {
  app
    .post("/api/user/create", userController.create)
    .get("/api/users", userController.getAll)
    .put("/api/user/:id", userController.upsert)
    .put("/api/user/update/:id", userController.update)
    .delete("/api/user/:id", userController.delete);
};
