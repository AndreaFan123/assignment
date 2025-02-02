import FollowerTable from "@/components/profile/FollowerTable";
import { Follower, MOCK_USER } from "@/mock/mockData";

export default function FollowersPage() {
  const followerList: Follower[] = MOCK_USER.followerList;
  return <FollowerTable followers={followerList} />;
}
