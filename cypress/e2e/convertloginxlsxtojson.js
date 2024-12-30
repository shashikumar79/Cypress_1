//convert xlsx to json

var XLSX=require('xlsx');

var fs=require('fs')

//create a work book object
var workbook=XLSX.readFile('cypress/spreadsheets/logindata.xlsx')

//create worksheet
var worksheet=workbook.Sheets['sheet1']
var user_data=XLSX.utils.sheet_to_json(worksheet)
console.log(user_data);
fs.writeFile('cypress/fixtures/Exceltojson/user_data.json',JSON.stringify(user_data),(err)=>{

    if(err){

        console.log(err)
        return
    }
})