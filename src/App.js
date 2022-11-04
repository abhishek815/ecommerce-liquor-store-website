import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Spirits from "./pages/Spirits";
import Home from "./pages/Home";
import { data } from "./data.js";
import { useEffect, useState } from "react";
import Cart from "./pages/Cart";
import Beer from "./pages/Beer";
import Success from "./components/ui/Success";
import { db } from "./Firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import Wine from "./pages/Wine";

function App() {
  const [added, setAdded] = useState(false);
  const [cart, setCart] = useState([]);
  const [alc, setAlc] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const alcCollectionRef = collection(db, "alcohol");

  function getAlcohol() {
    
    getDocs(alcCollectionRef)
      .then((response) => {
        setAlc(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoaded(true);
      })
      .catch((error) => console.log(error.message));
  }


  function transform() {
    data.forEach(element => {
      addDoc(alcCollectionRef, {title: element.title, url: element.url, salePrice: element.salePrice, type: element.type, categories: element.categories})
    });
  }

  useEffect(() => {
    getAlcohol();
    // transform()
  }, []);

  useEffect(() => {
    if (added) {
      setTimeout(() => {
        setAdded(!added);
      }, 5000);
    }
  }, [added]);

  function removeItem(item) {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  }

  function changeQuantity(item, quantity) {
    setCart(
      cart.map((alc) => {
        if (alc.id === item.id) {
          return {
            ...alc,
            quantity: +quantity,
          };
        } else {
          return alc;
        }
      })
    );
  }

  function addToCart(item) {
    setAdded(true);
    const dupe = cart?.findIndex((alc) => alc.id === item.id);
    if (dupe !== -1) {
      let new_cart = [...cart];
      new_cart[dupe].quantity += 1;
      setCart(new_cart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }

  return (
    <Router>
      <div className="App">
        <Nav cart={cart}> </Nav>
        {loaded && (
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route
              path="/spirits"
              exact
              element={<Spirits alc={alc} addToCart={addToCart} />}
            />
            <Route
              path="/beer"
              exact
              element={<Beer alc={alc} addToCart={addToCart} />}
            />
            <Route
              path="/wine"
              exact
              element={<Wine alc={alc} addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              exact
              element={
                <Cart
                  alc={alc}
                  cart={cart}
                  changeQuantity={changeQuantity}
                  removeItem={removeItem}
                />
              }
            />
          </Routes>
        )}
        {added && <Success setAdded={setAdded} />}
      </div>
    </Router>
  );
}

export default App;
