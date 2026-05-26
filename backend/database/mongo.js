import mongoose from "mongoose";

export async function connectMongo() {

  try {

    mongoose.set("strictQuery", false);

    await mongoose.connect(process.env.MONGO_URI, {

      serverSelectionTimeoutMS: 50000,

      socketTimeoutMS: 45000

    });

    console.log("Mongo conectado");

  } catch (error) {

    console.error("ERRO MONGO:");
    console.error(error);

    throw error;
  }
}