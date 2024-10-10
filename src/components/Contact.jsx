import React, {useState} from "react";

import "./Contact.css";
import Header from "./Header";
import Footer from "./Footer";

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


  async function submitHandler(e) {
    try {
        e.preventDefault();
        const data = {name, email, phone};
        const response = await fetch(
            `https://react-practise-movie-site-default-rtdb.asia-southeast1.firebasedatabase.app/contact`,
            {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        console.log(name, email, phone);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <>
      <Header />
      <div className="form">
        <form onSubmit={submitHandler}>
          <div className="control">
            <label htmlFor="Name">Name</label>
            <input type="text" onChange={(e)=> setName(e.target.value)}/>
          </div>
          <div className="control">
            <label>Email Id</label>
            <input type="email" onChange={(e)=> setEmail(e.target.value)}/>
          </div>
          <div className="control">
            <label>Phone Number</label>
            <input type="number" onChange={(e)=> setPhone(e.target.value)}/>
          </div>
          <button>Submit</button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
