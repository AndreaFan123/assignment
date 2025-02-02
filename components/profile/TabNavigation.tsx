"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabNavigation({
  currentUser,
}: {
  currentUser: string;
}) {
  const pathname = usePathname();

  const tabs = [
    { name: "My Watchlist", href: `/${currentUser}/watchlist` },
    { name: "Created", href: `/${currentUser}/created` },
    { name: "Followers", href: `/${currentUser}/followers` },
    { name: "Following", href: `/${currentUser}/following` },
  ];

  return (
    <Tabs defaultValue="/" className="border-none shadow-none w-full">
      <TabsList className="flex justify-between">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;

          return (
            <TabsTrigger key={tab.href} value={tab.name} className={"px-0"}>
              <Link
                href={tab.href}
                className={`px-4 py-2 text-[#006AFF] hover:scale-105 hover:transition-all hover:ease-in-out hover:duration-300 ${
                  isActive ? "font-bold" : ""
                }`}
              >
                {tab.name}
              </Link>
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
