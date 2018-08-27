const fs = require('fs');
const excelToJson = require('convert-excel-to-json');
const {camelCase} = require('lodash');

const processSpreadsheet = async (fileName) => {
  const spreadsheetData = excelToJson({
    sourceFile: fileName
  });

  const sheetNames = Object.keys(spreadsheetData);

  const data = sheetNames.reduce((agg, sheetName) => {
    const headers = spreadsheetData[sheetName][0];
    const rows = spreadsheetData[sheetName].slice(1);
    const rowData = rows.map(row => mapRow(row, headers));

    return {...agg, [camelCase(sheetName)]: rowData};
  }, {});

  fs.writeFileSync('countryData.json', JSON.stringify(data, null, 2));
};

const mapRow = (row, headers) => {
  const rowKeys = Object.keys(row);
  return rowKeys.reduce((agg, key) => ({
    ...agg,
    [camelCase(headers[key])]: row[key]
  }), {});
};

const runProcessSpreadsheet = processSpreadsheet("C:\\Scratch\\CountryData\\Data.xlsx");

module.exports = runProcessSpreadsheet;