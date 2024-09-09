'use client';

import { useGameQuery } from "./_queries/game/game.query";

export const Content = () => {
  const data = useGameQuery({ domainName: 'masseffect3' });
  console.log('data.isLoading', data.isLoading); // Should be false
  console.log('data.data?.name', data.data?.name); // Should be defined

  return <div>{data.isLoading ? 'Loading...' : `${data.data?.name} - ${data.data?.id}`}</div>;
}
