

export const Topbar = ({onClick1,onClick2,labeel,label}) => {
   
    return <div className="shadow  h-14 flex justify-between">
        <div className="flex flex-col justify-center font-bold text-lg text-blue-900 h-full ml-4">
            FlowPay
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4 w-40">
                 
              <button onClick={onClick1} type="button" className="w-full text-white bg-slate-500 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{labeel}</button>

            </div>
        
                <div className="flex flex-col justify-center h-full w-40">
                    <button onClick={onClick2} type="button" className="w-full text-white bg-slate-500 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{label}</button>
                </div>
            </div>
    </div>
    
}