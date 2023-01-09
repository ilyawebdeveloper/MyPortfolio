import React from 'react'
import Cart from '../Cart/Cart'
import './Home.css'
import monPricePhoto from '../../img/MonpricePhoto.png'
import formPhoto from '../../img/Снимок экрана 2022-12-24 165924.png'
import promcascadPhoto from '../../img/Promcascad.png'
import letterPhoto from '../../img/Letter.png'
import myPhoto from '../../img/MyPhoto.png'
import iconScss from '../../img/scss.png'
import iconReact from '../../img/React-icon.svg.png'
import iconRedux from '../../img/reduxIcon.svg'
import iconTailwind from '../../img/Tailwind_CSS_Logo.svg.png'
import iconStyled from '../../img/styledComponets.png'
import iconCss from '../../img/css3.svg'
import iconJs from '../../img/js2.png'
import iconsFormik from '../../img/Formik_1.svg'
import market from '../../img/market.png'
import { useState } from 'react'
import { Modal } from '../Modal/Modal'
import {
	RiBriefcase2Line,
	RiEmpathizeFill,
	RiUserStarLine,
	RiStarSmileFill,
} from 'react-icons/ri'

export default function Homepage() {
	const [showModal, setShowModal] = useState(true)
	const [text, setText] = useState('i')
	const clickTabMy = () => {
		setText(
			'Всем привет, меня зовут Илья, я начинающий фронтенд-разработчик. Я увлекаюсь спортом, природой, очень люблю путешествовать.Я неоднакротно ходил в походы, в том числе и на Байкал.Проживаю в городе Ижевск, паралельно с работой я учусь в государственном Ижексвом Университете'
		)
		setShowModal(false)
	}
	const clickTabEx = () => {
		setText(
			'Мой опыт работы 1 год, в компании под названием galament softwere. В компании я занимаюсь разработкой приложения на реакт,поддержкой уже готового сайта dominospizza.lt На данном проекте я созавал новый функционал, как пример кнопку прикрепить несколько файлов, а так же делал валидацию этих файлов. Так же одним из тасков было создание письма для тригерной рассылки. В ходе работы я использовал React,scss,js,redux а так же работал с библиотеками.'
		)
		setShowModal(false)
	}
	const clickTabSkill = () => {
		setText(
			<div className='home_cart'>
				<div className='home_cart-skills'>
					<img
						className='home_cart-img-skills'
						src={iconScss}
						alt='mySkillsScss'
					/>
					<p className='home_cart-skills-name'>scss</p>
				</div>
				<div className='home_cart-skills'>
					<img
						className='home_cart-img-skills'
						src={iconReact}
						alt='mySkillsScss'
					/>
					<p className='home_cart-skills-name'>React</p>
				</div>
				<div className='home_cart-skills'>
					<img
						className='home_cart-img-skills'
						src={iconRedux}
						alt='mySkillsScss'
					/>
					<p className='home_cart-skills-name'>Redux</p>
				</div>
				<div className='home_cart-skills'>
					<img
						className='home_cart-img-skills'
						src={iconTailwind}
						alt='mySkillsScss'
					/>
					<p className='home_cart-skills-name'>Tailwind</p>
				</div>
				<div className='home_cart-skills'>
					<img
						className='home_cart-img-skills'
						src={iconStyled}
						alt='mySkillsScss'
					/>
					<p className='home_cart-skills-name'>Styled Component</p>
				</div>
				<div className='home_cart-skills'>
					<img
						className='home_cart-img-skills'
						src={iconCss}
						alt='mySkillsScss'
					/>
					<p className='home_cart-skills-name'>Css3</p>
				</div>
				<div className='home_cart-skills'>
					<img
						className='home_cart-img-skills'
						src={iconJs}
						alt='mySkillsScss'
					/>
					<p className='home_cart-skills-name'>JavaScript</p>
				</div>
				<div className='home_cart-skills'>
					<img
						className='home_cart-img-skills'
						src={iconsFormik}
						alt='mySkillsScss'
					/>
					<p className='home_cart-skills-name'>Formik Js</p>
				</div>
			</div>
		)
		setShowModal(false)
	}

	const clickTabPurpose = () => {
		setText(
			'Мои цели на ближайшие 3 года, это вырасти как специалист и создать продукт который нравиться пользователям и мне. Попробовать разные технологии и возможно помочь начинающим специалистам вырости'
		)
		setShowModal(false)
	}
	const clickModal = () => {
		setShowModal(true)
	}

	return (
		<div className='home'>
			<div className='home_navbar'>
				<a
					href='https://github.com/ilyawebdeveloper/MyPortfolio'
					target='https://github.com/ilyawebdeveloper/MyPortfolio'>
					<img className='home_navbar-img' src={myPhoto} alt='myPhoto' />
				</a>
				<div className='home_navbar-title'>
					Ilya. 18 y.o <br /> Frontend-developer
				</div>
				<div className='home_wrapper-skills'>
					<a href='https://sass-lang.com/' target='blank' className='home_navbar-img-link'>
						<img
							className='home_navbar-img-skills'
							src={iconScss}
							alt='mySkillsScss'
						/>
					</a>
					<a href='https://reactjs.org/' target='blank' className='home_navbar-img-link'>
						<img
							className='home_navbar-img-skills'
							src={iconReact}
							alt='mySkillsScss'
						/>
					</a>
					<a href='https://redux.js.org/' target='blank' className='home_navbar-img-link'>
						<img
							className='home_navbar-img-skills'
							src={iconRedux}
							alt='mySkillsScss'
						/>
					</a>
					<a href='https://tailwindcss.com/' target='blank' className='home_navbar-img-link'>
						<img
							className='home_navbar-img-skills'
							src={iconTailwind}
							alt='mySkillsScss'
						/>
					</a>
					<a href='https://styled-components.com/' target='blank' className='home_navbar-img-link'>
						<img
							className='home_navbar-img-skills'
							src={iconStyled}
							alt='mySkillsScss'
						/>
					</a>
					<a
						href='https://developer.mozilla.org/en-US/docs/Web/CSS'
						target='blank' className='home_navbar-img-link'>
						<img
							className='home_navbar-img-skills'
							src={iconCss}
							alt='mySkillsScss'
						/>
					</a>
					<a
						href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
						target='blank'
            className='home_navbar-img-link'>
						<img
							className='home_navbar-img-skills'
							src={iconJs}
							alt='mySkillsScss'
						/>
					</a>
					<a href='https://formik.org/' target='blank' className='home_navbar-img-link'>
						<img
							className='home_navbar-img-skills'
							src={iconsFormik}
							alt='mySkillsScss'
						/>
					</a>
				</div>
				<div className='home_navbar-wrapper-tab'>
					<div className='home_navbar-tab' onClick={clickTabMy}>
						<RiEmpathizeFill />
						<div className='home_navbar-tab-text'>Obo мне</div>
					</div>
					<div className='home_navbar-tab' onClick={clickTabEx}>
						<RiBriefcase2Line />
						<div className='home_navbar-tab-text'>Опыт работы</div>
					</div>
					<div className='home_navbar-tab' onClick={clickTabSkill}>
						<RiUserStarLine />
						<div className='home_navbar-tab-text'>Скилы</div>
					</div>
					<div className='home_navbar-tab' onClick={clickTabPurpose}>
						<RiStarSmileFill />
						<div className='home_navbar-tab-text'>Цели</div>
					</div>
				</div>
			</div>
			<div className='home_container'>
				<div className='home_modal' onClick={clickModal} hidden={showModal}>
					<Modal text={text} />
				</div>
				<Cart
					backgroundColor='#A7414A'
					title='Mon Price'
					text='Лендинг, созданный для записи на маникюр, создавался в качестве обучения html && css'
					image={monPricePhoto}
					link='/MonPrice'
				/>
				<Cart
					backgroundColor='#A7414A'
					title='My Form'
					text='Форма валидации сделаная для обучения, в проекте использовался такой стек технологий: html && css && js'
					image={formPhoto}
					link='/MyForm'
				/>
				<Cart
					backgroundColor='#A7414A'
					title='Promcascad'
					text='Лендинг созданный для строительной компании, в проекте использовался такой стек технологий: html && css'
					image={promcascadPhoto}
					link='/Cascad'
				/>
				<Cart
					backgroundColor='#A7414A'
					title='Letter Dominos'
					text='В компании galament softwere я занимался версткой писем для тригерной рассылки, это письмо сейчас приходит покупателям dominospizza'
					image={letterPhoto}
					link='/Letter'
				/>
				<Cart
					backgroundColor='#A7414A'
					title='Smoll Market'
					text='Небольшой магазин техники, где на главной страницы изображены карточки товаров с данными из сервера, в проекте использовался такой стек технологий: React && axios && scss'
					image={market}
					link='/Market'
				/>
			</div>
		</div>
	)
}
