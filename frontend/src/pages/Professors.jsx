import { NavBar, Profile, ModalAdd, ModalDelete, ModalEdit } from '../components';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function Campus() {

  const [showAdd, setShowAdd] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const data = [
    { id: 1, title: 'Course', employee: 'aaa',
      structuralUnit: 'DITF', room: 'Zunda',
      email: 'longtext@gmail.com' },
    { id: 2, title: 'Course', employee: 'bbb',
      structuralUnit: 'DITF', room: 'Secret office 1234567890',
      email: 'longtext@gmail.com' },
    { id: 4, title: 'Course', employee: 'bbb',
      structuralUnit: 'DITF', room: 'Secret office 1234567890',
      email: 'longtext@gmail.com' }
  ];

    return (
        <div className="mx-6 mt-12 text-sm sm:mx-24 sm:text-base relative">
          <Profile/>
          <NavBar/>
          <div className="mt-12">
            <table border="2" style={{width: '100%'}}>
              <thead className="h-[50px] border-2 text-center border-rtu-green bg-[#679999] text-rtu-green mt-12 relative">
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
                {data.map(row => (
                    <tr className="h-[50px]" key={row.id}>
                      <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.title}</td>
                      <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.employee}</td>
                      <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.structuralUnit}</td>
                      <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.room}</td>
                      <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12">{row.email}</td>
                      <td className="border-2 text-center border-rtu-green bg-[#9ebdbd] text-rtu-green mt-12"
                        style={{ textAlign: 'center' }}>
                        <div style={ {display: 'inline-flex', gap: '8px'} }>
                          <button onClick={() => setShowEdit(true)}
                                  className="bg-rtu-green hover:opacity-50 text-white py-1 px-4 rounded-lg">Rediģēt</button>
                          {showEdit && createPortal(
                              <ModalEdit onClose={() => setShowEdit(false)}/>,
                              document.body
                          )}
                          <button onClick={() => setShowDelete(true)}
                                  className="bg-rtu-green hover:opacity-50 text-white py-1 px-4 rounded-lg">Dzēst</button>
                          {showDelete && createPortal(
                              <ModalDelete onClose={() => setShowDelete(false)}/>,
                              document.body
                          )}
                        </div>
                      </td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>

            {/*<h1 className="border-r-2 border-b-2 border-rtu-green">Datoru organizācija un asambleri</h1>*/}
            {/*<h2 className="border-r-2 border-b-2 border-rtu-green">Uldis Sukovskis</h2>*/}
            {/*<h1 className="border-r-2 border-b-2 border-rtu-green">Lietišķo datorsistēmu institūts</h1>*/}
            {/*<h1 className="border-r-2 border-b-2 border-rtu-green">Zunda krastmala 10-325</h1>*/}
            {/*<h1 className="border-b-2 border-rtu-green">uldis.sukovskis@edu.rtu.lv</h1>*/}

            {/*<h1 className="border-r-2 border-rtu-green">Sistēmu analīze un zināšanu iegūšana</h1>*/}
            {/*<h2 className="border-r-2 border-rtu-green">Mārīte Kirikova</h2>*/}
            {/*<h1 className="border-r-2 border-rtu-green">Lietišķo datorsistēmu institūts</h1>*/}
            {/*<h1 className="border-r-2 border-rtu-green">Zunda krastmala 10-421</h1>*/}
            {/*<h1 className="border-rtu-green">marite.kirikiva@edu.rtu.lv</h1>*/}

          <div className="sm:flex mt-6">
            <button onClick={() => setShowAdd(true)}
                    className="bg-rtu-green hover:opacity-50 text-white py-2 px-4 rounded-lg mr-4">Pievienot
            </button>
            {showAdd && createPortal(
                <ModalAdd onClose={() => setShowAdd(false)}/>,
                document.body
            )}
          </div>
        </div>

    );
}