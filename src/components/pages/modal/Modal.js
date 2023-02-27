import React from 'react'
const Modal = ({isVisible, onClose, children }) => {
    if (!isVisible) return null;

  return (
    <div className='fixed rounded-lg mt-16 inset-0 bg-black bg-opacity-25 backdrop-blur-sm
     flex justify-center items-center'>
        <div className='w-[400px] rounded-lg flex flex-col' >
      
        <div className='p-2 rounded bg-white'>
          <div className='flex justify-between'>
          <div></div>
        <button className='font-bold  mr-4 text-red-500 text-xl place-self-end' onClick={() => onClose()}>X</button>
          </div>
      {children}
        </div>
        </div>
</div>
     
  )
}

export default Modal;