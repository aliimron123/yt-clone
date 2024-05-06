import React, { useState } from 'react';
import { MdMic } from 'react-icons/md';
import { Modal } from '../element';
import { TfiClose } from 'react-icons/tfi';
import { Tooltip } from '../element';

const TextVoice = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className="relative">
        <Tooltip title="Telusuri Dengan Suara">
          <button
            type="button"
            className="ml-2 mt-1 rounded-full bg-[#2b2b2bc9] p-2 text-[#f1f1f1] hover:bg-[#313131]"
            onClick={() => setModalOpen(true)}
          >
            <MdMic className="h-6 w-6 dark:text-[#f1f1f1]" />
          </button>
        </Tooltip>
      </div>
      {modalOpen && (
        <Modal
          className=" top-1 w-full max-w-xl py-12 pl-6 pr-2 dark:bg-[#2b2b2b]"
          variant="overlay"
        >
          <div className="flex w-full justify-end">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="right-[67px] rounded-full px-2.5 py-2 hover:bg-[#ffffff52]"
            >
              <TfiClose className="my-0.5 h-5 w-5 text-[#f1f1f1] hover:text-[#f1f1f1]" />
            </button>
          </div>
          <div className="flex flex-col pr-2 text-[#f1f1f1]">
            <h1 className="text-2xl capitalize ">Telusuri dengan suara</h1>
            <p className="mt-8 text-sm">
              Untuk menelusuri dengan suara, buka setelan browser Anda dan
              izinkan akses ke mikrofon
            </p>
          </div>

          <div className="mb-10 flex items-center justify-center">
            <button
              type="button"
              className=" mx-auto mt-20 h-fit w-full max-w-16 rounded-full bg-[#2b2b2bc9] px-2 py-3 text-[#f1f1f1] hover:bg-[#525151]"
              onClick={() => setModalOpen(true)}
            >
              <MdMic className="mx-auto h-10 w-10 dark:text-[#f1f1f1]" />
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default TextVoice;
