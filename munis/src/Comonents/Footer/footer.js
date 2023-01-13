import React from "react";
import user1 from "..//photos/logo.png"
import "..//Footer/footer.css"
import watsab from "..//photos/watsab.png"
import simg from "..//photos/simg.png"
import mesenge from "..//photos/masenge.png"
import teleg  from "..//photos/telegram.png"
import facebook from "..//photos/facebook.png"
import twiter from "..//photos/twiter.png"

class Footer extends React.Component {
    render(){
        return(
            <div className="footer" >
            <div className="footerright" >
                <div className="footerlogo" >
                    <img src =  {user1}  alt="logo" />
                </div>
                <div className="frtitle" >
                    <h3>Калорийность и состав</h3>
                    <h3>Правовая информация</h3>
                </div>
                <div className="frsoz" >
                    <h3>Мы в соцсетях</h3>
                </div>
                <div className="frtext" >
                    <p>YouTube <br/>  <br/>  Instagram </p>
                    <p>Facebook <br/>  <br/>  ВКонтакте </p>
                    <p>Москва ул. Проспект <br/>  <br/>   Вернадского 86В </p>
                </div>
                <div className="frtext2" >
                    <p>YaBao Все праав защищены © 2023</p>
                </div>
            </div>
            <div className="footerleft" >
                <div className="frtext3" >
                    <h3>Остались вопросы? А мы всегда на связи:
                    </h3>
                </div>
                <div className="frgrids" >
                    <div className="frgrid1" >
                        <img src={watsab} alt="" />
                    </div>
                    <div className="frgrid1" >
                        <img src={simg} alt="" />
                    </div>
                    <div className="frgrid1" >
                        <img src={mesenge} alt="" />
                    </div>
                    <div className="frgrid1" >
                        <img src={teleg} alt="" />
                    </div>
                    <div className="frgrid1" >
                        <img src={facebook} alt="" />
                    </div>
                    <div className="frgrid1" >
                        <img src={twiter} alt="" />
                    </div>
                    <div className="frgrid2" >
                       <p>Написать нам</p>
                    </div>
                </div>
                <div className="number" >
            <h2><span>+998 93 174 40 73</span></h2>
           </div>
           <div className="frbutton" >
            <button>Заказать звонок</button>
           </div>
                
            </div>

            </div>
        )
    }
}

export default Footer