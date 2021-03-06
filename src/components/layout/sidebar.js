import React, {Component} from 'react';

class SideBar extends Component { 

  render(){
      return(
        <div className="sidebar">
        <ul>
            <li><a className="active" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="22.354" height="19" viewBox="0 0 22.354 19"><defs></defs><path className="a" d="M10.941,22V15.294h4.471V22H21V13.059h3.353L13.176,3,2,13.059H5.353V22Z" transform="translate(-2 -3)"/></svg></a></li>
            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19"><defs></defs><path className="a" d="M12.5,21.5a2.049,2.049,0,0,0,2.125-1.949h-4.25A2.042,2.042,0,0,0,12.5,21.5Zm6.375-5.846V10.782a6.01,6.01,0,0,0-4.781-6.158V3.962A1.53,1.53,0,0,0,12.5,2.5a1.53,1.53,0,0,0-1.594,1.462v.663a5.993,5.993,0,0,0-4.781,6.158v4.872L4,17.6v.974H21V17.6Z" transform="translate(-4 -2.5)"/></svg></a></li>
            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="19.453" height="20" viewBox="0 0 19.453 20"><defs></defs><path className="a" d="M19.43,12.98A7.793,7.793,0,0,0,19.5,12a7.793,7.793,0,0,0-.07-.98l2.11-1.65a.5.5,0,0,0,.12-.64l-2-3.46a.5.5,0,0,0-.61-.22l-2.49,1a7.306,7.306,0,0,0-1.69-.98l-.38-2.65A.488.488,0,0,0,14,2H10a.488.488,0,0,0-.49.42L9.13,5.07a7.683,7.683,0,0,0-1.69.98l-2.49-1a.488.488,0,0,0-.61.22l-2,3.46a.493.493,0,0,0,.12.64l2.11,1.65A7.931,7.931,0,0,0,4.5,12a7.931,7.931,0,0,0,.07.98L2.46,14.63a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.61.22l2.49-1a7.306,7.306,0,0,0,1.69.98l.38,2.65A.488.488,0,0,0,10,22h4a.488.488,0,0,0,.49-.42l.38-2.65a7.683,7.683,0,0,0,1.69-.98l2.49,1a.488.488,0,0,0,.61-.22l2-3.46a.5.5,0,0,0-.12-.64ZM12,15.5A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" transform="translate(-2.271 -2)"/></svg></a></li>
        </ul>
        </div>
      )
  }
} 
 
export default SideBar;