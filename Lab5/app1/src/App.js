import logo from './logo.svg';
import About from './About';
import './App.css';
function TestingComponent()
{
  return (
    <button>Click Me</button>
  );
}

function SignUp()
{
  return (
    <button>Sign up</button>
  );
}

function LogIn()
{
  return (
    <button>Log In</button>
  );
}

let isNewUser = false;
let content;
/*
if(isNewUser)
{
  content = <SignUp/>;
}
else
{
  content = <LogIn/>;
}
*/
function App() {
  return (
    <>
    <h1>Hello to our first app</h1>
    <p>This is a test for paragraph</p>
    <TestingComponent/>
    <About />
    {isNewUser? <SignUp/>: <LogIn/>}
    </>
  );
}

export default App;
