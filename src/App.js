import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState(new Date());

  const myDate = date.toLocaleString("pl-PL", {
    minute: "numeric",
    hour: "2-digit",
  });
  const mySecondDate = date.toLocaleString("pl-PL", {
    day: "2-digit",
    month: "numeric",
    year: "numeric",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="gora"></div>
      <div className="srodek">
        <div className="projekt">
          <div className="profil"></div>
        </div>
        <div className="date">
          {mySecondDate} {""}
          {myDate}
        </div>
      </div>
      <div className="dol" />
      <div className="whitespace" />
    </>
  );
}

export default App;
