export default function Results() {
  return (
    <div className=" bg-white px-16 pt-10 pb-8">
      <div className="grid grid-cols-2 gap-x-6 ">
        <div className=" border-2 rounded-lg	border-black hover:border-indigo-700 h-auto ">
          <div className="px-8 py-3">
            <h2 className="font-bold text-4xl text-black pt-4">
              Upload .CUE file
            </h2>
            <p className=" text-md text-neutral-600 pt-4 pb-">
              Original data displayed below:
            </p>
            <input
              type="text"
              id="disabled-input"
              aria-label="disabled input"
              class=" selection:bg-fuchsia-300 selection:text-fuchsia-900 mt-6 mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-40 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value=""
              disabled
            />
            <div class="">
              <label class="flex flex-row  justify-center cursor-pointer h-auto w-full px-6 text-2xl bg-[#027DE1] text-white rounded-none shadow-2xl font-bold py-4">
                Upload
                <svg
                  class="mx-4 w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <input type="file" class="hidden" />
              </label>
            </div>
          </div>
        </div>
        <div className="border-2 rounded-lg	border-black hover:border-[#027DE1] h-auto">
          <div className="px-8 py-3">
            <h2 className="font-bold text-4xl text-black pt-4">
              Copy setlist text
            </h2>
            <p className=" text-md text-neutral-600 pt-4 pb-">
              Use for your Soundcloud or Mixcloud upload:
            </p>
            <input
              type="text"
              id="disabled input"
              aria-label="disabled input"
              class=" selection:bg-fuchsia-300 selection:text-fuchsia-900 mt-6 mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full  p-40  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value=""
            />
            <div class="">
              <button class="flex flex-row  justify-center cursor-pointer h-auto w-full px-6 text-2xl bg-[#027DE1] text-white rounded-none shadow-2xl font-bold py-4">
                Copy to Clipboard
                <svg
                  class="mx-4 w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-2.4 -2.4 28.80 28.80"
                  fill="#ffffff"
                >
                  <path d="M15.2994 1.99988C15.9337 1.99896 16.4964 1.99815 17.0226 2.20134C17.5489 2.40452 17.9651 2.78322 18.4342 3.21016C19.1119 3.8269 19.7904 4.44277 20.47 5.05741C21.0069 5.54296 21.4836 5.97414 21.743 6.55981C22.0024 7.14548 22.0013 7.78827 22.0002 8.51212C21.9977 10.03 22 11.5479 22 13.0658C22.0001 13.9523 22.0001 14.7161 21.9179 15.3278C21.8297 15.9833 21.631 16.6117 21.1213 17.1213C20.6117 17.631 19.9833 17.8297 19.3278 17.9179C18.7161 18.0001 17.9523 18.0001 17.0658 18H12.9342C12.0477 18.0001 11.2839 18.0001 10.6722 17.9179C10.0167 17.8297 9.38835 17.631 8.87868 17.1213C8.36902 16.6117 8.17028 15.9833 8.08215 15.3278C7.99991 14.7161 7.99995 13.9523 8 13.0658L8.00001 7C8.00001 6.08546 7.99788 5.29896 8.08215 4.67221C8.17028 4.01669 8.36902 3.38834 8.87868 2.87868C9.38835 2.36902 10.0167 2.17027 10.6722 2.08214C11.2839 1.99991 12.0477 1.99995 12.9342 2C12.956 2 12.978 2 13 2C13.7665 2 14.5329 2.00098 15.2994 1.99988Z"></path> 
                  <path d="M15.9843 18.9999H12.8813C12.0375 19 11.2176 19.0001 10.539 18.9089C9.77323 18.8059 8.89833 18.5551 8.17159 17.8283C7.44485 17.1016 7.19402 16.2267 7.09107 15.461C6.99983 14.7823 6.99992 13.9624 7.00001 13.1187L7.00001 6.88116C6.99997 6.58272 6.99994 6.28727 7.00395 5.99999C6.2364 5.99955 5.46424 5.97511 4.70072 6.06939C4.09998 6.14358 3.51831 6.30999 3.02408 6.7426C2.92414 6.83008 2.83012 6.9241 2.74264 7.02404C2.31003 7.51827 2.14362 8.09994 2.06943 8.70069C1.99993 9.26352 1.99996 9.96136 2 10.771L2 17.0658C1.99995 17.9523 1.99991 18.7161 2.08215 19.3278C2.17028 19.9833 2.36902 20.6116 2.87868 21.1213C3.38835 21.631 4.0167 21.8297 4.67221 21.9178C5.28387 22.0001 6.04769 22 6.93417 22L11.9039 22C12.4011 22 12.8301 22 13.184 21.9727C13.5572 21.9439 13.9292 21.8804 14.2905 21.7082C14.9117 21.4122 15.4122 20.9117 15.7082 20.2905C15.9005 19.887 15.9622 19.442 15.9843 18.9999Z" ></path>
                  <path d="M15.9843 18.9999H12.8813C12.0375 19 11.2176 19.0001 10.539 18.9089C9.77323 18.8059 8.89833 18.5551 8.17159 17.8283C7.44485 17.1016 7.19402 16.2267 7.09107 15.461C6.99983 14.7823 6.99992 13.9624 7.00001 13.1187L7.00001 6.88116C6.99997 6.58272 6.99994 6.28727 7.00395 5.99999C6.2364 5.99955 5.46424 5.97511 4.70072 6.06939C4.09998 6.14358 3.51831 6.30999 3.02408 6.7426C2.92414 6.83008 2.83012 6.9241 2.74264 7.02404C2.31003 7.51827 2.14362 8.09994 2.06943 8.70069C1.99993 9.26352 1.99996 9.96136 2 10.771L2 17.0658C1.99995 17.9523 1.99991 18.7161 2.08215 19.3278C2.17028 19.9833 2.36902 20.6116 2.87868 21.1213C3.38835 21.631 4.0167 21.8297 4.67221 21.9178C5.28387 22.0001 6.04769 22 6.93417 22L11.9039 22C12.4011 22 12.8301 22 13.184 21.9727C13.5572 21.9439 13.9292 21.8804 14.2905 21.7082C14.9117 21.4122 15.4122 20.9117 15.7082 20.2905C15.9005 19.887 15.9622 19.442 15.9843 18.9999Z"></path>
               </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
