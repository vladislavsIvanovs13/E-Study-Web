import axios from "axios";
import { useState } from "react";

export default function ModalAdd({ onClose }) {
  const [title, setTitle] = useState('');
  const [employee, setEmployee] = useState('');
  const [structuralUnit, setStructuralUnit] = useState('');
  const [room, setRoom] = useState('');
  const [email, setEmail] = useState('');

  const addEmployeeCourse = async (e) => {
      if (!title || !employee || !structuralUnit || !room || !email) return;
      e.preventDefault();
      await axios.post('http://localhost:8080/employees',
          {title, employee, structuralUnit, room, email});
      onClose();
      window.location.reload();
  }

  return (
      <div className={`fixed inset-0 flex justify-center items-center
      ${open ? "visible bg-black/40" : "invisible"}`}>
        <div className="bg-white rounded-xl w-1/3 py-8 px-12" onClick={(e) => e.stopPropagation()}>
          <form>
            <label htmlFor="title">Kursa nosaukums</label><br/>
            <input required
                   type="text"
                   placeholder="Ievadi kursu"
                   name="title"
                   value={title}
                   onChange={(e) => setTitle(e.target.value)}>
            </input>
            <label htmlFor="employee">Mācībspēks</label><br/>
            <input required
                   type="text"
                   placeholder="Ievadi mācībspēku"
                   name="employee"
                   value={employee}
                   onChange={(e) => setEmployee(e.target.value)}>
            </input>
            <label htmlFor="structuralUnit">Struktūrvienība</label><br/>
            <input required
                   type="text"
                   name="structuralUnit"
                   placeholder="Ievadi struktūrvienību"
                   value={structuralUnit}
                   onChange={(e) => setStructuralUnit(e.target.value)}>
            </input>
            <label htmlFor="room">Kabinets</label><br/>
            <input required
                   type="text"
                   name="room"
                   placeholder="Ievadi kabinetu"
                   value={room}
                   onChange={(e) => setRoom(e.target.value)}>
            </input>
            <label htmlFor="email">E-pasts</label><br/>
            <input required
                   type="text"
                   name="email"
                   placeholder="Ievadi e-mail"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}>
            </input>
            <div className="flex justify-between mt-6">
              <button className="bg-rtu-green py-2 px-12 rounded-lg text-white"
                      onClick={addEmployeeCourse}>Saglabāt</button>
              <button className="bg-[#9ebdbd] py-2 px-12 rounded-lg text-white"
                      onClick={() => onClose()}>Atcelt</button>
            </div>
          </form>
        </div>
      </div>
    );
}