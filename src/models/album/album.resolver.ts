/* eslint-disable @typescript-eslint/no-explicit-any */
const albumResolver = {
  Query: {
    async albums(_parent: any, _args: any, { dataSources }: any) {
      const res = await dataSources.albumAPI.getAll();
      return res;
    },
    async album(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.albumAPI.getOne(id);
      return res;
    },
  },

  Mutation: {
    async createAlbum(_parent: any, args: any, { dataSources }: any) {
      const res = await dataSources.albumAPI.postOne(args);
      return res;
    },
    async deleteAlbum(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.albumAPI.deleteOne(id);
      return res;
    },
    async updateAlbum(_parent: any, args: any, { dataSources }: any) {
      const res = await dataSources.albumAPI.updateOne(args);
      return res;
    },
  },
};

export default albumResolver;
