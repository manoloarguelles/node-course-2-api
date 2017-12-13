// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    console.log('Unable to connect to MongoDB server');
  }
  console.log("Connected to MongoDB server");

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a30b0d05649f437e674ec47')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a303aadc419b21c085b58ff')
  }, {
    $set: {
      name: 'Manolo'
    },
    $inc : {
      age: +5
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //db.close();
});
