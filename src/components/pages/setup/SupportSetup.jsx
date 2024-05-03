import React, { useEffect, useState } from 'react';
import { Audio } from 'react-loader-spinner';

function SupportSetup() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 6000);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center flex-col py-8 ">
        {show ? (
          <main className="aboutContainer flex w-full lg:w-[60%] flex-col bg-white ">
            <section className="flex justify-center items-center gap-2 mt-4 sm:gap-4">
              <div className="flex-none w-32 h-32">
                <img
                  src="https://i.ibb.co/y82fyp6/Canon-Image-Red-round-removebg-preview-1.png"
                  alt="Canon Image"
                  className="w-full h-full"
                />
              </div>

              <div className="flex-none w-32 h-32">
                <Audio
                  height={100}
                  width={150} // Increased width
                  color="#f47e60" // Custom colors
                  ariaLabel="audio-loading"
                  wrapperStyle={{}}
                  wrapperClass="wrapper-class"
                  visible={true}
                />
              </div>

              <div className="flex-none w-32 h-32">
                <img
                  src="https://i.ibb.co/my8TYYs/Printer-Red-Round-removebg-preview.png"
                  alt="Printer Image"
                  className="w-full h-full"
                />
              </div>
            </section>

            <section>
              <img
                src="https://i.ibb.co/NLrPm1N/Screenshot-2024-05-03-092229.png"
                alt=""
              />
            </section>
          </main>
        ) : (
          <img
            src="https://ijstartprinter.com/images/error.png"
            alt=""
            className="flex w-full lg:w-[60%] flex-col"
          />
        )}
      </div>
    </>
  );
}

export default SupportSetup;