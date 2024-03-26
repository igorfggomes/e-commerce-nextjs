import { ProductsFetchResponse } from '@/types/products-response';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';
import { useFilter } from './useFilter';
import { mountQuery } from '@/utils/graphql-filters';
import { useDeferredValue } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL, {
    query
  });
};

export function useProducts() {
  const { type, priority, search, page, setPage, perPage } = useFilter();
  const searchDeffered = useDeferredValue(search);
  const query = mountQuery(type, priority, page, perPage);
  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ['products', type, priority, page],
    staleTime: 1000 * 60 * 1
  });

  const totalItems = data?.data?.data?._allProductsMeta?.count;

  const totalPages = totalItems ? Math.ceil(totalItems / perPage) : 0;

  const products = data?.data?.data?.allProducts;
  
  const filteredProducts = products?.filter((product) =>
    product.name
      .toLocaleLowerCase()
      .includes(searchDeffered.toLocaleLowerCase())
  );

  return {
    data: filteredProducts,
    page,
    setPage,
    perPage,
    totalPages
  };
}
