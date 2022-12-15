import fireLogin from '../assets/gifsPages/fire-form1.gif'
import fireLogin2 from '../assets/gifsPages/fire-form2.gif'
import tenzie from '../assets/gifsPages/tenzie.gif'
import movies from '../assets/gifsPages/movies-api.gif'
import portafolio from '../assets/gifsPages/portafolio.gif'
import grocery from '../assets/gifsPages/grocery.gif'
import toolkitBag from '../assets/gifsPages/toolkit-bag.gif'
import chatApp from '../assets/gifsPages/chat-app.gif'
import drinks from '../assets/gifsPages/cocktails.gif'
import acordion from '../assets/gifsPages/acordion.gif'
import todo from '../assets/gifsPages/todo-list.gif'

export const projectsList = [
  {
    id: 1,
    title: 'Firebase Authentication',
    description: 'React App created with firebase to manage the authentication of the page. Using react-router to display the differents paths and helping with securtiy with protected routes and dynamics routes for the customization of user page',
    libraries: ['react', 'firebase', 'react-router', 'formik', 'useForm', 'yup', 'material-UI'],
    images: [fireLogin, fireLogin2],
    source: 'https://github.com/Empyritz/LogIn-Form-Flow',
  },
  {
    id: 2,
    title: 'Tenzie',
    description: 'Game app based on tenzie, iterates over the array of numbers and return the same number if was clicked and finally checking if all the numbers in array are the same.',
    libraries: ['react'],
    images: [tenzie],
    source: '',
  },
  {
    id: 3,
    title: 'Movies',
    description: 'Movie display app, through an api it shows a preview of movies of the moment, you can search by category and by name. You can like the movies so can have a favorite list movies. Maked a reload of the movies in search to display more only scrolling down (pagination).',
    libraries: [''],
    images: [movies],
    source: '',
  },
  {
    id: 4,
    title: 'Portafolio',
    description: 'My previous prtafolio maked from a youtube video, wich I used to practice my web animations skills',
    libraries: ['react', 'react-router'],
    images: [portafolio],
    source: '',
  },
  {
    id: 5,
    title: 'Grocery Bud',
    description: 'An app based on CRUD elements. Created for make your grocery list, you can add items, remove or edited.',
    libraries: ['react'],
    images: [grocery],
    source: '',
  },
  {
    id: 6,
    title: 'Bag',
    description: 'An component of an E-commerce where you can see your items in the shopcart, add more than one or remove one or all of them. The items number and the price change automatically using redux-toolkit to manage the storage and getting the information to display dinamically.',
    libraries: ['react', 'redux-toolkit'],
    images: [toolkitBag],
    source: '',
  },
  {
    id: 7,
    title: 'Chat App',
    description: 'Chat App where you can register your account and talk with others people in real time. Using socket.io to send the mmessages in real time and then storage them in mongoDB if you want to open the conversation antoher day.',
    libraries: ['react', 'react-router<<', 'socket.io', 'express', 'mongosh'],
    images: [chatApp],
    source: '',
  },
  {
    id: 8,
    title: 'Drinks Menu',
    description: 'Drinsk app that display a lot of drinks using an API. You can search by name and then calls the api inmediatelly. When you click one it display antoher page with details of that drink',
    libraries: ['react'],
    images: [drinks],
    source: '',
  },
  {
    id: 9,
    title: 'Acordion',
    description: 'Drinsk app that display a lot of drinks using an API. You can search by name and then calls the api inmediatelly. When you click one it display antoher page with details of that drink',
    libraries: ['react'],
    images: [acordion],
    source: '',
  },
  {
    id: 10,
    title: 'Todo-List',
    description: 'Drinsk app that display a lot of drinks using an API. You can search by name and then calls the api inmediatelly. When you click one it display antoher page with details of that drink',
    libraries: ['react'],
    images: [todo],
    source: '',
  },
]

