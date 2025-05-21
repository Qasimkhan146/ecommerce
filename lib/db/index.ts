import mongoose from 'mongoose'

const cached: {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
} = {
  conn: null,
  promise: null,
}
export const connectToDatabase = async (
  MONGODB_URL = process.env.DATABASE_URL
) => {
  if (cached.conn) return cached.conn

  if (!MONGODB_URL) throw new Error('Mongodb url is missing')

  cached.promise = cached.promise || mongoose.connect(MONGODB_URL)

  cached.conn = await cached.promise

  return cached.conn
}
