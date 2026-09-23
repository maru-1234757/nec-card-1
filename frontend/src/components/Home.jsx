import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();

  function goToAddress() {
    navigate("/address");
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={goToAddress}>Go to Address</button>
    </div>
  );
}
