import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddLead() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addLead = async () => {
    await addDoc(collection(db, "leads"), {
      name,
      email,
      status: "new",
      notes: "",
      createdAt: new Date()
    });
    alert("Lead added!");
  };

  return (
    <div>
      <h2>Add Lead</h2>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <button onClick={addLead}>Submit</button>
    </div>
  );
}