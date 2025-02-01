import image_1 from "@/public/assets/watchList_image_1.png";
import image_2 from "@/public/assets/watchList_image_2.png";
import image_3 from "@/public/assets/watchList_image_3.png";
import image_4 from "@/public/assets/watchList_image_4.png";
import image_5 from "@/public/assets/watchList_image_5.jpeg";
import userAvatar from "@/public/assets/user.png";
import { StaticImageData } from "next/image";

export interface Coin {
  coinName: string;
  SUI?: number;
  icon: StaticImageData;
  description?: string;
  marketCap?: string;
  creator?: string;
  createdAt?: string;
}

export interface Follower {
  account: string;
  PNL_profits: string;
  followers: string;
  avatar?: StaticImageData;
  isFollowing: boolean;
}

export interface User {
  userName: string;
  followers: string;
  likes: string;
  mentions: string;
  avatar: StaticImageData;
  profileToken: string;
  watchList: Coin[];
  created: Coin[];
  followerList: Follower[];
}

export const MOCK_USER: User = {
  userName: "suic0llector1",
  followers: "104.89k",
  likes: "1.09m",
  mentions: "503",
  avatar: userAvatar,
  profileToken: "EkpeynMmNKCM1jygH5u4PoPuW3naRtP4m3s5xv7fL6Eo...",
  watchList: [
    {
      coinName: "SuiPaws",
      SUI: 324.4339,
      icon: image_1,
    },
    {
      coinName: "SuiPaws",
      SUI: 324.4339,
      icon: image_2,
    },
    {
      coinName: "SuiPaws",
      SUI: 324.4339,
      icon: image_3,
    },
    {
      coinName: "SuiPaws",
      SUI: 324.4339,
      icon: image_4,
    },
    {
      coinName: "SuiPaws",
      SUI: 324.4339,
      icon: image_5,
    },
  ],
  created: [
    {
      coinName: "SuiPaws",
      description:
        "Playful meme coin on the Sui ecosystem, combining fun with community-driven growth.",
      marketCap: "64.309.000",
      icon: image_1,
      creator: "suic0llector1",
      createdAt: "00:00:1",
    },
    {
      coinName: "SuiPaws",
      description:
        "Playful meme coin on the Sui ecosystem, combining fun with community-driven growth.",
      marketCap: "64.309.000",
      icon: image_2,
      creator: "suic0llector1",
      createdAt: "00:00:1",
    },
  ],
  followerList: [
    {
      account: "suic0llector1",
      PNL_profits: "+17.51",
      followers: "10.459k",
      avatar: userAvatar,
      isFollowing: true,
    },
    {
      account: "suic0llector1",
      PNL_profits: "+12.43",
      followers: "10.459k",
      avatar: userAvatar,
      isFollowing: true,
    },
    {
      account: "2eqzWx",
      PNL_profits: "-1.02",
      followers: "8.124k",
      avatar: userAvatar,
      isFollowing: true,
    },
    {
      account: "ArrTos",
      PNL_profits: "-5.12%",
      followers: "1.245k",
      avatar: userAvatar,
      isFollowing: true,
    },
    {
      account: "BtHJwe",
      PNL_profits: "+185.24%",
      followers: "899",
      avatar: userAvatar,
      isFollowing: false,
    },
    {
      account: "BoostItDMH",
      PNL_profits: "+1043.45",
      followers: "561",
      isFollowing: false,
    },
    {
      account: "5JF1V8",
      PNL_profits: "+58.19",
      followers: "431",
      avatar: userAvatar,
      isFollowing: false,
    },
    {
      account: "Webump2DL6",
      PNL_profits: "+567.41",
      followers: "411",
      avatar: userAvatar,
      isFollowing: false,
    },
    {
      account: "bUmP027612",
      PNL_profits: "-159.80",
      followers: "380",
      avatar: userAvatar,
      isFollowing: false,
    },
    {
      account: "CTAPP_2M7E",
      PNL_profits: "+10.10",
      followers: "125",
      avatar: userAvatar,
      isFollowing: false,
    },
    {
      account: "HycSBo",
      PNL_profits: "+80.92",
      followers: "11",
      avatar: userAvatar,
      isFollowing: false,
    },
  ],
};
