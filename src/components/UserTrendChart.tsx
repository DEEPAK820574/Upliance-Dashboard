// UserProfileTrends.tsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { UserTrendsData } from '../type';

interface UserProfileTrendsProps {
  data: UserTrendsData[];
}

const UserProfileTrends: React.FC<UserProfileTrendsProps> = ({ data }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-2xl">
      <h2 className="text-2xl font-bold mb-4">User Profile Trends</h2>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="users" stroke="#8884d8" />
        <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default UserProfileTrends;
