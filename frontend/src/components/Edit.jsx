export default function ModalEdit({ onClose }) {
    return (
      <div onClick={onClose} className={`
      fixed inset-0 flex justify-center items-center
      ${open ? "visible bg-black/40" : "invisible"}
      `}>

        <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-xl w-1/3 py-8 px-12">
          <div>
            <form>
            <label for="course">Kursa nosaukums</label><br/>
              <input type="text" name="course"></input>
              <label for="professor">Mācībspēka vārds, uzvārds</label><br/>
              <input type="text" name="professor"></input>
              <label for="department">Struktūrvienība</label><br/>
              <input type="text" name="department"></input>
              <label for="cabinet">Kabinets</label><br/>
              <input type="text" name="cabinet"></input>
              <label for="email">E-pasts</label><br/>
              <input type="text" name="email"></input>
            </form>
          </div>
          <div className="flex justify-between mt-6">
          <button className="bg-rtu-green py-2 px-12 rounded-lg text-white" onClick={onClose}>Saglabāt</button>
          <button className="bg-[#9ebdbd] py-2 px-12 rounded-lg text-white" onClick={onClose}>Atcelt</button>
          </div>
        </div>
      </div>
    );
  }