import albumResolver from "./album/album.resolver";
import artistResolver from "./artist/artist.resolver";
import bandResolver from "./band/band.resolver";
import favoritesResolver from "./favorites/favorites.resolver";
import genreResolver from "./genre/genre.resolver";
import trackResolver from "./track/track.resolver";
import userResolver from "./user/user.resolver";

const resolvers = [
  albumResolver,
  artistResolver,
  bandResolver,
  favoritesResolver,
  genreResolver,
  trackResolver,
  userResolver,
];

export default resolvers;
