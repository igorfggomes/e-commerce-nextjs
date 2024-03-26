import { Product } from './product';

export interface ProductsFetchResponse {
  data: {
    allProducts: Product[];
    _allProductsMeta: {
      count: number;
    };
  };
}
