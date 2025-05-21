import { cwd } from 'process'
import { loadEnvConfig } from '@next/env'
import data from '../data'
import { connectToDatabase } from '.'
import Product from './models/product.model'
loadEnvConfig(cwd())

const main = async () => {
  try {
    const { products } = data
    await connectToDatabase(process.env.DATABASE_URL)

    await Product.deleteMany()
    const createdProducts = await Product.insertMany(products)

    console.log({
      createdProducts,
      message: 'seeded database successfully',
    })
    process.exit(0)
  } catch (error) {
    console.error(error)
    throw new Error('failed to seed database')
  }
}

main()
