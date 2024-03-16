import { useEffect, useState } from "react"

export default function RandomColor(){
    
    
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    function randomColorUtility(length){
        return Math.floor(Math.random()*length)
    }

    function handleCreateRandomHexColor(){
         const hex = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
         let hexColor = "#";

         for(let i=0; i<6; i++){
            hexColor += hex[randomColorUtility(hex.length)]
         }

         setColor(hexColor);
    }

    function handleCreateRandomRgbColor(){
         const r = randomColorUtility(256);
         const g = randomColorUtility(256);
         const b = randomColorUtility(256);

         setColor(`rgb(${r},${g},${b})`);

    }

    useEffect(() => {
        if (typeOfColor === "rgb") handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
      }, [typeOfColor]);

    return(
        <div style={{ backgroundColor: color }} className="w-full py-12 h-screen ">
            <div className=" w-full flex justify-center gap-x-6 h-[8%] ">
                <button onClick={()=> setTypeOfColor('hex')} className="hover:backdrop-blur-md hover:scale-110 border text-[#fffff0] bg-[#333] border-[#fffff0] rounded-md px-4 py-2 font-semibold hover:bg-[#fffff0]/10 transition">
                    😊 Create HEX Color
                </button>
                <button onClick={()=> setTypeOfColor('rgb')} className="hover:backdrop-blur-md hover:scale-110 border text-[#fffff0] bg-[#333] border-[#fffff0] rounded-md px-4 py-2 font-semibold hover:bg-[#fffff0]/10 transition">
                    😁 Create RGB Color
                </button>
                <button onClick={typeOfColor ==='hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor} className="hover:backdrop-blur-md hover:scale-110 border text-[#fffff0] bg-[#333] border-[#fffff0] rounded-md px-4 py-2 font-semibold hover:bg-[#fffff0]/10 transition">
                    💫 Generate Random Color
                </button>
            </div>
            <div className=" w-full h-[92%] flex flex-col items-center gap-y-4 justify-center ">
                <h3 className=" text-white text-semibold text-4xl px-4 py-6 bg-black/10 border-2 border-black/5  backdrop-blur-2xl  rounded-2xl ">{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
                <h1 className=" text-white text-semibold text-6xl px-4 py-6 bg-black/10 border-2 border-black/5  backdrop-blur-2xl  rounded-2xl ">{color}</h1>
            </div>
        </div>
    )
}