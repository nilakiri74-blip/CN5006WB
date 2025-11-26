import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './index.css'; 
import App from './App'; 
 
import EmojeeCounter from './EmojeeCounters' 
import Hook_ControlledButtonState from ‘./Counter’ 
ReactDOM.render( 
  <React.StrictMode> 
   <Hook_ControlledButtonState/> 
   <EmojeeCounter pic='Love'/> 
   <EmojeeCounter pic='sad'/> 
   <EmojeeCounter pic='Like'/> 
    
   </React.StrictMode>, 
  document.getElementById('root') 
); 