import React from "react";
import LauncherButton from "../../components/LauncherButton/LauncherButton";
import './Home.css'
import Main from "../../components/Main/Main";
import start_left from '../../assets/img/start-left.png';
import start_right from '../../assets/img/start-right.png'


export var Home = ()=>{
    return(
        <>
            <Main/>
            <div className="start">
                <div className="start_left">
                    <img src={start_left} className="start_left"/>
                </div>
                <div className="start_right">
                    <img src={start_right}/>
                </div>
                <div cassName='start_center'>
                    <h1 className="test">
                        <span>Georgian Virtual Life</span>
                        <br/>
                        პირველი ქართული <span>ONLY LAUNCHER</span>
                        <br/> 
                        <span>HARD RP</span> სერვერი
                    </h1>

                    <LauncherButton/>
                </div>
            </div>
        </>
    );
};