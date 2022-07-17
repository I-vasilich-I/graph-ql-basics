/* eslint-disable @typescript-eslint/no-explicit-any */
import getAlbumData from "./album.service";

const albumResolver = {
  Query: {
    async albums(_parent: any, _args: any, { dataSources }: any) {
      const { items } = await dataSources.albumAPI.getAll();
      const temp = await Promise.all(
        items.map(async (item: any) => {
          const data = await getAlbumData(dataSources, item);
          return data;
        })
      );
      return { items: temp };
    },
    async album(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.albumAPI.getOne(id);
      const data = await getAlbumData(dataSources, res);
      return data;
    },
  },

  Mutation: {
    async createAlbum(_parent: any, { album }: any, { dataSources }: any) {
      const res = await dataSources.albumAPI.postOne(album);
      const data = await getAlbumData(dataSources, res);
      return data;
    },
    async updateAlbum(_parent: any, { album }: any, { dataSources }: any) {
      const res = await dataSources.albumAPI.updateOne(album);
      const data = await getAlbumData(dataSources, res);
      return data;
    },
    async deleteAlbum(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.albumAPI.deleteOne(id);
      return res;
    },
  },
};

export default albumResolver;
