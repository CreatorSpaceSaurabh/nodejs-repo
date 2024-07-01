const findAllRecords = async (model, condition, options) => {
  return await model.find(condition, options);
};

module.exports = {
  findAllRecords,
};
