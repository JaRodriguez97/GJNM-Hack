const UserModel = require("../models/userModel");
const Data = require("../models/dataModule");

const getAllUsers = async (req, res) => {};

const createUser = async (req, res) => {};

const updateUser = async (req, res) => {};

const deleteUser = async (req, res) => {};

const sendDataHoja1 = async (req, res) => {
  let { body } = req;

  console.log(body);
  //   return res.status(200).send(body);

  const filterFromDate = new Date(body.fromDate);
  const filtertoDate = new Date(body.toDate);

  let results = await Data.aggregate([
    {
      // Convierte el campo 'timestamp' de cadena a objeto Date
      $addFields: {
        timestampDate: {
          $dateFromString: {
            dateString: "$timestamp",
            format: "%Y-%m-%d %H:%M:%S",
          },
        },
        trimmedNodo: { $trim: { input: "$Nodo" } },
      },
    },
    {
      // Filtra los documentos donde 'timestampDate' es mayor que 'filterFromDate'
      $match: {
        timestampDate: { $gte: filterFromDate, $lte: filtertoDate },
        trimmedNodo: { $in: body.nodes },
      },
    },
    {
      $project: {
        __v: 0,
        timestampDate: 0,
        createdAt: 0,
        updatedAt: 0,
        trimmedNodo: 0,
      },
    },
  ]).catch((err) => console.error("Error en la agregación:", err));

  console.log("Resultados filtrados:", results);
  res.status(200).send(results);
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  sendDataHoja1,
};
