import formPhoto from "../../img/Снимок экрана 2022-12-24 165924.png"
import monPricePhoto from '../../img/MonpricePhoto.png'
import promcascadPhoto from '../../img/Promcascad.png'
import market from '../../img/Market.png'
import letter from '../../img/Letter.png'
import myWorld from '../../img/myWorld.png'

export const data = {
  block_main: {
    text: {
      title: "Frontend-разработка ваших проектов",
      portfolio: "Портфолио",
      cv: "Резюме",
    }
  },
  block_about_me: {
    text: {
      title: ["О","б","о", "м","н","е"],
      info: [
        "Привет, меня зовут Илья я Frontend-разработчик, занимаюсь созданием веб- приложений.",
        "Очень люблю путешествовать и узнавать новое, всегда рад новой компании.",
        "Для меня важно создавать что то новое и полезное, сейчас я работаю в компании Galament Software,занимаюсь разработкой крутых и многофункциональных сайтов"
      ]
    }
  },
  projects: {
    text: {
      title: ["М","о","и", "П","р","о","е","к","т","ы"],
    },
    cart_info: [
        {photo: myWorld, text: "Небольшая 3D сцена, в проекте использовался такой стек технологий: html && scss && React && react-three/drei &&react-three/fiber && react-three/postprocessing && three.js", title: "01 MY WORLD", link: "/World"},
        {photo: market, text: "Небольшой магазин техники, в проекте использовался такой стек технологий: React && axios && scss", title: "02 SMOLL MARKET", link: "/Market"},
        {photo: formPhoto, text: "Форма валидации сделаная для обучения, в проекте использовался такой стек технологий: html && css", title: "03 MY FORM", link: "/MyForm"},
        {photo: promcascadPhoto, text: "Лендинг созданный для строительной компании, в проекте использовался такой стек технологий: html && css", title: "04 PROMCASCAD", link: "/Cascad"},
        {photo: letter, text: "Письмо созданное для расслыки на почтовый клиент, в проекте использовался такой стек технологий: html && css", title: "05 LETTER", link: "/Letter"},
        {photo: monPricePhoto, text: "Лендинг, созданный для записи на маникюр, создавался в качестве обучения html && css", title: "06 MON PRICE", link: "/MonPrice"},
      ]
  },
  experience: {
    title: ["О","п","ы","т", "Р","а","б","о","т","ы"],
    left_side: [
      "GALAMENT",
      "WORKSPACER",
      "DOMINOS'PIZZA"
    ],
    right_side: [
      {title: "Frontend @ developer", subtitle: "Апрель 2022 - Present", first_paragraph: "*Занимался добавлением тостера для подтверждения сделанного заказа. Тостер показывается по нажатию на кнопку в корзину и удаляется через заданное время. Помогает пользователю понять что его заказ добавлен в корзину.", second_paragraph: "*Занимался валидацией файлов в разделе оставить отзыв, при неправильном формате файла пользователь видит сообщение с ошибкой, которое приходит от бэкенд-разработчиков.Для того что бы ознакомиться с функционалом нужно зарегистрироваться на сайте https://dominospizza.lt/ru/vilnius/ и перейти в раздел оставить отзыв.", third_paragraph: "*Проект поддерживает такой стек технологий: React + Typescript + Redux, scss, gitlab, taskcraft(для отслеживания прогресса задач). На этом проекте я впервые узнал что такое митинг, работать в команде и взаимодействовать с бэкенд разработчиками."},
      {title: "Frontend @ developer", subtitle: "Апрель 2022 - Present", first_paragraph: "* Workspacer это проект, созданный для онлайн покупки и аренды помещений. Это мое первое знакомство с библиотекой React, под чутким присмотром моего наставника я создавал модельные окна, дописывал логику приложения на чистом js, а так же учился работать с hooks и стейт менеджером, познакомился с библиотекой styled component", second_paragraph: "* Проект поддерживает такой стек технологий: React + Typescript + Redux, scss, gitlab, taskcraft(для отслеживания прогресса задач).", third_paragraph: "* Мне очень нравиться узначать что то новое, ососбенно если это выглядит круто) Я много учусь и все свои знания стараюсь показать где либо."},
      {title: "Frontend @ developer", subtitle: "Апрель 2022 - Present", first_paragraph: "* Проект Dominos`Pizza это интернет магазин для заказа пиццы. С командой разработчиков я осуществлял пагинацию блока новостей. Занимался табличной версткой, для рассылки на почтовый клиент. Доработал сортировку пицц по категориям, взимодействуя с бекенд разработчиком.", second_paragraph: "* Работал с различными языками, платформами, фреймворками и системами управления контентом, такими как JavaScript, TypeScript, Npm, React, Redux, Scss, Taskcraft и Gitlab.", third_paragraph: "* Ежедневно общаюсь с крутыми бекенд и фронтенд разработчиками, а так же с тестировщиками и проджект менеджером нашего проекта. Так же по ссылке ниже вы можете окунуться в мой небольшой 3D мир!"}
    ]
  },
}

export const marketData = {
  text: {
    buy: "Buy",
    rating: "Rating",
  }
}