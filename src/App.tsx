import "./App.css";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className= "flex flex-col justify-center items-center w-[280px] md:w-[350px] bg-[hsl(0,0%,12%)] text-center rounded-xl p-4">
          <img className="rounded-full w-28 md:w-40 h-auto" src="src\assets\images\avatar-jessica.jpeg" alt="Perfil" />
          <p className="mt-2 text-2xl md:text-4xl; font-bold text-[hsl(0,0%,100%)]">Jessica Randall</p>
          <p className="mt-1 text-sm md:text-lg text-[hsl(75,94%,57%)]">London, United Kingdom</p>
          <p className="my-4 text-xs md:text-base font-thin text-[hsl(0,0%,100%)]">"Front-end developer and avid reader."</p>
          <div className="flex flex-col w-full gap-4">
            <p className="p-3 text-sm md:text-lg font-medium bg-[hsl(0,0%,20%)] hover:bg-[hsl(0,0%,30%)] rounded-md text-[hsl(0,0%,100%)]">GitHub</p>
            <p className="p-3 text-sm md:text-lg font-medium bg-[hsl(0,0%,20%)] hover:bg-[hsl(0,0%,30%)] rounded-md text-[hsl(0,0%,100%)]">Frontend Mentor</p>
            <p className="p-3 text-sm md:text-lg font-medium bg-[hsl(0,0%,20%)] hover:bg-[hsl(0,0%,30%)] rounded-md text-[hsl(0,0%,100%)]">Linkedin</p>
            <p className="p-3 text-sm md:text-lg font-medium bg-[hsl(0,0%,20%)] hover:bg-[hsl(0,0%,30%)] rounded-md text-[hsl(0,0%,100%)]">Twitter</p>
            <p className="p-3 text-sm md:text-lg font-medium bg-[hsl(0,0%,20%)] hover:bg-[hsl(0,0%,30%)] rounded-md text-[hsl(0,0%,100%)]">Instagram</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
