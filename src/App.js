import logo from './logo.svg';
import './App.css';
import Modal from './components/modal-popup/modal.jsx'
import { useState } from 'react';

function App() {
  let[showModal,setShowModal] = useState(false);

  function modalClose()
  {
    setShowModal(false)
  }
  function openModal()
  {
    setShowModal(true)
  }

  // 버튼 누르면  setShowModal을 true로 바꾼다(showMdal을 true로 바꿈) 
  return (
    
    <div className="App">
      
      <button onClick={openModal}>모달창 열기</button>
      {
      showModal && <Modal id={'modal-1'} onClose={modalClose} _header={<div><a>모달창 머리</a></div>} _body={<div>모달창 바디</div>} _footer={<h2>모달창 다리</h2>}/>
      }
    </div>
    


  );
}

export default App;
