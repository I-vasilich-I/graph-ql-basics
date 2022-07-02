/* eslint-disable @typescript-eslint/no-explicit-any */
const genreResolver = {
  Query: {
    async genres(_parent: any, _args: any, { dataSources }: any) {
      const res = await dataSources.genreAPI.getAll();
      return res;
    },
    async genre(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.genreAPI.getOne(id);
      return res;
    },
  },
  Mutation: {},
};

export default genreResolver;
