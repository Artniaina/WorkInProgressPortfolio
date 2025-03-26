import Totoro from '../assets/ghibli.gif'
const Thanks=()=> {
  return (
    <div className="  flex items-center w-[40rem]  justify-center p-4" >
      <div className="w-full max-w-3xl flex flex-col items-center">
        <h1 className="text-[#e44cff] mt-4 text-3xl mb-12 font-bold tracking-wider" style={{
          textShadow: '0 0 10px rgba(228, 76, 255, 0.5)',
          fontFamily: "'Press Start 2P', cursive"
        }}>
          HOW TO REACH ME
        </h1>


        <div className="w-full mt-4 ml-12 bg-[#2a1245] rounded-lg p-6 relative overflow-hidden">  
          <div
            className="absolute top-0 right-0 h-1 w-1/2 bg-[#e44cff] animate-pulse"
            style={{
              clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
              boxShadow: '0 0 10px #e44cff, 0 0 20px #e44cff',
            }}
          ></div>
          <div
            className="absolute bottom-0 left-0 h-1 w-1/2 bg-[#e44cff] animate-pulse"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 0 100%)',
              boxShadow: '0 0 10px #e44cff, 0 0 20px #e44cff',
            }}
          ></div>
          <div
            className="absolute top-0 left-0 w-1 h-1/2 bg-[#e44cff] animate-pulse"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 0 100%)',
              boxShadow: '0 0 10px #e44cff, 0 0 20px #e44cff',
            }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-1 h-1/2 bg-[#e44cff] animate-pulse"
            style={{
              clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
              boxShadow: '0 0 10px #e44cff, 0 0 20px #e44cff',
            }}
          ></div>
          <p className="text-white mt-2 mb-6 text-lg">
            Would you be interested in working together?
          </p>
          <div className="space-y-2 text-white">
            {['Yes', 'Maybe'].map((option, index) => (
              <div
            key={index}
            className={`flex items-center gap-2 cursor-pointer hover:text-[#e44cff] transition-colors animate-pulse`}
            style={{
              animationDelay: `${index * 0.5}s`,
              animationIterationCount: 'infinite',
            }}
              >
            <span className={index === 0 ? 'text-[#e44cff]' : 'opacity-0'}></span> {option}
              </div>
            ))}
          </div>
        </div>

      <div className='w-[12rem] h-[14rem] mt-12 mr-16'>
        <img src={Totoro} alt="" />
      </div>
     
      </div>
    </div>
  );
}

export default Thanks;