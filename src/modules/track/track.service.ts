/* eslint-disable @typescript-eslint/no-explicit-any */
const getTrackData = async (dataSources: any, { bandsIds, genresIds, albumId, artistsIds, ...rest }: any) => {
  const album = albumId ? await dataSources.albumAPI.getOne(albumId) : null;
  const artists =
    artistsIds && artistsIds.length
      ? await Promise.all(artistsIds.map((artistId: any) => dataSources.artistAPI.getOne(artistId)))
      : [];
  const bands =
    bandsIds && bandsIds.length
      ? await Promise.all(bandsIds.map((bandId: any) => dataSources.bandAPI.getOne(bandId)))
      : [];
  const genres =
    genresIds && genresIds.length
      ? await Promise.all(genresIds.map((genreId: any) => dataSources.genreAPI.getOne(genreId)))
      : [];
  return { bands, genres, album, artists, ...rest };
};

export default getTrackData;
