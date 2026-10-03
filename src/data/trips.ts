import { links } from './links'

export interface Trip {
  id: string
  title: string
  subtitle: string
  when: string
  distance: string
  playlist: string
  // Embed URL lives in links.ts. Set to '' to hide the map button.
  mapEmbed: string
  // Optional photo: drop a file in public/images/trips/ and set e.g. '/images/trips/ladakh.jpg'
  image?: string
  imageAlt?: string
  // CSS object-position for the 4:3 crop, e.g. '50% 80%' to keep the lower part of a portrait photo
  imagePosition?: string
}

export const trips: Trip[] = [
  {
    id: 'south-india',
    title: 'South India Circuit',
    subtitle: 'Every southern state, one long ride',
    when: 'Sept 2023',
    distance: '5,000+ km',
    playlist: links.southIndiaPlaylist,
    mapEmbed: links.southIndiaMap,
    image: '/images/trips/south-india.jpg',
    imageAlt: 'Rider on a motorcycle parked by the sea at Dhanushkodi under a bright blue sky',
    imagePosition: '50% 80%',
  },
  {
    id: 'ladakh',
    title: 'Ladakh Circuit',
    subtitle: 'Ladakh · the Indian Himalayas',
    when: 'Oct 2024',
    distance: '5,000+ km',
    playlist: links.ladakhPlaylist,
    mapEmbed: links.ladakhMap,
    image: '/images/trips/ladakh.jpg',
    imageAlt: 'Sitting under the Umling La sign, billed as the highest motorable pass in the world, with prayer flags behind',
  },
]

export const interests: string[] = ['Gaming & Unity3D', 'Travel', 'Music', 'Sports']
