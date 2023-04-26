import React from "react";
import { useSelector } from "react-redux";
import { FadeLoader } from "react-spinners";
export default function Spinner() {
    const { isLoading } = useSelector(state => state.SpinnerSlice)

  return isLoading ? (
    <div
      className="fixed w-screen h-screen top-0 left-0 flex justify-center items-center z-50 bg-black bg-opacity-50"
    >
        <FadeLoader color="#E4D807" />
    </div>
  ) : <></>
}