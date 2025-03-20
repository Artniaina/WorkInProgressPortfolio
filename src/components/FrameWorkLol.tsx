const FrameWorkLol = () => {
    type SkillLevel = {
        name: string;
        level: number;
        maxLevel?: number;
    };

    const software: SkillLevel[] = [
        { name: 'Photoshop', level: 5 },
        { name: 'Aseprite', level: 4 },
        { name: 'Unity 2D', level: 3 }
    ];

    const skills: string[] = [
        'English and Portuguese Knowledge',
        'Teamwork',
        'Fast Selflearning',
        'Versatility'
    ];

    return (
        <div>
            <div className="w-[58rem] bg-purple-800 rounded h-[36rem] border-2 border-purple-400 overflow-hidden flex flex-col">
                <div className="h-8 bg-purple-600 border-b border-purple-400 px-2 flex justify-between items-center"></div>
<div className="h-8 bg-purple-600 border-b border-purple-400 px-2 flex justify-between items-center">
  <div className="text-white">Apresentation.txt</div>
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

{/* Content */}
<div className="flex-grow bg-gray-900 p-4 text-white">
  <div className="mb-6">
    <div className="text-xl mb-2">Education:</div>
    <div className="pl-4 mb-4">
      <div className="mb-2">•Studying: Design - UCDB (Catholic University of Dom Bosco) 2024-2026</div>
      <div className="mb-2">•Game Designer and Unity Developer - EBAC (2023 (Studying))</div>
      <div className="mb-2">• Domestika - Character Design for Animation in Games 2023</div>
    </div>
  </div>
  
  <div className="mb-6">
    <div className="text-xl mb-2">Softwares:</div>
    <div className="grid grid-cols-3 gap-4">
      {software.map((sw, index) => (
        <div key={index} className="pl-4">
          • {sw.name}
          <div className="flex mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className={`w-2 h-2 mr-1 ${i < sw.level ? 'bg-white' : 'bg-gray-600'}`}></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
  
  <div>
    <div className="text-xl mb-2">Main Skills:</div>
    <div className="pl-4">
      {skills.map((skill, index) => (
        <div key={index} className="mb-1">• {skill}</div>
      ))}
    </div>
  </div>
</div>

{/* Footer */}
<div className="h-8 bg-purple-700 border-t border-purple-500 flex justify-between items-center px-2">
  <button className="w-6 h-6 bg-gray-900 border border-purple-400 text-purple-300 flex items-center justify-center">
    1
  </button>
  <div className="flex-grow mx-2">
    <div className="w-full h-4 bg-purple-600 rounded"></div>
  </div>
  <button className="w-6 h-6 bg-gray-900 border border-purple-400 text-purple-300 flex items-center justify-center">
    ➤
  </button>
  <div className="ml-2 w-6 h-6 flex items-center justify-center text-purple-300">
    ♥
  </div>
</div>
</div>
    </div>
  )
}
export default FrameWorkLol