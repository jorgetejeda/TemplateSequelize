const { users } = require("../../models");
let controller = {};

controller.create = async (req, res) => {
  try {
    const _user = await user.create(req.body);
    res.json(_user);
  } catch (error) {
    res.status(400).json(error);
  }
};

controller.getAll = async(req,res)=>{
  try {
    const _users = await users.findAll();
    res.json(_users); 
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

controller.delete = async (req, res)=>{
  const {id} = req.params;
  try {
    const _user = await users.destroy({where:{id:id}});
    res.json(_user);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

module.exports = controller;
