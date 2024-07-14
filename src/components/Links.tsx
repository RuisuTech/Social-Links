import React from "react";

interface Props {
  name: string;
  url: string;
}

const Links: React.FC<Props> = (props) => {
  return (
    <>
      <a
        href={props.url}
        className="p-3 text-sm md:text-lg w-full font-bold 
        bg-[#333333] text-[#ffffff]
        hover:bg-[#c5f82a] hover:text-[#1f1f1f] rounded-md
        focus:bg-[#c5f82a] focus:text-[#1f1f1f] focus:outline-none"
      >
        {props.name}
      </a>
    </>
  );
};

export default Links;
