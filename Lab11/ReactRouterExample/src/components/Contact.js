import { useNavigate } from "react-router-dom"

export const Contact = () => {
  const navigate = useNavigate();
  
  const handleSubmit = () =>{
    console.log("We clicked a button")
    navigate("/")
  }
  return (
    <>
    <div>This is the Contact page</div>
    <button onClick={handleSubmit}>Back To Home</button>
    </>
  )
}
