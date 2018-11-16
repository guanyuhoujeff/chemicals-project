var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongo = require("mongoose");

var Kafka = require("no-kafka");
var express = require("express");
  // http = require("http"),
  // server = http.createServer(app);

let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);

io.on("connection", socket => {
  console.log("user connected");

  socket.on("disconnect", function() {
    console.log("user disconnected");
  });

  socket.on("add-message", message => {
    io.emit("message", { type: "new-message", text: message });
  });
});



var db = mongo.connect(
  "mongodb://localhost:27017/chemicalsdb",
  function(err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to " + db, " + ");
    }
  }
);
// var app = express();

app.use(bodyParser());
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  // res.setHeader("Access-Control-Allow-Origin", "http://192.168.43.12:4200");
  res.setHeader("Access-Control-Allow-Origin","*");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

var Schema = mongo.Schema;

var chemicalsSchema = new Schema({
  any: {}
});

// app.post("/api/SaveFund", function (req, res) {
//     var mod = new model(req.body);
//     if (req.body.mode == "Save") {
//         mod.save(function (err, data) {
//             if (err) {
//                 res.send(err);
//             }
//             else {
//                 res.send({ data: "Record has been Inserted..!!" });
//             }
//         });
//     }
//     else {
//         model.findByIdAndUpdate(req.body.id, { name: req.body.name, address: req.body.address },
//             function (err, data) {
//                 if (err) {
//                     res.send(err);
//                 }
//                 else {
//                     res.send({ data: "Record has been Updated..!!" });
//                 }
//             });

//     }
// })

// app.post("/api/deleteFund", function (req, res) {
//     model.remove({ _id: req.body.id }, function (err) {
//         if (err) {
//             res.send(err);
//         }
//         else {
//             res.send({ data: "Record has been Deleted..!!" });
//         }
//     });
// })

app.get("/api/getMarkedContent", function(req, res) {
  console.log("getMarkedContent");
  let model = mongo.model("markedContent", chemicalsSchema, "markedContent");
  model.find({}, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      console.log("Susscess!");
      res.send(data);
    }
  });
});

app.get("/api/getKeyWordsCounts", function(req, res) {
  console.log("getKeyWordsCounts");
  let model = mongo.model("keyWordCounts", chemicalsSchema, "keyWordCounts");
  model.find({}, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.get("/api/getKeyWordsTf", function(req, res) {
  console.log("getKeyWordsTf");
  let model = mongo.model("keyWordTf", chemicalsSchema, "keyWordTf");
  model.find({}, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.get("/api/getR1Counts", function(req, res) {
  console.log("getR1Counts");
  let model = mongo.model("R1Counts", chemicalsSchema, "R1Counts");
  model.find({}, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.get("/api/getR2Counts", function(req, res) {
  console.log("getR2Counts");
  let model = mongo.model("R2Counts", chemicalsSchema, "R2Counts");
  model.find({}, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.get("/api/getR3Counts", function(req, res) {
  console.log("getR3Counts");
  let model = mongo.model("R3Counts", chemicalsSchema, "R3Counts");
  model.find({}, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

//  R21 ~ R24
app.get("/api/getR21Counts", function(req, res) {
  console.log("getR21Counts");
  let model = mongo.model("R21Counts", chemicalsSchema, "R21Counts");
  model.find({}, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});
app.get("/api/getR22Counts", function(req, res) {
  console.log("getR22Counts");
  let model = mongo.model("R22Counts", chemicalsSchema, "R22Counts");
  model.find({}, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});
app.get("/api/getR23Counts", function(req, res) {
  console.log("getR23Counts");
  let model = mongo.model("R23Counts", chemicalsSchema, "R23Counts");
  model.find({}, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});
app.get("/api/getR24Counts", function(req, res) {
  console.log("getR24Counts");
  let model = mongo.model("R24Counts", chemicalsSchema, "R24Counts");
  model.find({}, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

//  R31 ~ R34
app.get("/api/getR31Counts", function(req, res) {
  console.log("getR31Counts");
  let model = mongo.model("R31Counts", chemicalsSchema, "R31Counts");
  model.find({}, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});
app.get("/api/getR32Counts", function(req, res) {
  console.log("getR32Counts");
  let model = mongo.model("R32Counts", chemicalsSchema, "R32Counts");
  model.find({}, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});
app.get("/api/getR33Counts", function(req, res) {
  console.log("getR33Counts");
  let model = mongo.model("R33Counts", chemicalsSchema, "R33Counts");
  model.find({}, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});
app.get("/api/getR34Counts", function(req, res) {
  console.log("getR34Counts");
  let model = mongo.model("R34Counts", chemicalsSchema, "R34Counts");
  model.find({}, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

//
//  Summary
//
app.get("/api/getR1Summary", function(req, res) {
  console.log("getR1Summary");
  let model = mongo.model("R1Summary", chemicalsSchema, "R1Summary");
  model.find({}, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});
app.get("/api/getR2Summary", function(req, res) {
  console.log("getR2Summary");
  let model = mongo.model("R2Summary", chemicalsSchema, "R2Summary");
  model.find({}, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});
app.get("/api/getR3Summary", function(req, res) {
  console.log("getR3Summary");
  let model = mongo.model("R3Summary", chemicalsSchema, "R3Summary");
  model.find({}, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(8080, function() {
  console.log("Example app listening on port 8080!");
});

//
// 資料存資料到mongo
//

var postChemicalsSchema = new Schema(
  { value: {} },
  { versionKey: false // You should be aware of the outcome after set to false
   }
);

app.post("/api/postHandleOnlineFileMonogo", function(req, res) {
  let model = mongo.model(
    "toHandleOnlineFileMonogo",
    postChemicalsSchema,
    "toHandleOnlineFileMonogo"
  );
  var mod = new model({ value: req.body["value"] });
  mongo.connection.collections["toHandleOnlineFileMonogo"].drop(function(
    err
  ) {});

  mod.save(function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send({ data: "Record has been Inserted..!!" });
    }
  });
});

//
// Kafka
//

// server.listen(8888, function() {
//   console.log("Example app listening on port 8888!");
//   var consumer = new Kafka.SimpleConsumer({
//     connectionString: "kafka://192.168.43.12:9092"
//   });
//   // data handler function can return a Promise
//   var dataHandler = function(messageSet, topic, partition) {
//     messageSet.forEach(function(m) {
//       console.log(topic, partition, m.offset, m.message.value.toString("utf8"));

//       if (topic == "finished-handle-online-file") {
//         io.emit('message', {
//            x: (new Date()).getTime(),
//            y: m.message.value.toString('utf8')
//         });
//       }

//     });
//   };
//   return consumer.init().then(function() {
//     // Subscribe partitons 0 and 1 in a topic:
//     // var val = consumer.subscribe('kafka-test-topic', { time: Kafka.EARLIEST_OFFSET }, dataHandler);
//     var v1 = consumer.subscribe("finished-handle-online-file", dataHandler);
//     var arr = [];
//     arr.push([v1]);
//     console.log("val:" + arr);
//     return arr;
//   });
// });

app.get("/api/getHandleOnlineFile", function(req, res) {
  console.log("started finished-handle-online-file consumer");
  var consumer = new Kafka.SimpleConsumer({
    connectionString: "kafka://192.168.43.12:9092"
  });
  // data handler function can return a Promise
  var dataHandler = function(messageSet, topic, partition) {
    messageSet.forEach(function(m) {
      console.log(topic, partition, m.offset, m.message.value.toString("utf8"));
    });
  };
  return consumer.init().then(function() {
    // Subscribe partitons 0 and 1 in a topic:
    // var val = consumer.subscribe('kafka-test-topic', { time: Kafka.EARLIEST_OFFSET }, dataHandler);
    var v1 = consumer.subscribe("finished-handle-online-file", dataHandler);
    var arr = [];
    arr.push([v1]);
    console.log("val:" + arr);
    return arr;
  });
});


http.listen(5000, () => {
  console.log("started on port 5000");
  console.log("started 192.168.43.12 finished-handle-online-file consumer");
  var consumer = new Kafka.SimpleConsumer({
    connectionString: "kafka://192.168.43.12:9092"
  });
  // data handler function can return a Promise
  var dataHandler = function(messageSet, topic, partition) {
    messageSet.forEach(function(m) {
      console.log(topic, partition, m.offset, m.message.value.toString("utf8"));

      if (topic == "finished-handle-online-file") {
        io.emit("message", {

          x: new Date().getTime(),
          y: m.message.value.toString("utf8")
        });
      }
    });
  };

  return consumer.init().then(function() {
    // Subscribe partitons 0 and 1 in a topic:
    // var val = consumer.subscribe('kafka-test-topic', { time: Kafka.EARLIEST_OFFSET }, dataHandler);
    var v1 = consumer.subscribe("finished-handle-online-file", dataHandler);
    var arr = [];
    arr.push([v1]);
    console.log("val:" + arr);
    return arr;
  });
});


// app.listen(8888, "192.168.43.12", () => {
//   console.log("started 192.168.43.12 finished-handle-online-file consumer");
//   var consumer = new Kafka.SimpleConsumer({
//     connectionString: "kafka://192.168.43.12:9092"
//   });
//   // data handler function can return a Promise
//   var dataHandler = function(messageSet, topic, partition) {
//     messageSet.forEach(function(m) {
//       console.log(topic, partition, m.offset, m.message.value.toString("utf8"));

//       // if (topic == "finished-handle-online-file") {
//       //   io.emit("message", {
//       //     x: new Date().getTime(),
//       //     y: m.message.value.toString("utf8")
//       //   });
//       // }
//     });
//   };

//   return consumer.init().then(function() {
//     // Subscribe partitons 0 and 1 in a topic:
//     // var val = consumer.subscribe('kafka-test-topic', { time: Kafka.EARLIEST_OFFSET }, dataHandler);
//     var v1 = consumer.subscribe("finished-handle-online-file", dataHandler);
//     var arr = [];
//     arr.push([v1]);
//     console.log("val:" + arr);
//     return arr;
//   });
// });

var producer = new Kafka.Producer({
  connectionString: "kafka://192.168.43.12:9092"
});

app.post("/api/postHandleOnlineFileTopic", function(req, res) {
  // console.log(' !! **********  post("/api/producer" req', req);
  let theMessage = req.body.value;
  // console.log(' ! **********  !!!  post theMessage', theMessage);

  // Kafka
  return producer
    .init()
    .then(function() {
      return producer.send({
        topic: "to-handle-online-file",
        partition: 0,
        message: {
          key: 12,
          value: theMessage
        }
      });
    })
    .then(function(result) {
      console.log("postHandleOnlineFileTopic  result :", result);
      /*
      [ { topic: 'kafka-test-topic', partition: 0, offset: 353 } ]
      */
    });
});


app.get("/api/getFinishedHandleOnlineFile", function(req, res) {
  console.log("getFinishedHandleOnlineFile");
  let model = mongo.model("finishedHandleOnlineFile", chemicalsSchema, "finishedHandleOnlineFile");
  model.find({}, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});


app.get("/api/getRealTimeNewsObjectList", function(req, res) {
  console.log("getRealTimeNewsObjectList");
  let model = mongo.model("realTimeNewsObjectList", chemicalsSchema, "realTimeNewsObjectList");
  model.find({}, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});
