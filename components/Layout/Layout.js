import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Sidebar from '../SiderBar/Sidebar'
import classes from "./Layout.module.css";
import { useRef } from "react";
const  Layout=(props)=> {
    const [marginLeft, setmarginLeft] = useState("21%");
    const [width, setwidth] = useState('79%')
    const SidedrawerRef = useRef();
    const siderdrawerCloseHandler=()=>{
        console.log(SidedrawerRef);
          SidedrawerRef.current.style.width = "0";
        //   SidedrawerRef.current.style.display = "none";
         setmarginLeft('0.5%');
         setwidth("100%")
    }
    const siderdrawerOpenHandler=()=>{
      
      SidedrawerRef.current.style.width = "20%";
        console.log(SidedrawerRef.current.style);
         setmarginLeft('21%');
         setwidth("79%");
    //   SidedrawerRef.current.style.display = "none";
    }
   
    return (
      <div className={classes.Layout_main}>
        <Header
          siderdrawerOpenHandler={siderdrawerOpenHandler}
          siderdrawerCloseHandler={siderdrawerCloseHandler}
          SidedrawerRef={SidedrawerRef}
        />
        <div>
          <span>
            <Sidebar
              siderdrawerOpenHandler={siderdrawerOpenHandler}
              siderdrawerCloseHandler={siderdrawerCloseHandler}
              SidedrawerRef={SidedrawerRef}
            />
          </span>{" "}
          <div style={{ marginLeft: marginLeft, width: width }}>
            {props.children}
          </div>
        </div>
      </div>
    );
}

export default Layout
