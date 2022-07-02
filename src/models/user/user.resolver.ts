/* eslint-disable @typescript-eslint/no-explicit-any */
const userResolver = {
  Query: {
    async user(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.userAPI.getOne(id);
      return res;
    },
  },
  Mutation: {},
};

export default userResolver;
