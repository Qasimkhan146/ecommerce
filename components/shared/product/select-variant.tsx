// import { Button } from '@/components/ui/button'
// import { IProduct } from '@/lib/db/models/product.model'
// import Link from 'next/link'

// export default function SelectVariant({
//   product,
//   size,
//   color,
// }: {
//   product: IProduct
//   color: string
//   size: string
// }) {
//   console.log('product', product)

//   const selectedColor = color || product.colors[0]
//   console.log('selectedColor', selectedColor)
//   const selectedSize = size || product.sizes[0]
//   console.log('selectedSize', selectedSize)

//   return (
//     <>
//       {product.colors.length > 0 && (
//         <div className='space-x-2 space-y-2'>
//           <div>Color:</div>
//           {product.colors.map((x: string) => (
//             <Button
//               asChild
//               variant='outline'
//               key={x}
//               className={
//                 selectedColor === x ? 'border-2 border-primary' : 'border-2'
//               }
//             >
//               <Link
//                 replace
//                 scroll={false}
//                 href={`?${new URLSearchParams({
//                   color: x,
//                   size: selectedSize,
//                 })}`}
//               >
//                 <div className='flex items-center gap-2'>
//                   <div
//                     style={{ backgroundColor: x }}
//                     className='h-4 w-4 rounded-full border border-muted-foreground'
//                   />
//                   <span>{x}</span>
//                 </div>
//               </Link>
//             </Button>
//           ))}
//         </div>
//       )}
//       {product.sizes.length > 0 && (
//         <div className='mt-2 space-x-2 space-y-2'>
//           <div>Size:</div>
//           {product.sizes.map((x: string) => (
//             <Button
//               asChild
//               variant='outline'
//               className={
//                 selectedSize === x ? 'border-2  border-primary' : 'border-2  '
//               }
//               key={x}
//             >
//               <Link
//                 replace
//                 scroll={false}
//                 href={`?${new URLSearchParams({
//                   color: selectedColor,
//                   size: x,
//                 })}`}
//               >
//                 {x}
//               </Link>
//             </Button>
//           ))}
//         </div>
//       )}
//     </>
//   )
// }

'use client'
import { Button } from '@/components/ui/button'
import { IProduct } from '@/lib/db/models/product.model'
import Link from 'next/link'

export default function SelectVariant({
  product,
  size,
  color,
}: {
  product: IProduct
  color: string
  size: string
}) {
  const selectedColor = color || product.colors[0]
  const selectedSize = size || product.sizes[0]

  return (
    <>
      {product.colors.length > 0 && (
        <div className='space-x-2 space-y-2'>
          <div>Color:</div>
          {product.colors.map((x) => (
            <Button
              asChild
              variant='outline'
              key={x}
              className={
                selectedColor === x ? 'border-2 border-primary' : 'border-2'
              }
            >
              <Link
                replace
                scroll={false}
                href={`?${new URLSearchParams({
                  color: x,
                  size: selectedSize,
                })}`}
              >
                <div className='flex items-center gap-2'>
                  <div
                    style={{ backgroundColor: x }}
                    className='h-4 w-4 rounded-full border border-muted-foreground'
                  />
                  <span>{x}</span>
                </div>
              </Link>
            </Button>
          ))}
        </div>
      )}

      {product.sizes.length > 0 && (
        <div className='mt-2 space-x-2 space-y-2'>
          <div>Size:</div>
          {product.sizes.map((x) => (
            <Button
              asChild
              variant='outline'
              key={x}
              className={
                selectedSize === x ? 'border-2 border-primary' : 'border-2'
              }
            >
              <Link
                replace
                scroll={false}
                href={`?${new URLSearchParams({
                  color: selectedColor,
                  size: x,
                })}`}
              >
                {x}
              </Link>
            </Button>
          ))}
        </div>
      )}
    </>
  )
}
