import { useState } from 'react';

const BLUE = 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=400&q=80';
const RED = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80';

// ---------- PART 1: PROPS (slides 4-5) ----------
// Product receives data from outside and only shows it.
function Product(props) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16 }}>
      <h3>{props.name}</h3>
      <p>ID: {props.id}</p>
      <p>Date Purchased: {props.datePurchased}</p>
    </div>
  );
}

// ---------- PART 2: PROPS + STATE (our shoe card) ----------
// name and price are props. image is state: it changes when you click.
function ProductCard({ name, price }) {
  const [image, setImage] = useState(BLUE);

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16 }}>
      <h3>{name}</h3>
      <p>£{price}</p>
      <img src={image} width="200" />
      <br />
      <button onClick={() => setImage(RED)}>Red</button>
      <button onClick={() => setImage(BLUE)}>Blue</button>
    </div>
  );
}

// ---------- PART 3: INPUT + STATE + EVENTS (slides 8-14) ----------
// The user types the details. React stores them in state.
function ProductPanel() {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [productDatePurchased, setProductDatePurchased] = useState('');
  const [message, setMessage] = useState('');

  function showClickHandler() {
    setMessage(productName + ' (' + productId + '), bought on ' + productDatePurchased);
  }

  function clearClickHandler() {
    setProductId('');
    setProductName('');
    setProductDatePurchased('');
    setMessage('');
  }

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16 }}>
      <h3>Product Details</h3>

      <input
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <br />
      <input
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <br />
      <input
        placeholder="Product Date Purchased"
        value={productDatePurchased}
        onChange={(e) => setProductDatePurchased(e.target.value)}
      />
      <br />

      <button onClick={showClickHandler}>Show</button>
      <button onClick={clearClickHandler}>Clear</button>

      {/* Live view of the state: changes with every letter you type */}
      <p>productId is now: {productId}</p>

      {/* Appears after clicking Show */}
      <p><b>{message}</b></p>
    </div>
  );
}

// ---------- THE PAGE ----------
export default function App() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, padding: 16 }}>
      <Product name="Laptop" id="P101" datePurchased="04/10/2026" />
      <Product name="Phone" id="P102" datePurchased="05/10/2026" />
      <ProductCard name="Running Shoe" price={40} />
      <ProductCard name="Walking Boot" price={65} />
      <ProductPanel />
    </div>
  );
}
