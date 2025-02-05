import Counter from "./Counter";

import RichTextEditor from "./RichTextEditor";
import UserProfileTrends from "./UserTrendChart";
import { UserTrendsData } from "../type";

const userData: UserTrendsData[] = [
  { name: "Jan", users: 400, activeUsers: 240 },
  { name: "Feb", users: 300, activeUsers: 139 },
  { name: "Mar", users: 200, activeUsers: 180 },
  { name: "Apr", users: 278, activeUsers: 308 },
  { name: "May", users: 189, activeUsers: 220 },
  { name: "Jun", users: 239, activeUsers: 250 },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col space-y-6 justify-center">
      <div className="flex flex-row space-x-14 ml-12">
        <Counter />
        <UserProfileTrends data={userData} />
      </div>
      <div>
        <RichTextEditor />
      </div>
    </div>
  );
};

export default Dashboard;
