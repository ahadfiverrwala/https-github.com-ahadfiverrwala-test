import React from 'react';
import { User, Gig } from '../types';
import { MapPin, User as UserIcon, Calendar, Star } from 'lucide-react';
import GigCard from './GigCard';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface UserProfileProps {
  user: User;
  gigs: Gig[];
  onGigClick: (id: string) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, gigs, onGigClick }) => {
  const userGigs = gigs.filter(g => g.sellerId === user.id);
  
  // Mock earnings data for the chart
  const data = [
    { name: 'Jan', earnings: 400 },
    { name: 'Feb', earnings: 300 },
    { name: 'Mar', earnings: 600 },
    { name: 'Apr', earnings: 800 },
    { name: 'May', earnings: 500 },
    { name: 'Jun', earnings: 900 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Sidebar: Profile Info */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="relative inline-block">
               <img src={user.avatar} alt={user.name} className="h-32 w-32 rounded-full mx-auto object-cover border-4 border-white shadow-sm" />
               <span className="absolute bottom-2 right-2 h-4 w-4 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <h1 className="text-xl font-bold text-gray-900 mt-4">{user.name}</h1>
            <p className="text-gray-500 mb-2">{user.level}</p>
            
            <div className="flex justify-center items-center text-sm text-gray-600 mb-6">
              <div className="flex items-center px-3 border-r border-gray-300">
                <Star className="h-4 w-4 text-yellow-400 mr-1 fill-current" />
                <span className="font-bold">{user.rating}</span>
              </div>
               <div className="flex items-center px-3">
                 <span className="font-bold">{user.reviewsCount}</span>
                 <span className="ml-1">Reviews</span>
              </div>
            </div>

            <button className="w-full bg-white border border-gray-300 text-gray-700 font-bold py-2 rounded-md hover:bg-gray-50 transition-colors mb-6">
              Contact Me
            </button>

            <div className="text-left space-y-4 border-t border-gray-100 pt-6">
               <div className="flex justify-between text-sm">
                 <span className="text-gray-500 flex items-center"><MapPin className="h-4 w-4 mr-2" /> From</span>
                 <span className="font-semibold text-gray-800">{user.location}</span>
               </div>
               <div className="flex justify-between text-sm">
                 <span className="text-gray-500 flex items-center"><UserIcon className="h-4 w-4 mr-2" /> Member Since</span>
                 <span className="font-semibold text-gray-800">{user.joinedAt}</span>
               </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
            <h3 className="font-bold text-gray-900 mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {user.skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
             <h3 className="font-bold text-gray-900 mb-4">Description</h3>
             <p className="text-sm text-gray-600 leading-relaxed">{user.bio}</p>
          </div>
        </div>

        {/* Right Content: Stats & Gigs */}
        <div className="md:col-span-2 space-y-8">
           
           {/* Analytics Chart (Only visible to owner, mocked here) */}
           <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
             <h2 className="text-lg font-bold text-gray-900 mb-4">Monthly Earnings (Last 6 Months)</h2>
             <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip cursor={{fill: 'transparent'}} />
                    <Bar dataKey="earnings" fill="#22c55e" radius={[4, 4, 0, 0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
             </div>
           </div>

           <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Active Gigs</h2>
              {userGigs.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {userGigs.map(gig => (
                    <GigCard key={gig.id} gig={gig} onClick={onGigClick} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                  <p className="text-gray-500">No active gigs found.</p>
                </div>
              )}
           </div>
        </div>

      </div>
    </div>
  );
};

export default UserProfile;