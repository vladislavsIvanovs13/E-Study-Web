export default function ModalGrade({ onClose }) {
    return (
      <div onClick={onClose} className={`
      fixed inset-0 flex justify-center items-center
      ${open ? "visible bg-black/40" : "invisible"}
      `}>

        <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-xl w-1/3 py-8 px-12">
          <div>
            <form>
              <label for="student">Students</label><br/>
              <select name="student">
                <option value="student1">--</option>
                <option value="student2">221RDB123</option>
                <option value="student3">211CDB112</option>
                <option value="student4">221ROC771</option>
                </select><br/>
              <label for="grade">Atzīme</label><br/>
              <input type="text" name="grade"></input>
              <label for="comment">Komentārs</label><br/>
              <textarea type="text" name="comment"></textarea><br/>
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