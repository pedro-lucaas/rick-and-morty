import React from 'react';

import { Flex, SkeletonCardImage, SkeletonText, SkeletonIcon } from './SkeletonCard.style';

const SkeletonCard: React.FC = () => {
  return (
    <Flex role='banner'>
      <SkeletonCardImage />
      <SkeletonText />
      <SkeletonIcon />
    </Flex>
  );
}

export default SkeletonCard;