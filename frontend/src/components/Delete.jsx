export default function ModalDelete({ onClose }) {
    return (
      <div onClick={onClose} className={`
      fixed inset-0 flex justify-center items-center
      ${open ? "visible bg-black/40" : "invisible"}
      `}>
        
      </div>
    );
  }