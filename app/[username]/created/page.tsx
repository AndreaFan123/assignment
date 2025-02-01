import { Card, CardContent } from "@/components/ui/card";
import { Coin, MOCK_USER } from "@/mock/mockData";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function CreatedPage() {
  const createdList: Coin[] = MOCK_USER.created;
  return (
    <div className="flex w-full flex-col gap-2">
      {createdList.map((item, index) => (
        <Card
          key={`${item.coinName}-${index}`}
          className="shadow-none border-none rounded-[16px]"
        >
          <CardContent className="p-[20px] flex gap-2">
            <div>
              <Avatar className="w-[64px] h-[64px] rounded-[12px]">
                <AvatarImage
                  src={item.icon.src}
                  width={0}
                  height={0}
                  className="max-w-full self-center h-auto"
                />
              </Avatar>
            </div>
            <div className="flex flex-col gap-4 text-sm flex-1">
              <div className="flex flex-col">
                <span className="text-base font-semibold">{item.coinName}</span>
                <span className="text-gray-500 font-normal w-full max-w-[353px]">
                  {item.description}
                </span>
              </div>
              <div className="flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="text-gray-500 font-normal">
                    Market cap{" "}
                    <strong className="text-[#006AFF]">{item.marketCap}</strong>
                  </span>
                  <span className="text-gray-500 ">
                    By <strong className="text-black">{item.creator}</strong>
                  </span>
                </div>
                <span className="text-sm text-gray-500 font-normal">
                  {item.createdAt} ago
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
