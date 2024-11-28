import {NavBar, Profile, ModalInfo, ModalSubject, ModalGrade, ModalEdit} from '../components';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function Schedule() {

  const [showInfo, setShowInfo] = useState(false);
  const [showSubject, setShowSubject] = useState(false);
  const [showGrade, setShowGrade] = useState(false);
  const [employeeCourses, setEmployeeCourses] = useState([]);

  const first = [{time: "10:15-11:50", course: "Datoru organizācija un asambleri",
      room: "Āze. 12-102", professor: "Uldis Sukovskis", topic: "Loops", homework: "", mark: "10", comment: "Great job"}];
  const second = [{time: "12:30-14:05", course: "Sistēmu analīze un zināšanu iegūšana",
      room: "Āze. 12-102", professor: "Mārīte Kirikova", topic: "BPMN diagrammas", homework: "", mark: "", comment: ""}];

  return (
      <div className="mx-6 mt-12 text-sm sm:mx-24 sm:text-base">
          <Profile/>
          <NavBar/>
          <div className="mt-12">
              <table border="2" style={{width: '100%'}}>
                  <thead
                      className="fade-in-row h-[50px] border-2 text-center border-rtu-green bg-[#679999] text-rtu-green mt-12 relative">
                  <tr className="border-r-2 border-rtu-green">
                      <th colSpan="8">Pirmdiena (28.10.2024.)</th>
                  </tr>
                  </thead>
                  <tbody
                      className="fade-in-row h-[50px] border-2 text-center border-rtu-green bg-[#679999] text-rtu-green mt-12 relative">
                  <tr>
                      <th className="border-r-2 border-rtu-green">Laiks</th>
                      <th className="border-r-2 border-rtu-green">Studiju kurss</th>
                      <th className="border-r-2 border-rtu-green">Auditorija</th>
                      <th className="border-r-2 border-rtu-green">Mācībspēks</th>
                      <th className="border-r-2 border-rtu-green">Tēma</th>
                      <th className="border-r-2 border-rtu-green">Mājasdarbs</th>
                      <th className="border-r-2 border-rtu-green">Atzīme</th>
                      <th className="border-r-2 border-rtu-green">Komentārs</th>
                  </tr>
                  {first.map((row, index) => (
                      <tr className="h-[50px] fade-in-row" key={index}>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.time}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.course}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.room}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.professor}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.topic}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.homework}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.mark}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.comment}</td>
                      </tr>
                  ))}
                  {second.map((row, index) => (
                      <tr className="h-[50px] fade-in-row" key={index}>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.time}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.course}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.room}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.professor}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.topic}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.homework}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.mark}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.comment}</td>
                      </tr>
                  ))}
                  </tbody>
              </table>
          </div>
          <div className="sm:flex mt-6">
              <button onClick={() => setShowInfo(true)}
                      className="bg-rtu-green hover:opacity-50 text-white py-2 px-4 rounded-lg mr-4">Mainīt norises
                  informāciju
              </button>
              {showInfo && createPortal(
                  <ModalInfo onClose={() => setShowInfo(false)}/>,
                  document.body
              )}
              <button onClick={() => setShowSubject(true)}
                      className="bg-rtu-green hover:opacity-50 text-white py-2 px-4 rounded-lg mr-4">Mainīt tēmu
              </button>
              {showSubject && createPortal(
                  <ModalSubject onClose={() => setShowSubject(false)}/>,
                  document.body
              )}
              <button onClick={() => setShowGrade(true)}
                      className="bg-rtu-green hover:opacity-50 text-white py-2 px-4 rounded-lg mr-4">Mainīt atzīmi
              </button>
              {showGrade && createPortal(
                  <ModalGrade onClose={() => setShowGrade(false)}/>,
                  document.body
              )}
          </div>

          <div className="mt-12">
              <table border="2" style={{width: '100%'}}>
                  <thead
                      className="fade-in-row h-[50px] border-2 text-center border-rtu-green bg-[#679999] text-rtu-green mt-12 relative">
                  <tr className="border-r-2 border-rtu-green">
                      <th colSpan="8">Otrdiena (29.10.2024.)</th>
                  </tr>
                  </thead>
                  <tbody
                      className="fade-in-row h-[50px] border-2 text-center border-rtu-green bg-[#679999] text-rtu-green mt-12 relative">
                  <tr>
                      <th className="border-r-2 border-rtu-green">Laiks</th>
                      <th className="border-r-2 border-rtu-green">Studiju kurss</th>
                      <th className="border-r-2 border-rtu-green">Auditorija</th>
                      <th className="border-r-2 border-rtu-green">Mācībspēks</th>
                      <th className="border-r-2 border-rtu-green">Tēma</th>
                      <th className="border-r-2 border-rtu-green">Mājasdarbs</th>
                      <th className="border-r-2 border-rtu-green">Atzīme</th>
                      <th className="border-r-2 border-rtu-green">Komentārs</th>
                  </tr>
                  {first.map((row, index) => (
                      <tr className="h-[50px] fade-in-row" key={index}>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.time}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.course}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.room}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.professor}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.topic}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.homework}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.mark}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.comment}</td>
                      </tr>
                  ))}
                  {second.map((row, index) => (
                      <tr className="h-[50px] fade-in-row" key={index}>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.time}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.course}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.room}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.professor}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.topic}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.homework}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.mark}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.comment}</td>
                      </tr>
                  ))}
                  </tbody>
              </table>
          </div>
          <div className="sm:flex mt-6">
              <button onClick={() => setShowInfo(true)}
                      className="bg-rtu-green hover:opacity-50 text-white py-2 px-4 rounded-lg mr-4">Mainīt norises
                  informāciju
              </button>
              {showInfo && createPortal(
                  <ModalInfo onClose={() => setShowInfo(false)}/>,
                  document.body
              )}
              <button onClick={() => setShowSubject(true)}
                      className="bg-rtu-green hover:opacity-50 text-white py-2 px-4 rounded-lg mr-4">Mainīt tēmu
              </button>
              {showSubject && createPortal(
                  <ModalSubject onClose={() => setShowSubject(false)}/>,
                  document.body
              )}
              <button onClick={() => setShowGrade(true)}
                      className="bg-rtu-green hover:opacity-50 text-white py-2 px-4 rounded-lg mr-4">Mainīt atzīmi
              </button>
              {showGrade && createPortal(
                  <ModalGrade onClose={() => setShowGrade(false)}/>,
                  document.body
              )}
          </div>

          <div className="mt-12">
              <table border="2" style={{width: '100%'}}>
                  <thead
                      className="fade-in-row h-[50px] border-2 text-center border-rtu-green bg-[#679999] text-rtu-green mt-12 relative">
                  <tr className="border-r-2 border-rtu-green">
                      <th colSpan="8">Trešdiena (30.10.2024.)</th>
                  </tr>
                  </thead>
                  <tbody
                      className="fade-in-row h-[50px] border-2 text-center border-rtu-green bg-[#679999] text-rtu-green mt-12 relative">
                  <tr>
                      <th className="border-r-2 border-rtu-green">Laiks</th>
                      <th className="border-r-2 border-rtu-green">Studiju kurss</th>
                      <th className="border-r-2 border-rtu-green">Auditorija</th>
                      <th className="border-r-2 border-rtu-green">Mācībspēks</th>
                      <th className="border-r-2 border-rtu-green">Tēma</th>
                      <th className="border-r-2 border-rtu-green">Mājasdarbs</th>
                      <th className="border-r-2 border-rtu-green">Atzīme</th>
                      <th className="border-r-2 border-rtu-green">Komentārs</th>
                  </tr>
                  {first.map((row, index) => (
                      <tr className="h-[50px] fade-in-row" key={index}>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.time}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.course}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.room}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.professor}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.topic}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.homework}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.mark}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.comment}</td>
                      </tr>
                  ))}
                  {second.map((row, index) => (
                      <tr className="h-[50px] fade-in-row" key={index}>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.time}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.course}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.room}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.professor}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.topic}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.homework}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.mark}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.comment}</td>
                      </tr>
                  ))}
                  </tbody>
              </table>
          </div>
          <div className="sm:flex mt-6">
              <button onClick={() => setShowInfo(true)}
                      className="bg-rtu-green hover:opacity-50 text-white py-2 px-4 rounded-lg mr-4">Mainīt norises
                  informāciju
              </button>
              {showInfo && createPortal(
                  <ModalInfo onClose={() => setShowInfo(false)}/>,
                  document.body
              )}
              <button onClick={() => setShowSubject(true)}
                      className="bg-rtu-green hover:opacity-50 text-white py-2 px-4 rounded-lg mr-4">Mainīt tēmu
              </button>
              {showSubject && createPortal(
                  <ModalSubject onClose={() => setShowSubject(false)}/>,
                  document.body
              )}
              <button onClick={() => setShowGrade(true)}
                      className="bg-rtu-green hover:opacity-50 text-white py-2 px-4 rounded-lg mr-4">Mainīt atzīmi
              </button>
              {showGrade && createPortal(
                  <ModalGrade onClose={() => setShowGrade(false)}/>,
                  document.body
              )}
          </div>

          <div className="mt-12">
              <table border="2" style={{width: '100%'}}>
                  <thead
                      className="fade-in-row h-[50px] border-2 text-center border-rtu-green bg-[#679999] text-rtu-green mt-12 relative">
                  <tr className="border-r-2 border-rtu-green">
                      <th colSpan="8">Ceturtdiena (31.10.2024.)</th>
                  </tr>
                  </thead>
                  <tbody
                      className="fade-in-row h-[50px] border-2 text-center border-rtu-green bg-[#679999] text-rtu-green mt-12 relative">
                  <tr>
                      <th className="border-r-2 border-rtu-green">Laiks</th>
                      <th className="border-r-2 border-rtu-green">Studiju kurss</th>
                      <th className="border-r-2 border-rtu-green">Auditorija</th>
                      <th className="border-r-2 border-rtu-green">Mācībspēks</th>
                      <th className="border-r-2 border-rtu-green">Tēma</th>
                      <th className="border-r-2 border-rtu-green">Mājasdarbs</th>
                      <th className="border-r-2 border-rtu-green">Atzīme</th>
                      <th className="border-r-2 border-rtu-green">Komentārs</th>
                  </tr>
                  {first.map((row, index) => (
                      <tr className="h-[50px] fade-in-row" key={index}>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.time}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.course}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.room}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.professor}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.topic}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.homework}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.mark}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.comment}</td>
                      </tr>
                  ))}
                  {second.map((row, index) => (
                      <tr className="h-[50px] fade-in-row" key={index}>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.time}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.course}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.room}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.professor}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.topic}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.homework}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.mark}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.comment}</td>
                      </tr>
                  ))}
                  </tbody>
              </table>
          </div>
          <div className="sm:flex mt-6">
              <button onClick={() => setShowInfo(true)}
                      className="bg-rtu-green hover:opacity-50 text-white py-2 px-4 rounded-lg mr-4">Mainīt norises
                  informāciju
              </button>
              {showInfo && createPortal(
                  <ModalInfo onClose={() => setShowInfo(false)}/>,
                  document.body
              )}
              <button onClick={() => setShowSubject(true)}
                      className="bg-rtu-green hover:opacity-50 text-white py-2 px-4 rounded-lg mr-4">Mainīt tēmu
              </button>
              {showSubject && createPortal(
                  <ModalSubject onClose={() => setShowSubject(false)}/>,
                  document.body
              )}
              <button onClick={() => setShowGrade(true)}
                      className="bg-rtu-green hover:opacity-50 text-white py-2 px-4 rounded-lg mr-4">Mainīt atzīmi
              </button>
              {showGrade && createPortal(
                  <ModalGrade onClose={() => setShowGrade(false)}/>,
                  document.body
              )}
          </div>

          <div className="mt-12">
              <table border="2" style={{width: '100%'}}>
                  <thead
                      className="fade-in-row h-[50px] border-2 text-center border-rtu-green bg-[#679999] text-rtu-green mt-12 relative">
                  <tr className="border-r-2 border-rtu-green">
                      <th colSpan="8">Piektdiena (01.11.2024.)</th>
                  </tr>
                  </thead>
                  <tbody
                      className="fade-in-row h-[50px] border-2 text-center border-rtu-green bg-[#679999] text-rtu-green mt-12 relative">
                  <tr>
                      <th className="border-r-2 border-rtu-green">Laiks</th>
                      <th className="border-r-2 border-rtu-green">Studiju kurss</th>
                      <th className="border-r-2 border-rtu-green">Auditorija</th>
                      <th className="border-r-2 border-rtu-green">Mācībspēks</th>
                      <th className="border-r-2 border-rtu-green">Tēma</th>
                      <th className="border-r-2 border-rtu-green">Mājasdarbs</th>
                      <th className="border-r-2 border-rtu-green">Atzīme</th>
                      <th className="border-r-2 border-rtu-green">Komentārs</th>
                  </tr>
                  {first.map((row, index) => (
                      <tr className="h-[50px] fade-in-row" key={index}>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.time}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.course}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.room}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.professor}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.topic}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.homework}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.mark}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.comment}</td>
                      </tr>
                  ))}
                  {second.map((row, index) => (
                      <tr className="h-[50px] fade-in-row" key={index}>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.time}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.course}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.room}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.professor}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.topic}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.homework}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.mark}</td>
                          <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.comment}</td>
                      </tr>
                  ))}
                  </tbody>
              </table>
          </div>
          <div className="sm:flex mt-6 mb-12">
              <button onClick={() => setShowInfo(true)}
                      className="bg-rtu-green hover:opacity-50 text-white py-2 px-4 rounded-lg mr-4">Mainīt norises
                  informāciju
              </button>
              {showInfo && createPortal(
                  <ModalInfo onClose={() => setShowInfo(false)}/>,
                  document.body
              )}
              <button onClick={() => setShowSubject(true)}
                      className="bg-rtu-green hover:opacity-50 text-white py-2 px-4 rounded-lg mr-4">Mainīt tēmu
              </button>
              {showSubject && createPortal(
                  <ModalSubject onClose={() => setShowSubject(false)}/>,
                  document.body
              )}
              <button onClick={() => setShowGrade(true)}
                      className="bg-rtu-green hover:opacity-50 text-white py-2 px-4 rounded-lg mr-4">Mainīt atzīmi
              </button>
              {showGrade && createPortal(
                  <ModalGrade onClose={() => setShowGrade(false)}/>,
                  document.body
              )}
          </div>
      </div>
  );
}