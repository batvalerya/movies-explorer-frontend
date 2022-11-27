import movie1 from "../images/movie1.svg";
import movie2 from "../images/movie2.svg";
import movie3 from "../images/movie3.svg";
import movie4 from "../images/movie4.svg";
import movie5 from "../images/movie5.svg";
import movie6 from "../images/movie6.svg";
import movie7 from "../images/movie7.svg";

const moviesCards = [
    {
      id: 1,
      nameRu: '33 слова о дизайне',
      duration: '1ч 42м',
      image: movie1
    },
    {
      id: 2,
      nameRu: 'Киноальманах «100 лет дизайна»',
      duration: '1ч 42м',
      image: movie2
    },
    {
      id: 3,
      nameRu: 'В погоне за Бенкси',
      duration: '1ч 42м',
      image: movie3
    },
  
    {
      id: 4,
      nameRu: 'Баския: Взрыв реальности',
      duration: '1ч 42м',
      image: movie4
    },
    {
      id: 5,
      nameRu: 'Бег это свобода',
      duration: '1ч 42м',
      image: movie5
    },
    {
      id: 6,
      nameRu: 'Книготорговцы',
      duration: '1ч 42м',
      image: movie6
    },
  
    {
      id: 7,
      nameRu: 'Когда я думаю о Германии ночью',
      duration: '1ч 42м',
      image: movie7
    },
];

const savedMovies = [
  {
    id: 1,
    nameRu: '33 слова о дизайне',
    duration: '1ч 42м',
    image: movie1
  },
  {
    id: 2,
    nameRu: 'Киноальманах «100 лет дизайна»',
    duration: '1ч 42м',
    image: movie2
  },
  {
    id: 3,
    nameRu: 'В погоне за Бенкси',
    duration: '1ч 42м',
    image: movie3
  },
];

const user = {
  name:'Виталя',
  email: 'pochta@yandex.ru'
}

export {savedMovies, moviesCards, user};