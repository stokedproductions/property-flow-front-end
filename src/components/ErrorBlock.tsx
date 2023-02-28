import React from "react"

const ErrorBlock = () => {
  return (
    <div className="min-h-[500px] flex flex-2 flex-col justify-center items-center">
       <div>
        <p className="flex-1 text-[100px]">😭</p>
        <p className="flex-1 text-[30px] mt-10 text-bold">There was a error loading our listings ...</p>
       </div>
    </div>
  )
}

export default ErrorBlock