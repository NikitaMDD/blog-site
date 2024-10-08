import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [images] = useState([
  //   "img/img.svg",
  //   "img/galery.png",
  //   "img/img.svg",
  //   "img/img.svg",
  // ]);

  // const handleNext = () => {
  //   setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // const handlePrev = () => {
  //   setActiveIndex(
  //     (prevIndex) => (prevIndex - 1 + images.length) % images.length
  //   );
  // };

  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const images = [
    "img/img.svg",
    "img/galery.png",
    "img/img.svg",
    "img/galery.png",
    "img/img.svg",
  ];
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };
  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart && touchEnd) {
      const diff = touchEnd - touchStart;
      const threshold = 100;
      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        } else {
          setActiveIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
          );
        }
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    const sliderImages = document.querySelectorAll(".slider-images img");

    sliderImages.forEach((image, index) => {
      if (index === activeIndex) {
        image.classList.add("active");
      } else {
        image.classList.remove("active");
      }
    });
  }, [activeIndex]);

  return (
    <>
      <header>
        <div className="nav-menu">
          <div className="nav-menu__item nav-menu__item_logo">
            <a href="#">
              <img
                className="hidden md:block"
                src="img/logo_header.png"
                alt=""
              />
            </a>
            <a href="#">
              <img className="block md:hidden" src="img/logo.svg" alt="" />
            </a>
          </div>
          <div className="nav-menu__item nav-menu__item_main">
            <ul className="flex">
              <li className="links">
                <a href="#">Клуб</a>
              </li>
              <li className="links">
                <a href="#">Направления</a>
              </li>
              <li className="links">
                <a href="#">Новости</a>
              </li>
              <li className="links">
                <a href="#">Контакты</a>
              </li>
            </ul>
          </div>
          <div className="nav-menu__item nav-menu__item_btns">
            <button className="nav-menu__btns nav-menu__btns_large">
              Личный кабинет
            </button>
            <button className="nav-menu__btns nav-menu__btns_small nav-menu__btns_first-small">
              <img className="search-img" src="img/search-img.svg" alt="" />
            </button>
            <button className="nav-menu__btns nav-menu__btns_small nav-menu__btns_second-small">
              Ру
            </button>
            <button className="nav-menu__btns nav-menu__btns_small nav-menu_rounds">
              <div className="rounds"></div>
              <div className="rounds rounds-left"></div>
            </button>
            <button
              className="hamburger block min-[1060px]:hidden"
              id="mobile-menu-btn"
            >
              <div className="btn__hamb block min-[1060px]:hidden">
                <div></div>
              </div>
            </button>
          </div>
        </div>
        <div className="line">
          <div className="blueline"></div>
          <div className="greyline"></div>
        </div>
      </header>
      <main>
        <div className="nav-site">
          <p className="nav-site__item">
            <a href="#">Главная </a>
          </p>
          <img className="mr-[11px]" src="img/Path.svg" alt="" />
          <p className="nav-site__item">
            <a href="#">…… </a>
          </p>
          <img className="mr-[11px]" src="img/Path.svg" alt="" />
          <p className="nav-site__item nav-site__item_big">
            Мероприятие день воинской славы России
          </p>
        </div>
        <div className="min-[1060px]:hidden block-title">
          <p className="title">Эконеделя</p>
        </div>
        <div className="mb-[23px] text-[14px] font-medium min-[1060px]:hidden">
          <a href="#" className="day">
            17 - 25 сентября 2022
          </a>
        </div>
        <div className="article">
          <div className="arcticle__item article__item_first">
            <p className="title hidden min-[1060px]:inline-block">
              Мероприятие день воинской <br /> славы России
            </p>
            <p>
              <a className="nav-menu__btns nav-menu__btns_large article__btn_orange">
                10 - 20 февраля 2023
              </a>
            </p>
            <p className="address author-p inline-block min-[1060px]:hidden">
              Москва, м. Дмитровская, ул. Бутырская, 62, 7 этаж
            </p>
            <p className="text">
              Эконеделя – это серия мероприятий, направленных на повышение
              уровня экологической культуры, вовлеченности молодёжи в
              экологическую повестку, развитие «зеленых навыков» и творческого
              потенциала студентов в области экологических инициатив.
            </p>
          </div>
          <div className="arcticle__item article__item_second">
            <div className="left-line">
              <p className="hidden md:block">
                <span>Акция</span> «Ломоносов Разделяет».
              </p>
              <p className="hidden md:block">
                <span>Экосвоп</span> — это акция, которая дарит вторую жизнь
                ненужным вещам и помогает сократить количество мусора на нашей
                планете. На точках мероприятия можно будет обменять свои книги и
                растения на нужные вам вещи из того, что принесли другие
                участники.
              </p>
              <p className="hidden md:block">
                <span>Книжный</span> экоклуб. Экологический книжный клуб создан
                для развития познавательного интереса студентов в области
                научно-популярной литературы экологической тематики и
                аналитической оценки поднимаемых в данных книгах проблем. Цель
                клуба - создать площадку для общения и научной дискуссии, помочь
                участникам обрести единомышленников и развить знания в области
                экологии.
              </p>
              <p className="hidden md:block">
                <span>Зелёные</span> разговоры в общежитиях.
              </p>
              <p className="hidden md:block">
                <span>Интеллектуальная</span> игра «ЭКО- АЗБУКА».
              </p>
              <p className="hidden md:block">
                <span>Мастер-класс</span> по эковолонтерству.
              </p>
              <p className="block md:hidden">
                <span>Акция </span>«Ломоносов Разделяет».
              </p>
              <p className="block md:hidden">
                <span>Акция </span>«Ломоносов Разделяет».
              </p>
              <p className="block md:hidden">
                <span>Акция </span>«Ломоносов Разделяет».
              </p>
              <p className="block md:hidden">
                <span>Акция </span>«Ломоносов Разделяет».
              </p>
              <p className="block md:hidden">
                <span>Акция </span>«Ломоносов Разделяет».
              </p>
            </div>
          </div>
          <div className="arcticle__item article__item_third">
            <p className="text text_last">
              Эконеделя – это серия мероприятий, направленных на повышение
              уровня экологической культуры, вовлеченности молодёжи в
              экологическую повестку, развитие «зеленых навыков» и творческого
              потенциала студентов в области экологических инициатив.
            </p>
            <img
              className="hidden sm:inline-block"
              src="img/galery.png"
              alt="img-cards"
            />
            {/*
            <img
              className="item item-1 inline-block sm:hidden"
              src="img/img.svg"
              alt="img-cards"
            />
            <img
              className="item item-1 inline-block sm:hidden"
              src="img/img.svg"
              alt="img-cards"
            />
            <img
              className="item item-1 inline-block sm:hidden"
              src="img/img.svg"
              alt="img-cards"
            /> */}
            <div className="slider">
              <div
                className="slider-images"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {images.map((image, index) => (
                  <img key={index} src={image} alt={`Image ${index + 1}`} />
                ))}
              </div>

              <div className="slider-dots">
                {images.map((image, index) => (
                  <button
                    key={index}
                    className={index === activeIndex ? "active" : ""}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="soc-net">
          <a href="#">
            <img
              className="soc-net__item soc-net__item_last"
              src="img/VK.svg.png"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="soc-net__item soc-net__item_last"
              src="img/o.png"
              alt=""
            />
          </a>
          <a href="">
            <img
              className="soc-net__item soc-net__item_last"
              src="img/telegram.svg"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="soc-net__item soc-net__item_last"
              src="img/v.png"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="soc-net__item soc-net__item_last"
              src="img/whatsapp_logo.webp"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="soc-net__item soc-net__item_last"
              src="img/Mask.png"
              alt=""
            />
          </a>
        </div>
      </main>
      <footer>
        <div className="info">
          <div className="actual-info">
            <div className="actual-info__item actual-info__item_smaller-block">
              <div className="actual-info__logos">
                <a href="#">
                  <img
                    className="active-for-mobile"
                    src="img/mobile-logo.svg"
                    alt="logo"
                  />
                </a>
                <a href="#">
                  <img
                    className="hidden-for-mobile logo-university"
                    src="img/logo.svg"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    className="hidden-for-mobile hidden-for-mobile_first"
                    src="img/vk 1 (Traced).svg"
                    alt="vk"
                  />
                </a>
                <a href="#">
                  <img
                    className="hidden-for-mobile"
                    src="img/rutube.png"
                    alt="rutube"
                  />
                </a>
                <a href="#">
                  <img
                    className="hidden-for-mobile"
                    src="img/telegram.svg"
                    alt="telegram"
                  />
                </a>
              </div>
              <div className="actual-info__address">
                <p className="p-grey hidden-for-mobile">Адрес:</p>
                <p className="p-grey hidden-for-mobile">
                  119991, Москва, ГСП-1, Ленинские горы, д. 1 <br /> Главное
                  здание МГУ, Корпус «А», каб. 1021А
                </p>
                <p className="author-p active-for-mobile">
                  © 2023 <br /> Всероссийский студенческий клуб <br />{" "}
                  «Вернадский» (ВСК "Вернадский")
                </p>
              </div>
              <div className="actual-info__email">
                <p className="p-blue">
                  <a href="#">info@vernadsiy.msu.ru</a>
                </p>
                <p className="p-blue">
                  <a href="#">+7 (495) 939-19-93</a>
                </p>
              </div>
            </div>
            <div className="actual-info__item actual-info__item_bigger-block">
              <div className="actual-info__columns">
                <div>
                  <p className="first-p">ВЕРНАДСКИЙ</p>
                  <p>
                    <a href="#">Биография</a>
                  </p>
                  <p>
                    <a href="#">Консорциумы</a>
                  </p>
                  <p>
                    <a href="#">Клуб</a>
                  </p>
                  <p>
                    <a href="#">Актив</a>
                  </p>
                  <p>
                    <a href="#">География</a>
                  </p>
                </div>
                <div>
                  <p className="first-p">НОВОСТИ</p>
                  <p>
                    <a href="#">Общие</a>
                  </p>
                  <p>
                    <a href="#">Новости ВСК</a>
                  </p>
                  <p>
                    <a href="#">Новости актива</a>
                  </p>
                </div>
                <div className="mr-[50px]">
                  <p className="first-p">КОНТАКТЫ</p>
                  <p>
                    <a href="#">Вопросы и ответы</a>
                  </p>
                  <p>
                    <a href="#">Контакты</a>
                  </p>
                  <p>
                    <a href="#">Карта сайта</a>
                  </p>
                </div>
              </div>
              <div className="table">
                <p>НАПРАВЛЕНИЯ</p>
                <table>
                  <tr>
                    <td>#Создавай_возможности</td>
                    <td>#Вдохнавляй</td>
                    <td>#Помни</td>
                    <td>#Защищай</td>
                    <td>#Стирай_границы</td>
                  </tr>
                  <tr>
                    <td>#Создавай_возможности</td>
                    <td>#Вдохнавляй</td>
                    <td>#Помни</td>
                    <td>#Защищай</td>
                    <td>#Стирай_границы</td>
                  </tr>
                  <tr>
                    <td>#Создавай_возможности</td>
                    <td>#Вдохнавляй</td>
                    <td>#Помни</td>
                    <td>#Защищай</td>
                    <td>#Стирай_границы</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="author">
            <div className="author__item">
              <p className="author-p hidden-for-mobile">
                © 2023 Всероссийский студенческий клуб «Вернадский» (ВСК
                "Вернадский")
              </p>
              <a href="#">
                <img
                  className="author__img hidden-for-mobile"
                  src="img/rosmolodej.png"
                  alt="росмолодежь"
                />
              </a>
              <a className="inline-block md:hidden" href="#">
                <img className="none " src="img/vk 1 (Traced).svg" alt="vk" />
              </a>
              <a className="inline-block md:hidden" href="#">
                <img className="none " src="img/rutube.png" alt="rutube" />
              </a>
              <a className="inline-block md:hidden" href="#">
                <img className="none " src="img/telegram.svg" alt="telegram" />
              </a>
            </div>
          </div>
          <div className="logo-for-monile_active">
            <a href="#">
              <img
                className="author__img"
                src="img/rosmolodej.png"
                alt="росмолодежь"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
