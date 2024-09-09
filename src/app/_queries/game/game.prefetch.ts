import { getQueryClient } from '@/app/_utils/get-query-client';
import { fetchGame } from './game.method';
import { GameQueryVariables, gameKeys } from './game.query';

/* v8 ignore next */
export const prefetchGame = async ({ variables }: { variables: GameQueryVariables }) => {
  console.log('gameKeys.game(variables)', gameKeys.game(variables));
  return getQueryClient().prefetchQuery({
    queryFn: () => fetchGame(variables),
    queryKey: gameKeys.game(variables),
    staleTime: Infinity,
  });
};
