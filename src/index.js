import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import Home from './pages/Home/App';

ReactDOM.render(
  <BrowserRouter>
    <Switch>

      <Route path="/" component={Home} exact />

      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />

      <Route component={() => <>Página 404</>} />

    </Switch>

  </BrowserRouter>,
  document.getElementById('root')
);

