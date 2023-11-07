import { useAuthContext } from "@/context/AuthContext";
import Image from "next/image";
import React from "react";

function SuccessOrderModal() {
  const { isModalOpen, setIsModalOpen } = useAuthContext();

  if (!isModalOpen) return null;

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div
        className="bg-white p-8 max-w-[200px] h-[280px] border rounded-lg"
        style={{
          position: "absolute",
          left: "100px",
          bottom: "60px",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/order_confirmed.svg"
              width={100}
              height={100}
              alt="Order confirmation"
            />
            <p className="text-sm">Order is successfully created</p>
            <small className="text-center">Your order is completed.</small>
            <small className="text-center">
              Now you will get a confirmation email
            </small>
            <button
              className="w-full bg-blue-500 text-white py-2 rounded"
              onClick={closeModal}
            >
              Go back now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessOrderModal;
