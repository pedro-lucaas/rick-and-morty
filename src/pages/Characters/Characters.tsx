import React from 'react';

import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/hooks';
import { useGetCharactersQuery } from '../../store/character/api';

import { Card } from '../../components/Card';
import { Title } from '../../components/Title';
import { Pagination } from '../../components/Pagination';
import { SideFilters } from './components/SideFilters';
import { FlexContainer } from '../../components/FlexContainer';
import { ErrorComponent } from '../../components/ErrorComponent';
import { SkeletonCard } from '../../components/SkeletonCard';
import { CardList } from '../../components/CardList';
import { FilterType } from './components/Filter';

import { selectParams, selectPage, setPage, setParams } from '../../store/character/slice';

import { filters } from './constants';

const Characters: React.FC = () => {
  const params = useAppSelector(selectParams)
  const page = useAppSelector(selectPage)
  const dispatch = useDispatch()

  const { data: characters, isFetching, isError, error } = useGetCharactersQuery({
    page,
    ...params,
  })

  const handleSetPage = (page: number) => {
    dispatch(setPage(page))
  }
  const applyFilters = (filters: FilterType[]) => {
    dispatch(setParams({
      name: filters.find((filter) => filter.key === 'name')?.value,
      status: filters.find((filter) => filter.key === 'status')?.value,
      gender: filters.find((filter) => filter.key === 'gender')?.value,
      species: filters.find((filter) => filter.key === 'species')?.value,
    }))
  }

  return (
    <div>
      <Title>Characters</Title>
      <Pagination
        setPage={handleSetPage}
        totalPages={characters?.info.pages || 0}
        currentPage={page}
      />
      <FlexContainer padding='0px 10px'>
        <SideFilters
          initialFilters={filters}
          applyFilters={applyFilters}
        />
        <CardList>
          {!isError && <>
            {isFetching && new Array(20).fill(0).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
            {!isFetching && characters?.results.map((character) => (
              <Card key={character.id} character={character} />
            ))}
          </>
          }
          {isError && (
            <ErrorComponent name={error?.name} message={error?.message} />
          )}
        </CardList>
      </FlexContainer>
    </div>
  );
}

export default Characters;
