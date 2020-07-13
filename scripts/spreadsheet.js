//Currently I have got this program working so that the after running this code in Node it will update the index.ejs file to have Hello, <A2> according to the spreadsheet.



var app = require("express")(); 
var bodyParser = require("body-parser"); 

const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('../client_secret.json');

const doc = new GoogleSpreadsheet('1SLJXzaJfHwr0WrAu8OvtAmxP1d0NCMyv_O7zZ5YigsE');
accessSpreadsheet();

//Set view engine to ejs
app.set("view engine", "ejs"); 

//Tell Express where we keep our index.ejs
app.set("views", __dirname + "/views"); 

//Use body-parser
app.use(bodyParser.urlencoded({ extended: false })); 

//Instead of sending Hello World, we render index.ejs
app.get("/", (req, res) => { res.render("index", { info: number }); });

app.listen(8080, () => { console.log("Server online on http://localhost:8080"); });

function printStuff(a) {
    console.log(a.Alpha);
    console.log(a.Beta);
    console.log('------------');
}

async function accessSpreadsheet() {
    await doc.useServiceAccountAuth({
        client_email: creds.client_email,
        private_key: creds.private_key,
    });
    
    await doc.loadInfo();
    
    const sheet = doc.sheetsByIndex[0];

    const rows = await sheet.getRows();

    //The variable that goes in the html lol
    number = rows[0].Alpha;

    /*
    rows.forEach(row => {
        printStuff(row);
    })
    */
}