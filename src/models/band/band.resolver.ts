/* eslint-disable @typescript-eslint/no-explicit-any */
const bandResolver = {
  Query: {
    async bands(_parent: any, _args: any, { dataSources }: any) {
      const res = await dataSources.bandAPI.getAll();
      return res;
    },
    async band(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.bandAPI.getOne(id);
      return res;
    },
  },
  Mutation: {},
};

export default bandResolver;
