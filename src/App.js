import React, { useState } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom';
import Header from './components/Header';
import Menu from "./components/Menu";
import Sidebar from './components/Sidebar';
import Home from "./components/Home";
import Card from "./components/Card";
import Footer from "./components/Footer";
import SubContainer from './components/SubContainer';
import CardBottomRow from './components/CardBottomRow';
import { Transition } from "react-transition-group";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ItemCarousel from './components/ItemCarousel';
import images from './components/Images';
import Signin from './components/Signin';

const App = () => {
  const [show, setShow] = useState(false);

  const [subContainer, setSubContainer] = useState(false);

  const [image, setImages] = useState(images);

  function openNav() {
    setShow(true);
  }

  function closeNave() {
    setShow(false);
  }

  function openSubContainer() {
    setSubContainer(true);
  }

  function closeSubContainer() {
    setSubContainer(false);
  }

  // const passImages = () => {
  //   image.map((currData, index) => {
  //     if (currData.id >= 6) {
  //       return <img src={currData.img} alt="" />
  //     }
  //   })
  // }

  return (
    <>

      <Transition
        in={show}
        timeout={300}
        mountOnEnter
        unmountOnExit>
        {state => {
          return (
            <>
              <Sidebar state={state} showSubContainer={openSubContainer} closeNav={closeNave} />
              <div className="overlay"
                style={state === "entering" ? { animation: "moveSidebar .3s forwards" }
                  : state === "entered" ? { opacity: "1" } : { animation: "show .3s reverse forwards" }}
                onClick={closeNave}>

              </div>
              <div className="closeBtn"
                style={state === "entering" ? { animation: "moveSidebar .3s forwards" }
                  : state === "entered" ? { opacity: "1" } : { animation: "show .3s reverse forwards" }}
                onClick={closeNave}>&times; </div>
            </>
          )
        }}

      </Transition>

      <Transition
        in={subContainer}
        timeout={300}
        mountOnEnter
        unmountOnExit>
        {state1 => {
          return (
            <>
              <SubContainer state={state1} backToMainMenu={closeSubContainer} />
              <div className="closesubBtn"
                style={state1 === "entering" ? { animation: "moveSidebar .3s reverse forwards" }
                  : state1 === "entered" ? { opacity: "1" } : { animation: "show .3s forwards" }}
                onClick={closeSubContainer}><ArrowBackIosIcon /> </div>
            </>
          )
        }}

      </Transition>



      {/* React Router */}

      <Switch>
        <Route exact path="/">
          <Header showEvent={openNav} />
          <Menu showEvent={openNav} />
          <Home />
          <Card />
          <CardBottomRow />
          {/* <ItemCarousel passImages={image.map((currdata, index) => {
            return (
              <div className="carousel-images" key={index}>
                <img src={currdata.img} alt="img" />
              </div>
            )
          })} />
          <ItemCarousel passImages={image.map((currdata, index) => {
            if (currdata.id >= 8) {
              return (
                <div className="carousel-images" key={index}>
                  <img src={currdata.img} alt="img" />
                </div>
              )
            }
          })} /> */}
          <Footer />
        </Route>
        <Route exact path="/signin"> <Signin /> </Route>
        <Route exact path="/cart" component={Home} />
      </Switch>


    </>
  )
}
export default App;
