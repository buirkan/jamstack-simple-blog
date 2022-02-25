import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange,
} from 'urql';

const isServerSide = typeof window == 'undefined';
const ssrCache = ssrExchange({ isClient: !isServerSide });

const client = createClient({
  url: 'https://api-sa-east-1.graphcms.com/v2/cl02nnv0tbqxl01z8bg52e3my/master',
  // like 'interceptors' on axios client
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
});

export { client, ssrCache };
