import { StaticImageData } from "next/image";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import editIcon from "@/public/assets/eidt_icon.svg";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";

interface ProfileHeaderType {
  userName: string;
  followers: string;
  likes: string;
  mentions: string;
  avatar: StaticImageData;
  profileToken: string;
}

export default function ProfileHeader({
  profileInfo,
}: {
  profileInfo: ProfileHeaderType;
}) {
  return (
    <Card className="border-none flex flex-col sm:flex-row w-full rounded-[16px] gap-4 shadow-none p-[20px] items-center">
      <CardHeader className="w-full max-w-[107px] p-0">
        <CardTitle>
          <Avatar className="w-[107px] h-[107px]">
            <AvatarImage
              src={profileInfo.avatar.src}
              width={0}
              height={0}
              className="max-w-full self-center h-auto"
            />
          </Avatar>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center sm:items-start w-full p-0 gap-4 max-w-[377px]">
        <div className="text-lg font-semibold flex items-baseline">
          <span>{profileInfo.userName}</span>
          <Button
            role="button"
            variant="ghost"
            className="hover:bg-[#006AFF12] px-2"
          >
            <Image src={editIcon} alt="edit profile" width={0} height={0} />
          </Button>
        </div>
        <div className="flex gap-4">
          <span className="text-sm text-gray-500">
            Followers{" "}
            <strong className="text-black ml-[4px]">
              {profileInfo.followers}
            </strong>
          </span>
          <span className="text-sm text-gray-500">
            Likes{" "}
            <strong className="text-black ml-[4px]">{profileInfo.likes}</strong>
          </span>
        </div>
        <div>
          <span className="text-sm text-gray-500">
            Mentions{" "}
            <strong className="text-black ml-[4px]">
              {profileInfo.mentions}
            </strong>
          </span>
        </div>
        <div className="text-[#006AFF] font-normal text-sm">
          <Link
            href="/"
            className="text-wrap flex items-center truncate hover:text-[#0d00ff] transition-all ease-in-out duration-300"
          >
            {profileInfo.profileToken}
            <ArrowUpRight className=" w-4 h-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
