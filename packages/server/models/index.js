const path = require('path');

const fs = require('fs');
const mongoose = require('mongoose');
const mode = process.env.NODE_ENV || 'development';
const config = require('./../configs/db')[mode];
const basename = path.basename(__filename);

const connectOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
const connectionCallback = err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
};
if (config.useEnvVariables) {
  const { DB_NAME, DB_HOST, DB_PORT } = process.env;
  mongoose.connect(
    `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    connectOptions,
    connectionCallback
  );
} else {
  mongoose.connect(
    `mongodb://${config.host}:${config.port}/${config.database}`,
    connectOptions,
    connectionCallback
  );
}

const fileRegExp = /^[^.].*?\.js$/;

const db = {};

fs.readdirSync(__dirname)
  .filter(file => fileRegExp.test(file) && file !== basename)
  .forEach(file => {
    const model = require(path.join(__dirname, file));
    db[model.modelName] = model;
  });

db.mongoose = mongoose;

module.exports = db;
