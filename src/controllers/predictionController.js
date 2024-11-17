//prediction controller

const predictionController = async (req, res) => {};

const sendDataHoja1 = async (req, res) => {
  let { body } = req;

  console.log("prediction:", body);

  return res.status(200).json(body);
};

module.exports = {
  predictionController,
  sendDataHoja1,
};
