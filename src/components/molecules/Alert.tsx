import React, { FC, memo, useCallback } from 'react';
import { useAppContext } from '../../context/AppContext';
import PrimaryButton from '../atoms/button/PrimaryButton';
import Messege from '../atoms/Messege';

const Alert: FC = memo(() => {
  const { setShowAlert } = useAppContext();

  const handleClickBtn = useCallback(() => {
    setShowAlert(false);
  }, []);

  return (
    <>
      <div id="overlay" className="fixed w-full h-full z-10 flex justify-center items-center">
        <div id="modal-content" className="flex flex-col justify-center items-center p-5 h-80 bg-black">
          <Messege />
          <PrimaryButton onClick={() => handleClickBtn()} className="blue-button m-10" size="lg" rounded={true}>
            OK
          </PrimaryButton>
        </div>
      </div>
    </>
  );
});

export default Alert;
