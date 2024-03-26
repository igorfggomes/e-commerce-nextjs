import { useState } from 'react';
import { Button, PaginationContainer } from './styles';
import { ArrowLeftIcon } from '@/assets/icons/arrow-left-icon';
import { ArrowRightIcon } from '@/assets/icons/arrow-right-icon';

interface PaginationProps {
  page: number;
  setPage: (value: number) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination(props: PaginationProps) {
  const { page, setPage, currentPage, totalPages, onPageChange } = props;
  const [selectedPage, setSelectedPage] = useState(currentPage);

  const pages = Array.from({ length: totalPages }, (_, i) => i);

  const handlePageChange = (page: number) => {
    setSelectedPage(page);
    setPage(page);
    onPageChange(page);
  };

  const handlePreviousPage = () => {
    if (selectedPage >= 0) {
      setSelectedPage(selectedPage - 1);
      setPage(selectedPage - 1);
      onPageChange(selectedPage - 1);
    }
  };

  const handleNextPage = () => {
    if (selectedPage < totalPages - 1) {
      setSelectedPage(selectedPage + 1);
      setPage(selectedPage + 1);
      onPageChange(selectedPage + 1);
    }
  };

  return (
    <PaginationContainer>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => handlePageChange(page)}
          disabled={page === currentPage}
          selected={page === selectedPage}
        >
          {page}
        </Button>
      ))}
      <div>
        <Button onClick={handlePreviousPage} disabled={page === 0}>
          <ArrowLeftIcon />
        </Button>
        <Button
          onClick={handleNextPage}
          disabled={selectedPage === totalPages - 1}
        >
          <ArrowRightIcon />
        </Button>
      </div>
    </PaginationContainer>
  );
}
