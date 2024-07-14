import React from "react";

interface Props {
    img: string;
    name: string;
    ciudad: string;
    descripcion: string;
  }
  
  const Perfil: React.FC<Props> = (props) => {
    return (  
      <>
      <img
        className="w-28 md:w-40 h-auto rounded-full"
        src={props.img}
        alt="Perfil"
      />
      <p className="mt-2 text-2xl md:text-4xl; font-bold text-[#ffffff]">
              {props.name}
            </p>
            <p className="mt-1 text-sm md:text-lg text-[#c5f82a]">
              {props.ciudad}
            </p>
            <p className="my-4 text-xs md:text-base font-light text-[#ffffff]">
              {props.descripcion}
            </p>
      </>
    );
  };
  
  export default Perfil;