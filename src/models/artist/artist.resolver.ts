/* eslint-disable @typescript-eslint/no-explicit-any */
const artistResolver = {
  Query: {
    async artists(_parent: any, _args: any, { dataSources }: any) {
      const res = await dataSources.artistAPI.getAll();
      return res;
    },
    async artist(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.artistAPI.getOne(id);
      return res;
    },
  },
  Mutation: {},
};

export default artistResolver;
