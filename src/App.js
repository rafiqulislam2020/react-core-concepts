import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const employeeName =['Md.Rafiqul Islam','Nizam','Azad','Rahim']
  const products = [
    {name:'Photoshop',price:'$90.99'},
    {name:'Illustrator',price:'$60.99'},
    {name:'PDF Reader',price:'$20.99'}
  ]
  const productNames = products.map(product => product.name)
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            employeeName.map(employee => <li>{employee}</li>)
          }
        </ul>
        {
          products.map(pd =><Product product={pd}></Product>)
        }
      
      </header>
    </div>
  );
}

function Counter(){
  const[count, setCount] = useState(10);
  const handlerIncrease = () => setCount(count+1);
  const handlerDecrease = () => setCount(count-1);
  // {
    // const newCount = count + 1;
    // setCount(newCount);
  // };
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handlerIncrease}>Increase</button>
      <button onClick={handlerDecrease}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(result => result.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      {
        <ul>
          {
            console.log(users)
          }
          {
            users.map(user => <li>User Name: {user.name},Phone No: {user.phone}</li>)
          }
        </ul>
      }
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name,price} = props.product;
  console.log(name,price)
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
export default App;
