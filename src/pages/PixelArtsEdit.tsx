import { useState, useEffect } from 'react';
import { Dot } from '../components/Dot';
import PixelRow from '../components/PixelRow';
import ColorButton from '../components/ColorButton';
import SaveName from '../components/SavePixelArt';
import '../css/PixelArtsEdit.css';
import { useLocation } from 'react-router';
import axios from 'axios';


type ColorObj = {
  red: string;
  green: string;
  blue: string;
}

let PixelTable: Dot[][] = [...Array(32)].map((_, i) => {
  return [...Array(32)].map((_, j) => {
    return {
      x: i,
      y: j,
      red: '0',
      green: '0',
      blue: '0'
    }
  })
});

const Color: ColorObj[] = [{ red: '1', green: '0', blue: '0' }, { red: '0', green: '1', blue: '0' }, { red: '0', green: '0', blue: '1' }, { red: '1', green: '1', blue: '0' }, { red: '0', green: '1', blue: '1' }, { red: '1', green: '0', blue: '1' }, { red: '0', green: '0', blue: '0' }, { red: '1', green: '1', blue: '1' }]

let Clicked: boolean = false;

let saveName: string = "";

let isNewPixelArt: boolean = true;

const PixelArtsEdit = () => {
  const [save, setSaveName] = useState(saveName);
  const [pixels, setPixel] = useState(PixelTable);
  const [image, setImage] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState('');

  const [isClicked, setClicked] = useState(Clicked);
  const [color, setColor] = useState(Color[0]);
  const [isNew, setIsNewPixelArt] = useState(isNewPixelArt);
  const location = useLocation().pathname.slice(-1);

  // バリデーションメッセージ
  const [errorMessages, setErrorMessages] = useState('');

  useEffect(() => {
    const loadPixelArt = localStorage.getItem(location);
    if (loadPixelArt) {
      console.log(JSON.parse(loadPixelArt));
      setPixel(JSON.parse(loadPixelArt).dots);
      setIsNewPixelArt(false);
      setSaveName(JSON.parse(loadPixelArt).name);
    }
  }, []);

  useEffect(() => {
    pixels.map((row) => {
      row.map((p) => {
        let id = (p.x < 10 ? "0" + p.x : p.x) + "" + (p.y < 10 ? "0" + p.y : p.y)
        let element: any = document.getElementById(id);
        element.style.backgroundColor = `rgb(${p.red === '0' ? 0 : 255},${p.green === '0' ? 0 : 255},${p.blue === '0' ? 0 : 255})`;
      })
    })
  }, [pixels]);

  const pixelrows = pixels.map((row) => {
    return row.map((p) => {
      let id = (p.x < 10 ? "0" + p.x : p.x) + "" + (p.y < 10 ? "0" + p.y : p.y)
      return (
        <PixelRow
          pixel={p}
          key={id}
          onMouseDown={() => handleMouseDown()}
          onMouseUp={() => handleMouseUp()}
          onPixelOver={(x, y, red, green, blue) => handlePixelOver(x, y, red, green, blue)}
          onPixelClick={(x, y, red, green, blue) => handlePixelClick(x, y, red, green, blue)}
        />
      );
    })
  });

  const handleMouseDown = () => {
    setClicked(true);
  }

  const handleMouseUp = () => {
    setClicked(false);
  }


  const handlePixelOver = (x: number, y: number, red: string, green: string, blue: string) => {
    if (isClicked) {
      const newPixels = pixels.map((row) => {
        return row.map((p) => {
          if (x === p.x && y === p.y) {
            return { ...p, red: color.red, green: color.green, blue: color.blue }
          }
          return p;
        })
      })
      setPixel(newPixels);
    }
  }

  const handlePixelClick = (x: number, y: number, red: string, green: string, blue: string) => {
    const newPixels = pixels.map((row) => {
      return row.map((p) => {
        if (x === p.x && y === p.y) {
          return { ...p, red: color.red, green: color.green, blue: color.blue }
        }
        return p;
      })
    })
    setPixel(newPixels);
  }


  const handleColorChange = (index: number) => {
    setColor(Color[index]);
  }

  const handleNameChange = (name: string) => {
    setSaveName(name);

  }

  const handleDeleteColor = () => {
    setPixel(PixelTable);
  }

  const handleSaveApi = async () => {
    // 名前のバリデーション
    if (!save) {
      setErrorMessages('名前が入力されていません');
      return;
    }

    // サンプル画像のバリデーション
    if (!image) {
      setErrorMessages('画像ファイルが挿入されていません');
      return;
    }

    setErrorMessages('');

    try {
      const data = new FormData();
      data.append('name', save);
      data.append('example_image', image);
      data.append('Dots', JSON.stringify(pixels));

      const response = await axios.post(
        "http://localhost:5000/api/pixel-arts-templates/save", data, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      alert('保存しました');
    } catch (error) {
      console.error('Error:', error.response);
    }
  }

  const handleDisp = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (e.target.files) {
      setImageSrc(window.URL.createObjectURL(e.target.files[0]));

      setImage(e.target.files[0]);
    }
  }

  const handleGetData = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/pixel-arts-templates/", {
      headers: {
        'Content-Type': 'application/json',
      }
    }
    )
      .then((res) => {
        console.log("res:" + JSON.stringify(res));
      })
    console.log("response");
    console.log(response);
  }

  return (
    <div id="main">
      <div id="pixelArt">
        <table>
          <tbody>
            <tr>{pixelrows[0]}</tr>
            <tr>{pixelrows[1]}</tr>
            <tr>{pixelrows[2]}</tr>
            <tr>{pixelrows[3]}</tr>
            <tr>{pixelrows[4]}</tr>
            <tr>{pixelrows[5]}</tr>
            <tr>{pixelrows[6]}</tr>
            <tr>{pixelrows[7]}</tr>
            <tr>{pixelrows[8]}</tr>
            <tr>{pixelrows[9]}</tr>
            <tr>{pixelrows[10]}</tr>
            <tr>{pixelrows[11]}</tr>
            <tr>{pixelrows[12]}</tr>
            <tr>{pixelrows[13]}</tr>
            <tr>{pixelrows[14]}</tr>
            <tr>{pixelrows[15]}</tr>
            <tr>{pixelrows[16]}</tr>
            <tr>{pixelrows[17]}</tr>
            <tr>{pixelrows[18]}</tr>
            <tr>{pixelrows[19]}</tr>
            <tr>{pixelrows[20]}</tr>
            <tr>{pixelrows[21]}</tr>
            <tr>{pixelrows[22]}</tr>
            <tr>{pixelrows[23]}</tr>
            <tr>{pixelrows[24]}</tr>
            <tr>{pixelrows[25]}</tr>
            <tr>{pixelrows[26]}</tr>
            <tr>{pixelrows[27]}</tr>
            <tr>{pixelrows[28]}</tr>
            <tr>{pixelrows[29]}</tr>
            <tr>{pixelrows[30]}</tr>
            <tr>{pixelrows[31]}</tr>
          </tbody>
        </table>
      </div>
      <div id="content">
        <div id="colorPalet">
          <h1 id="colorTitle">Color</h1>
          <ColorButton key="red" value="red" index={0} onColorChange={(index) => handleColorChange(index)} />
          <ColorButton key="green" value="green" index={1} onColorChange={(index) => handleColorChange(index)} />
          <ColorButton key="blue" value="blue" index={2} onColorChange={(index) => handleColorChange(index)} />
          <ColorButton key="yellow" value="yellow" index={3} onColorChange={(index) => handleColorChange(index)} />
          <ColorButton key="cyan" value="cyan" index={4} onColorChange={(index) => handleColorChange(index)} />
          <ColorButton key="purple" value="purple" index={5} onColorChange={(index) => handleColorChange(index)} />
          <ColorButton key="black" value="black" index={6} onColorChange={(index) => handleColorChange(index)} />
          <ColorButton key="white" value="white" index={7} onColorChange={(index) => handleColorChange(index)} />
        </div>
        <input type="file" id="example" onChange={handleDisp} accept="image/*" />
        <div id="preview"><img id="pre" src={imageSrc} width="500" height="500" /></div>
        <button onClick={() => handleGetData()}>取得</button>
        <p>{errorMessages}</p>
        <SaveName name={save} onNameChange={(name) => handleNameChange(name)}
          onDeleteColor={() => handleDeleteColor()} onSaveApi={() => handleSaveApi()} />
      </div>
    </div >
  );
};


export default PixelArtsEdit;
