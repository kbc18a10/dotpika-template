import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Header from './components/Header';
import Index from './pages/Index';
import PixelArtsTemplates from './pages/PixelArtsTemplates';
import PixelArtsEdit from './pages/PixelArtsEdit';
import PixelArtsMe from './pages/PixelArtsMe';
import PixelArtsPreview from './pages/PixelArtsPreview';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          {/* プレビュー画面 ':id'で指定されたドット絵を表示 */}
          <Route path='/pixel-arts/:id' component={PixelArtsPreview} />
          {/* 作成したドット絵一覧 */}
          <Route path='/pixel-arts-me' component={PixelArtsMe} />
          {/* ドット絵編集画面(新規) */}
          <Route path='/pixel-arts-edit' component={PixelArtsEdit} />
          {/* ドット絵編集画面(既存) :id'で指定されたドット絵を表示  */}
          <Route path='/pixel-arts-edit/:id' component={PixelArtsEdit} />
          {/* 作成したドット絵一覧 */}
          <Route path='/pixel-arts-templates' component={PixelArtsTemplates} />
          {/* ホーム画面 */}
          <Route path='/' component={Index} />
          <Route component={Index} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
