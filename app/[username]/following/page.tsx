import { Follower, MOCK_USER } from "@/mock/mockData";
import FollowerTable from "@/components/profile/FollowerTable";

export default function FollowingPage() {
  const followingList: Follower[] = MOCK_USER.followerList.filter(
    (i) => i.isFollowing === true
  );
  return <FollowerTable followers={followingList} />;
}
