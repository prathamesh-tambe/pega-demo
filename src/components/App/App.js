import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Bug from '../Bug/Bug';
import Epic from '../Epic/Epic';
import Home from '../Home/Home';
import { FaAngleRight, FaBell, FaBuromobelexperte, FaChartLine, FaHome, FaLightbulb, FaPlus, FaRegClock, FaSearch, FaSuitcase, FaUsers } from "react-icons/fa";
import './App.css';

function App() {
  const [menu, setMenu] = useState(
    [
      {
        title : 'Create',
        icon: 'FaPlus',
        selected : false,
        submenu : [
          { title : 'Bug', component : '/bug'},
          { title : 'Epic', component : '/epic'},
          { title : 'Epic', component : '/epic'}
        ]
      },
      {
        title : 'Home',
        icon: 'FaHome',
        selected : false
      },
      {
        title : 'Products',
        icon: 'FaSuitcase',
        selected : false
      },
      {
        title : 'Teams',
        icon: 'FaUsers',
        selected : false
      },
      {
        title : 'Quality',
        icon: 'FaLightbulb',
        selected : false
      },
      {
        title : 'Collaboration',
        icon: 'FaHome',
        selected : false
      },
      {
        title : 'Reports',
        icon: 'FaChartLine',
        selected : false
      }
    ]
  );

  const updateMenu = index => e => {
    let newArr = [...menu]; 
    if(newArr[index]['submenu']){
        newArr[index]['selected'] = !newArr[index]['selected']; 
        setMenu(newArr); 
    }
  }

  return (
    <div className="App">
      <Router>
        <div className="sidebar">
          <div className="sidebar__top">
              <div className="topinner">
                <Link to="/" alt="Home link"><h1 className="fix">Pega</h1></Link>
                <h3 className="collapsed">Agile Studio</h3>
              </div>
          </div>
          <div className="sidebar__search">
            <div className="inner">
                <div className="fix"><FaSearch className="inner-icons search"/></div>
                <div className="collapsed"><input type="text" placeholder="Search..." name="search" title="search"/></div>
            </div>
          </div>
          <div className="sidebar__menuWrap">
          <nav className="menu">
              {
                menu.map((item,index) => {
                  return (
                    <>
                    <Link to="/">
                    <div className={`inner ${item.selected ? 'active' : ''}`} onClick={updateMenu(index)}>
                      <div className="fix">
                      {item.icon === 'FaHome' ? (<FaHome className="inner-icons mainIcon" alt={item.title}/>) : ('')}
                      {item.icon === 'FaPlus' ? (<FaPlus className="inner-icons mainIcon" alt={item.title}/>) : ('')}
                      {item.icon === 'FaSuitcase' ? (<FaSuitcase className="inner-icons mainIcon" alt={item.title}/>) : ('')}
                      {item.icon === 'FaUsers' ? (<FaUsers className="inner-icons mainIcon" alt={item.title} />) : ('')}
                      {item.icon === 'FaLightbulb' ? (<FaLightbulb className="inner-icons mainIcon" alt={item.title} />) : ('')}
                      {item.icon === 'FaChartLine' ? (<FaChartLine className="inner-icons mainIcon" alt={item.title} />) : ('')}
                      </div>
                      <div className="collapsed">
                        {item.title}
                      </div>
                      {item.submenu ? (
                        <div className="fixlast"><FaAngleRight className="arrowNav inner-icons" alt="arrow icon"/></div>
                      ):('')} 
                    </div>
                    </Link>
                    {item.submenu ? (
                    <ul style={{display: item.selected ? 'block' : 'none' }} >
                        {
                          item.submenu.map((innerMenu) => {
                            return (                          
                              <li><Link to={`${innerMenu.component}`}>{innerMenu.title}</Link></li>
                            )
                          })
                        }
                    </ul>
                    ) : ('')}
                      
                    </>      
                  )
                })
              }            
          </nav>
          </div>    
          <div className="sidebar__bottom">
            <Link to="/">
              <div className="inner">
                <div className="fix"><FaBell className="inner-icons" alt="Notifications" /></div>
                <div className="collapsed">Notifications</div>
              </div>
            </Link>
            <Link to="/">
              <div className="inner">
                <div className="fix"><FaRegClock className="inner-icons" alt="Recents" /></div>
                <div className="collapsed">Recents</div>
              </div>
            </Link>
            <Link to="/">
              <div className="inner">
                <div className="fix"><FaBuromobelexperte className="inner-icons" alt="My applications" /></div>
                <div className="collapsed">My applications</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="content">
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/bug" component={Bug}/>
              <Route path="/epic" component={Epic} />
          </Switch>
        </div>
      </Router>
      </div>
  );
}

export default App;
