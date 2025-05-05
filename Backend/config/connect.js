import mongoose from "mongoose";

export const connectMongoos = async () => {
  await mongoose.connect(process.env.MONGO_URL);

  console.log(
    `Database is connected with URL ${mongoose.connection.host.yellow}`
  );
};
