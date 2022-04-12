import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";

const App = () => {
  const [users, setUsers] = useState<any>([]);

  const FetchUser = () => {
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  };

  const onClickHandler = () => {
    FetchUser();
  };

  useEffect(() => {
    FetchUser();
  }, []);

  return (
    <div className="App">
      <div className="bg-page">
        {users.map((user: any) => {
          return <Card key={user.email} user={user} click={onClickHandler} />;
        })}
      </div>
    </div>
  );
};

export default App;
