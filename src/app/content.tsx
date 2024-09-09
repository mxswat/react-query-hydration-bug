'use client';

import { useGameQuery } from "./_queries/game/game.query";

export const Content = () => {
  const data = useGameQuery({ domainName: 'masseffect3' });
  console.log('data.isLoading', data.isLoading); // Should be false, but it's true when I visit http://localhost:3000/masseffect3, which is the problem as it means the prefetching is not working
  console.log('data.data?.name', data.data?.name); // Should be defined

  return <div>{data.isLoading ? 'Loading...' : `${data.data?.name} - ${data.data?.id}`}</div>;
}
