import React from 'react'
import "./letter.css"
import chees from "./images for letter v1/chees.png"
import logo from "./images for letter v1/Logo.png"
import sousage from "./images for letter v1/sousage.png"
import pizza from "./images for letter v1/pizza.png"
import sheet from "./images for letter v1/greensheet.png"
import title from "./images for letter v1/imageTitle.png"
import arrow from "./images for letter v1/arrow.png"
import LinkToHome from '../LinkToHome/LinkToHome'

const Letter = () => {
   return (
			<>
				<table
					cellPadding='0'
					cellSpacing='0'
					width='100%'
					style={{ backgroundColor: '#ffffff' }}>
					<tr align='center'>
						<td>
							<table className='letter' cellPadding='0' cellSpacing='0'>
								<tr>
									<td align='center'>
										<table
											className='letter_container'
											cellPadding='0'
											cellSpacing='0'>
											<tr>
												<td align='center'>
													<p
														className='letter_link'
														style={{ fontFamily: "'Architects Daughter'" }}>
														Problemos su šio el. pašto peržiūra? Pereikite į{' '}
														<a href='/' target='_blank' class='letter-link'>
															{' '}
															internetinę versiją.{' '}
														</a>
													</p>
												</td>
											</tr>
										</table>
										<table
											className='letter_container'
											cellPadding='0'
											cellSpacing='0'>
											<tr>
												<td align='left' width='100px'>
													<img
														src={sheet}
														alt='green'
														className='letter_img-sheet'
													/>
												</td>
												<td align='center'>
													<img
														src={logo}
														alt='logo'
														className='letter_img-logo'
													/>
												</td>
												<td align='right' width='120px'>
													<p></p>
												</td>
											</tr>
										</table>
										<p className='letter_padding-one'></p>
										<table width='90%' cellPadding='0' cellSpacing='0'>
											<tr>
												<td align='center'>
													<img
														src={title}
														alt='title'
														class='letter_img-title'
													/>
												</td>
											</tr>
										</table>
										<p className='letter_padding-too'></p>
										<table width='90%' cellPadding='0' cellSpacing='0'>
											<tr>
												<td align='left'>
													<img
														src={arrow}
														alt='arrow'
														className='letter_img-arrow'
													/>
												</td>
												<td align='right'>
													<img
														src={sousage}
														alt='sousage'
														className='letter_img-sousage'
													/>
												</td>
											</tr>
										</table>
										<table width='90%' cellPadding='0' cellSpacing='0'>
											<tr>
												<td align='left'>
													<p
														className='letter_text'
														style={{ fontFamily: "'Architects Daughter'" }}>
														Mes suteikiame jums
														<span
															className='letter_text-rice'
															style={{ fontFamily: "'Architects Daughter'" }}>
															5
														</span>
														premijas 30 dienų. <br /> Mokėkite premijomis iki
														50% savo internetinio <br />
														užsakymo! 1 premija = 1 euras. Premijos yra jūsų{' '}
														<br />
														asmeninėje sąskaitoje.
													</p>
												</td>
											</tr>
										</table>
										<p className='letter_padding-three'></p>
										<table width='80%' cellPadding='0' cellSpacing='0'>
											<tr>
												<td align='right'>
													<a
														target='blank'
														href='https://dominospizza.lt/ru/vilnius/club/'
														className='letter_red-link'
														style={{ fontFamily: "'Architects Daughter'" }}>
														Sužinokite daugiau
													</a>
													<p className='letter_chees'>
														<img
															src={chees}
															alt='chees'
															class='letter_img-chees'
														/>
													</p>
												</td>
											</tr>
										</table>
										<p className='letter_padding-four'></p>
										<table
											width='100%'
											cellPadding='0'
											cellSpacing='0'
											className='letter_tfoot'>
											<tr>
												<td className='letter_pizza' align='left'>
													<img
														src={pizza}
														alt='pizza'
														class='letter_img-pizza'
													/>
												</td>
												<td className='letter_footer-link' align='left'>
													<p className='letter_footer-link-container'>
														<p className='letter_footer-link-leaf '>
															<img
																src={sheet}
																alt='green'
																className='letter_img-sheet'
															/>
														</p>
														<p
															className='letter_footer-link-text'
															style={{ fontFamily: "'Architects Daughter'" }}>
															Norėdami atsisakyti prenumeratos, <br /> sekite
															šią{' '}
															<a
																href='/'
																type='submit'
																target='_blank'
																className='letter-link'
																style={{ fontFamily: "'Architects Daughter'" }}>
																{' '}
																nuorodą.{' '}
															</a>
														</p>
													</p>
												</td>
												<td align='right'>
													<p className='letter_footer-sousage'>
														<img
															src={sousage}
															alt='sousage'
															class='letter_img-sousage no-blur '
														/>
													</p>
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<LinkToHome />
			</>
		)
}

export default Letter