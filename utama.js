import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Beranda from './beranda';
import Tentangsaya from './tentangsaya';
import Karya from './karya';
import Kontak from './kontak';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda}/>
        <Route path="/Tentangsaya" component={Tentangsaya}/>
        <Route path="/Karya" component={Karya}/>
        <Route path="/Kontak" component={Kontak}/>
    </Switch>
)
export default Utama;
