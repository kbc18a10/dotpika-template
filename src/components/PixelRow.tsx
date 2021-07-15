import React from "react";
import {Dot} from "./Dot";

type PixelRowProps = {
    pixel: Dot;
    onMouseDown: () => void;
    onMouseUp: () => void;
    onPixelOver: (x:number,y:number,red:string,green:string,blue:string) => void;
    onPixelClick: (x:number,y:number,red:string,green:string,blue:string) => void;
}

const PixelRow = React.memo((props: PixelRowProps) => {
    const {x,y,red,green,blue} = props.pixel;

    const handleMouseDown = () => {
        props.onMouseDown();
    }

    const handleMouseup = () => {
        props.onMouseUp();
    }

   const handlePixelOver = () => {
        props.onPixelOver(x,y,red,green,blue);
    }

    const handlePixelClick = () => {
        props.onPixelClick(x,y,red,green,blue);
    }
    
    
    const id = (x < 10 ? "0" + x : x) + "" + (y < 10 ? "0" + y : y)


    return(
        <td className="thPixel" id={id} onDragStart={(e) => {e.preventDefault();}} onMouseDown={handleMouseDown} onMouseUp={handleMouseup} onClick={handlePixelClick} onMouseMove={handlePixelOver}></td>
    );
})

export default PixelRow;

