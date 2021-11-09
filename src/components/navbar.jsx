 import React, { Component } from 'react';
 
 class NavBar extends React.Component {
     render() { 
         return (
           <nav className=" navbar navbar-expand-lg navbar-dark bg-dark p-3 ">
               <a className="col-2 btn-primary navbar-brand" href="#"></a>
               <a className="col-1 navbar-brand text-warning" href="#"><h2>#Of Items: </h2></a>
               <a className="col-1 btn btn-primary navbar-brand text-warning" href="#"></a>
           </nav>  
         );
     }
 }
  
 export default NavBar;