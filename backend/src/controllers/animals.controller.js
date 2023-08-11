const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const animals = await tables.animal.readAll();

    return animals.length ? res.json(animals) : [];
  } catch (e) {
    return next(e);
  }
};

const add = async (req, res, next) => {
  const animal = req.body;

  try {
    const insertId = await tables.animal.create(animal);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, add };
