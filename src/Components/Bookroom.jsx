import axios from "axios";
import React, { useState } from "react";
function Bookroom() {
  const email = sessionStorage.getItem("userEmail");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [requireDate, setRequireDate] = useState("");
  const [result, setResult] = useState("");

  const handleBookRoom = async (e) => {
    e.preventDefault();
    console.log("book room");

    try {
      const response = await axios.post(
        "https://test-react-1le8.onrender.com/bookroom",
        {
          email,
          name,
          type,
          duration,
          requireDate,
        }
      );
      console.log("data snet");
      setResult(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("error in frontend ", error.message);
    }
  };
  return (
    <div>
      <form className="form-container">
        <legend>Book room</legend>
        <label>Enter Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <p>
          <b>per day :</b> Rs.2000 <b> per hour :</b> Rs.300
        </p>
        <br></br>
        <label>Select Room type : </label>
        <input
          type="radio"
          name="type"
          value="day"
          checked={type === "day"}
          onChange={(e) => setType(e.target.value)}
        />
        day
        <input
          type="radio"
          name="type"
          value="hour"
          checked={type === "hour"}
          onChange={(e) => setType(e.target.value)}
        />
        hour
        <br></br>
        <br></br>
        <label>Time Duration </label>
        <input
          type="number"
          placeholder="eg : 2"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <br></br>
        <label>Require on Date</label>
        <input
          type="date"
          value={requireDate}
          onChange={(e) => setRequireDate(e.target.value)}
        />
        <br></br>
        <button onClick={handleBookRoom}>Book room </button>
        <p></p>
      </form>
      {result && (
        <div
          style={{
            position: "absolute",
            color: result?.color,
            fontSize: "18px",
            textAlign: " center",
            marginTop: "10px",
            top: "78%",
            left: "47%",
          }}
        >
          {result.message}
        </div>
      )}
    </div>
  );
}

export default Bookroom;
