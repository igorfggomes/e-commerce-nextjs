import { useLocalStorage } from '@/hooks/useLocalStorage';
import { CartCount, Container } from './styles';
import { CartIcon } from '@/assets/icons/cart-icon';
import { useRouter } from 'next/navigation';

export function CartControl() {
  const router = useRouter();
  const { value } = useLocalStorage('cart-items', []);

  const handleNavigateToCart = () => {
    router.push('/cart');
  };

  return (
    <Container onClick={handleNavigateToCart}>
      <CartIcon />
      <CartCount>{value.length}</CartCount>
    </Container>
  );
}
