import React, { useState } from 'react'
import './Home.css'
import icon from '../../img/prewie.png'
import iconForMy from '../../img/iconForMy.png'
import Cart from '../Cart/Cart'
import { Link } from 'react-router-dom'
import { data } from '../Data/Data'
import { FcReddit } from 'react-icons/fc'

function Homepage() {
	const {experience, block_main, block_about_me, projects} = data;
	const [index, setIndex] = useState(0);
	return (
		<div className='home'>
			<div className='home_container'>
				<div className='nome_info-wrapper'>
					<div className='nome_info-icon'>
						<img src={icon} alt='#' />
					</div>
					<div className='nome_info-text'>
						<div className='nome_info-title'>{block_main.text.title}</div>
						<button className='nome_info-button'>
							<div className='nome_info-button-text'>
								<a href="#projects">{data.block_main.text.portfolio}</a>
							</div>
						</button>
						<button className='nome_info-button nome_info-button-right'>
							<div className='nome_info-button-text'>
								{data.block_main.text.cv}
							</div>
						</button>
					</div>
				</div>

				<p className='home_forMy-title' id='about'>
					{block_about_me.text.title}
				</p>
				<div className='home_forMy'>
					<div className='home_forMy-text'>
						{data.block_about_me.text.info.map((item, index) => (
							<p key={index} style={{ marginBottom: '30px' }}>
								{item}
							</p>
						))}
					</div>
					<div className='home_forMy-icon'>
						<img src={iconForMy} alt='#' />
					</div>
				</div>

				<p className='home_forMy-title' id='projects'>
					{projects.text.title}
				</p>
				<div className='home_works'>
					{projects.cart_info.map((cart) => (
						<Cart
							key={cart.link}
							title={cart.title}
							text={cart.text}
							image={cart.photo}
							link={cart.link}
						/>
					))}
				</div>
				<p className='home_forMy-title' id='experience'>
					{' '}
					{experience.title}{' '}
				</p>
				<div className='home_experience-wrapper'>
					<div className='home_experience'>
						{data.experience.left_side.map((item, index) => (
							<div className='home_experience-tab' key={index}>
								<div
									className='home_experience-tab-text'
									onClick={() => setIndex(index)}>
									{item}
								</div>
							</div>
						))}
					</div>
					<div className='home_experience-text'>
						<p style={{ marginBottom: '10px' }}>
							{experience.right_side[index].title}
						</p>
						<p style={{ marginBottom: '15px' }}>
							{experience.right_side[index].subtitle}
						</p>
						<p style={{ marginBottom: '10px' }}>
							{experience.right_side[index].first_paragraph}
						</p>
						<p style={{ marginBottom: '10px' }}>
							{experience.right_side[index].second_paragraph}
						</p>
						<p>{experience.right_side[index].third_paragraph}</p>
					</div>
				</div>
				<div className='world-link'>
					<Link to={'/World'} className='link'>
						Открыть мой мир
						<FcReddit />
					</Link>
				</div>
				<div className='home_footer'>
					<div className='home_nav'>
						<a href='#about'>{block_about_me.text.title}</a>
						<a href='#projects' className='margin-top'>
							{projects.text.title}
						</a>
						<a href='#experience' className='margin-top'>
							{experience.title}
						</a>
					</div>
					<div className='home_contact'>
						<a href='https://github.com/ilyawebdeveloper'>GitHub</a>
						<a href='https://t.me/ryzhiy17' className='margin-top'>
							Telegram
						</a>
						<p className='margin-top'>Vkontakte</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Homepage
