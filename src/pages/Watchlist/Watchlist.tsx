import React from 'react';

import { selectWatchlist } from '../../store/character/slice';
import { useAppSelector } from '../../store/hooks';

import { Card } from '../../components/Card';
import { FlexContainer } from '../../components/FlexContainer';
import { Title } from '../../components/Title';
import { CardList } from '../../components/CardList';
import { Pagination } from '../../components/Pagination';
import { ErrorComponent } from '../../components/ErrorComponent';

const Watchlist: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const watchlist = useAppSelector(selectWatchlist)

  const handleSetPage = (page: number) => {
    setPage(page);
  }

  const paginationLimit = 20;
  const totalPages = Math.ceil(watchlist.length / paginationLimit);

  const paginatedWatchlist = watchlist.slice((page - 1) * paginationLimit, page * paginationLimit);

  return (
    <div>
      <Title>Watchlist</Title>
      <Pagination
        setPage={handleSetPage}
        totalPages={totalPages}
        currentPage={page}
      />
      <FlexContainer>
        <CardList>
          {paginatedWatchlist.map((character) => (
            <Card key={character.id} character={character} />
          ))}
          {paginatedWatchlist.length === 0 && (
            <ErrorComponent name='Watchlist is empty' message='Add characters to your watchlist to see them here' />
          )}
        </CardList>
      </FlexContainer>
    </div>
  );
}

export default Watchlist;