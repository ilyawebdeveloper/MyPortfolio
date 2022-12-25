import React from 'react'
import Cart from '../Cart/Cart'
import "./Home.css"
import monPricePhoto from "../../img/MonpricePhoto.png"
import formPhoto from "../../img/Снимок экрана 2022-12-24 165924.png"
import promcascadPhoto from "../../img/Promcascad.png"
import letterPhoto from "../../img/Letter.png"
import myPhoto from "../../img/MyPhoto.png"
import iconScss from "../../img/scss.png"
import iconReact from "../../img/React-icon.svg.png"
import iconRedux from "../../img/reduxIcon.svg"
import iconTailwind from "../../img/Tailwind_CSS_Logo.svg.png"
import iconStyled from "../../img/styledComponets.png"
import iconCss from "../../img/css3.svg"
import iconJs from "../../img/js2.png"
import iconsFormik from "../../img/Formik_1.svg"
import { useState } from 'react'
import { Modal } from '../Modal/Modal'

export default function Homepage() {
  const [showModal, setShowModal] = useState(true);
  const [text, setText] = useState("i")
  const clickTabMy = () => {
    setText("Всем привет, меня зовут Илья, я начинающий фронтенд-разработчик. Я увлекаюсь спортом, природой, очень люблю путешествовать.Я неоднакротно ходил в походы, в том числе и на Байкал.Проживаю в городе Ижевск, паралельно с работой я учусб в государственном Ижексвом Университете")
    setShowModal(false);
  }
  const clickTabEx = () => {
    setText("Мой опыт работы 1 год, в компании под названием galament softwere. В компании я занимаюсь разработкой приложения на реакт,поддержкой уже готового сайта dominospizza.lt На данном проекте я созавал новый функционал, как пример кнопку прикрепить несколько файлов, а так же делал валидацию этих файлов. Так же одним из тасков было создание письма для тригерной рассылки. В ходе работы я использовал React,scss,js,redux а так же работал с библиотеками.")
    setShowModal(false);
  }
  const clickTabSkill = () => {
    setText(
      <div className='home_cart'>
        <div className='home_cart-skills'>
          <img className='home_cart-img-skills' src={iconScss} alt="mySkillsScss" />
          <p className='home_cart-skills-name'>scss</p>
        </div>
        <div className='home_cart-skills'>
          <img className='home_cart-img-skills' src={iconReact} alt="mySkillsScss" />
          <p className='home_cart-skills-name'>React</p>
        </div>
        <div className='home_cart-skills'>
          <img className='home_cart-img-skills' src={iconRedux} alt="mySkillsScss" />
          <p className='home_cart-skills-name'>Redux</p>
        </div>
        <div className='home_cart-skills'>
          <img className='home_cart-img-skills' src={iconTailwind} alt="mySkillsScss" />
          <p className='home_cart-skills-name'>Tailwind</p>
        </div>
        <div className='home_cart-skills'>
          <img className='home_cart-img-skills' src={iconStyled} alt="mySkillsScss" />
          <p className='home_cart-skills-name'>Styled Component</p>
        </div>
        <div className='home_cart-skills'>
          <img className='home_cart-img-skills' src={iconCss} alt="mySkillsScss" />
          <p className='home_cart-skills-name'>Css3</p>
        </div>
        <div className='home_cart-skills'>
          <img className='home_cart-img-skills' src={iconJs} alt="mySkillsScss" />
          <p className='home_cart-skills-name'>JavaScript</p>
        </div>
        <div className='home_cart-skills'>
          <img className='home_cart-img-skills' src={iconsFormik} alt="mySkillsScss" />
          <p className='home_cart-skills-name'>Formik Js</p>
        </div>
      </div>
    )
    setShowModal(false);
  }
  
  const clickTabPurpose = () => {
    setText("Мой опыт работы 8 месяцев")
    setShowModal(false);
  }
  const clickModal = () => {
    setShowModal(true);
  }
  console.log(text);
  return (
    <div className='home'>
      <div className='home_navbar'> 
        <img className='home_navbar-img' src={myPhoto} alt="myPhoto" />
        <div className='home_navbar-title'> Ilya. 18 y.o <br /> Frontend-developer</div>
        <div className='home_wrapper-skills'>
          <img className='home_navbar-img-skills' src={iconScss} alt="mySkillsScss" />
          <img className='home_navbar-img-skills' src={iconReact} alt="mySkillsScss" />
          <img className='home_navbar-img-skills' src={iconRedux} alt="mySkillsScss" />
          <img className='home_navbar-img-skills' src={iconTailwind} alt="mySkillsScss" />
          <img className='home_navbar-img-skills' src={iconStyled} alt="mySkillsScss" />
          <img className='home_navbar-img-skills' src={iconCss} alt="mySkillsScss" />
          <img className='home_navbar-img-skills' src={iconJs} alt="mySkillsScss" />
          <img className='home_navbar-img-skills' src={iconsFormik} alt="mySkillsScss" />
        </div>
        <div className="home_navbar-wrapper-tab">
          <div className='home_navbar-tab' onClick={clickTabMy}> Обо мне </div>
          <div className='home_navbar-tab' onClick={clickTabEx}> Опыт работы </div>
          <div className='home_navbar-tab' onClick={clickTabSkill}> Скилы </div>
          <div className='home_navbar-tab' onClick={clickTabPurpose}> Цели </div>
        </div>
      </div>
      <div className='home_container'>
        <div className='home_modal' onClick={clickModal} hidden={showModal}>
          <Modal text={text} />
        </div>
        <Cart
          title="Mon Price" 
          text="Лендинг, созданный для записи на маникюр, создавался в качестве обучения html && css"
          image={monPricePhoto}
          link="/MonPrice"
        />
        <Cart
          title="My Form"
          text="Форма валидации сделаная для обучения, в проекте использовался такой стек технологий: html && css && js"
          image={formPhoto}
          link="/MyForm"
        />
        <Cart
          title="Promcascad"
          text="Лендинг созданный для строительной компании, в проекте использовался такой стек технологий: html && css"
          image={promcascadPhoto}
          link="/Cascad"
        />
        <Cart
          title="Letter Dominos"
          text="В компании galament softwere я занимался версткой писем для тригерной рассылки, это письмо сейчас приходит покупателям dominospizza"
          image={letterPhoto}
          link="/Letter"
        />
      </div>
    </div>
  )
}