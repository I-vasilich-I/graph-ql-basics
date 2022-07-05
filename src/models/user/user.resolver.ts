/* eslint-disable @typescript-eslint/no-explicit-any */
const userResolver = {
  Query: {
    async user(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.userAPI.getOne(id);
      return res;
    },
    async jwt(_parent: any, { email, password }: any, context: any) {
      const { jwt } = await context.dataSources.userAPI.login({ email, password });
      return jwt;
    },
  },
  Mutation: {
    async register(_parent: any, { firstName, lastName, email, password }: any, context: any) {
      const res = await context.dataSources.userAPI.register({ firstName, lastName, email, password });
      return res;
    },
  },
};

export default userResolver;
