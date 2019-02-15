import React, {Component} from 'react';
 
class AsideBar extends Component{

    render(){
        return (
            <section>
                <aside data-pushbar-id="left" className="pushbar from_left">
                <div className="pushbar-top">
                    <div className="pushbar-profile">
                        <div className="profile-pic">
                            <img src="images/profilepic.jpg" />
                            </div>
                            <div className="profile-name">John Doe</div>
                            <div className="profile-post">Super Admin</div>
                        </div>
                    <ul className="pushbar-menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Notification</a></li>
                        <li><a href="#">Setting</a></li>
                        </ul>
                </div>
                <div className="pushbar-bottom">
                </div>
                </aside>
            </section>
        )
    }
} 

export default AsideBar;