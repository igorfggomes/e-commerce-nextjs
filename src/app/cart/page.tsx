'use client';
import { BackButton } from '@/components/back-button/back-button';
import { CartItem } from '@/components/cart-item/cart-item';
import { DefaultPageLayout } from '@/components/default-page-layout/default-page-layout';
import { Divider } from '@/components/divider/divider';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ProductInCart } from '@/types/product';
import { formatPrice } from '@/utils/format-price';
import {
  CartList,
  CartListContainer,
  CartResultContainer,
  Container,
  ShopButton,
  TotalItem
} from './styles';

export default function CartPage() {
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>(
    'cart-items',
    []
  );

  const calculateTotal = (value: ProductInCart[]) => {
    return value.reduce(
      (sum, item) => (sum += item.price_in_cents * item.quantity),
      0
    );
  };

  const cartTotal = formatPrice(calculateTotal(value));
  const deliveryFee = 4000;
  const cartTotalWithDelivery = formatPrice(
    calculateTotal(value) + deliveryFee
  );

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = value.map((item) => {
      if (item.id !== id) return item;
      return { ...item, quantity: quantity };
    });
    updateLocalStorage(newValue);
  };

  const handleDeleteItem = (id: string) => {
    const newValue = value.filter((item) => {
      if (item.id !== id) return item;
    });
    updateLocalStorage(newValue);
  };

  return (
    <DefaultPageLayout>
      <Container>
        <CartListContainer>
          <BackButton navigate="/" />
          <h3>Seu carrinho</h3>
          <p>
            Total ({value.length} produtos):
            <span>{cartTotal}</span>
          </p>
          <CartList>
            {value.map((item) => (
              <CartItem
                product={item}
                key={item.id}
                handleDelete={handleDeleteItem}
                handleUpdateQuantity={handleUpdateQuantity}
              />
            ))}
          </CartList>
        </CartListContainer>
        <CartResultContainer>
          <h3>Resumo do Pedido</h3>
          <TotalItem isbold={false}>
            <p>Subtotal de produtos</p>
            <p>{cartTotal}</p>
          </TotalItem>
          <TotalItem isbold={false}>
            <p>Entrega</p>
            <p>{formatPrice(deliveryFee)}</p>
          </TotalItem>
          <Divider />
          <TotalItem isbold>
            <p>Total</p>
            <p>{cartTotalWithDelivery}</p>
          </TotalItem>
          <ShopButton>FINALIZAR COMPRA</ShopButton>
        </CartResultContainer>
      </Container>
    </DefaultPageLayout>
  );
}
