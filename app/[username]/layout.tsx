import ProfileHeader from "@/components/profile/ProfileHeader";
import TabNavigation from "@/components/profile/TabNavigation";
import { MOCK_USER } from "@/mock/mockData";

export default async function ProfileLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { username: string };
}) {
  const { username } = await params;
  const profileInfo = {
    userName: MOCK_USER.userName,
    followers: MOCK_USER.followers,
    likes: MOCK_USER.likes,
    mentions: MOCK_USER.mentions,
    avatar: MOCK_USER.avatar,
    profileToken: MOCK_USER.profileToken,
  };
  return (
    <div className="w-full max-w-[540px] mx-auto flex flex-col gap-4">
      <ProfileHeader profileInfo={profileInfo} />
      <TabNavigation currentUser={username} />
      <main>{children}</main>
    </div>
  );
}
