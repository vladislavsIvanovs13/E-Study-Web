export default function ModalSubject({ onClose }) {
    return (
      <div onClick={onClose} className={`
      fixed inset-0 flex justify-center items-center
      ${open ? "visible bg-black/15" : "invisible"}
      `}>

        <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-xl w-1/3 py-8 px-12">
          <div>
            <form>
              <label for="subject">Tēma</label><br/>
              <input type="text" name="subject"></input>
              <label for="descr">Mājasdarba apraksts</label><br/>
              <textarea type="text" name="descr"></textarea><br/>
              <label for="deadline">Termiņš</label><br/>
              <input type="text" name="deadline"></input>
            </form>
          </div>
          <button className="bg-[#9ebdbd] py-2 px-6 rounded-lg text-rtu-green">Pievienot failu</button>
          <div className="flex justify-between mt-6">
            <button className="bg-rtu-green py-2 px-12 rounded-lg text-white">Saglabāt</button>
            <button className="bg-[#9ebdbd] py-2 px-12 rounded-lg text-white" onClick={onClose}>Atcelt</button>
          </div>
        </div>
      </div>
    );
  }