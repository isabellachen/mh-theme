import jereshPillars from '../assets/featured-images/jeresh-pillars.jpg';
import kenyaElephant from '../assets/featured-images/kenya-elephant.jpg';
import lisbonTram from '../assets/featured-images/lisbon-tram.jpg';
import naivasha from '../assets/standard-images/naivasha.jpg';
import sevilleRooftop from '../assets/standard-images/seville-rooftop.jpg';
import chinatown from '../assets/standard-images/chinatown.jpg';

export const featuredContent = [
  {
    title: "Lisbon's Iconic Tram 24",
    slug: 'lisbons-iconic-tram',
    subtitle: "Experience the heart of lisbon on it's popular vintage tram",
    image: lisbonTram
  },
  {
    title: 'The Soul of Kenya',
    slug: 'soul-of-kenya',
    subtitle:
      'Elephants still rule the Masai Mara, despite an ever changing world',
    image: kenyaElephant
  },
  {
    title: "Jeresh's Forgotten Wonders",
    slug: 'jeresh-forgotten-wonder',
    subtitle: 'Roman pillars still stand, telling the story of a glorious past',
    image: jereshPillars
  }
];

export const regularContent = [
  {
    title: 'Lake Naivasha and Its Denizens',
    continent: 'africa',
    country: 'kenya',
    slug: 'lake-naivasha-and-denizens',
    excerpt:
      "Observe majestic African fish eagles, dive bombing kingfishers and bloats of wallowing hippos in the calm, shallow waters of one of Kenya's most accessible lakes..",
    image: naivasha
  },
  {
    title: 'Sunset Rooftop Tour of the Seville Cathedral',
    continent: 'europe',
    country: 'seville',
    slug: 'sunset-roodtop-tour-seville',
    excerpt:
      "The Seville Cathedral Rooftop Tour gives you the history of the Cathedral's architecture, some fascinating engineering details and beautiful sunset views of Seville...",
    image: sevilleRooftop
  },
  {
    title: "Exploring Singapore's Chinatown",
    continent: 'asia',
    country: 'singapore',
    slug: 'exploring-singapores-chinatown',
    excerpt:
      "Singapore's Chinatown is a melting pot of cultures, and a unique mix of tradition and modernity...",
    image: chinatown
  }
];
