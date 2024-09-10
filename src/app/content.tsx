'use client';

import { useQueryClient } from "@tanstack/react-query";
import { gameKeys, useGameQuery } from "./_queries/game/game.query";

export const Content = () => {
  const data = useGameQuery({ domainName: 'masseffect3' });
  const client = useQueryClient();

  console.log('QueryData', client.getQueryData(gameKeys.game({ domainName: 'masseffect3' })));
  console.log(client.getQueryCache().getAll());

  return <div>{data.isLoading ? 'Loading...' : `${data.data?.name} - ${data.data?.id}`}</div>;
}
