import React from "react";

type SavePixelArtProps = {
    name: string;
    onNameChange: (name:string) => void;
    onDeleteColor: () => void;
    onSaveApi:() => void;
}

const SavePixelArt = (props: SavePixelArtProps) => {
    const name = props.name;

    const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        props.onNameChange(e.target.value);
    }

    const handleDeleteColor = () => {
        props.onDeleteColor();
    }

    const handleSaveApi = () => {
        props.onSaveApi();
    }

    return(
        <div>
            <div id="savePixelArt">
                <input type="text" id="saveName" value={name} onChange={handleNameChange} placeholder="名前を付けて保存"/>
            </div>
            <button type="button" id="buttonDelete" name="buttonDelete" value="delete" onClick={handleDeleteColor}>全消し</button>
            <button type="button" id="saveApi" name="saveApi" value="saveApi" onClick={handleSaveApi}>テンプレートをDBに保存</button>
        </div>
    );
}

export default SavePixelArt;

