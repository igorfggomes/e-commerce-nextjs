import { useLocalStorage } from '@/hooks/useLocalStorage';
import { CartCount, Container } from './styles';
import { CartIcon } from '@/assets/icons/cart-icon';

export function CartControl() {
  const { value } = useLocalStorage('cart-items', []);

  return (
    <Container>
      <CartIcon />
      <CartCount>{value.length}</CartCount>
    </Container>
  );
}
