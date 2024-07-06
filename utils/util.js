const findAllRecords = async (model, condition, options) => {
  return await model.find(condition, options);
};

const findOneRecords = async (model, condition, options) => {
  return await model.findOne(condition, options);
};

const createRecord = async (model, obj) => {
  return await model.create(obj);
};

const saveRecord = async (model, obj) => {
  const record = await model(obj).save();
  return record;
};

module.exports = {
  findAllRecords,
  findOneRecords,
  createRecord,
  saveRecord,
};
