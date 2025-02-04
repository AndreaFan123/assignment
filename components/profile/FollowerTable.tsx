import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import unfriendIcon from "@/public/assets/unfrined.svg";
import { Follower } from "@/mock/mockData";
import { Button } from "../ui/button";

interface FollowerTableType {
  followers: Follower[];
}

export default function FollowerTable({ followers }: FollowerTableType) {
  return (
    <div className="bg-white rounded-[16px]">
      <table className="w-full max-w-[540px]">
        <thead>
          <tr>
            {["Account", "PNL profits", "Followers"].map((header) => (
              <th
                key={header}
                className="w-[200px] px-6 text-center py-3 text-sm font-medium text-gray-400 tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {followers.map((item, index) => (
            <tr key={`${item.account}-${index}`}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  flex gap-1 items-center">
                <Button className="px-2 hover:bg-red-300" variant="ghost">
                  <Image src={unfriendIcon} width={0} height={0} alt="icon" />
                </Button>
                <Avatar className="w-[16px] h-[16px] rounded-full">
                  <AvatarImage
                    src={item.avatar?.src}
                    width={0}
                    height={0}
                    className="max-w-full self-center h-auto"
                  />
                </Avatar>
                <span className="font-semibold">{item.account}</span>
              </td>

              {[item.PNL_profits, item.followers].map((value, index) => (
                <td
                  className="px-6 text-center py-4 whitespace-nowrap text-sm text-gray-500"
                  key={`${item.account}-${index}`}
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
