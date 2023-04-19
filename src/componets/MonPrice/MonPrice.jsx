import React from 'react'
import './monPrice.css'
import manikur from '../../img/маникюр.png'
import manikreaplece from '../../img/маникюр переделанный.png'
import massazhreaplece from '../../img/массаж переделыннй.jpg'
import iop from '../../img/girl3.jpg'
import ww from '../../img/tot.jpg'
import parik from '../../img/парик переделынфй.jpg'
import epilatsia from '../../img/эпиляция.jpg'
import shugar from '../../img/шугаринг.jpg'
import krasota from '../../img/красота.jpg'
import tr1 from '../../img/sp1.png'
import tr3 from '../../img/sp3.png'
import tr4 from '../../img/sp4.png'
import LinkToHome from '../LinkToHome/LinkToHome'

export default function MonPrice() {
	return (
		<>
			<header className='headerMon'>
				<div className='containerMon'>
					<div className='header__iner'>
						<div header='logo'>MON PRICE</div>
						<nav className='nav'>
							<a className='nav__link' href='/'>
								Главная
							</a>
							<a className='nav__link' href='/'>
								Акции
							</a>
							<a className='nav__link' href='/'>
								Услуги
							</a>
						</nav>
					</div>
				</div>
			</header>

			<div className='intro'>
				<div className='containerMon'>
					<div className='intro__iner'>
						<h1 className='intro__title'>MON PRICE</h1>
						<a className='btn btn--blue' href='/'>
							Регистрация
						</a>
					</div>
				</div>
			</div>

			<div className='containerMon'>
				<div className='features'>
					<div className='features__item'>
						<img className='feature__icon' src={manikur} alt='sorry' />
						<h4 className='feature__title'>Маникюр</h4>
						<div className='feature__text'>
							лучшие специалисты по маникюру в росии с оптытом работы более 3-ех
							лет
						</div>
					</div>

					<div className='features__item'>
						<img className='feature__icon' src={manikur} alt='sorry' />
						<h4 className='feature__title'>Маникюр</h4>
						<div className='feature__text'>
							лучшие специалисты по маникюру в росии с оптытом работы более 3-ех
							лет
						</div>
					</div>

					<div className='features__item'>
						<img className='feature__icon' src={manikur} alt='sorry' />
						<h4 className='feature__title'>Маникюр</h4>
						<div className='feature__text'>
							лучшие специалисты по маникюру в росии с оптытом работы более 3-ех
							лет
						</div>
					</div>

					<div className='features__item'>
						<img className='feature__icon' src={manikur} alt='sorry' />
						<h4 className='feature__title'>Маникюр</h4>
						<div className='feature__text'>
							лучшие специалисты по маникюру в росии с оптытом работы более 3-ех
							лет
						</div>
					</div>

					<div className='features__item'>
						<img className='feature__icon' src={manikur} alt='sorry' />
						<h4 className='feature__title'>Маникюр</h4>
						<div className='feature__text'>
							лучшие специалисты по маникюру в росии с оптытом работы более 3-ех
							лет
						</div>
					</div>

					<div className='features__item'>
						<img className='feature__icon' src={manikur} alt='sorry' />
						<h4 className='feature__title'>Маникюр</h4>
						<div className='feature__text'>
							лучшие специалисты по маникюру в росии с оптытом работы более 3-ех
							лет
						</div>
					</div>
				</div>
			</div>

			<div className='galary'>
				<div className='galary__item'>
					<img className='photo' src={manikreaplece} alt='sorry' />
					<div className='galary__content'>
						<div className='galary__title'>MON PRICE</div>
						<div className='galary__text'>Узнайте больше о своем теле</div>
					</div>
				</div>

				<div className='galary__item'>
					<img className='photo' src={massazhreaplece} alt='sorry' />
					<div className='galary__content'>
						<div className='galary__title'>MON PRICE</div>
						<div className='galary__text'>Узнайте больше о своем теле</div>
					</div>
				</div>

				<div className='galary__item'>
					<img className='photo' src={massazhreaplece} alt='sorry' />
					<div className='galary__content'>
						<div className='galary__title'>MON PRICE</div>
						<div className='galary__text'>Узнайте больше о своем теле</div>
					</div>
				</div>

				<div className='galary__item'>
					<img className='photo' src={parik} alt='sorry' />
					<div className='galary__content'>
						<div className='galary__title'>MON PRICE</div>
						<div className='galary__text'>Узнайте больше о своем теле</div>
					</div>
				</div>

				<div className='galary__item'>
					<img className='photo' src={ww} alt='sorry' />
					<div className='galary__content'>
						<div className='galary__title'>MON PRICE</div>
						<div className='galary__text'>Узнайте больше о своем теле</div>
					</div>
				</div>

				<div className='galary__item'>
					<img className='photo' src={epilatsia} alt='sorry' />
					<div className='galary__content'>
						<div className='galary__title'>MON PRICE</div>
						<div className='galary__text'>Узнайте больше о своем теле</div>
					</div>
				</div>

				<div className='galary__item'>
					<img className='photo' src={krasota} alt='sorry' />
					<div className='galary__content'>
						<div className='galary__title'>MON PRICE</div>
						<div className='galary__text'>Узнайте больше о своем теле</div>
					</div>
				</div>

				<div className='galary__item'>
					<img className='photo' src={shugar} alt='sorry' />
					<div className='galary__content'>
						<div className='galary__title'>MON PRICE</div>
						<div className='galary__text'>Узнайте больше о своем теле</div>
					</div>
				</div>
			</div>

			<div className='team'>
				<div className='containerMon'>
					<div className='team__iner'>
						<div className='team__item'>
							<img className='team__photo' src={tr1} alt='sorry' />
							<div className='team__name'>Евгения Г.</div>
							<div className='team__special'>Гинеколог</div>
							<div className='team__text'>
								Гинеколог занимается наблюдением, диагностикой, лечением и
								профилактикой заболеваний репродуктивной системы женского
								организма.
							</div>
						</div>

						<div className='team__item'>
							<img className='team__photo' src={tr4} alt='sorry' />
							<div className='team__name'>Олесия Г.</div>
							<div className='team__special'>Терапевт</div>
							<div className='team__text'>
								Терапевт – врач широкого профиля, компетентный во всех
								заболеваниях взрослого человека.
							</div>
						</div>

						<div className='team__item'>
							<img className='team__photo' src={tr3} alt='sorry' />
							<div className='team__name'>Елена О.</div>
							<div className='team__special'>ЛОР</div>
							<div className='team__text'>
								ЛОР – врач «ухо-горло-нос», занимающийся диагностикой и лечением
								болезней данных органов и связанных с ними структур шеи и
								головы.
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='previu'>
				<div className='containerMon'>
					<div className='previu__item'>
						<div className='previu__photo'>
							<img className='previu__img' src={iop} alt='soor' />
						</div>
						<div className='previu__content'>
							<h3 className='previu__text'>
								Как я избавлялась от боли получив побочки или Применение
								дексаметазона возможно в том случае, если польза для организма
								превышает риск развития побочных эффектов от самого
								дексаметазона
							</h3>
							<div className='previu__author'>Юлия Балашина</div>
						</div>
					</div>
				</div>
			</div>

			<div className='registr'>
				<div className='containerMon'>
					<h3 className='registr__title'>
						{' '}
						Регистрация
						<div className='registr__text'>
							{' '}
							<p>
								Узнать подробнее о наших услугах вы можете нажав кнопку
								Регистрация
							</p>
						</div>
						<a className='btn btn--long btn--blue' href='/'>
							Регистрация
						</a>
					</h3>
				</div>
			</div>

			<footer className='over'>
				<div className='containerMon'>
					<div className='footer__iner'>
						<div className='footer__blok'>
							<div className='footer__text'>
								Создатель:
								<h2 className='footer__title'> Илья Прозоров </h2>
							</div>
						</div>

						<div className='footer__blok'>
							<div className='footer__text'>
								Создатель:
								<h2 className='footer__title'> Илья Прозоров </h2>
							</div>
						</div>

						<div className='footer__blok'>
							<div className='footer__text'>
								Создатель:
								<h2 className='footer__title'> Илья Прозоров </h2>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<LinkToHome />
		</>
	)
}
