import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import Search from './search'
import Menu from './menu'
import { MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import data from '@/lib/data'

const Header = () => {
  return (
    <header className='bg-black text-white'>
      <div className='px-2'>
        <div className='flex justify-between items-center'>
          <div className='flex item-center'>
            <Link
              href='/'
              className='flex items-center header-button font-extrabold text-2xl m-1'
            >
              <Image
                src='/icons/logo.svg'
                alt={`${APP_NAME} logo`}
                width={40}
                height={40}
                className=''
              />
              {APP_NAME}
            </Link>
          </div>
          <div className='hidden md:block flex-1 max-w-xl'>
            <Search />
          </div>
          <Menu />
        </div>
        <div className='md:hidden block py-2'>
          <Search />
        </div>
      </div>
      <div className='bg-gray-800 flex items-center px-3 mb-[1px]'>
        <Button
          variant='ghost'
          className='dark header-button flex items-center gap-1 text-base [&>svg]:size-6'
        >
          <MenuIcon />
          All
        </Button>
        <div className='flex items-center flex-wrap gap-3 overflow-hidden max-h-[42px]'>
          {data.headerMenus.map((menu) => (
            <Link
              href={menu.href}
              key={menu.href}
              className='header-button !p-2'
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
