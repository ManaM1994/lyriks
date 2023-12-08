import { HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';

export const genres = [
  { title: 'Pop', value: 'POP' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { title: 'Dance', value: 'DANCE' },
  { title: 'Electronic', value: 'ELECTRONIC' },
  { title: 'Soul', value: 'SOUL_RNB' },
  { title: 'Alternative', value: 'ALTERNATIVE' },
  { title: 'Rock', value: 'ROCK' },
  { title: 'Latin', value: 'LATIN' },
  { title: 'Film', value: 'FILM_TV' },
  { title: 'Country', value: 'COUNTRY' },
  { title: 'Worldwide', value: 'WORLDWIDE' },
  { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
  { title: 'House', value: 'HOUSE' },
  { title: 'K-Pop', value: 'K_POP' },
];
 export const songs=[
  {pic:"./images/song1.jpg" ,i:"1"},
  {pic:"./images/song2.jpg"  ,i:"1"},
  {pic:"./images/song3.jpg"  ,i:"1"},
  {pic:"./images/song4.jpg"  ,i:"1"},
  {pic:"./images/song5.jpg"  ,i:"1"},
  {pic:"./images/song1.jpg" ,i:"1"},
  {pic:"./images/song2.jpg" ,i:"1"},
  {pic:"./images/song3.jpg" ,i:"1"},
  {pic:"./images/song4.jpg" ,i:"1"},
  {pic:"./images/song5.jpg" ,i:"1"},
]

export const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];
