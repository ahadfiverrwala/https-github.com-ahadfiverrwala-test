import React, { useState } from 'react';
import { Star, Clock, RefreshCw, Check, ArrowLeft } from 'lucide-react';
import { Gig, Package } from '../types';

interface GigDetailProps {
  gig: Gig;
  onBack: () => void;
}

const GigDetail: React.FC<GigDetailProps> = ({ gig, onBack }) => {
  const [selectedPackage, setSelectedPackage] = useState<'basic' | 'standard' | 'premium'>('basic');
  const pkg: Package = gig.packages[selectedPackage];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button 
        onClick={onBack}
        className="flex items-center text-gray-500 hover:text-green-600 mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Results
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-8">
          <div>
             <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">{gig.title}</h1>
             <div className="flex items-center space-x-4">
               <img src={gig.seller.avatar} alt={gig.seller.name} className="h-12 w-12 rounded-full border border-gray-200" />
               <div>
                 <h3 className="font-bold text-gray-900">{gig.seller.name} | <span className="font-normal text-gray-500 text-sm">{gig.seller.level}</span></h3>
                 <div className="flex items-center text-sm">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(gig.rating) ? 'fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-gray-500 font-medium">{gig.rating} ({gig.reviewsCount} reviews)</span>
                 </div>
               </div>
             </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
             <img src={gig.images[0]} alt="Gig Main" className="w-full object-cover max-h-[500px]" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">About This Gig</h2>
            <div className="prose prose-green text-gray-700 leading-relaxed whitespace-pre-line">
              {gig.description}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">About The Seller</h2>
            <div className="flex flex-col md:flex-row gap-6">
               <div className="flex-shrink-0">
                  <img src={gig.seller.avatar} alt="Seller" className="h-24 w-24 rounded-full" />
               </div>
               <div>
                  <h3 className="font-bold text-lg mb-2">{gig.seller.name}</h3>
                  <p className="text-gray-600 italic mb-3">"{gig.seller.bio}"</p>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-4">
                     <div>From: <span className="font-semibold text-gray-900">{gig.seller.location}</span></div>
                     <div>Member since: <span className="font-semibold text-gray-900">{gig.seller.joinedAt}</span></div>
                  </div>
                  <p className="text-gray-700">{gig.seller.bio} I have been working in this field for many years and have completed hundreds of projects with 100% satisfaction.</p>
               </div>
            </div>
          </div>
          
           <div className="border-t border-gray-200 pt-8">
             <h2 className="text-xl font-bold text-gray-900 mb-6">Reviews</h2>
             {gig.reviews.length > 0 ? (
               <div className="space-y-6">
                 {gig.reviews.map((review) => (
                   <div key={review.id} className="border-b border-gray-100 last:border-0 pb-6">
                     <div className="flex items-start">
                        <img src={review.userAvatar} className="h-10 w-10 rounded-full mr-4" />
                        <div>
                          <h4 className="font-bold text-sm text-gray-900">{review.userName}</h4>
                          <div className="flex items-center text-yellow-400 my-1">
                             <Star className="h-3 w-3 fill-current" />
                             <span className="ml-1 text-xs font-bold text-gray-700">{review.rating}</span>
                          </div>
                          <p className="text-gray-600 text-sm mt-1">{review.comment}</p>
                          <span className="text-xs text-gray-400 mt-2 block">Published {review.createdAt}</span>
                        </div>
                     </div>
                   </div>
                 ))}
               </div>
             ) : (
               <p className="text-gray-500 italic">No reviews yet for this gig.</p>
             )}
           </div>

        </div>

        {/* Right Column: Pricing Sticky Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
             <div className="flex border-b border-gray-200">
               {(['basic', 'standard', 'premium'] as const).map((type) => (
                 <button
                   key={type}
                   className={`flex-1 py-4 text-sm font-bold text-center capitalize transition-colors ${selectedPackage === type ? 'bg-white text-green-600 border-b-2 border-green-600' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
                   onClick={() => setSelectedPackage(type)}
                 >
                   {type}
                 </button>
               ))}
             </div>
             
             <div className="p-6">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="font-bold text-gray-900 text-lg">{pkg.name}</h3>
                  <span className="text-2xl font-bold text-gray-900">${pkg.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-6 min-h-[40px]">{pkg.description}</p>
                
                <div className="flex items-center justify-between text-sm font-semibold text-gray-700 mb-4">
                   <div className="flex items-center"><Clock className="h-4 w-4 mr-1" /> {pkg.deliveryTime} Days Delivery</div>
                   <div className="flex items-center"><RefreshCw className="h-4 w-4 mr-1" /> {pkg.revisions} Revisions</div>
                </div>

                <ul className="space-y-2 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-500">
                       <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                       <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className="w-full bg-green-600 text-white font-bold py-3 rounded-md hover:bg-green-700 transition-colors shadow-md hover:shadow-lg flex items-center justify-center"
                  onClick={() => alert(`Redirecting to secure payment for ${selectedPackage} package ($${pkg.price})...`)}
                >
                  Continue (${pkg.price})
                </button>
                <button className="w-full mt-3 text-green-600 font-semibold py-2 rounded-md hover:bg-green-50 transition-colors text-sm">
                  Contact Seller
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigDetail;