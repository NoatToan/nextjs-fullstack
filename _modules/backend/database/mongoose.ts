// lib/mongodb.ts
import mongoose, { Mongoose } from 'mongoose';

export interface IUser {
  _id: unknown;
  __v: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
class MongoDBService {
  private static conn: Mongoose | null = null;

  // Schemas
  static UserSchema = new mongoose.Schema<IUser>(
    {
      email: { type: String, index: true, unique: true },
      password: { type: String, required: true },
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    { timestamps: true }
  );

  static CustomerSchema = new mongoose.Schema(
    {
      email: { type: String, index: true, unique: true },
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      Address: {
        street: String,
        state: String,
        postalCode: String,
        city: String,
      },
    },
    {
      timestamps: true,
      query: {
        byAddress(email: string) {
          return this.where({ email });
        },
      },
    }
  );

  // Get or init connection
  public static async getOrInit(): Promise<Mongoose> {
    if (this.conn) return this.conn;

    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not set in environment variables');
    }

    this.conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Mongoose Connection Established');
    return this.conn;
  }

  // Get models (avoids OverwriteModelError in dev)
  public static getModels() {
    const User =
      mongoose.models.User || mongoose.model('User', this.UserSchema);
    const Customer =
      mongoose.models.Customer ||
      mongoose.model('Customer', this.CustomerSchema);
    return { User, Customer };
  }

  // Seeding example
  public static async seed() {
    const { User } = this.getModels();
    User.insertMany([
      {
        email: 'admin@gmail.com',
        password: '123456', // TODO: hashing
        firstName: 'User',
        lastName: 'One',
      },
    ]);
    console.log('🌱 Default users created');
  }
}

export default MongoDBService;
