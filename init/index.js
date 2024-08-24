const mongoose = require("mongoose");
const initData = require("./data.js")
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(()=>{
    console.log("Connectef to DB");
}).catch((err)=>{
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async  () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) =>({...obj, owner : "661c105aa88b2273af8bf0fd"}));
    await Listing.insertMany(initData.data);
    console.log("Data was intitialized");
}

initDB();