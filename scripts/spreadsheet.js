var spreadsheet = "https://docs.google.com/spreadsheets/d/1SLJXzaJfHwr0WrAu8OvtAmxP1d0NCMyv_O7zZ5YigsE/edit#gid=0";

$(document).ready(function(){
    $('#statistics').sheetrock({
        url: spreadsheet,
        query: "select A where B='A3'"
        // query: "select Print"
    });
});
