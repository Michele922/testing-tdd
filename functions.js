const getYieldForPlant = (plant) => {
  return plant.yield;
};

const getYieldForCrop = (input) => {
  const { crop, numCrops } = input;
  return getYieldForPlant(crop) * numCrops;
};

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
};
