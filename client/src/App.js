import React, {useState} from "react";
import LibraryBooks from "./components/LibraryBooks/LibraryBooks";
import './App.css';

function App() {
  const [bookActionPerformed, setBookActionPerformed] = useState(false);

  const setBookActionPerformedHandler = () => {
    setBookActionPerformed(!bookActionPerformed);
  }

  return (
    <div className="App">
      <header className="App-header">
        <LibraryBooks
          bookActionPerformed={bookActionPerformed}
          setBookActionPerformedHandler={setBookActionPerformedHandler}
        />
      </header>
    </div>
  );
}

export default App;
