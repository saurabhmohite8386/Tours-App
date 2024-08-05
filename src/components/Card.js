import { useState } from "react";

function Card({id,name,image,info,price,removeTour}){

    const [readmore,setReadmore] = useState(false);

    const description = readmore ? info : `${info.substring(0,200)}....`;
    function readmoreHandler(){
        setReadmore(!readmore);
    }
    return(
        <div className=" bg-purple-800 text-white border rounded-md mx-10 my-10 w-[400px]  flex-col ">
            <img src={image} alt="" className=" aspect-square py-6 px-6"></img>
            <div className="px-6 ">
                <div>
                    <h5 className="font-bold text-green-500">₹{price}</h5>
                    <h5 className="pt-2 font-bold">{name}</h5>
                </div>
                <div className="pb-3 ">
                    {description}
                    <span onClick={readmoreHandler} className="cursor-pointer text-blue-400">
                        {readmore ? `Show Less`:`Read More`}
                    </span>
                </div>
            </div>
            <button onClick={() => removeTour(id)} className="mx-6 mb-3 bg-white text-black rounded-sm  border border-black font-bold  w-32">Not Interested</button>
        </div>
    );
}

export default Card;