import { NavBar, Profile, ModalAdd, ModalDelete, ModalEdit } from '../components';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function Campus() {

  const [showAdd, setShowAdd] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

    return (
      <div class="mx-6 mt-12 text-sm sm:mx-24 sm:text-base relative">
        <Profile />
        <NavBar />
          <div class="grid grid-cols-5 border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12 w-[85%] ml-0 relative">

            <h1 class="border-r-2 border-b-2 border-rtu-green">Kursa nosaukums</h1>
            <h1 class="border-r-2 border-b-2 border-rtu-green">Mācībspēka vārds, uzvārds</h1>
            <h1 class="border-r-2 border-b-2 border-rtu-green">Struktūrvienība</h1>
            <h1 class="border-r-2 border-b-2 border-rtu-green">Kabinets</h1>
            <h1 class="border-b-2 border-rtu-green">E-pasts</h1>


            <h1 class="border-r-2 border-b-2 border-rtu-green">Datoru organizācija un asambleri</h1>
            <h2 class="border-r-2 border-b-2 border-rtu-green">Uldis Sukovskis</h2>
            <h1 class="border-r-2 border-b-2 border-rtu-green">Lietišķo datorsistēmu institūts</h1>
            <h1 class="border-r-2 border-b-2 border-rtu-green">Zunda krastmala 10-325</h1>
            <h1 class="border-b-2 border-rtu-green">uldis.sukovskis@edu.rtu.lv</h1>
            <button onClick={() => setShowDelete(true)} class="absolute right-[-85px] bg-rtu-green hover:opacity-50 text-white py-1 px-4 rounded-lg top-[70px]">Dzēst</button>
            {showDelete && createPortal(
              <ModalDelete onClose={() => setShowDelete(false)} />,
              document.body
              )}
            <button onClick={() => setShowEdit(true)} class="absolute right-[-180px] bg-rtu-green hover:opacity-50 text-white py-1 px-4 rounded-lg top-[70px]">Rediģēt</button>
            {showEdit && createPortal(
              <ModalEdit onClose={() => setShowEdit(false)} />,
              document.body
              )}

            <h1 class="border-r-2 border-rtu-green">Sistēmu analīze un zināšanu iegūšana</h1>
            <h2 class="border-r-2 border-rtu-green">Mārīte Kirikova</h2>
            <h1 class="border-r-2 border-rtu-green">Lietišķo datorsistēmu institūts</h1>
            <h1 class="border-r-2 border-rtu-green">Zunda krastmala 10-421</h1>
            <h1 class="border-rtu-green">marite.kirikiva@edu.rtu.lv</h1>
            <button onClick={() => setShowDelete(true)} class="absolute right-[-85px] bg-rtu-green hover:opacity-50 text-white py-1 px-4 rounded-lg top-[140px]">Dzēst</button>
            {showDelete && createPortal(
              <ModalDelete onClose={() => setShowDelete(false)} />,
              document.body
              )}
            <button onClick={() => setShowEdit(true)} class="absolute right-[-180px] bg-rtu-green hover:opacity-50 text-white py-1 px-4 rounded-lg top-[140px]">Rediģēt</button>
            {showEdit && createPortal(
              <ModalEdit onClose={() => setShowEdit(false)} />,
              document.body
              )}
          </div>

          <div class="sm:flex mt-6">
          <button onClick={() => setShowAdd(true)} class="bg-rtu-green hover:opacity-50 text-white py-2 px-4 rounded-lg mr-4">Pievienot</button>
            {showAdd && createPortal(
              <ModalAdd onClose={() => setShowAdd(false)} />,
              document.body
              )}
          </div>
      </div>
  
    );
  }