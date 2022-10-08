import React from 'react'
import BarLoader from "react-spinners/BarLoader";
const Loading = ({isLoading}) => {
  return (
    <div>
        <BarLoader color="#a21caf" loading={isLoading}  cssOverride={{display:"block"}} 
        size={1080} width={"100vw"}  speedMultiplier={2} />
    </div>
  )
}

export default Loading