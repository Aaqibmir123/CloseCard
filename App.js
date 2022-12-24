import { Fragment, useState } from 'react';
import Model from './Ui/Model';
import Header from './Layout/Header';
import Meals from './Meals/Meals';
import Cart from './Card/Card';

function App() {

  const [cardShow,setcardHide]=useState(false);

  const cardhandlerShow=()=>{
    setcardHide(true);
  }
const cardhandlerHide=()=>{
  setcardHide(false);
}


  return (
    <Fragment>
      {cardShow && <Cart  onclose={cardhandlerHide}/>}
      <Header  onshow={cardhandlerShow}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;