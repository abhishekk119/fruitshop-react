import Sectionlabel from "./Sectionlabel";
import Fruitcard from "./Fruitcard";
import Juicecard from "./Juicecard";
import Apples from "./assets/apple.avif";
import Banana from "./assets/banana2.webp";
import Orange from "./assets/Oranges.webp";
import Watermelon from "./assets/watermelon.jpg";
import Pineapple from "./assets/pineapple.webp";
import Mango from "./assets/mango.webp";
import Mangomilkshake from "./assets/mangomilkshake.jpg";
import Applemilkshake from "./assets/Apple-Milkshake.webp";
import Strawberrymilkshake from "./assets/strawberry-milkshake.jpg";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import App from "./App";

function Home({ addToCart, showAlert }) {
  const fruits = [
    {
      imageSource: Apples,
      name: "Kashmiri Apple",
      price: 220,
      description: "1kg Kashmiri apples fresh from the farm.",
    },
    {
      imageSource: Banana,
      name: "Robusta Banana",
      price: 80,
      description: "1kg banana fresh from the farm.",
    },
    {
      imageSource: Orange,
      name: "American Oranges",
      price: 90,
      description: "1kg orange fresh from the farm.",
    },
    {
      imageSource: Watermelon,
      name: "Belmont Watermelon",
      price: 140,
      description: "1kg watermelon fresh from the farm.",
    },
    {
      imageSource: Pineapple,
      name: "Spanish Pineapple",
      price: 85,
      description: "1kg pineapple fresh from the farm.",
    },
    {
      imageSource: Mango,
      name: "Fruit King Mango",
      price: 210,
      description: "1kg mango fresh from the farm.",
    },
  ];

  const juices = [
    {
      imageSource: Mangomilkshake,
      name: "Pure Mango Milkshake",
      price: 200,
      description: "Fresh mango milkshake refresher.",
    },
    {
      imageSource: Applemilkshake,
      name: "Rich Apple Milkshake",
      price: 80,
      description: "Fresh apple milkshake refresher.",
    },
    {
      imageSource: Strawberrymilkshake,
      name: "Strawberry Milkshake",
      price: 90,
      description: "Fresh strawberry milkshake refresher.",
    },
  ];

  let [counter, setCounter] = useState(0);
  let [showCounter, setShowCounter] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function incrementCounter() {
    setCounter((prev) => prev + 1);
    setShowCounter(true);
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    // Cleanup function
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  // Add the alert timeout effect here

  return (
    <>
      <div className="maincontainer">
        <Navbar
          counter={counter}
          showCounter={showCounter}
          onKartClick={() => setShowKart(true)}
        />

        {showAlert && (
          <div className="alert">
            <p>Cart updated!</p>
          </div>
        )}
        <Sectionlabel sectionname="Fruits" id="fruits-section" />
        <div className="fruitcardcontainer" id="fruits">
          {fruits.map((fruit, i) => (
            <Fruitcard
              key={i}
              imageSource={fruit.imageSource}
              name={fruit.name}
              price={fruit.price}
              description={fruit.description}
              onAdd={() => addToCart(fruit)}
            />
          ))}
        </div>
        <hr />
        <Sectionlabel sectionname="Juices" id="juices-section" />
        <div className="juicecardcontainer" id="juices">
          {juices.map((juice, i) => (
            <Juicecard
              key={i}
              imageSource={juice.imageSource}
              name={juice.name}
              price={juice.price}
              description={juice.description}
              onAdd={() => addToCart(juice)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
