

  const AboutFrame = () => {
   
  
    return (
      <div className="   bg-transparent">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('/api/placeholder/800/600')] opacity-20"></div>
        </div>
        
        <div className="flex space-x-4 p-6 z-10">
          <div className="w-50 bg-purple-800 rounded border-2 border-purple-400 overflow-hidden flex flex-col">
        <div className="h-8 bg-purple-600 border-b border-purple-400 px-2 flex justify-between items-center">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-purple-300"></div>
            <div className="w-2 h-2 bg-purple-300"></div>
          </div>
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-gray-900 border border-purple-300 flex items-center justify-center">
          <div className="w-2 h-2 bg-purple-300"></div>
            </div>
            <div className="w-4 h-4 bg-gray-900 border border-purple-300"></div>
            <div className="w-4 h-4 bg-gray-900 border border-purple-300 flex items-center justify-center">
          <div className="text-purple-300 text-xs">×</div>
            </div>
          </div>
        </div>
        
        {/* Avatar */}
        <div className="p-8 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-purple-700 border-2 border-purple-400 p-1">
            <div className="w-full h-full rounded-full bg-purple-600 overflow-hidden flex items-center justify-center">
          {/* Pixel Art Character */}
          <div className="w-24 h-24 bg-[url('/api/placeholder/100/100')] bg-cover"></div>
            </div>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="px-6 py-2 flex-grow">
          <div className="text-white text-xl font-bold mb-4 px-2">My Contacts:</div>
          
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center">
          <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center mr-2">
            <div className="text-white text-xs">✉</div>
          </div>
          <div className="text-white text-sm">mchoicegd@gmail.com</div>
            </div>
            
            {/* LinkedIn */}
            <div className="flex items-center">
          <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center mr-2">
            <div className="text-white text-xs">in</div>
          </div>
          <div className="text-white text-sm">@mchoice</div>
            </div>
            
            {/* Behance */}
            <div className="flex items-center">
          <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center mr-2">
            <div className="text-white text-xs">Be</div>
          </div>
          <div className="text-white text-sm">@m_choice</div>
            </div>
            
            {/* Instagram */}
            <div className="flex items-center">
          <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center mr-2">
            <div className="text-white text-xs">◉</div>
          </div>
          <div className="text-white text-sm">@m.choice_</div>
            </div>
          </div>
        </div>
        
        {/* Button */}
        <div className="p-6 flex justify-center">
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded">
            got it!
          </button>
        </div>
          </div>
        
         
        </div>
      </div>
        );
  };
  
  export default AboutFrame;