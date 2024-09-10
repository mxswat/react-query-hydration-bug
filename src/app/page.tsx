
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { prefetchGame } from "./_queries/game/game.prefetch";
import { getQueryClient } from "./_utils/get-query-client";
import { Content } from "./content";
import { gameKeys } from "./_queries/game/game.query";

export default async function Page() {
  const client = getQueryClient();
  await prefetchGame({ variables: { domainName: 'masseffect3' }, client });

  console.log('QueryData', client.getQueryData(gameKeys.game({ domainName: 'masseffect3' })));
  console.log(client.getQueryCache().getAll());

  return (
    <HydrationBoundary state={dehydrate(client)}>
      <Content />
    </HydrationBoundary>
  );
}
