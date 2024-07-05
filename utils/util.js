const findAllRecords = async (model, condition, options) => {
  return await model.find(condition, options);
};

const findOneRecords = async (model, condition, options) => {
  return await model.findOne(condition, options);
};

const save = async (model, obj) => {
  return await model.create(obj);
};

module.exports = {
  findAllRecords,
  findOneRecords,
  save,
};
