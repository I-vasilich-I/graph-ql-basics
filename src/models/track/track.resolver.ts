/* eslint-disable @typescript-eslint/no-explicit-any */
const trackResolver = {
  Query: {
    async tracks(_parent: any, _args: any, { dataSources }: any) {
      const res = await dataSources.trackAPI.getAll();
      return res;
    },
    async track(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.trackAPI.getOne(id);
      return res;
    },
  },
  Mutation: {},
};

export default trackResolver;
