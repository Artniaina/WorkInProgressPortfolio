const Thanks=()=> {
  return (
    <div className=" bg-[#1a0b2e] flex items-center w-[40rem] justify-center p-4" style={{
      background: 'radial-gradient(circle at center, #2d1b4e 0%, #1a0b2e 100%)',
    }}>
      <div className="w-full max-w-3xl flex flex-col items-center">
        <h1 className="text-[#e44cff] mt-4 text-3xl mb-12 font-bold tracking-wider" style={{
          textShadow: '0 0 10px rgba(228, 76, 255, 0.5)',
          fontFamily: "'Press Start 2P', cursive"
        }}>
          HOW TO REACH ME
        </h1>


        <div className="w-full mt-20 bg-[#2a1245] rounded-lg p-6 shadow-lg">  
          <p className="text-white mt-4 mb-6 text-lg">
            Would you be interested in working together?
          </p>
          <div className="space-y-2 text-white">
            {['Yes', 'Maybe later', 'No'].map((option, index) => (
              <div
            key={index}
            className={`flex items-center gap-2 cursor-pointer hover:text-[#e44cff] transition-colors animate-pulse`}
            style={{
              animationDelay: `${index * 0.5}s`,
              animationIterationCount: 'infinite',
            }}
              >
            <span className={index === 0 ? 'text-[#e44cff]' : 'opacity-0'}>▶</span> {option}
              </div>
            ))}
          </div>
        </div>

      
     
      </div>
    </div>
  );
}

export default Thanks;