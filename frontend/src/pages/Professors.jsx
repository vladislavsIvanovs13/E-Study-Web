import { NavBar, Profile, ModalAdd, ModalEdit } from '../components';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Professors() {
    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [loading, setLoading] = useState(true);
    const [employeeCourses, setEmployeeCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
    axios.get('http://localhost:8080/employees')
        .then(response => {
            setEmployeeCourses(response.data);
            setLoading(false);
        })
    }, []);

    const deleteEmployeeCourse = async (employeeId, courseId) => {
        sessionStorage.setItem('scrollPos', window.scrollY.toString());
        await axios.delete(`http://localhost:8080/employees/delete/${employeeId}/${courseId}`);
        window.location.reload();

        window.addEventListener('load', () => {
            setTimeout(() => {
                window.scrollTo(0, parseInt(sessionStorage.getItem('scrollPos'),10));
                sessionStorage.removeItem('scrollPos');
            }, 1000)
        })
    }

    const editEmployeeCourse = (employeeId, courseId) => {
        navigate(`/professors/update/${employeeId}/${courseId}`);
    }

    return (
        <div className="mx-6 mt-12 text-sm sm:mx-24 sm:text-base relative">
            <Profile/>
            <NavBar/>
            <div className="mt-12">
            <table border="2" style={{width: '100%'}}>
              <thead className="fade-in-row h-[50px] border-2 text-center border-rtu-green bg-[#679999] text-rtu-green mt-12 relative">
                <tr>
                  <th className="border-r-2 border-rtu-green">Kursa nosaukums</th>
                  <th className="border-r-2 border-rtu-green">Mācībspēks</th>
                  <th className="border-r-2 border-rtu-green">Struktūrvienība</th>
                  <th className="border-r-2 border-rtu-green">Kabinets</th>
                  <th className="border-r-2 border-rtu-green">E-pasts</th>
                  <th className="border-r-2 border-rtu-green">Darbība</th>
                </tr>
              </thead>
              <tbody>
                {employeeCourses.map((row, index) => (
                    <tr className="h-[50px] fade-in-row" key={index}>
                      <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.title}</td>
                      <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.employee}</td>
                      <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.structuralUnit}</td>
                      <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.room}</td>
                      <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.email}</td>
                      <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12"
                        style={{ textAlign: 'center' }}>
                        <div style={ {display: 'inline-flex', gap: '8px'} }>
                          <button onClick={() => {
                              setShowEdit(true);
                              editEmployeeCourse(row.employeeId, row.courseId);
                          }}
                          className="bg-rtu-green hover:opacity-50 text-white py-1 px-4 rounded-lg">Rediģēt</button>
                          {showEdit && createPortal(
                              <ModalEdit onClose={() => setShowEdit(false)}/>,
                              document.body
                          )}
                          <button className="bg-rtu-green hover:opacity-50 text-white py-1 px-4 rounded-lg"
                              onClick={() => deleteEmployeeCourse(row.employeeId, row.courseId)}>Dzēst</button>
                        </div>
                      </td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
            <div className="sm:flex mt-6 mb-6">
                <button onClick={() => setShowAdd(true)}
                    className="bg-rtu-green hover:opacity-50 text-white py-2 px-4 rounded-lg mr-4"
                    hidden={loading} disabled={loading}>Pievienot</button>
                {showAdd && createPortal(
                    <ModalAdd onClose={() => setShowAdd(false)}/>,
                    document.body)}
            </div>
        </div>
    );
}