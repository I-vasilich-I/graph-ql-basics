/* eslint-disable @typescript-eslint/no-explicit-any */

const getAlbumData = async (dataSources: any, { bandsIds, genresIds, trackIds, artistsIds, ...rest }: any) => {
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
    trackIds && trackIds.length
      ? await Promise.all(trackIds.map((trackId: string) => dataSources.trackAPI.getOne(trackId)))
      : [];
  return { bands, genres, tracks, artists, ...rest };
};

export default getAlbumData;
