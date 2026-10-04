// utils/excelReader.js
const XLSX = require('xlsx');
const path = require('path');

function getExcelData(filePath, sheetName = 'Products') {
    // Windows me path resolve karke exact directory find karta hai
    const absolutePath = path.resolve(process.cwd(), filePath);
    const workbook = XLSX.readFile(absolutePath);
    const worksheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(worksheet);
}

module.exports = { getExcelData };