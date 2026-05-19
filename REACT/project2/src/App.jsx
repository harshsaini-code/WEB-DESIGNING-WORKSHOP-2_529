import React, { useEffect, useState } from "react";
function App() {
  //   const [formData, setFormData] = useState({
  //     username: '',
  //     email: '',
  //     password: ''
  //   });
  //   //useEffect

  //   useEffect(() => {
  //     console.log("Form Updated", formData);
  //   }, [formData])

  //

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'Arial' }}>
      <h2>Contact Us</h2>
      <form
        // onSubmit={handleSubmit} 
        style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            // value={formData.name}
            // onChange={handleChange}
            required
          // style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            required
          // style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            // value={formData.address}
            // onChange={handleChange}
            required
          // style={{ ...inputStyle, height: '80px' }}
          />
        </div>

        <button type="submit"
        // style={buttonStyle}
        >
          Submit
        </button>

      </form>
    </div>
  );
};





export default App