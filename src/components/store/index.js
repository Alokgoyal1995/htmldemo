import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import { logout } from '../../modules/actions/authActions';
import Header from '../layout/header';
import Asidebar from '../layout/asidebar';
import SideBar from '../layout/sidebar';
import Mainstore from './store-list';
import Addstore from './store-list/Addstore';
import Selectstore from './store-list/Selectstore';
import Crustselect from './store-list/Crustselect';
import Toopingselect from './store-list/Toopingselect';
import Typepizza from './store-list/Typepizza';
import Dressingsize from './store-list/Size_dressing';
import Maintooping from './store-list/Tooping_main';
import Typesalad from './store-list/Salad_types';
import typetozer from './store-list/Papa_tozers';
import Cusprice from './store-list/Costoandprice';
import Sizepre from './store-list/Size_preference';
import Papasubtypes from './store-list/Papa_sub';
import Onadd from './store-list/Add_on';
class Store extends Component {
    render() {
        //   console.log("==========",this.props.auth)
        const { isAuthenticated } = this.props.auth;

        return (
            <React.Fragment>
                <Route path="/dashboard/store" exact component={Mainstore} />
                <Route path="/dashboard/store/addstore" exact component={Addstore} />
                <Route path="/dashboard/store/addstore/1" exact component={Selectstore} />
                <Route path="/dashboard/store/addstore/2" exact component={Crustselect} />
                <Route path="/dashboard/store/addstore/3" exact component={Toopingselect} />
                <Route path="/dashboard/store/addstore/4" exact component={Typepizza} />
                <Route path="/dashboard/store/addstore/5" exact component={Dressingsize} />
                <Route path="/dashboard/store/addstore/6" exact component={Maintooping} />
                <Route path="/dashboard/store/addstore/7" exact component={Typesalad} />
                <Route path="/dashboard/store/addstore/8" exact component={typetozer} />
                <Route path="/dashboard/store/addstore/9" exact component={Cusprice} />
                <Route path="/dashboard/store/addstore/10" exact component={Sizepre} />
                <Route path="/dashboard/store/addstore/11" exact component={Papasubtypes} />
                <Route path="/dashboard/store/addstore/12" exact component={Onadd} />
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}
export default connect(mapStateToProps, { logout })(Store);

