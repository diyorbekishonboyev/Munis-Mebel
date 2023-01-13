import React from "react";
import user3 from "..//photos/pizza.png"
import "..//firstMain/firsmain.css"



class FirstMain extends React.Component {
    render() {
        return(
            <div className="firstmain" >
                    <h1>Новинки</h1>
                <div className="cards" >
                <div className="card" >
                   <div className="img" >
                   <img src={user3} alt = "img" />
                   </div>
                   <div className="text" >
                   <h2>Карбонара</h2>
                   <p><span>от 120 ₽</span></p>
                    </div>
                </div>
                <div className="card" >
                   <div className="img" >
                   <img src={user3} alt = "img" />
                   </div>
                   <div className="text" >
                   <h2>Карбонара</h2>
                   <p><span>от 120 ₽</span></p>
                    </div>
                </div>
                <div className="card" >
                   <div className="img" >
                   <img src={user3} alt = "img" />
                   </div>
                   <div className="text" >
                   <h2>Карбонара</h2>
                   <p><span>от 120 ₽</span></p>
                    </div>
                </div>
                <div className="card" >
                   <div className="img" >
                   <img src={user3} alt = "img" />
                   </div>
                   <div className="text" >
                   <h2>Карбонара</h2>
                   <p><span>от 120 ₽</span></p>
                    </div>
                </div>
                

                </div>
            </div>
        )
    }
}

export default FirstMain