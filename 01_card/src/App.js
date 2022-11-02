import './App.css';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <h1>Card</h1>
      <Profile 
        image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" 
        name="제시카 오" 
        job="Designer"
        isNew />
      <Profile 
        image="https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
        job="프론트엔드 개발자"
        isNew={false} 
        />
      <Profile 
        image="https://images.unsplash.com/photo-1573600073955-f15b3b6caab7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"
        name ="전지현" />
      <Profile
        name ="전지현" 
        job="시설 관리인" />
      <Profile        
        job="백엔드 개발자"  />
      
    </>

  )
}

export default App;
