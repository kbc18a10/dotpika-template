import React from "react";

type SavePixelArtProps = {
    name: string;
    onNameChange: (name:string) => void;
    onDeleteColor: () => void;
    onSaveApi:() => void;
}

const SavePixelArt = React.memo((props: SavePixelArtProps) => {
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
            <input type="text" id="saveName" value={name} onChange={handleNameChange} placeholder="名前を付けて保存"/>
            <div id="savePixelArt">
                <button type="button" id="buttonDelete" name="buttonDelete" value="delete" onClick={handleDeleteColor}>全消し</button>
                <button type="button" id="saveApi" name="saveApi" value="saveApi" onClick={handleSaveApi}>テンプレートをDBに保存</button>
            </div>
        </div>
    );
})

export default SavePixelArt;

