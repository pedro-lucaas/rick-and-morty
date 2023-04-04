import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigate, useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { useGetCharacterByIdQuery } from '../../store/character/api';
import { toggleWatchlist } from '../../store/character/slice';
import { useIsWatchlist } from '../../store/character/hooks/useIsWatchlist';

import { FlexContainer } from '../../components/FlexContainer';
import { Title } from '../../components/Title';
import { LazyImage } from '../../components/LazyImage';

import { routes } from '../../routes/routes';

import { AiFillStar, AiOutlineArrowLeft, AiOutlineStar } from 'react-icons/ai';
import { CharacterDetailsDiv, Icon, Link, Text } from './CharacterDetails.style';

const CharacterDetails: React.FC = () => {
  const navigate = useNavigate()

  const { id } = useParams<{ id: string }>();
  const { data: character, isError } = useGetCharacterByIdQuery(Number(id));
  const isWatchlist = useIsWatchlist(character?.id)

  const dispatch = useDispatch()

  const handleToggleWatchlist = (e: any) => {
    if (!character) return
    e.stopPropagation()
    dispatch(toggleWatchlist(character))
  }

  if (isError) {
    return <Navigate to={routes.CHARACTERS} />;
  }
  return (
    <div>
      <FlexContainer width='100%' align='center' direction='column'>
        <Link onClick={() => navigate(-1)}>
          <AiOutlineArrowLeft />
          Back
        </Link>
        <CharacterDetailsDiv>
          <Icon color={isWatchlist ? "yellow" : "white"} onClick={handleToggleWatchlist}>
            {isWatchlist ? <AiFillStar /> : <AiOutlineStar />}
          </Icon>
          <Title color='#ddd'>
            {character?.name}
          </Title>
          <LazyImage src={character?.image} alt={character?.name}
            style={{ borderRadius: '50%', scale: 2.5 }}
          />
          <Text><strong>Species:</strong> {character?.species}</Text>
          <Text><strong>Status:</strong> {character?.status}</Text>
          <Text><strong>Gender:</strong> {character?.gender}</Text>
          <Text><strong>Origin:</strong> {character?.origin.name}</Text>
          <Text><strong>Location:</strong> {character?.location.name}</Text>
        </CharacterDetailsDiv>
      </FlexContainer>
    </div>
  );
}

export default CharacterDetails;
