import { useEffect } from "react";
import { useState } from "react";
import "./myform.css";
import LinkToHome from "../LinkToHome/LinkToHome";

const MyForm = () => {
  const [formColor, setFormColor] = useState()
  const [contain, setContain] = useState()

  useEffect(() => {
    const formBox = document.querySelector('#form');
    const container = document.querySelector('.containerShell');

    setFormColor(formBox);
    setContain(container);
  }, [])

  const addClass = () => {
    formColor.classList.add('active');
    contain.classList.add('active');
  }

  const removeClass = () => {
    formColor.classList.remove('active');
    contain.classList.remove('active');
  }

  return (
		<div className='containerShell'>
			<div className='main'>
				<div className='main_one'>
					<h1 className='main_one-title'>У вас уже есть аккаунт?</h1>
					<button className='main_one-button' onClick={removeClass}>
						Войти
					</button>
				</div>
				<div className='main_one'>
					<h1 className='main_one-title'>У вас еще нет аккаунта?</h1>
					<button className='main_one-button' onClick={addClass}>
						Регистрация
					</button>
				</div>

				<div className='form-box' id='form'>
					<form action='#' className='form form_open'>
						<h2 className='form_title'>Вход</h2>
						<p>
							<input type='text' className='form_login' placeholder='Логин' />
						</p>
						<p>
							<input
								type='password'
								className='form_pssword'
								placeholder='Пароль'
							/>
						</p>
						<p>
							<button className='form_entrance'>Вход</button>
						</p>
						<p>
							<a href='/' className='form_forgot'>
								Восстановить пароль
							</a>
						</p>
					</form>

					<form action='#' className='form form_register'>
						<h2 className='form_title'>Регистрация</h2>
						<p>
							<input type='text' className='form_login' placeholder='Логин' />
						</p>
						<p>
							<input
								type='password'
								className='form_pssword'
								placeholder='Пароль'
							/>
						</p>
						<p>
							<input
								type='password'
								className='form_pssword'
								placeholder='Подтвердите пароль'
							/>
						</p>
						<p>
							<input
								type='email'
								className='form_pssword'
								placeholder='Введите email'
							/>
						</p>
						<p>
							<button className='form_entrance'>Зарегестрироваться</button>
						</p>
					</form>
				</div>
			</div>
			<LinkToHome />
		</div>
	)
}

export default MyForm;
