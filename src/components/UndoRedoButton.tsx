import {
    Button,
    makeStyles,
} from "@material-ui/core/";
import undo from '../images/undo.png';
import redo from '../images/redo.png';
import React from "react";

const useStyles = makeStyles({
    undonextButton: {
      maxWidth: 30, 
      maxHeight: 30, 
      minWidth: 30,
      minHeight: 30,
      borderRadius: 3,
      color: 'white',
      padding:0,
      marginBottom:10
    },
  });
  

type UndoRedoButtonProps = {
    onClickUndo:() => void;
    onClickRedo:() => void;
}

const UndoRedoButton = React.memo((props: UndoRedoButtonProps) => {
    const classes = useStyles();
    

    const handleUndoPixels = () => {
        props.onClickUndo();
    }

    const handleNextPixels = () => {
        props.onClickRedo();
    }

    return(
        <div id="undoNextButton">
            <Button className={classes.undonextButton} variant="contained" onClick={handleUndoPixels}><img src={undo}/></Button> 
            <Button className={classes.undonextButton} variant="contained" onClick={handleNextPixels}><img src={redo}/></Button> 
        </div>
    );
})

export default UndoRedoButton;