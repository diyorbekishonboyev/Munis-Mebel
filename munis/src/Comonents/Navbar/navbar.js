import React from "react"
import user1 from "..//photos/logo.png"
import "..//Navbar/navbar.css"
import user2 from "..//photos/yandex.png"
import user3 from "..//photos/star.png"



class Navbar extends React.Component {
    render(){
        return(
          <div className="navbar" >
          <div className="nav" >
             <div className="navlogo" >
           <img  src={user1} alt = "" />
           </div>
           <div className="navtext" > 
           <h3>Доставка пасты Москва</h3>
           <p><img src={user2} alt = "" /> Яндекс еда . 4.8 <img src={user3} alt="" /> Время доставки  от 31 мин</p>
           </div>
           <div className="navbutton" >
            <button>Заказать звонок</button>
           </div>
           <div className="number" >
            <h2><span>+998 93 174 40 73</span></h2>
           </div>
          </div>
          <div className="menu" >
            <ul>
              <li>Пицца</li>
              <li>Паста</li>
              <li>Супы</li>
              <li>Салаты</li>
              <li>Напитки</li>
              <li>Десерты</li>
              <li>Бакалея</li>
              <li>Антипасти </li>
              <li>Акции</li>
              <li>Комбо</li>
              <li>Контакты</li>
             <li> <h3 className="login" >Войти</h3></li>
             <li><button className="btn" > Корзина | 1 </button> </li>
            </ul>
           
            

          </div>
          </div>  

        )
    }
}

export default Navbar