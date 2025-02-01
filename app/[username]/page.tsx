import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Coin, MOCK_USER } from "@/mock/mockData";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import retweetIcon from "@/public/assets/retweet.svg";
import blockIcon from "@/public/assets/block.svg";
import Link from "next/link";

import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ProfilePage() {
  const watchlist: Coin[] = MOCK_USER.watchList;
  return (
    <div className="flex w-full flex-col gap-2">
      {watchlist.map((item, index) => (
        <Card
          key={`${item.coinName}-${index}`}
          className="shadow-none border-none rounded-[16px]"
        >
          <CardContent className="p-[20px] flex justify-between">
            <div className="flex items-center gap-3">
              <div>
                <Avatar className="w-[41px] h-[41px] rounded-[12px]">
                  <AvatarImage
                    src={item.icon.src}
                    width={0}
                    height={0}
                    className="max-w-full self-center h-auto"
                  />
                </Avatar>
              </div>
              <div className="flex flex-col font-semibold text-sm">
                <span>{item.coinName}</span>
                <span className="text-[#006AFF] ">{item.SUI} SUI</span>
              </div>
            </div>
            <div className="flex flex-col justify-between items-end">
              <div className="flex gap-2">
                <Image
                  src={retweetIcon}
                  alt="retweet"
                  width={0}
                  height={0}
                  className="self-center"
                />
                <Image
                  src={blockIcon}
                  alt="block"
                  width={0}
                  height={0}
                  className="self-center"
                />
              </div>
              <Link
                className="text-sm text-gray-500 font-normal underline"
                href={`/${item.coinName}/coin`}
              >
                View Coin
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
      <CardFooter className="p-0">
        <Dialog>
          <DialogTrigger asChild className="w-full bg-[#006AFF12]  h-[63px]">
            <Button
              variant="ghost"
              className="text-[#006AFF] text-base font-semibold rounded-[16px] hover:bg-[#006AFF] hover:text-white"
            >
              Share my watchlist
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="mb-4">Share link</DialogTitle>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                  Link
                </Label>
                <Input
                  className="bg-gray-100"
                  id="link"
                  defaultValue={`/djwiddjowjedowje`}
                  readOnly
                />
              </div>
              <Button type="submit" size="sm" className="px-3 bg-[#006AFF]">
                <span className="sr-only">Copy</span>
                <Copy />
              </Button>
            </div>
            <DialogFooter className="sm:justify-start mt-4">
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="secondary"
                  className="bg-[#006AFF] text-white"
                >
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </div>
  );
}
