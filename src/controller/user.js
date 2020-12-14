const { user, bill, sequelize } = require("../../models");
let controller = {};

controller.create = async (req, res) => {
  const { amount, description, idStatus } = req.body;
  try {
    const _user = await sequelize.transaction(async () => {
      return await user.create(
        {
          ...req.body,
          bill: {
            amount,
            description,
            idStatus,
          },
        },
        {
          include: [{ model: bill }],
        }
      );
    });
    res.json(_user);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

controller.getAll = async (req, res) => {
  try {
    const _users = await user.findAll({
      include: [{ model: bill }],
    });
    res.json(_users);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

controller.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const _user = await user.destroy({ where: { id: id } });
    res.json(_user);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

controller.upsert = async (req, res) => {
  const { amount, description, idStatus } = req.body;
  const { email } = req.body;
  try {
    const _user = await sequelize.transaction(async () => {
      return await user.upsert(
        {
          ...req.body,
          bill: {
            amount,
            description,
            idStatus,
          },
        },
        { where: { email } },
        {
          include: [{ model: bill }],
        }
      );
    });
    res.json(_user);
  } catch (error) {
    res.status(400).json(error);
  }
};

controller.update = async (req, res) => {
  const { amount, description, idStatus } = req.body;
  const { id } = req.params;
  try {
    const _user = await sequelize.transaction(async () => {
      return await user.update(
        {
          ...req.body,
          bill: {
            amount,
            description,
            idStatus,
          },
        },
        { where: { id } },
        {
          include: [{ model: bill }],
        }
      );
    });
    res.json(_user);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = controller;
