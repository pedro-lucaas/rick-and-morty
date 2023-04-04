import React from 'react';

import { pageToPageMapper } from './utils/pageToPageMapper';

import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { Flex, PaginationContainer, ArrowButton, Page } from './Pagination.style';

export interface IPagination {
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<IPagination> = ({ currentPage, setPage, totalPages }) => {
  const pageMapper = pageToPageMapper(currentPage, totalPages);

  const goToPage = (page: number) => {
    setPage(page);
  }

  const goToPreviousPage = () => {
    if (currentPage === 1) return;
    setPage(currentPage - 1);
  }

  const goToNextPage = () => {
    if (currentPage === totalPages) return;
    setPage(currentPage + 1);
  }

  const goToLastPage = () => {
    setPage(totalPages);
  }

  return (
    <Flex>
      <PaginationContainer>
        <ArrowButton role='button' onClick={goToPreviousPage} disabled={currentPage === 1}>
          <RiArrowLeftSLine />
        </ArrowButton>
        {pageMapper.map((page) => (
          <Page role='listitem' key={page} isSelected={page === currentPage} onClick={() => goToPage(page)}>
            {page}
          </Page>
        ))}
        <ArrowButton role='button' onClick={goToNextPage} disabled={currentPage === totalPages}>
          <RiArrowRightSLine />
        </ArrowButton>
        <Page role='log' onClick={goToLastPage}>
          de {totalPages}
        </Page>
      </PaginationContainer>
    </Flex>
  );
}

export default Pagination;
