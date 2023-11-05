import { FcSettings, FcIdea } from "react-icons/fc";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="text-green-300 bg-black items-center py-6 px-4 text-[32px] flex">
          <div className="w-[75%]">Papers</div>
          <div className="flex justify-between w-[25%]  ">
            <div>
              <FcSettings width={10} height={10} className="w-8 h-8 spinner" />
            </div> 
            <div>
              <FcIdea className=" animate-ping absolute"/>
              <FcIdea className="relative "/>
            </div>
          </div>
        </div>
       <div className="h-[100vh] w-full bg-[#36454F]">
        Aditya made some change in the file 
       </div>
      </header>
    </div>
  );
}

export default App;
