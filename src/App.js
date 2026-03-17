import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddLead from "./components/AddLead";

function App() {
  const [user, setUser] = useState(null);

  if (!user) return <Login setUser={setUser} />;

  return (
    <div>
      <h1>Mini CRM</h1>
      <AddLead refresh={() => window.location.reload()} />
      <Dashboard />
    </div>
  );
}

export default App;
