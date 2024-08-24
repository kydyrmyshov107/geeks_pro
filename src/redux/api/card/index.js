import { goodsApi as index } from "..";
const goodsApi = index.injectEndpoints({
  endpoints: (build) => ({
    getPokemons: build.query({
      query: () => "pokemon",
      providesTags: ["Pokemon"],
    }),
  }),
});

export const { useGetPokemonsQuery } = goodsApi;
