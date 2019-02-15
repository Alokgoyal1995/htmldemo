import React from 'react';
import Storelist from './List';
import Addstore from './Addstore';
import Selectstore from './Selectstore';
import Crustselect from './Crustselect';
import Toopingselect from './Toopingselect';
import Typepizza from './Typepizza';
import Dressingsize from './Size_dressing';
import Maintooping from './Tooping_main';
import Typesalad from './Salad_types';
import Typetozer from './Papa_tozers';
import Cusprice from './Costoandprice';
import Sizepre from './Size_preference';
import Papasubtypes from './Papa_sub';
import Onadd from './Add_on';
class Mainstore extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Storelist />
                <Addstore />
                <Selectstore />
                <Crustselect />
                <Toopingselect />
                <Typepizza />
                <Dressingsize />
                <Maintooping />
                <Typesalad />
                <Typetozer />
                <Cusprice />
                <Sizepre />
                <Papasubtypes />
                <Onadd />
            </React.Fragment>
        )
    }
}
export default Mainstore;