import { useNavigate } from "react-router-dom";

function Kart() {
  const navigate = useNavigate();
  return (
    <>
      <h1>This is the kart.</h1>
      <button onClick={() => navigate(-1)}>Close</button>
    </>
  );
}

export default Kart;
