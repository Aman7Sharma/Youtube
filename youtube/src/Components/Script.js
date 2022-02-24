import React from 'react';
import '../Styles/Sidebar.css'

export default function Script() {

    var menuIcon = document.querySelector(".menu");
    var sidebar = document.querySelector(".sidebar");
    

    menuIcon.onclick = function(){
        sidebar.classlist.toggle("small-sidebar");
    }



  return <div></div>;
}
