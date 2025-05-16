const data = {
  headerMenus: [
    {
      name: "Today's Deal",
      href: '/search?tag=todays-deal',
    },
    {
      name: 'New Arrivals',
      href: '/search?tag=new-arrival',
    },
    {
      name: 'Featured Products',
      href: '/search?tag=featured',
    },
    {
      name: 'Best Sellers',
      href: '/search?tag=best-seller',
    },
    {
      name: 'Browsing History',
      href: '/#browsing-history',
    },
    {
      name: 'Customer Service',
      href: '/page/customer-service',
    },
    {
      name: 'About Us',
      href: '/page/about-us',
    },
    {
      name: 'Help',
      href: '/page/help',
    },
  ],
  carousels: [
    {
      title: 'most popular Shows For Sale',
      buttonCaption: 'Shop Now',
      image: '/images/banner1.jpg',
      url: '/search?category=Shoes',
      isPublished: true,
    },
    {
      title: 'Best Seller in t-Shirts',
      buttonCaption: 'Shop Now',
      image: '/images/banner2.jpg',
      url: '/search?category=T-Shirt',
      isPublished: true,
    },
    {
      title: 'Best Deals on Wrist Watches',
      buttonCaption: 'See More',
      image: '/images/banner3.jpg',
      url: '/search?category=Wrist Watches',
      isPublished: true,
    },
  ],
}

export default data
