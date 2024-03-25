'use client';
import { BackIcon } from '@/assets/icons/back-icon';
import { useRouter } from 'next/navigation';
import { Button } from './styles';

interface ButtonProps {
  navigate: string;
}

export function BackButton({ navigate }: ButtonProps) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(navigate);
  };

  return (
    <Button onClick={handleNavigate}>
      <BackIcon />
      Voltar
    </Button>
  );
}
