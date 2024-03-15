import { useState } from "react"
import data from './data'

export default function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection( getCurrentId ){
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        let cpyMutiple = [...multiple];
        const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);
    
        console.log(findIndexOfCurrentId);
        if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
        else cpyMutiple.splice(findIndexOfCurrentId, 1);
    
        setMultiple(cpyMutiple);
      }

    console.log(selected, multiple)

    return (
    <div className="wrapper flex justify-center items-center flex-col w-full h-screen bg-[#fffff0] ">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)} className="border border-[#333] rounded-md px-4 py-2 font-semibold hover:bg-[#333]/10 transition">
                {enableMultiSelection ? "😎 Enable Single Selection" : " 😎 Enable Multi Selection"}
            </button>

        <div className="accordian w-full px-40">
        {
            data && data.length > 0 ?
            data.map(dataItem => <div className="item rounded-[10px]  border-2 hover:bg-[#333]/5 transition border-black mt-4 py-4 px-12 shadow-[3px_4px_0px_2px_#333] ">
                <div onClick={
                     enableMultiSelection
                        ? () => handleMultiSelection(dataItem.id) 
                        : () => handleSingleSelection(dataItem.id)
                     } className=" cursor-pointer title flex justify-between items-center ">
                    <h3 className="text-xl font-semibold  "> {dataItem.question} </h3>
                    <div className="text-4xl font-semibold mb-2 cursor-pointer "> + </div>
                </div>
                <div className="answer">
                    {
                        enableMultiSelection ?
                            multiple.indexOf(dataItem.id) !== -1 && ( 
                            <div className=" font-semibold  text-[#666]"> {dataItem.answer} </div>
                        ) 
                        : selected === dataItem.id && (
                            <div className=" font-semibold  text-[#666]"> {dataItem.answer} </div>
                        ) 
                    }
                    {/* {
                        selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1?
                            <div className=" font-semibold  text-[#666]"> {dataItem.answer} </div>
                        :null
                    } */}
                </div>
                
            </div> )
            : <div> No data found !</div>
        }
        </div>
    </div>)
}    