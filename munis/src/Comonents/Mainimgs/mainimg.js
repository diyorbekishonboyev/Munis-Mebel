import React from "react";
import img1  from "..//photos/tort.png"
import "..//Mainimgs/mainimg.css"


class Mainimg extends React.Component {
    render(){
        return(
            <div className="mainimg" >
            <h1>Наши <span>акции</span></h1>
                <div className="imgs" >
                    <div className="img1" >
                        <img src={img1} alt ="img" />
                    </div>
                    <div className="img4" >
                    <img src={img1} alt ="img" />
                    <img src={img1} alt ="img" />
                    <img src={img1} alt ="img" />
                    <img src={img1} alt ="img" />
                    </div>
                </div>
                <button className="btn1" >Все вкции</button>
            </div>
        )
    }
}
export default Mainimg 