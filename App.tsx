import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GigCard from './components/GigCard';
import GigDetail from './components/GigDetail';
import UserProfile from './components/UserProfile';
import CreateGigModal from './components/CreateGigModal';
import { MOCK_GIGS, CURRENT_USER } from './constants';
import { Gig, GigCategory } from './types';
import { Filter, ChevronRight, Zap, Code, PenTool, Smartphone } from 'lucide-react';

// Use HashRouter kind of navigation state for this SPA demo
type Page = 'home' | 'explore' | 'profile' | 'detail';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedGigId, setSelectedGigId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState<GigCategory | 'All'>('All');

  const handleGigClick = (id: string) => {
    setSelectedGigId(id);
    setCurrentPage('detail');
    window.scrollTo(0, 0);
  };

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            {/* Hero Section */}
            <div className="bg-green-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10">
                  <img src="https://picsum.photos/seed/bg/1920/1080" className="w-full h-full object-cover" />
               </div>
               <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between">
                 <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                      Find the perfect <span className="text-green-400 italic">freelance</span> services for your business
                    </h1>
                    <div className="flex w-full max-w-md bg-white rounded-md p-1 shadow-lg">
                       <input 
                         type="text" 
                         className="flex-1 px-4 py-3 text-gray-900 outline-none rounded-l-md" 
                         placeholder='Try "building mobile app"' 
                       />
                       <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md transition-colors" onClick={() => navigateTo('explore')}>
                         Search
                       </button>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2 text-sm text-gray-300">
                       <span>Popular:</span>
                       <span className="border border-white/30 rounded-full px-3 py-1 hover:bg-white/10 cursor-pointer">Website Design</span>
                       <span className="border border-white/30 rounded-full px-3 py-1 hover:bg-white/10 cursor-pointer">WordPress</span>
                       <span className="border border-white/30 rounded-full px-3 py-1 hover:bg-white/10 cursor-pointer">Logo Design</span>
                       <span className="border border-white/30 rounded-full px-3 py-1 hover:bg-white/10 cursor-pointer">AI Services</span>
                    </div>
                 </div>
                 <div className="md:w-1/2 flex justify-center">
                    <img src="https://picsum.photos/seed/hero/600/600" className="rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500" alt="Hero" />
                 </div>
               </div>
            </div>

            {/* Trusted By */}
            <div className="bg-gray-100 py-8 border-b border-gray-200">
               <div className="max-w-7xl mx-auto px-4 flex justify-center space-x-8 md:space-x-16 opacity-50 grayscale">
                  <span className="font-bold text-xl">META</span>
                  <span className="font-bold text-xl">GOOGLE</span>
                  <span className="font-bold text-xl">NETFLIX</span>
                  <span className="font-bold text-xl">P&G</span>
                  <span className="font-bold text-xl">PAYPAL</span>
               </div>
            </div>

            {/* Popular Services */}
            <div className="py-16 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Professional Services</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[{name: 'Web Dev', icon: Code, color: 'bg-green-500'}, {name: 'Design', icon: PenTool, color: 'bg-orange-500'}, {name: 'Mobile', icon: Smartphone, color: 'bg-blue-500'}, {name: 'AI & ML', icon: Zap, color: 'bg-purple-500'}].map((cat, idx) => (
                    <div key={idx} className="group relative rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow" onClick={() => navigateTo('explore')}>
                        <div className={`absolute inset-0 ${cat.color} opacity-80 group-hover:opacity-90 transition-opacity`}></div>
                        <img src={`https://picsum.photos/seed/cat${idx}/400/300`} className="w-full h-48 object-cover" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                           <cat.icon className="h-10 w-10 mb-2" />
                           <span className="font-bold text-xl">{cat.name}</span>
                        </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Featured Gigs */}
            <div className="py-16 bg-gray-50">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="flex justify-between items-end mb-8">
                   <h2 className="text-3xl font-bold text-gray-900">Featured Gigs</h2>
                   <button onClick={() => navigateTo('explore')} className="text-green-600 font-semibold hover:underline flex items-center">
                      See All <ChevronRight className="h-4 w-4 ml-1" />
                   </button>
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {MOCK_GIGS.map(gig => (
                      <GigCard key={gig.id} gig={gig} onClick={handleGigClick} />
                    ))}
                 </div>
               </div>
            </div>
          </>
        );
      case 'explore':
        const filteredGigs = filterCategory === 'All' 
          ? MOCK_GIGS 
          : MOCK_GIGS.filter(g => g.category === filterCategory);

        return (
          <div className="bg-gray-50 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Explore Services</h1>
                <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar max-w-full">
                  <span className="text-gray-500 mr-2 flex items-center text-sm"><Filter className="h-4 w-4 mr-1"/> Filter:</span>
                  <button 
                    onClick={() => setFilterCategory('All')}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${filterCategory === 'All' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
                  >
                    All
                  </button>
                  {Object.values(GigCategory).map(cat => (
                    <button 
                      key={cat}
                      onClick={() => setFilterCategory(cat)}
                      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${filterCategory === cat ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                 {filteredGigs.map(gig => (
                    <GigCard key={gig.id} gig={gig} onClick={handleGigClick} />
                 ))}
                 {filteredGigs.length === 0 && (
                   <div className="col-span-full text-center py-20">
                      <p className="text-gray-500 text-lg">No gigs found in this category.</p>
                      <button onClick={() => setFilterCategory('All')} className="mt-4 text-green-600 hover:underline">Clear Filters</button>
                   </div>
                 )}
              </div>
            </div>
          </div>
        );
      case 'detail':
        const gig = MOCK_GIGS.find(g => g.id === selectedGigId);
        if (!gig) return <div>Gig not found</div>;
        return <GigDetail gig={gig} onBack={() => navigateTo('explore')} />;
      case 'profile':
        return <UserProfile user={CURRENT_USER} gigs={MOCK_GIGS} onGigClick={handleGigClick} />;
      default:
        return <div>404</div>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar 
        user={CURRENT_USER} 
        onNavigate={navigateTo} 
        onCreateClick={() => setIsModalOpen(true)}
      />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer />
      
      <CreateGigModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;