function Projects() {
  return (
    <div id="projects" className="min-h-screen bg-[#1a0933] flex flex-col items-center justify-center p-8 relative">
      <div className="absolute top-8 left-8">
        <div className="bg-[#2a0f4d] border-2 border-[#ffd700] rounded-lg px-6 py-2">
          <h1 className="text-[#ffd700] font-pixel text-2xl">MY RECENT PROJECTS</h1>
        </div>
      </div>

      <div className="flex gap-6 w-full max-w-6xl">
        <div className="w-1/3 h-[500px] bg-[#2a0f4d] rounded-lg relative">
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#ff00ff] bg-opacity-30 
                        clip-bottom-left transform -skew-x-12">
            <div className="absolute bottom-0 left-0 w-24 h-1 bg-[#ff00ff]"></div>
          </div>
          

          <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff00ff]"></div>
          <div className="absolute top-0 left-0 w-1 h-full bg-[#ff00ff]"></div>
          <div className="absolute top-0 right-0 w-1 h-full bg-[#ff00ff]"></div>
        </div>

        <div className="w-2/3 h-[500px] bg-[#2a0f4d] rounded-lg relative">

          <div className="absolute top-12 left-8 right-8 h-0.5 bg-[#ff00ff] opacity-50"></div>

          <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff00ff]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ff00ff]"></div>
          <div className="absolute top-0 left-0 w-1 h-full bg-[#ff00ff]"></div>
          <div className="absolute top-0 right-0 w-1 h-full bg-[#ff00ff]"></div>

          <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[#ff00ff]"></div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#ff00ff]"></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;