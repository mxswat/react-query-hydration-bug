import { fetchGame } from './game.method';
import { GameQueryVariables, gameKeys } from './game.query';
import { QueryClient } from '@tanstack/react-query';

/* v8 ignore next */
export const prefetchGame = async ({ variables, client }: { variables: GameQueryVariables, client: QueryClient }) => {
  console.log('gameKeys.game(variables)', gameKeys.game(variables));
  return client.prefetchQuery({
    queryFn: () => fetchGame(variables),
    queryKey: gameKeys.game(variables),
    staleTime: Infinity,
  });
};
