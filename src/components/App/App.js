import Header from '../Header/Header.js';
// import Main from '../Main/Main.js';
// import Footer from '../Footer/Footer.js';
// import Movies from '../Movies/Movies.js';
import Profile from '../Profile/Profile.js';
import { user } from '../../utils/consts.js';
import Register from '../AuthForm/AuthForm.js';

function App() {
  return (
    <div className="page">
      {/* <Header /> */}
      {/* <Main />
      <Footer /> */}
      {/* <Movies /> */}
      {/* <Profile userInfo={user}/> */}
      <Register />
    </div>
  )
};

export default App;
