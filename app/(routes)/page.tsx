import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/Billboard'
import ProductList from '@/components/ProductList';
import Container from '@/components/ui/Container'
import React from 'react'

export const revalidate = 0;
const HomePage = async () => {
  const product = await getProducts({isFeatured: true})
  const billboard = await getBillboard("50a9cf5f-ca88-44c1-b36e-a72a80a0b786")

  return (
    <Container>
      <div className='space-y-10 pb-10'>
          <Billboard data={billboard}/>
      <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title="Featured Products" items={product} />
      </div>
      </div>
    </Container>
  )
}

export default HomePage