import { GoHomeFill, GoHistory, GoVideo } from 'react-icons/go';
import {
  SiYoutubeshorts,
  SiYoutubekids,
  SiYoutubemusic,
  SiYoutube,
  SiYoutubestudio,
} from 'react-icons/si';
import { PiMusicNote, PiFilmSlate, PiFireLight } from 'react-icons/pi';
import {
  IoGameControllerOutline,
  IoNewspaperOutline,
  IoTrophyOutline,
  IoSettingsOutline,
  IoFlagOutline,
} from 'react-icons/io5';

import {
  MdSubscriptions,
  MdPlaylistPlay,
  MdOutlineAccessTime,
} from 'react-icons/md';
import { PiUserSquare } from 'react-icons/pi';
import { BiLike } from 'react-icons/bi';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { TbMessageExclamation } from 'react-icons/tb';
export const dataHome = [
  {
    icon: GoHomeFill,
    title: 'beranda',
    url: '/',
  },
  {
    icon: SiYoutubeshorts,
    title: 'shorts',
    url: '/short',
  },
  {
    icon: MdSubscriptions,
    title: 'subcription',
    url: '/sub',
  },
];
export const userNavData = [
  {
    icon: PiUserSquare,
    title: 'channel anda',
    url: '/channel',
  },
  {
    icon: GoHistory,
    title: 'history',
    url: '/history',
  },
  {
    icon: MdPlaylistPlay,
    title: 'playlist',
    url: '/playlist',
  },
  {
    icon: GoVideo,
    title: 'video anda',
    url: '/foryou',
  },
  {
    icon: MdOutlineAccessTime,
    title: 'tonton nanti',
    url: '/list',
  },
  {
    icon: BiLike,
    title: 'video yang disukai',
    url: '/like',
  },
];
export const subcriptionDataNav = [
  {
    image: '/image/windah.jpeg',
    title: 'Windah basudara',
    is_active: true,
    url: '/@windahbasudara',
  },
  {
    image: '/image/has.jpeg',
    title: 'HAS creative',
    is_active: false,
    url: '/@hascreative',
  },
  {
    image: '/image/sepulang.png',
    title: 'Sepulang Sekolah',
    is_active: false,
    url: '/@Sepulang Sekolah',
  },
  {
    image: '/image/qory.jpeg',
    title: 'qorygore',
    is_active: true,
    url: '/@qorygore',
  },
  {
    image: '/image/windah.jpeg',
    title: 'Windah basudara',
    is_active: true,
    url: '/@windahbasudara',
  },
  {
    image: '/image/has.jpeg',
    title: 'HAS creative',
    is_active: false,
    url: '/@hascreative',
  },
  {
    image: '/image/sepulang.png',
    title: 'Sepulang Sekolah',
    is_active: false,
    url: '/@Sepulang Sekolah',
  },
  {
    image: '/image/qory.jpeg',
    title: 'qorygore',
    is_active: true,
    url: '/@qorygore',
  },
];
export const otherData = [
  {
    icon: PiFireLight,
    title: 'trending',
    url: '/trending',
  },
  {
    icon: PiMusicNote,
    title: 'musik',
    url: '/music',
  },
  {
    icon: PiFilmSlate,
    title: 'film',
    url: '/film',
  },
  {
    icon: IoGameControllerOutline,
    title: 'game',
    url: '/game',
  },
  {
    icon: IoNewspaperOutline,
    title: 'berita',
    url: '/news',
  },
  {
    icon: IoTrophyOutline,
    title: 'olahraga',
    url: '/sport',
  },
];

export const itemYTData = [
  {
    icon: SiYoutube,
    title: 'YouTube premium',
    url: '/sport',
  },

  {
    icon: SiYoutubemusic,
    title: 'YouTube music',
    url: '/sport',
  },
  {
    icon: SiYoutubestudio,
    title: 'YouTube studio',
    url: '/sport',
  },
  {
    icon: SiYoutubekids,
    title: 'YouTube Kids',
    url: '/sport',
  },
];

export const settingData = [
  {
    icon: IoSettingsOutline,
    title: 'Setelan',
    url: '/sport',
  },

  {
    icon: IoFlagOutline,
    title: 'History Laporan',
    url: '/sport',
  },
  {
    icon: IoIosHelpCircleOutline,
    title: 'Bantuan',
    url: '/sport',
  },
  {
    icon: TbMessageExclamation,
    title: 'Masukan',
    url: '/sport',
  },
];
