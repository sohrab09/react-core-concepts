import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const stationary = ['Pencil', 'Rubber', 'Pen', 'Paper','Cutter', 'Tap Recorder', 'Diary', 'Ball Pen', 'Marker']

  const products = [
    {name: 'Photoshop', price: '$90.99', warranty: '1 year', discount: '$5'},
    {name: 'Illustrator', price: '$80.99', warranty: '1 year', discount: '$5'},
    {name: 'PDF Reader', price: '$70.99', warranty: '1 year', discount: '$5'},
    {name: 'Premier Pro', price: '$60.99', warranty: '1 year', discount: '$5'},
  ]

  const friends = [
    {name: 'Rayhan', home: 'Comilla', mobile: '0111111111', study: 'CSE'},
    {name: 'Miraj', home: 'Faridganj', mobile: '02222222222', study: 'CSE'},
    {name: 'Sahin', home: 'Matlab', mobile: '03333333333', study: 'CSE'},
    {name: 'Pranto', home: 'Comilla', mobile: '04444444444', study: 'CSE'},
  ]
  return (
    <div className="App">
      <header className="App-header">
          <h1>Hello World!</h1>
        <Counter></Counter>

        <Users></Users>
        <ul>
          {
            stationary.map(name => <li>{name}</li>)
          }
        </ul>
        <ul>
         {
           products.map(something => <li>{something.name}</li>)
         }
         {
          products.map(something => <li>{something.price}</li>)
         }
         {
           products.map(something => <li>{something.discount}</li>)
         }
        </ul>

        {/* Create dynamically product list  */}
        {
          products.map(product => <Product product={product}></Product>)
        }
        {
          friends.map(fd => <Friends friends={fd}></Friends>)
        }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Product product={products[3]}></Product> */}

        {/* Set data dynamically */}
        <Person name="Arefin Hossain" department="Computer Science and Engineering" batch= "39C" id="001"></Person>
        <Person name="Sagor Islam" department="Computer Science and Engineering" batch= "39C" id="002"></Person>
        <Person name="Rahim Khan" department="Computer Science and Engineering" batch= "39C" id="003"></Person>
        <Person name="Shamim Hossain" department="Computer Science and Engineering" batch= "39C" id="004"></Person>

        {/* set data statically */}
        {/* <div>
          <Person name="Mr. Akram Hossain" department="CSE" batch = "39C" id="20"></Person>
          <Person name="Mr. Ikram Hossain" department="CSE" batch = "39C" id="21"></Person>
          <Person name="Mr. Afzal Hossain" department="CSE" batch = "39C" id="22"></Person>
          <Person name="Mr. Ali Hossain" department="CSE" batch = "39C" id="23"></Person>
          <Person name="Mr. Arman Hossain" department="CSE" batch = "39C" id="24"></Person>
        </div> */}
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
    
  //   // Shortcut System 
  //   setCount(count + 1);

  //   Another System 
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  // const handleDecrease = () =>{
   
  //   // Shortcut System
  //   setCount(count - 1);
    
  //   // Another System 
  //   const newCount = count - 1;
  //   setCount(newCount);
  // }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h2>Dynamic Users: {users.length} </h2>
      <ul>
        {
          users.map(user =><li>Name: {user.name}, Phone: {user.phone}</li>)
        }
        {
          users.map(user =><li>{user.phone}</li>)
        }
      </ul>
    </div>
  )
}

function Friends(props) {
  // Set Style 
  const nameStyle ={
    backgroundColor:'black',
    color: 'gray',
    border: '2px solid green', 
    margin: '15px', 
    padding: '15px',
    borderRadius: '20px',
    height: '250px',
    width: '250px',
    float: 'left'
  }
  const {name, home, mobile, study} = props.friends;
  return(
    <div style={nameStyle}>
      <h3>Name: {name}</h3>
      <p>Home: {home}</p>
      <p>Mobile: {mobile}</p>
      <p>Department: {study}</p>
    </div>
  )
}
//  Product add 
function Product(props) {
  const buttonStyle={
    backgroundColor: 'black',
    color: 'white',
    border: '2px solid cyan',
    borderRadius: '5px',
    cursor: 'pointer'  
  }
  const productStyle={
    backgroundColor: 'black',
    color: 'cyan',
    border: '2px solid cyan', 
    margin: '15px', 
    padding: '15px',
    borderRadius: '200px',
    height: '300px',
    width: '300px',
    float: 'left'
  }
  const {name, price, warranty, discount} = props.product;
  return(
    <div style={productStyle}>
      <h3>Name: {name}</h3>
      <p>Price: {price}</p>
      <p>Discount: {discount}</p>
      <p>Warranty: {warranty}</p>
      <button style={buttonStyle}>Buy Now</button>
    </div>
  )
}


{/* Set data dynamically */}
function Person(props) {
      const personStyle = {
        color: '#61dafb',
        border: '2px solid cyan', 
        margin: '15px', 
        padding: '15px'
      }
  return(
    <div style={personStyle}>
      <h3>Name: {props.name}</h3>
      <p>Department: {props.department}</p>
      <p>Batch: {props.batch}</p>
      <p>ID: {props.id}</p>
    </div>
  )
}

{/* set data statically */}

// function Person(props) {
//   const personStyle = {
//     color: '#61dafb',
//     border: '2px solid cyan', 
//     margin: '15px', 
//     padding: '15px'
//   }
//   return (
//     <div style={personStyle}>
//       <h2>Name: {props.name}</h2>
//       <h4>Department: {props.department}</h4>
//       <h4>Batch: {props.batch}</h4>
//       <h4>ID: {props.id}</h4>
//     </div>
//     )
// }

export default App;
