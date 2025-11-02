import axios from "axios";
import React from "react";

function History() {
  const email = sessionStorage.getItem("userEmail");
  const fetchRoom = async (e) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/bookroom/${email}`
      );
      console.log(response.data);
    } catch (error) {
      console.log("error in fetching : ", error.message);
    }
  };

  return (
    <>
      <button onClick={fetchRoom}>Fetch</button>
    </>
  );
}

export default History;
