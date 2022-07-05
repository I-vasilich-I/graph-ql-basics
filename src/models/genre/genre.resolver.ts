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
  Mutation: {
    async createGenre(_parent: any, args: any, { dataSources }: any) {
      const res = await dataSources.genreAPI.postOne(args);
      return res;
    },
    async updateGenre(_parent: any, args: any, { dataSources }: any) {
      const res = await dataSources.genreAPI.updateOne(args);
      return res;
    },
    async deleteGenre(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.genreAPI.delete(id);
      return res;
    },
  },
};

export default genreResolver;
