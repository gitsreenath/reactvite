import { useRef, useState } from "react";

import "./App.css";

function App() {
  const inputRef = useRef({})
  const [otp, setotp] = useState({
    otpone: "",
    otptwo: "",
    otpthree: "",
    otpfour: "",
    otpfive: "",
    otpsix: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setotp((prev) => ({
      ...prev,
      [name]: value,
    }));
    event.target.nextSibling.focus()
  };
  console.log(otp);

  const inputbox = () => {
    return Object.keys(otp).map((keys, index) => (
      <input key={index}
      ref={(Element)=>(inputRef.current[index]=Element)}
      maxLength={1}
        type="text"
        className="mr-4 text-center rounded-md w-16 border-2 h-6 text-xl P-8"
        name={keys}
        onChange={handleChange}
      />

    )); 
  };
  console.log(inputRef);

  return (
    <div className="text-center ">
      <form action="">
        <h3 className="text-3xl mb-20 text-center">Plese fill in the OTP</h3>
        <div className="mb-10">{inputbox()}</div>
        <button className="mt-4 text-center bg-[#014e85] text-[#ffff] hover:bg-[#000000] ">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default App;
