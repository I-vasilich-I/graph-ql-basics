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
  Mutation: {
    async createTrack(_parent: any, { track }: any, { dataSources }: any) {
      const { bandsIds, genresIds, albumId, artistsIds, ...rest } = await dataSources.trackAPI.postOne(track);
      const album = await dataSources.albumAPI.getOne(albumId);
      const artists = await Promise.all(artistsIds.map((artistId: any) => dataSources.artistAPI.getOne(artistId)));
      const bands = await Promise.all(bandsIds.map((bandId: any) => dataSources.bandAPI.getOne(bandId)));
      const genres = await Promise.all(genresIds.map((genreId: any) => dataSources.genreAPI.getOne(genreId)));
      return { bands, genres, album, artists, ...rest };
    },
    async updateTrack(_parent: any, { track }: any, { dataSources }: any) {
      const { bandsIds, genresIds, albumId, artistsIds, ...rest } = await dataSources.trackAPI.updateOne(track);
      const album = await dataSources.albumAPI.getOne(albumId);
      const artists = await Promise.all(artistsIds.map((artistId: any) => dataSources.artistAPI.getOne(artistId)));
      const bands = await Promise.all(bandsIds.map((bandId: any) => dataSources.bandAPI.getOne(bandId)));
      const genres = await Promise.all(genresIds.map((genreId: any) => dataSources.genreAPI.getOne(genreId)));
      return { bands, genres, album, artists, ...rest };
    },
    async deleteTrack(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.trackAPI.deleteOne(id);
      return res;
    },
  },
};

export default trackResolver;
