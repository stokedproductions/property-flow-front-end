import React from "react"
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const Footer = () => {
	// TODO this is a HACK find a better solution
	const { status } = useSelector((state: RootState) => state.listings);

  return (
    <div className={"bg-[#212121] w-full  flex items-center justify-center mt-10 " + 
		` ${status === 'failed' ? " absolute bottom-0 " : ""}`}>
        <p className="text-white text-lg text-bold p-10">
					&copy; {new Date().getFullYear()} PropertyFlow. All Rights Researved by Dean Symington
				</p>
    </div>
  )
}

export default Footer