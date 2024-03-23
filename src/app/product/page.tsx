'use client';
import { ShoppingBagIcon } from '@/assets/icons/shopping-bag-icon';
import { BackBtn } from '@/components/back-button/back-button';
import { DefaultPageLayout } from '@/components/default-page-layout/default-page-layout';
import { useProduct } from '@/hooks/useProduct';
import { formatPrice } from '@/utils/format-price';
import { Container, ProductInfo } from './styles';

export default function Product({
  searchParams
}: {
  searchParams: { id: string };
}) {
  const { data } = useProduct(searchParams.id);

  return (
    <DefaultPageLayout>
      <Container>
        <BackBtn navigate="/" />
        <section>
          <img src={data?.image_url} />
          <div>
            <ProductInfo>
              <span>{data?.category}</span>
              <h2>{data?.name}</h2>
              <span>{formatPrice(data?.price_in_cents ?? 0)}</span>
              <p>
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00.
              </p>
              <div>
                <h3>Descrição</h3>
                <p>{data?.description}</p>
              </div>
            </ProductInfo>
            <button>
              <ShoppingBagIcon />
              Adicionar ao carrinho
            </button>
          </div>
        </section>
      </Container>
    </DefaultPageLayout>
  );
}
