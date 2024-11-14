import { NavBar, Profile, ModalInfo, ModalSubject, ModalGrade } from '../components';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function Schedule() {

  const [showInfo, setShowInfo] = useState(false);
  const [showSubject, setShowSubject] = useState(false);
  const [showGrade, setShowGrade] = useState(false);

    return (
      <div class="mx-6 mt-12 text-sm sm:mx-24 sm:text-base">
        <Profile />
        <NavBar />
          <div class="grid grid-cols-8 border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12 min-w-[1100px]">

              <h1 class="col-span-8 border-b-2 border-rtu-green">Pirmdiena (28.10.2024.)</h1>

              <h1 class="border-r-2 border-b-2 border-rtu-green">Laiks</h1>
              <h1 class="border-r-2 border-b-2 border-rtu-green">Studiju kurss</h1>
              <h1 class="border-r-2 border-b-2 border-rtu-green">Auditorija</h1>
              <h1 class="border-r-2 border-b-2 border-rtu-green">Mācībspēks</h1>
              <h1 class="border-r-2 border-b-2 border-rtu-green">Tēma</h1>
              <h1 class="border-r-2 border-b-2 border-rtu-green">Mājasdarbs</h1>
              <h1 class="border-r-2 border-b-2 border-rtu-green">Atzīme</h1>
              <h1 class="border-b-2 border-rtu-green">Komentārs</h1>

              <h1 class="border-r-2 border-b-2 border-rtu-green">10:15-11:50</h1>
              <h2 class="border-r-2 border-b-2 border-rtu-green"><b>Lekc. </b>Datoru organizācija un asambleri</h2>
              <h1 class="border-r-2 border-b-2 border-rtu-green">Āze. 12-102</h1>
              <h1 class="border-r-2 border-b-2 border-rtu-green">Uldis Sukovskis</h1>
              <h1 class="border-r-2 border-b-2 border-rtu-green"></h1>
              <h1 class="border-r-2 border-b-2 border-rtu-green"></h1>
              <h1 class="border-r-2 border-b-2 border-rtu-green"></h1>
              <h1 class="border-b-2 border-rtu-green"></h1>

              <h1 class="border-r-2 border-rtu-green">12:30-14:05</h1>
              <h2 class="border-r-2 border-rtu-green"><b>Lekc. </b>Sistēmu analīze un zināšanu iegūšana</h2>
              <h1 class="border-r-2 border-rtu-green">Āze. 12-102</h1>
              <h1 class="border-r-2 border-rtu-green">Mārīte Kirikova</h1>
              <h1 class="border-r-2 border-rtu-green"></h1>
              <h1 class="border-r-2 border-rtu-green"></h1>
              <h1 class="border-r-2 border-rtu-green"></h1>
              <h1 class=""></h1>
          </div>

          <div class="sm:flex mt-6">
            <button onClick={() => setShowInfo(true)} class="bg-rtu-green hover:opacity-50 text-white py-2 px-4 rounded-lg mr-4">Mainīt norises informāciju</button>
            {showInfo && createPortal(
              <ModalInfo onClose={() => setShowInfo(false)} />,
              document.body
              )}
            <button onClick={() => setShowSubject(true)} class="bg-rtu-green hover:opacity-50 text-white py-2 px-4 rounded-lg mr-4">Mainīt tēmu</button>
            {showSubject && createPortal(
              <ModalSubject onClose={() => setShowSubject(false)} />,
              document.body
              )}
            <button onClick={() => setShowGrade(true)} class="bg-rtu-green hover:opacity-50 text-white py-2 px-4 rounded-lg mr-4">Mainīt atzīmi</button>
            {showGrade && createPortal(
              <ModalGrade onClose={() => setShowGrade(false)} />,
              document.body
              )}
          </div>
      </div>
    );
  }