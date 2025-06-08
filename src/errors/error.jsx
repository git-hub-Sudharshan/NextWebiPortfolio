import Errorpage from "../assets/images/error/error404.webp";

const Error = () => {
  return <>
  <div className="flex justify-center">
<div className="w-[80%] h-[80%]">
     <img src={`${Errorpage}`} alt="Error404" />
 </div>
  </div>
 
  </>;
};

export default Error;
