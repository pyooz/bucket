const mongoose = require("mongoose"); 

//Card Schema
const WriteSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  org: {
    type: String,
    required: false, //필수입력 아님
  },
  title: {
    type: String,
    required: false,
  },
  tel: {
    type: String,
    required: true,
  },
  fax: {
    type: String,
    required: false,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  homepage: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  zip: {
    type: String,
    required: false,
  },
});

const Write = mongoose.model("Write", WriteSchema);

Write.getWriteById = function (id, callback) {
  Write.findById(id, callback);
};

Write.getWriteByUsername = function (username, callback) {
  const query = { username: username };
  Write.findOne(query, callback);
};

Write.addWrite = function (newWrite, callback) {
  newWrite.save(callback);
};

Write.updateWrite = function (username, newWrite, callback) {
  const query = { username: username };
  const update = {
      name: newWrite.name,
      org: newWrite.org,
      title: newWrite.title,
      tel: newWrite.tel,
      fax: newWrite.fax,
      mobile: newWrite.mobile,
      email: newWrite.email,
      homepage: newWrite.homepage,
      address: newWrite.address,
      zip: newWrite.zip,
  };

  Write.findOneAndUpdate(
    query, 
    update, 
    { new: true, useFindAndModify: false },
    callback
  );
};

module.exports = Write;