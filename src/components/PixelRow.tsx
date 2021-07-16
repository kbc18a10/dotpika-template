import React from "react";
import {Dot} from "./Dot";

type PixelRowProps = {
    pixel: Dot;
    onMouseDown: () => void;
    onMouseUp: () => void;
    onPixelOver: (x:number,y:number) => void;
    onPixelClick: (x:number,y:number) => void;
}

const PixelRow = React.memo((props: PixelRowProps) => {
    const {x,y} = props.pixel;

    const handleMouseDown = () => {
        props.onMouseDown();
    }

    const handleMouseup = () => {
        props.onMouseUp();
    }

   const handlePixelOver = () => {
        props.onPixelOver(x,y);
    }

    const handlePixelClick = () => {
        props.onPixelClick(x,y);
    }
    
    
    const id = (x < 10 ? "0" + x : x) + "" + (y < 10 ? "0" + y : y)


    return(
        <td className="thPixel" id={id} onDragStart={(e) => {e.preventDefault();}} onMouseDown={handleMouseDown} onMouseUp={handleMouseup} onClick={handlePixelClick} onMouseMove={handlePixelOver}></td>
    );
})

export default PixelRow;

