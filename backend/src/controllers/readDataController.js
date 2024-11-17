const xlsx = require("xlsx");
const path = require("path");
const data = require("../models/dataModule");

const DataProcessor = async (req, res) => {
  let filePath = path.join(__dirname, "..", "..", "..", "data.xlsx");
  // Leer el archivo Excel
  const workbook = xlsx.readFile(filePath);

  console.log("🚀 ~ DataProcessor ~ Archivo leido satisfactoriamente");
  // Obtener la primera hoja
  const firstSheetName = workbook.SheetNames[0]; // Nombre de la primera hoja
  const firstSheet = workbook.Sheets[firstSheetName];

  // Convertir la hoja en un array de objetos
  const allData = xlsx.utils.sheet_to_json(firstSheet, { raw: false });

  console.log(
    "🚀 ~ DataProcessor ~ Datos de la primera hoja extraidos exitosamente"
  );

  const operations = allData.map((item) => ({
    updateOne: {
      filter: { timestamp: item.timestamp }, // Buscar por timestamp
      update: { $setOnInsert: item }, // Insertar si no existe
      upsert: true,
    },
  }));

  console.log("🚀 ~ DataProcessor ~ Operaciones en lote creadas exitosamente");

  let groupedData = await data.bulkWrite(operations);
  console.log("Operaciones en lote completadas.");

  // Agrupar los datos por 'nodo'
  // const groupedData = allData.reduce((acc, item) => {
  //   const key = item.Nodo;
  //   if (!acc[key]) acc[key] = [];
  //   acc[key].push(item);
  //   return acc;
  // }, {});

  res.status(200).json(groupedData);
};

module.exports = DataProcessor;
