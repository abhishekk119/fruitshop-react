import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Fruitcard from './Fruitcard'
import Apples from './assets/apple.avif'
import Banana from './assets/banana2.webp'
import Orange from './assets/Oranges.webp'
import Watermelon from './assets/watermelon.jpg'
import Pineapple from './assets/pineapple.webp'
import Mango from './assets/mango.webp'
import Mangomilkshake from './assets/mangomilkshake.jpg'
import Applemilkshake from './assets/Apple-Milkshake.webp'
import Strawberrymilkshake from './assets/strawberry-milkshake.jpg'
import Sectionlabel from './Sectionlabel'
import Juicecard from './Juicecard'

function App() {
  let [counter, setCounter] = useState(0)
  let [showCounter, setShowCounter] = useState(false);

  function incrementCounter() {
        setCounter(prev => prev + 1)
        setShowCounter(true);
    }
  return(
    <>
    <div className='maincontainer'>
    <Navbar counter={counter} showCounter={showCounter}/>
    <Sectionlabel sectionname = "Fruits"/>
    <div className='fruitcardcontainer'>
    <Fruitcard imageSource = {Apples} name = "Kashmiri Apple" price= "$2.0" description= "Fresh Apples from our farm." functionname={incrementCounter}/>
    <Fruitcard imageSource = {Banana} name = "Robusta Banana" price= "$1.2" description= "Fresh Bananas from our farm." functionname={incrementCounter}/>
    <Fruitcard imageSource = {Orange} name = "American Oranges" price= "$1.3" description= "Fresh Oranges from our farm." functionname={incrementCounter}/>
    <Fruitcard imageSource = {Watermelon} name = "Belmont Watermelon" price= "$2.0" description= "Fresh Watermelons from our farm." functionname={incrementCounter}/>
    <Fruitcard imageSource = {Pineapple} name = "Spanish Pineapple" price= "$1.8" description= "Fresh Pineapples from our farm." functionname={incrementCounter}/>
    <Fruitcard imageSource = {Mango} name = "Fruit King Mango" price= "$2.5" description= "Fresh Mango from our farm." functionname={incrementCounter}/>
    </div>
    <Sectionlabel sectionname = "Juices"/>
    <div className='juicecardcontainer'>
    <Juicecard imageSource={Mangomilkshake} name = "Pure Mango Milkshake" price= "$4.3" description= "Fresh mango milkshake refresher." functionname={incrementCounter}/>
    <Juicecard imageSource={Applemilkshake} name = "Rich Apple Milkshake" price= "$5.3" description= "Fresh apple milkshake refresher." functionname={incrementCounter}/>
    <Juicecard imageSource={Strawberrymilkshake} name = "Strawberry Milkshake" price= "$4.4" description= "Fresh strawberry milkshake refresher." functionname={incrementCounter}/>
    </div>
    </div>
    </>
    )
}

export default App
