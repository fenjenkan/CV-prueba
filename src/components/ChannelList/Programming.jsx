import React, { useState } from "react";
import "../css/itemProgram.css"
import {HiDotsHorizontal} from "react-icons/Hi"


function Programming({ program,onHead }) {

  const handleHover = (name,description,Ihour,Fhour,duration) => {
    onHead(name,description,Ihour,Fhour,duration);
  }
  const arrayTime = program.duration.split(':')
  const long = ((parseInt(arrayTime[0]*60))+parseInt(arrayTime[1])+(parseInt(arrayTime[2]/60)))*3
  const initial = program.date_begin.split(' ')
  const final = program.date_end.split(' ')
  const hour1 = initial[1].split(':')
  const Ihour = hour1[0]+":"+hour1[1]
  const hour2 = final[1].split(':')
  const Fhour = hour2[0]+":"+hour2[1]
  return (
    <div onMouseOver={() => handleHover(program.name,program.description,Ihour,Fhour,long)} className="item d-flex justify-content-between px-2 fw-light text-white" style={{ minWidth: long}}>
      <div className="cut-text text-start"><h5>{program.name}</h5><p className="fs-6">{Ihour}-{Fhour}</p></div>
      <div className="d-flex align-items-end"><HiDotsHorizontal/></div>
    </div>
  );
}
export default Programming;
