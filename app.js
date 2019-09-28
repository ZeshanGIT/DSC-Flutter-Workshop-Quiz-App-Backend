var app = require("express")(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/quiz");

app.use(bodyParser.json());

var quesSchema = new mongoose.Schema({
    questionNo: { type: Number, unique: true },
    question: String,
    options: [{ type: String, unique: true }],
    correctOption: Number,
    color: String,
});

quesModel = mongoose.model("Question", quesSchema);

app.get("/", function (req, res) {
    res.send("It's working fine!");
});

app.post("/test", function (req, res) {
    console.log(req.body.asdf);
    res.send(req.body);
});

app.post("/q", function (req, res) {
    quesModel.create(req.body, function (ques, err) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(ques);
            res.send(ques);
        }
    });
});

app.get("/q/:qno", function (req, res) {
    quesModel.findOne({ questionNo: req.params["qno"] }, function (ques, err) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(ques);
            res.send(ques);
        }
    });
});


app.listen(2222, "localhost", function () {
    console.log("Server has started...");
});























// User.find({}, function(err, users) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Users !!!!!!!!");
//         console.log(users);
//     }
// });

// var userSchema = new mongoose.Schema({
//     uid: { type: String, unique: true },
//     firstName: String,
//     lastName: String,
//     password: String,
//     mailID: String,
//     phoneNumber: Number,
//     avatar: Number,
//     pinCode: Number,
//     addressLvl1: String, //Flat, House no., Building, Company, Apartment
//     addressLv2: String, //Area, Colony, Street, Sector, Village
//     landmark: String,
//     city: String,
//     state: String,
// });

// var User = mongoose.model("User", userSchema); 
// User.remove({}, function(err, users) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(users);
//     }
// });
// var me = new User({
//     uid: "nbghuiolmju",
//     firstName: "Seshan",
//     lastName: "Suresh",
//     password: "kply1967*",
//     mailID: "kssu1967@gmail.com",
//     phoneNumber: "+919486932475",
//     avatar: 5,
//     pinCode: 620005,
//     addressLvl1: "B2, Apple Residency", //Flat, House no., Building, Company, Apartment
//     addressLv2: "Ganapathy Nagar", //Area, Colony, Street, Sector, Village
//     landmark: "Opposite to GVN Hospital",
//     city: "Trichy",
//     state: "Tamil Nadu",
// });

// me.save(function(err, user) {
//     if (err) {
//         console.log(user);
//     }
//     else {
//         console.log(user);
//     }
// });

// User.create({
//     uid: "nbghuiolmju",
//     firstName: "Seshan",
//     lastName: "Suresh",
//     password: "kply1967*",
//     mailID: "kssu1967@gmail.com",
//     phoneNumber: "+919486932475",
//     avatar: 5,
//     pinCode: 620005,
//     addressLvl1: "B2, Apple Residency", //Flat, House no., Building, Company, Apartment
//     addressLv2: "Ganapathy Nagar", //Area, Colony, Street, Sector, Village
//     landmark: "Opposite to GVN Hospital",
//     city: "Trichy",
//     state: "Tamil Nadu",
// }, function(err, user) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(user);
//     }
// });

// User.find({}, function(err, users) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(users);
//     }
// });
