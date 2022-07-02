/* eslint-disable @typescript-eslint/no-explicit-any */
const favoritesResolver = {
  Query: {
    async favorites(_parent: any, _args: any, { dataSources }: any) {
      const res = await dataSources.favoritesAPI.getAll();
      return res;
    },
  },
  Mutation: {},
};

export default favoritesResolver;
