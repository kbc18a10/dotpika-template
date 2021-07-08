import React from 'react';
import '../css/Index.css';
import { Link } from 'react-router-dom'



const Index = () => {

  return (

    <div>
      <h1>ドットピカ</h1>
      <Link to="/pixel-arts-edit" style={{ textDecoration: "none" }}><div className="link">色を塗る</div></Link>
      <Link to="/pixel-arts-me" style={{ textDecoration: "none" }}><div className="link">一覧ヘ</div></Link>
      <Link to="/pixel-arts-templates" style={{ textDecoration: "none" }}><div className="link">テンプレートで選ぶ</div></Link>
    </div>



  );
}














export default Index
