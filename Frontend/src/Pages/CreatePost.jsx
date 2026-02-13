import axios from "axios";
import React from 'react'
import { useNavigate } from "react-router-dom";

function CreatePost() {

  const navigate = useNavigate();

  async function handlesumbit(e) {
      e.preventDefault();

      const formdata = new FormData(e.target);
      console.log(formdata)
      axios.post("http://localhost:4000/create-post",formdata)
      .then((res)=>{
          console.log(res)
          navigate("/feed");
      })
      
  }



  return (
    <div style={{ 
        width: "16rem",
        margin: "100px auto",
        padding: "20px",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
    }}>
        <h2 style={{ textAlign: "center" }}>Create Post</h2>

        <form onSubmit={handlesumbit}>
          <input
            type="file"
            accept="image/*"
            name="image"
            style={{ width: "100%", marginBottom: "15px" }}
          />

          <textarea
            placeholder="Enter caption..."
            style={{ width: "100%", marginBottom: "15px", padding: "8px" }}
            name="caption"
          ></textarea>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              background: "black",
              color: "white",
              border: "none",
              cursor: "pointer"
            }}
          >
            Create Post
          </button>
        </form>
    </div>
  )
}

export default CreatePost