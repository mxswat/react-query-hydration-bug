
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { prefetchGame } from "./_queries/game/game.prefetch";
import { getQueryClient } from "./_utils/get-query-client";
import { Content } from "./content";

export default async function Page() {
  await prefetchGame({ variables: { domainName: 'masseffect3' } });

  console.log('QueryData', getQueryClient().getQueryData(['game', { domainName: 'masseffect3' }]));
  console.log(getQueryClient().getQueryCache().getAll());

  return (
    <HydrationBoundary state={dehydrate(getQueryClient())}>
      <Content />
    </HydrationBoundary>
  );
}
