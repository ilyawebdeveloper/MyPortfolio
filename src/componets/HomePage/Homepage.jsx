import React, { useState, Suspense } from 'react'
import { motion, useScroll } from 'framer-motion'
import icon from '../../img/prewie.png'
import iconForMy from '../../img/iconForMy.png'
import Cart from '../Cart/Cart'
import { data } from '../Data/Data'
import TitleAnimated from './animated/title/TitleAnimated'
import Loader from '../Loader/Loader'
import {
	TbBrandTelegram,
	TbBrandVk,
	TbBrandGithub,
	TbArrowCurveLeft,
} from 'react-icons/tb'
import './Home.css'

function Homepage() {
	const { experience, block_main, block_about_me, projects } = data
	const [indexTab, setIndexTab] = useState(0)
	const { scrollYProgress } = useScroll()

	return (
		<Suspense fallback={<Loader />}>
			<div className='home'>
				<motion.div
					className='progress-bar'
					style={{ scaleX: scrollYProgress }}></motion.div>
				<div className='home_container'>
					<div className='nome_info-wrapper' id='main'>
						<motion.div
							className='nome_info-icon'
							initial={{ opacity: 0, x: -200 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1.1 }}>
							<img src={icon} alt='#' className='nome_info-icon-img' />
						</motion.div>
						<div className='nome_info-text'>
							<div className='nome_info-title'>{block_main.text.title}</div>
							<button className='nome_info-button'>
								<div className='nome_info-button-text'>
									<a href='#projects'>{data.block_main.text.portfolio}</a>
								</div>
							</button>
							<button className='nome_info-button nome_info-button-right'>
								<div className='nome_info-button-text'>
									{data.block_main.text.cv}
								</div>
							</button>
						</div>
					</div>

					<TitleAnimated itemsTitle={block_about_me.text.title} id='about' />
					<div className='home_forMy'>
						<div className='home_forMy-text'>
							{data.block_about_me.text.info.map((item, index) => (
								<p key={index} style={{ marginBottom: '30px' }}>
									{item}
								</p>
							))}
						</div>
						<div className='home_forMy-icon'>
							<img src={iconForMy} alt='#' className='home_forMy-icon-img' />
						</div>
					</div>

					<TitleAnimated itemsTitle={projects.text.title} id='projects' />
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

					<TitleAnimated itemsTitle={experience.title} id='experience' />
					<div className='home_experience-wrapper'>
						<div className='home_experience'>
							{data.experience.left_side.map((item, index) => (
								<div
									className={
										indexTab === index
											? 'home_experience-tab active-tab'
											: 'home_experience-tab'
									}
									onClick={() => setIndexTab(index)}
									key={index}>
									<div className='home_experience-tab-text '>{item}</div>
								</div>
							))}
						</div>
						<div className='home_experience-text'>
							<p style={{ marginBottom: '10px' }}>
								{experience.right_side[indexTab].title}
							</p>
							<p style={{ marginBottom: '15px' }}>
								{experience.right_side[indexTab].subtitle}
							</p>
							<p style={{ marginBottom: '10px' }}>
								{experience.right_side[indexTab].first_paragraph}
							</p>
							<p style={{ marginBottom: '10px' }}>
								{experience.right_side[indexTab].second_paragraph}
							</p>
							<p>{experience.right_side[indexTab].third_paragraph}</p>
						</div>
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
							<a href='https://github.com/ilyawebdeveloper'>
								GitHub
								<span className='social-icon'>
									<TbBrandGithub fontSize={20} />
								</span>
							</a>
							<a href='https://t.me/ryzhiy17' className='margin-top'>
								Telegram
								<span className='social-icon'>
									<TbBrandTelegram fontSize={20} />
								</span>
							</a>
							<a className='margin-top' href='https://t.me/ryzhiy17'>
								Vkontakte
								<span className='social-icon'>
									<TbBrandVk fontSize={20} />
								</span>
							</a>
						</div>
						<a href='#main' className='foter_link'>
							<TbArrowCurveLeft fontSize={60} />
						</a>
					</div>
				</div>
			</div>
		</Suspense>
	)
}

export default Homepage
