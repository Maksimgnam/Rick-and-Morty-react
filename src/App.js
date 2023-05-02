import logo from './logo.svg';
import './App.css';
import Rick from './Rick/Rick';
import Location from './Location/Location';
import Main from './Main/Main';
import Header from './Header/Header';
import Episodes from './Episodes/Episodes';
import MyList from './MyList/MyList';



function App() {



  return (

    <div className="App">

      <Header />
      <Main />

      <Rick />
      <Location />
      <Episodes />
      <MyList />

    </div>
  );
}

export default App;
