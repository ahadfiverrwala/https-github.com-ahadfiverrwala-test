import React from 'react';
import { Star, Heart } from 'lucide-react';
import { Gig } from '../types';

interface GigCardProps {
  gig: Gig;
  onClick: (id: string) => void;
}

const GigCard: React.FC<GigCardProps> = ({ gig, onClick }) => {
  return (
    <div 
      className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col h-full"
      onClick={() => onClick(gig.id)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={gig.images[0]} 
          alt={gig.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button className="absolute top-2 right-2 p-1.5 bg-white bg-opacity-70 rounded-full text-gray-600 hover:text-red-500 hover:bg-white transition-colors">
          <Heart className="h-4 w-4" />
        </button>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center mb-2">
          <img src={gig.seller.avatar} alt={gig.seller.name} className="h-6 w-6 rounded-full mr-2" />
          <div>
            <h4 className="text-sm font-bold text-gray-900">{gig.seller.name}</h4>
            <span className="text-xs text-gray-500">{gig.seller.level}</span>
          </div>
        </div>
        
        <h3 className="text-gray-800 text-base font-medium leading-snug hover:text-green-600 line-clamp-2 mb-2 flex-grow">
          {gig.title}
        </h3>
        
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
          <span className="font-bold text-gray-900 mr-1">{gig.rating}</span>
          <span>({gig.reviewsCount})</span>
        </div>
        
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
           <Heart className="h-4 w-4 text-gray-400" />
           <div className="text-right">
             <span className="text-xs text-gray-500 uppercase font-semibold">Starting at</span>
             <span className="ml-1 text-lg font-bold text-gray-900">${gig.startingPrice}</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default GigCard;