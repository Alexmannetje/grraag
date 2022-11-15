import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <div className="h-screen bg-gray-700">
      <Nav />
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-700">
          <div className="relative overflow-hidden bg-no-repeat bg-cover"></div>
          <div className="container text-gray-800 px-4 md:px-12">
            <div className="block rounded-lg shadow-lg py-10 px-2 bg-gray-600">
              <div className="flex flex-wrap ml-24">
                <div className="grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0">
                  <form>
                    <div className="form-group mb-6">
                      <input
                        type="text"
                        className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInput7"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group mb-6">
                      <input
                        type="email"
                        className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInput8"
                        placeholder="Email address"
                      />
                    </div>
                    <div className="form-group mb-6">
                      <textarea
                        className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
                        id="exampleFormControlTextarea13"
                        rows="3"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="form-group form-check text-center mb-6">
                      <input
                        type="checkbox"
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                        id="copycheck"
                        defaultChecked
                      />
                      <label
                        className="form-check-label inline-block text-gray-300"
                        for="exampleCheck87"
                      >
                        Send me a copy of this message
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out"
                    >
                      Send
                    </button>
                  </form>
                </div>
                <div className="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
                  <div className="flex flex-wrap justify-center mt-10">
                    <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                      <div className="flex">
                        <div className="flex justify-center shrink-0">
                          <div className="mt-5 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="headset"
                              className="w-6 text-white"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="pl-5 grow ">
                          <p className="font-bold mb-1 text-gray-300">
                            Direct support
                          </p>
                          <p className="text-gray-300">e-mail</p>
                          <p className="text-gray-300">nummer</p>
                          <p className="text-gray-300">address</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
