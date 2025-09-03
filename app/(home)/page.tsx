// import { HomeCard } from '@/components/shared/home/home-card'
import { HomeCard } from '@/components/shared/home/home-card'
import { HomeCarousel } from '@/components/shared/home/home-carousel'
import ProductSlider from '@/components/shared/product/product-slider'
import { Card, CardContent } from '@/components/ui/card'
import {
  getAllCategories,
  // getProductByTag,
  getProductsByTag,
  getProductsForCard,
} from '@/lib/actions/product.actions'
import data from '@/lib/data'
import { toSlug } from '@/lib/utils'

export default async function Page() {
  const categories = (await getAllCategories()).slice(0, 4)
  const newArrivals = await getProductsForCard({
    tag: 'new-arrival',
    limit: 4,
  })

  const featureds = await getProductsForCard({
    tag: 'featured',
    limit: 4,
  })
  const bestSellers = await getProductsForCard({
    tag: 'best-seller',
    limit: 4,
  })

  const cards = [
    {
      title: 'Categories to explore',
      link: {
        text: 'See more',
        href: '/search',
      },
      items: categories.map((category) => ({
        name: category,
        image: `images/${toSlug(category)}.jpg`,
        href: `/search?category=${category}`,
      })),
    },
    {
      title: 'Explore New Arrivals',
      items: newArrivals,
      link: {
        text: 'View all',
        href: '/search?tag=new-arrival',
      },
    },
    {
      title: ' Featured Products',
      items: featureds,
      link: {
        text: 'View all',
        href: '/search?tag=featured',
      },
    },
    {
      title: 'discover Best Sellers',
      items: bestSellers,
      link: {
        text: 'View all',
        href: '/search?tag=best-seller',
      },
    },
  ]

  const todaysDeals = await getProductsByTag({ tag: 'todays-deal' })
  console.log('whats comming in the products', todaysDeals)
  return (
    <>
      <HomeCarousel items={data.carousels} />
      <div className='md:p-4 md:space-y-4 bg-border'>
        <HomeCard cards={cards} />

        <Card className='w-full rounded-none'>
          <CardContent className='p-4 items-center gap-3'>
            <ProductSlider title={"Today's Deals"} products={todaysDeals} />
          </CardContent>
        </Card>
      </div>
    </>
  )
}
