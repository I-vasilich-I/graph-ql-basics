/* eslint-disable @typescript-eslint/no-explicit-any */
const getFavoritesData = async (dataSources: any, { bandsIds, genresIds, artistsIds, tracksIds, ...rest }: any) => {
  const artists =
    artistsIds && artistsIds.length
      ? await Promise.all(artistsIds.map((artistId: string) => dataSources.artistAPI.getOne(artistId)))
      : [];
  const bands =
    bandsIds && bandsIds.length
      ? await Promise.all(bandsIds.map((bandId: string) => dataSources.bandAPI.getOne(bandId)))
      : [];
  const genres =
    genresIds && genresIds.length
      ? await Promise.all(genresIds.map((genreId: string) => dataSources.genreAPI.getOne(genreId)))
      : [];
  const tracks =
    tracksIds && tracksIds.length
      ? await Promise.all(tracksIds.map((trackId: string) => dataSources.trackAPI.getOne(trackId)))
      : [];
  return { bands, genres, tracks, artists, ...rest };
};

export default getFavoritesData;
