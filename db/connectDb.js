import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
console.log("MONGO_URI:", process.env.MONGO_URI);


if (!MONGO_URI) {
  throw new Error("⚠️ MONGO_URI not set in .env");
}

let cached = global.mongoose || (global.mongoose = { conn: null, promise: null });

async function connectDB() {
//     mongoose
//   .connect('mongodb://localhost:27017/testdb')
//   .then(() => console.log('✅ Connected to local MongoDB'))
//   .catch((err) => console.error('❌ Failed to connect:', err));
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((mongoose) => {
      console.log("✅ MongoDB Connected:", mongoose.connection.host);
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
