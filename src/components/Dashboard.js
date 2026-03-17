import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  updateDoc,
  doc
} from "firebase/firestore";

export default function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");

  const fetchLeads = async () => {
    const querySnapshot = await getDocs(collection(db, "leads"));
    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setLeads(data);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const updateStatus = async (id, status) => {
    const leadRef = doc(db, "leads", id);
    await updateDoc(leadRef, { status });
    fetchLeads();
  };

  const updateNotes = async (id) => {
    const leadRef = doc(db, "leads", id);
    await updateDoc(leadRef, { notes: "Followed up today" });
    fetchLeads();
  };

  // analytics
  const total = leads.length;
  const converted = leads.filter(l => l.status === "converted").length;

  return (
    <div>
      <h2>Dashboard</h2>

      <h3>Total Leads: {total}</h3>
      <h3>Converted Leads: {converted}</h3>

      <input
        placeholder="Search by name..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {leads
        .filter(l =>
          l.name.toLowerCase().includes(search.toLowerCase())
        )
        .map(lead => (
          <div key={lead.id} style={{ border: "1px solid white", margin: "10px", padding: "10px" }}>
            <h3>{lead.name}</h3>
            <p>{lead.email}</p>
            <p>Status: {lead.status}</p>
            <p>Notes: {lead.notes}</p>

            <button onClick={() => updateStatus(lead.id, "contacted")}>
              Contacted
            </button>

            <button onClick={() => updateStatus(lead.id, "converted")}>
              Converted
            </button>

            <button onClick={() => updateNotes(lead.id)}>
              Add Note
            </button>
          </div>
        ))}
    </div>
  );
}