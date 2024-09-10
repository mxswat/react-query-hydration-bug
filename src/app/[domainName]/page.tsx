
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { prefetchGame } from "../_queries/game/game.prefetch";
import { getQueryClient } from "../_utils/get-query-client";
import { Content } from "../content";
import { gameKeys } from "../_queries/game/game.query";

export default async function Page({ params: { domainName } }: { params: { domainName: string } }) {
  const client = getQueryClient();
  await prefetchGame({ variables: { domainName }, client });

  console.log('QueryDataServer', client.getQueryData(gameKeys.game({ domainName })));
  console.log(client.getQueryCache().getAll());

  return (
    <HydrationBoundary state={dehydrate(getQueryClient())}>
      <Content />
    </HydrationBoundary>
  );
}
