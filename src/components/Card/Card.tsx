import React from 'react';
import { useNavigate } from 'react-router-dom';

import { toggleWatchlist } from '../../store/character/slice';
import { CharacterType } from '../../store/character/types';
import { useAppDispatch } from '../../store/hooks';
import { useIsWatchlist } from '../../store/character/hooks/useIsWatchlist';

import { routes } from '../../routes/routes';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Flex, CardImage, Icon, Text } from './Card.style';

export interface ICharacterCard {
  character: CharacterType
}
const Card: React.FC<ICharacterCard> = ({ character }) => {
  const dispatch = useAppDispatch()
  const isInWatchlistBool = useIsWatchlist(character.id)

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(routes.CHARACTERS_DETAILS.replace(":id", character.id.toString()))
  }

  const handleToggleWatchlist = (e: any) => {
    e.stopPropagation()
    dispatch(toggleWatchlist(character))
  }

  return (
    <Flex onClick={handleNavigate}>
      <CardImage src={character.image} alt={character.name} />
      <Text>{character.name}</Text>
      <Icon color={isInWatchlistBool ? "yellow" : "white"} onClick={handleToggleWatchlist}>
        {isInWatchlistBool ? <AiFillStar /> : <AiOutlineStar />}
      </Icon>
    </Flex>
  );
}

export default Card;