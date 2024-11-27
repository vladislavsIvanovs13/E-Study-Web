import axios from "axios";
import {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ModalEdit({ onClose }) {
  const [title, setTitle] = useState('');
  const [employee, setEmployee] = useState('');
  const [structuralUnit, setStructuralUnit] = useState('');
  const [room, setRoom] = useState('');
  const [email, setEmail] = useState('');
  const [employeeCourses, setEmployeeCourses] = useState([]);
  const navigate = useNavigate();
  const {employeeId, courseId} = useParams();

  const updateEmployeeCourse = async (e) => {
      if (!title || !employee || !structuralUnit || !room || !email) return;
      e.preventDefault();
      await axios.put(`http://localhost:8080/employees/update/${employeeId}/${courseId}`,
          {title, employee, structuralUnit, room, email});
      onClose();
      navigate('/professors');
      window.location.reload();
  }

  const closeEditForm = (e) => {
      e.preventDefault();
      onClose();
      navigate('/professors');
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
                   value={employeeCourses.title}
                   onChange={(e) => setTitle(e.target.value)}>
            </input>
            <label htmlFor="employee">Mācībspēks</label><br/>
            <input required
                   type="text"
                   placeholder="Ievadi mācībspēku"
                   name="employee"
                   value={employeeCourses.employee}
                   onChange={(e) => setEmployee(e.target.value)}>
            </input>
            <label htmlFor="structuralUnit">Struktūrvienība</label><br/>
            <input required
                   type="text"
                   name="structuralUnit"
                   placeholder="Ievadi struktūrvienību"
                   value={employeeCourses.structuralUnit}
                   onChange={(e) => setStructuralUnit(e.target.value)}>
            </input>
            <label htmlFor="room">Kabinets</label><br/>
            <input required
                   type="text"
                   name="room"
                   placeholder="Ievadi kabinetu"
                   value={employeeCourses.room}
                   onChange={(e) => setRoom(e.target.value)}>
            </input>
            <label htmlFor="email">E-pasts</label><br/>
            <input required
                   type="text"
                   name="email"
                   placeholder="Ievadi e-mail"
                   value={employeeCourses.email}
                   onChange={(e) => setEmail(e.target.value)}>
            </input>
            <div className="flex justify-between mt-6">
              <button className="bg-rtu-green py-2 px-12 rounded-lg text-white"
                      onClick={updateEmployeeCourse}>Saglabāt</button>
              <button className="bg-[#9ebdbd] py-2 px-12 rounded-lg text-white"
                      onClick={closeEditForm}>Atcelt</button>
            </div>
          </form>
        </div>
      </div>
  );
}