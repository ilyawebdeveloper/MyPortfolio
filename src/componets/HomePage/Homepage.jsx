import React from 'react'
import './Home.css'
import icon from '../../img/prewie.png'
import iconForMy from '../../img/iconForMy.png'
import promcascadPhoto from '../../img/Promcascad.png'
import Cart from '../Cart/Cart'
import formPhoto from '../../img/Снимок экрана 2022-12-24 165924.png'
import monPricePhoto from '../../img/MonpricePhoto.png'
import market from '../../img/market.png'
import TowerModel from './TowerModel'
import BigCityModal from './BigCityModel'
import OneTowerModel from './OneTowerModel'

function Homepage() {
	return (
		<div className='home'>
			<div className='home_container'>
				<div className='nome_info-wrapper'>
					<div className='nome_info-icon'>
						<img src={icon} alt='#' />
					</div>
					<div className='nome_info-text'>
						<div className='nome_info-title'>
							Frontend- <br />
							разработка ваших <br /> проектов
						</div>
						<button className='nome_info-button'>
							<div className='nome_info-button-text'>Портфолио</div>
						</button>
						<button className='nome_info-button nome_info-button-right'>
							<div className='nome_info-button-text'>Резюме</div>
						</button>
					</div>
				</div>

				<p className='home_forMy-title'> Обо мне </p>
				<div className='home_forMy'>
					<div className='home_forMy-text'>
						<p style={{ marginBottom: '30px' }}>
							Привет, меня зовут Илья я Frontend-разработчик, занимаюсь
							созданием веб- приложений.
						</p>
						<p style={{ marginBottom: '30px' }}>
							Очень люблю путешествовать и узнавать новое, всегда рад новой
							компании.
						</p>
						<p>
							Для меня важно создавать что то новое и полезное, сейчас я работаю
							в компании Galament Software,занимаюсь разработкой крутых и
							многофункциональных сайтов
						</p>
					</div>
					<div className='home_forMy-icon'>
						<img src={iconForMy} alt='#' />
					</div>
				</div>

				<p className='home_forMy-title'> Мои проекты </p>
				<div className='home_works'>
					<Cart
						title='01 MY FORM'
						text='Форма валидации сделаная для обучения, в проекте использовался такой стек технологий: html && css && js'
						image={formPhoto}
						link='/MyForm'
					/>
					<Cart
						title='02 MON PRICE'
						text='Лендинг, созданный для записи на маникюр, создавался в качестве обучения html && css'
						image={monPricePhoto}
						link='/MonPrice'
					/>
					<Cart
						title='03 PROMCASCAD'
						text='Лендинг созданный для строительной компании, в проекте использовался такой стек технологий: html && css'
						image={promcascadPhoto}
						link='/Cascad'
					/>
					<Cart
						title='04 SMOLL MARKET'
						text='Небольшой магазин техники, в проекте использовался такой стек технологий: React && axios && scss'
						image={market}
						link='/Market'
					/>
				</div>

				<p className='home_forMy-title'> Опыт работы </p>
				<div className='home_experience-wrapper'>
					<div className='home_experience'>
						<div className='home_experience-tab'>
							<div className='home_experience-tab-text'> GALAMENT </div>
						</div>
						<div className='home_experience-tab'>
							<div className='home_experience-tab-text'> WORKSPACER </div>
						</div>
						<div className='home_experience-tab'>
							<div className='home_experience-tab-text'> DOMINOS'PIZZA </div>
						</div>
					</div>
					<div className='home_experience-text'>
						<p style={{ marginBottom: '10px' }}>Engineer @ Upstatement</p>{' '}
						<p style={{ marginBottom: '15px' }}>May 2018 - Present</p>
						<p style={{ marginBottom: '10px' }}>
							* Write modern, performant, maintainable code for a diverse array
							of client and internal projects
						</p>
						<p style={{ marginBottom: '10px' }}>
							* Work with a variety of different languages, platforms,
							frameworks, and content management systems such as JavaScript,
							TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify
						</p>
						<p>
							* Communicate with multi-disciplinary teams of engineers,
							designers, producers, and clients on a daily basis
						</p>
					</div>
				</div>
				<div className='wrapper_models'>
					<div className='big-tower'>
						<TowerModel />
					</div>
					<div className='flying-city'>
						<BigCityModal />
					</div>
					<div className='small-tower'>
						<OneTowerModel />
					</div>
				</div>
				<div className='home_footer'>
					<div className='home_nav'>
						<p style={{ marginBottom: '15px' }}>Обо мне</p>
						<p style={{ marginBottom: '15px' }}>Мои работы</p>
						<p>Опыт работы</p>
					</div>
					<div className='home_contact'>
						<p style={{ marginBottom: '15px' }}>GitHub</p>
						<p style={{ marginBottom: '15px' }}>Telegram</p>
						<p>Vkontakte</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Homepage
