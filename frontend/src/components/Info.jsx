export default function ModalInfo({ onClose }) {
    return (
      <div onClick={onClose} className={`
      fixed inset-0 flex justify-center items-center
      ${open ? "visible bg-black/15" : "invisible"}
      `}>

        <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-xl w-1/3 py-8 px-12">
          <div>
            <form>
              <label for="time">Laiks</label><br/>
              <input type="text" name="time"></input>
              <label for="course">Studiju kurss</label><br/>
              <input type="text" name="course"></input>
              <label for="professor">Mācībspēks</label><br/>
              <input type="text" name="professor"></input>
              <label for="auditorium">Auditorija</label><br/>
              <input type="text" name="auditorium"></input>
            </form>
          </div>
          <div className="flex justify-between mt-6">
            <button className="bg-rtu-green py-2 px-12 rounded-lg text-white">Saglabāt</button>
            <button className="bg-[#9ebdbd] py-2 px-12 rounded-lg text-white" onClick={onClose}>Atcelt</button>
          </div>
        </div>
      </div>
    );
  }