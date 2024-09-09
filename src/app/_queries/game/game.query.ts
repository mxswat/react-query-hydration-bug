import { useQuery } from '@tanstack/react-query';
import { fetchGame } from './game.method';

export type GameQueryVariables = { domainName: string } | Record<never, never>;

export const gameKeys = {
  base: ['game'] as const,
  game: (variables: GameQueryVariables) => [...gameKeys.base, variables] as const,
};

export const useGameQuery = (variables: GameQueryVariables) =>
  useQuery({
    queryFn: () => fetchGame(variables),
    queryKey: gameKeys.game(variables),
    staleTime: Infinity,
  });
