import getAlbumFields from "./album.service";

/* eslint-disable @typescript-eslint/no-explicit-any */
const albumResolver = {
  Query: {
    async albums(_parent: any, _args: any, { dataSources }: any) {
      const { items } = await dataSources.albumAPI.getAll();
      const temp = await Promise.all(
        items.map(async (item: any) => {
          const { bandsIds, genresIds, trackIds, artistsIds, ...rest } = item;
          const fields = await getAlbumFields(dataSources, { bandsIds, genresIds, trackIds, artistsIds });
          return { ...fields, ...rest };
        })
      );
      console.log(temp);
      return { items: temp };
    },
    async album(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.albumAPI.getOne(id);
      return res;
    },
  },

  Mutation: {
    async createAlbum(_parent: any, { album }: any, { dataSources }: any) {
      const { bandsIds, genresIds, trackIds, artistsIds, ...rest } = await dataSources.albumAPI.postOne(album);
      const fields = await getAlbumFields(dataSources, { bandsIds, genresIds, trackIds, artistsIds });
      return { ...fields, ...rest };
    },
    async updateAlbum(_parent: any, { album }: any, { dataSources }: any) {
      const { bandsIds, genresIds, trackIds, artistsIds, ...rest } = await dataSources.albumAPI.updateOne(album);
      const fields = await getAlbumFields(dataSources, { bandsIds, genresIds, trackIds, artistsIds });
      return { ...fields, ...rest };
    },
    async deleteAlbum(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.albumAPI.deleteOne(id);
      return res;
    },
  },
};

export default albumResolver;
