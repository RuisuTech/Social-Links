import "./App.css";
import Links from "./components/Links.tsx";
import Perfil from "./components/Perfil.tsx";

function App() {
  return (
    <>
      <div className="flex justify-center items-center text-center h-screen">
        <div className="bg-[#1f1f1f] w-[280px] md:w-[350px] rounded-xl p-4">
          <div className="flex justify-center items-center flex-col">
            <Perfil
              img="src\assets\images\Gato.jpg"
              name="Jose Luis Guzman"
              ciudad="Lima, Peru"
              descripcion="Programador Autodidacta :D"
            />
          </div>
          <div className="flex justify-center items-center flex-col gap-4">
            <Links name="GitHub" url="https://github.com/RuisuTech"/>
            <Links name="Twitter" url="#"/>
            <Links name="Linkedin" url="#"/>
            <Links name="Instagram" url="#"/>
            <Links name="Frontend Mentor" url="#"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
