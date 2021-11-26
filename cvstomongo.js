// https://www.bezkoder.com/node-js-csv-mongodb-collection/

const mongodb = require("mongodb").MongoClient;
const csvtojson = require("csvtojson");
const path = require("path");
// let url = "mongodb://username:password@localhost:27017/";
const url = "mongodb://localhost:27017/";


// constants
// var constants = require(path.join(path.resolve(__dirname, '..'),'constants'));
var constants = require('./constants');

const UPLOAD_FILES_DIR = constants.UPLOAD_FILES_DIR;
const IMAGES_FILES_DIR = constants.IMAGES_FILES_DIR;

/////

function saveDB(file_name) {
	
var dbname = path.parse(file_name).name;
var fileName = path.join(UPLOAD_FILES_DIR,file_name);

console.log(fileName);

csvtojson()
  .fromFile(fileName)
  .then(csvData => {
	  
	  // csvData.forEach(function (doc, err) {
		  // console.log(doc, "csvtojson");
		  // });
	  
    // console.log(csvData); // to print the data 

    mongodb.connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err, client) => {
        if (err) throw err;

        client
          .db("stockUpdate2")
          .collection(dbname)
          .insertMany(csvData, (err, res) => {
            if (err) throw err;

            console.log(`Inserted: ${res.insertedCount} rows`);
            client.close();
          });
      }
    );
	
	
	mongodb.connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err, client) => {
        if (err) throw err;
		
		  csvData.forEach(function (doc1, err) {


            var this_doc = { "name": doc1.name, "category": doc1.category, "photo_id": doc1.photo_id, "desactualizar": doc1.desactualizar };
            console.log(this_doc,"solo csvtojson papi");
            // db.stock.updateMany({ my_id });

            this_id = doc1.my_id;

                    
			//
			client.db("stockUpdate2").collection('stocks').updateMany(

              { "my_id": this_id },
              {
                $set: {  "name": doc1.name, "category": doc1.category, "photo_id": doc1.photo_id, "desactualizar": doc1.desactualizar },
                $inc: { "amount": Number(doc1.amount),"ventas": Number(0)},
                $currentDate: { lastModified: true },             
              },
              { upsert: true });
			  //

          });
		  
		}
		
    ); //mongodb.connect
	
		  
		  
  }); //csvtojson
}

module.exports = saveDB;