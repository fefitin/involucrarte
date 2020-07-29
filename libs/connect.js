const mongoose = require('mongoose');

let cacheDb = null;

export default () => {
  if (!cacheDb) {
    cacheDb = mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  return cacheDb;
};
