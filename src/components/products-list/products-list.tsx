'use client';
import { useProducts } from '@/hooks/useProducts';
import { ListContainer, ProductsListContainer } from './styles';
import { ProductCard } from '../product-card/product-card';
import { Pagination } from '../pagination/pagination';

export function ProductsList() {
  const { data, page, setPage, totalPages } = useProducts();

  return (
    <ProductsListContainer>
      <Pagination
        page={page}
        setPage={setPage}
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(page) => setPage(page)}
      />
      <ListContainer>
        {data?.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price_in_cents}
            image={product.image_url}
            id={product.id}
          />
        ))}
      </ListContainer>
    </ProductsListContainer>
  );
}
