import Image from "next/image";
import React from "react";

interface SuccessOrderModalProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function SuccessOrderModal({ setOpen }: SuccessOrderModalProps) {
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="bg-white p-8 w-full h-80 border rounded-lg">
      <div className="flex flex-col items-center justify-center gap-4">
        <Image
          src="/order_confirmed.svg"
          width={100}
          height={100}
          alt="Order confirmation"
        />

        <p className="text-sm">Order is successfully created</p>

        <small className="text-gray-100 text-center">
          Your order is completed. Now you will get a confirmation email
        </small>

        <button
          className="w-full bg-blue-500 text-white py-2 rounded block mt-8"
          onClick={closeModal}
        >
          Go back now
        </button>
      </div>
    </div>
  );
}

export default SuccessOrderModal;
