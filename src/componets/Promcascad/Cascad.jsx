import React from 'react'
import "./cascad.css"
import logo from "../../img/лого.jpg"
import vector from "../../img/Vector.jpg"
import iconMail from "../../img/icon mail.jpg"
import icon1 from "../../img/icon 1.jpg"
import icon2 from "../../img/icon 2.jpg"
import icon3 from "../../img/icon3.jpg"
import photo from "../../img/фото 2 блок.jpg"
import photo2 from "../../img/30 1.jpg"
import video from "../../img/видео.jpg"
import c1 from "../../img/c1 1.jpg"
import you from "../../img/youtube.jpg"
import vk from "../../img/вк.jpg"
import freame from "../../img/freme.jpg"

const Cascad = () => {
  return (
    <>
      <header>
            <div className="containerCascad">
               <div className="headerCascad">
                  <img className="logo" src={logo} width="180px" height="50px" alt="" />
                  <img className="tel" src={vector} width="30px" height="30px" alt="" />
                  <p className="contact"> Звоните! <br />
                  <a className="number" href="/">8 800 333-14-13</a></p>
                  <img className="mailicon" src={iconMail} width="30px" height="30px" alt="" />
                  <p className="mailtext">E-MAIL <br />
                     <a className="number" href="/">tools@promkaskad.ru</a></p>
                  <div className="icon">
                     <a href="/"><img src={icon1} alt="" /></a>
                     <a className="i2" href="/"><img src={icon2} alt="" /></a>
                     <a className="i3" href="/"><img src={icon3} alt="" /></a>
                  </div>
               </div>

            </div>
         </header>

         <div className="menu">
            <div className="containerCascad">
               <div className="navCascad">
                  <a className="nav__linkCascad1" href="/">ЛИНЕЙКА "CATHERINE"</a>
                  <a className="nav__linkCascad" href="/">ПРОИЗВОДСТВО</a>
                  <a className="nav__linkCascad" href="/">ГАЛЕРЕЯ</a>
                  <a className="nav__linkCascad" href="/">ОТЗЫВЫ</a>                 
                  <a className="nav__linkCascad" href="/">УСЛОВИЯ</a>                 
                  <a className="nav__linkCascad" href="/">КОНТАКТЫ</a>                 
               </div>
            </div>
         </div>

         <div className="introCascad">
            <div className="intro__2"> </div>
               <div className="containerCascad">
                  <div className="intro__title">ПРОФЕССИОНАЛЬНЫЙ ИНСТРУМЕНТ <br /> 
                     ДЛЯ РАЗМЕТКИ И РАСКРОЯ</div>
                     <h2 className="intro__text"> алюминиевый профиль <br />
                        со стальной направляющей для лезвия <br />
                        и набором специальной фурнитуры </h2>
                     <h3 className="intro__saize">длины: 1.0, 1.5, 1.8, 2.0, 2.5</h3> 
                  <div className="button">
                      <div className="intro__button"><a className="btnCascad" href="/" >Узнай <br /> ПРО Скидку</a></div> 
                  </div>
               </div>     
         </div>

         <div className="tooblok">
            <div className="containerCascad">

               <div className="tooblok__title">
                  <h1 className="bigtext">ИНСТРУМЕНТ, КОТОРЫЙ РАЗВИВАЕМ ВМЕСТЕ! </h1>
                  <div className="border"></div>
               </div>
               
               <div className="performance">
                  <div className="performance__img">
                     <img className="img__title" src={photo} alt="" />
                     <div className="border__too"></div>
                  </div>
                  <ul className="performance__list">
                     <li className="performance__one">Авиационный сплав алюминия;</li>
                     <li className="performance__one">Разнообразие длин;</li>
                     <li className="performance__one"> Многообразные фурнитуры;</li>
                     <li className="performance__one">Разнообразие длин: 1.0 м, 1,5 м, 2.0 м, 2,5 м (+ под заказ);</li>
                     <li className="performance__one">Спец фурнитура. В том числе, по запроса.</li>
                  </ul>
               </div>
                
            </div>
         </div>

         <div className="galary">
            <div className="containerCascad">
               <div className="galary__flex">
                  <div className="galary__title">
                     <div className="galary__img"><img src={photo2} alt="" /></div>
                     <div className="galary__text">Защита пальцев от <br />
                        случайных травм. Удобство при работе</div>
                  </div>

                  <div className="galary__title">
                     <div className="galary__img"><img src={photo2} alt="" /></div>
                     <div className="galary__text">Нержавеющая полоса сохранить кромку
                         при работе с острым лезвием</div>
                  </div>

                  <div className="galary__title">
                     <div className="galary__img"><img src={photo2} alt="" /></div>
                     <div className="galary__text">Полоса прижата к рабочей
                        поверхности это залог
                         точный реза </div>
                  </div>

                  <div className="galary__title1">
                     <div className="galary__img"><img src={photo2} alt="" /></div>
                     <div className="galary__text">Полоса прижата к рабочей
                        поверхности это залог
                         точный реза </div>
                  </div>

                  <div className="galary__title2">
                     <div className="galary__img"><img src={photo2} alt="" /></div>
                     <div className="galary__text">Полоса прижата к рабочей
                        поверхности это залог
                         точный реза </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="product">
            <div className="containerCascad">

               <div className="product__flex"><h1 className="product__title">О ПРОИЗВОДИТЕЛЕ</h1>
                  <div className="border__3"></div></div>

               <div className="product__text">
                  <h2 className="product__title2">Компания «Промкаскад» производит разнообразную продукцию уже более 10 лет.<br /> Штамповка, металлообоработка, оборудование под заказ — это то, чем мы живем <br />каждый день. Среди наших изделий есть новации, ставшие популярными в РФ и за <br />рубежом.<br />
                     Алюминиевая линейка «Кэтрина» пример подобных новинок, ее давно просили <br />багетные мастерские и магазины с листовыми и рулонными материалами. <br />
                     Мы будем рады замечаниями и предложениям. </h2>

                  <div className="product__logo">
                     <img className="product__img" src={logo} alt="ssory" />
                     <button className="product__button"> <a href="/" className="btn__product"> Звоните! 8 800 333-17-13 </a></button>
                  </div> 
               </div>
               
               <div className="video">
                  <img src={video} alt="" />
               </div>
            </div>
         </div>

         <div className="slaider">
            <div className="containerCascad">
               <div className="slaider__title">ГАЛЕРЕЯ ИЗОБРАЖЕНИЙ ИСПОЛЬЗОВАНИЯ</div>
               <div className="slaider__img"><img src={c1} alt="not found" /></div>
               <div className="slaider__text">ОТЗЫВЫ ПРОФЕССИОНАЛЬНЫХ ПОЛЬЗОВАТЕЛЕЙ</div>
               
               <div className="feedback">
                  <div className="feedback__title">
                     <div className="feedback__name">ЕВГЕНИЙ ПЕТРОВ</div>
                     <div className="feedback__text">Lorem Ipsum is simply dummy text of the printing and <br />typesetting industry. Lorem Ipsum has been the industry's <br />standard dummy text ever since the 1500s, when an <br />unknown printer took a galley of type and scrambled it to <br /> make a type specimen book.</div>
                     <div className="feedback__border"></div>
                     <div className="feedback__date"> 10 августа, 2021</div>
                  </div>

                  <div className="feedback__title">
                     <div className="feedback__name">ЕВГЕНИЙ ПЕТРОВ</div>
                     <div className="feedback__text">Lorem Ipsum is simply dummy text of the printing and <br />typesetting industry. Lorem Ipsum has been the industry's <br />standard dummy text ever since the 1500s, when an <br />unknown printer took a galley of type and scrambled it to <br /> make a type specimen book.</div>
                     <div className="feedback__border"></div>
                     <div className="feedback__date"> 10 августа, 2021</div>
                  </div>
               </div>
            </div>
         </div>

         <div className="skill">
            <div className="containerCascad">
               <div className="skill__box">
                  <div className="skill__text">Усильте свой набор профессиональных инструментов</div>
                  <div className="skill__border"></div>                 
               </div>

                  <div className="skill__ex">Работаем оптом и в розницу<br />
                     Цена включает НДС<br />
                     Доставка по России, СНГ, странам Европы и Америки
                  </div>

                  <div className="skill__blok">Стандартные длины: </div>

                  <div className="skill__long">
                     <div className="skill__skill">
                        <ul className="skill__ul">
                           <li className="skill__li">1000 мм</li>
                           <li className="skill__li">1500 мм </li>
                           <li className="skill__li">1800 мм</li>
                           <li className="skill__li">2000 мм </li>
                           <li>2500 мм</li>
                        </ul>
                        <div className="long__for">Длины под заказ.</div>
                        <button className="skill__button"> <a href="/" className="btn__skill"> Узнать стоимость </a></button>
                     </div>   

                     <div className="skill__skill">
                        <div className="skill__img"></div>
                        <div className="skill__border2"></div>
                     </div>
                  </div>
            </div>
         </div>

         <div className="contact"> 
            <div className="containerCascad">

               <div className="contact__title">Наши контакты
                  <div className="contact__border"></div>
               </div>

               <div className="contact__flex">

                  <div className="contact__text">Линейка «Catherine» защищена авторским патентом РФ.<br />
                     Контактная информация для общения отделом продаж ООО <br />«Промкаскад»
                     <div className="contact__ulli">
                        <ul className="contact__ul">
                           <li className="contact__li">г. Челябинск ул. Рождественского 13/1 (вход через <br />проходную ЧАМЗ), оф. 411-414 (4 этаж)</li>
                           <li className="contact__li">8 800 333-14-13</li>
                           <li className="contact__li">tools@promkaskad.ru</li>
                           <li className="contact__li">Время работы: 8:30-17:30 <br />
                              (по местному времени) <br />
                              Время работы склада: 9:00-16:00</li>
                           <li className="contact__li">WhatsApp</li>
                        </ul>                  
                     </div>
                  </div> 

                  <div className="callback">
                     <div className="callback__container">
                        <div className="callback__title">ОСТАВИТЬ ЗАЯВКУ</div>
                        <form className="form">
                           <div className="form__container">
                              <input className="form__input" type="callback__text" placeholder="Введите имя"/>
                              <input className="form__input" type="text" name="userPhone" placeholder="Введите номер телефона" size="18" maxLength="11" />
                              <input className="form__input" type="text" name="userPhone" placeholder="Введите E-MAIL" size="18" maxLength="11" />
                              <input className="form__input" type="text" name="userPhone" placeholder="Коментарий" size="18" maxLength="11" />
                                 <button className="form__button" type="submit">Отправить</button>
                           </div>      
                        </form>
                     </div>
                  </div>

               </div>

            </div>
         </div>
   

         <footer className="footer">
            <div className="containerCascad">
               <div className="footer__iner">

                  <div className="footer__flex">
                     <div className="footer__one"> <img className="footer__logo" src={logo} alt="" /></div>
                     <div className="footer__title">Служба поддержки</div>
                     <a href="/" className="footer_number">8 800 333-14-13</a>
                     <div className="footer__title">ЭЛЕКТРОННАЯ ПОЧТА</div>
                     <a href="/" className="footer_number">tools@promkaskad.ru</a>
                  </div>   

                  <div className="footer__flex">
                     <div className="footer__too"> Навигация </div>
                     <div className="footer__titletoo"><a href="/" className="footer__nav">ЛИНЕЙКА "CATHERINE" </a></div>
                     <div className="footer__titletoo"><a href="/" className="footer__nav">ПРОИЗВОДСТВО </a></div>
                     <div className="footer__titletoo"><a href="/" className="footer__nav">ГАЛЕРЕЯ</a></div>
                     <div className="footer__titletoo"><a href="/" className="footer__nav">ГАЛЕРЕЯ </a></div>
                     <div className="footer__titletoo"><a href="/" className="footer__nav">УСЛОВИЯ</a></div>
                     <div className="footer__titletoo"><a href="/" className="footer__nav">КОНТАКТЫ</a></div>
                  </div>

                  <div className="footer__flex">
                     <div className="footer__too">Мы в соц сетях</div>
                     <div className="footer__social">
                        <img src={you} alt="" />
                        <img className="social__img" src={freame} alt="" />
                        <img className="social__img" src={vk} alt="" />
                     </div>
                  </div>   
               </div>
            </div>
         </footer>
    </>
  )
}

export default Cascad
