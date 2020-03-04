import React, { Component } from 'react';
import './App.css';
import Info from './Data'
import Resume from './Resume';
import {BrowserRouter,Route,Link} from "react-router-dom" 

class App extends Component
{
    render()
    {   
        const Styles={
            textAlign:"center",
            boxShadow:"11px 9px 20px 2px #000",
            width:"30%",
            margin:"12% auto",
            paddingTop:"2%",
            paddingBottom:"2%",
        }
        const personLiSt=['Gold_Sai','Ravi','Revanth','Bhanu']
        return(
            <div  className="card" style={Styles}> 
            {personLiSt.map((person)=>{
                console.log(person)
            })}
                <BrowserRouter>
                <Route path="/default">
                <h1> DREAMKING TECHNOLOGIES </h1>
                <br></br>
                <Info name="RAVI CHANDRA" role="CEO"></Info>
                <Info name="Jitendra" role="Senior Developer"></Info>
                <Info name="Bhanu" role="Front-End Developer"></Info>
                <Info name="Shanmukh Manoj" role="Back-End Developer"></Info>
                </Route>

                <Route path='/data'><Info name="Revanth" role="Ex-Employee"></Info></Route>

                <Route path='/resume'><Resume></Resume></Route>
                </BrowserRouter>
            </div>
        )
    }
}

const Home=()=>{
    return(<h1>Home Component</h1>)
}
export default App;
