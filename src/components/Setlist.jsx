import Papa from "papaparse";
import { useRef, useState, useEffect } from "react";
import SVGComponent from "./SVGComponent";

export default function Setlist() {
  const [parsedData, setParsedData] = useState([]);
  const [isCopied, setIsCopied] = useState(false);

  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: false,
      skipEmptyLines: true,
      complete: function (cueFile) {
        setParsedData(cueFile.data);
      },
    });
  };

  const modifyData = (data) => {
    const splicedArr = data.splice(5);
    const result = {};
    for (let i = 0; i < splicedArr.length; i += 5) {
      if (!result[i]) {
        result[i] = {
          title: splicedArr[i + 1],
          artist: splicedArr[i + 2],
          time: splicedArr[i + 4],
        };
      }
    }
    return result;
  };

  const sanitizeData = (data) => {
    const sanitizedData = {};
    for (const key in data) {
      sanitizedData[key] = {};
      for (const innerKey in data[key]) {
        if (
          data[key][innerKey] !== undefined &&
          Array.isArray(data[key][innerKey])
        ) {
          sanitizedData[key][innerKey] = data[key][innerKey].map(
            (str) =>
              str
                .replace(/^\s+/, "") // Remove leading white space
                .replace(/\t/g, "") // Remove tabs
                .replace(/INDEX 01 /, "") // Remove "INDEX 01 " string
                .replace(/TITLE /, "") // Remove "TITLE " string
                .replace(/PERFORMER /, "") // Remove "PERFORMER " string
                .replace(/"/g, "") // Remove quotes
          );
        }
      }
    }
    return sanitizedData;
  };

  const renameKeys = (data) => {
    let renamedData = data;
    Object.keys(renamedData).forEach((key, index) => {
      const newKey = `Track ${index + 1}`;
      renamedData[newKey] = renamedData[key];
      delete renamedData[key];
    });
    return renamedData;
  };

  const setlistRef = useRef(null);

  useEffect(() => {
    const renderSetlist = (data) => {
      if (setlistRef.current != null) {
        let setlistData = "";
        for (let track in data) {
          const { time, title, artist } = data[track];
          setlistData += `<li>${time} ${title} - ${artist}</li>`;
        }
        setlistRef.current.innerHTML = setlistData;
      }
    };

    renderSetlist(renameKeys(sanitizeData(modifyData(parsedData))));
  }, [parsedData]);

  const handleCopyToClipboard = () => {
    const setlistText = setlistRef.current.innerText;
    navigator.clipboard.writeText(setlistText).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };

  return (
    <div className="flex-auto">
      <div className="pt-10 max-sm:pt-0 pb-8 px-5 grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-10">
        <div className="select-none border-2 rounded-lg bg-[#fff1d6bb] dark:bg-[#1f155751]	border-black dark:border-[#027de1bd]">
          <div className="m-4 max-sm:hidden">
            <h2 className="font-bold text-4xl text-black dark:text-white pt-4">
              Upload .CUE file
            </h2>
            <p className="text-md text-neutral-600 dark:text-[#e8e8e8] pt-4 pb-">
              Upload original data below:
            </p>
            <div className="grid h-80 place-items-center transition ease-in-out delay-80 text-center w-full my-6 bg-gray-200 border-dashed hover:border-solid border-4 border-[#a5a4a4] rounded-lg hover:border-indigo-700">
              <form className="">
                <label className="cursor-pointer">
                  <input
                    type="file"
                    name="file"
                    accept=".cue"
                    className="hidden"
                    onChange={changeHandler}
                  />
                  <SVGComponent />
                  <p className=" text-3xl  text-gray-600 font-extrabold ">
                    Drag and drop or click upload
                  </p>
                  <p className=" mt-3 text-1xl  text-gray-400 font-normal">
                    to upload your .cue files from rekordbox
                  </p>
                </label>
              </form>
            </div>
          </div>

          <div className="">
            <label className="transition ease-in-out delay-90 h-16 flex justify-center rounded-b-md items-center cursor-pointer text-2xl  bg-[#027DE1]  hover:bg-[#027de1bc] text-white rounded-none shadow-2xl font-bold">
              Upload
              <svg
                className="mx-4 w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <input
                type="file"
                name="file"
                accept=".cue"
                className="hidden"
                onChange={changeHandler}
              />
            </label>
          </div>
        </div>

        <div className="delay-80 border-2 rounded-lg bg-[#fff1d6bb] dark:bg-[#1f155751]	border-black dark:border-[#027de1bd] ">
          <div className="m-4">
            <h2 className="select-none font-bold text-4xl text-black dark:text-white pt-4">
              Copy to Clipboard
            </h2>
            <p className="select-none text-md text-neutral-600 dark:text-[#e8e8e8] pt-4 pb-">
              Use online for Soundcloud etc.
            </p>
            <div className="pl-4 pt-4 max-h-[20rem] h-[20rem] overflow-y-auto mt-6 mb-6 border-4 border-[#a5a4a4a3] bg-gray-100 text-gray-900 rounded-lg hover:border-indigo-700">
              <ul ref={setlistRef} id="setlistEl"></ul>
            </div>
          </div>

          <div className="">
            <label
              className={`transition ease-in-out delay-90 h-16 flex justify-center rounded-b-md items-center cursor-pointer text-2xl bg-[#027DE1] hover:bg-[#027de1bc] text-white rounded-none shadow-2xl font-bold ${
                isCopied ? "bg-green-500" : ""
              }`}
              onClick={handleCopyToClipboard}
            >
              {isCopied ? "Copied to Clipboard!" : "Copy to Clipboard"}
              <svg
                className="mx-4 w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-2.4 -2.4 28.80 28.80"
                fill="#ffffff"
              >
                <path d="M15.2994 1.99988C15.9337 1.99896 16.4964 1.99815 17.0226 2.20134C17.5489 2.40452 17.9651 2.78322 18.4342 3.21016C19.1119 3.8269 19.7904 4.44277 20.47 5.05741C21.0069 5.54296 21.4836 5.97414 21.743 6.55981C22.0024 7.14548 22.0013 7.78827 22.0002 8.51212C21.9977 10.03 22 11.5479 22 13.0658C22.0001 13.9523 22.0001 14.7161 21.9179 15.3278C21.8297 15.9833 21.631 16.6117 21.1213 17.1213C20.6117 17.631 19.9833 17.8297 19.3278 17.9179C18.7161 18.0001 17.9523 18.0001 17.0658 18H12.9342C12.0477 18.0001 11.2839 18.0001 10.6722 17.9179C10.0167 17.8297 9.38835 17.631 8.87868 17.1213C8.36902 16.6117 8.17028 15.9833 8.08215 15.3278C7.99991 14.7161 7.99995 13.9523 8 13.0658L8.00001 7C8.00001 6.08546 7.99788 5.29896 8.08215 4.67221C8.17028 4.01669 8.36902 3.38834 8.87868 2.87868C9.38835 2.36902 10.0167 2.17027 10.6722 2.08214C11.2839 1.99991 12.0477 1.99995 12.9342 2C12.956 2 12.978 2 13 2C13.7665 2 14.5329 2.00098 15.2994 1.99988Z"></path>
                <path d="M15.9843 18.9999H12.8813C12.0375 19 11.2176 19.0001 10.539 18.9089C9.77323 18.8059 8.89833 18.5551 8.17159 17.8283C7.44485 17.1016 7.19402 16.2267 7.09107 15.461C6.99983 14.7823 6.99992 13.9624 7.00001 13.1187L7.00001 6.88116C6.99997 6.58272 6.99994 6.28727 7.00395 5.99999C6.2364 5.99955 5.46424 5.97511 4.70072 6.06939C4.09998 6.14358 3.51831 6.30999 3.02408 6.7426C2.92414 6.83008 2.83012 6.9241 2.74264 7.02404C2.31003 7.51827 2.14362 8.09994 2.06943 8.70069C1.99993 9.26352 1.99996 9.96136 2 10.771L2 17.0658C1.99995 17.9523 1.99991 18.7161 2.08215 19.3278C2.17028 19.9833 2.36902 20.6116 2.87868 21.1213C3.38835 21.631 4.0167 21.8297 4.67221 21.9178C5.28387 22.0001 6.04769 22 6.93417 22L11.9039 22C12.4011 22 12.8301 22 13.184 21.9727C13.5572 21.9439 13.9292 21.8804 14.2905 21.7082C14.9117 21.4122 15.4122 20.9117 15.7082 20.2905C15.9005 19.887 15.9622 19.442 15.9843 18.9999Z"></path>
                <path d="M15.9843 18.9999H12.8813C12.0375 19 11.2176 19.0001 10.539 18.9089C9.77323 18.8059 8.89833 18.5551 8.17159 17.8283C7.44485 17.1016 7.19402 16.2267 7.09107 15.461C6.99983 14.7823 6.99992 13.9624 7.00001 13.1187L7.00001 6.88116C6.99997 6.58272 6.99994 6.28727 7.00395 5.99999C6.2364 5.99955 5.46424 5.97511 4.70072 6.06939C4.09998 6.14358 3.51831 6.30999 3.02408 6.7426C2.92414 6.83008 2.83012 6.9241 2.74264 7.02404C2.31003 7.51827 2.14362 8.09994 2.06943 8.70069C1.99993 9.26352 1.99996 9.96136 2 10.771L2 17.0658C1.99995 17.9523 1.99991 18.7161 2.08215 19.3278C2.17028 19.9833 2.36902 20.6116 2.87868 21.1213C3.38835 21.631 4.0167 21.8297 4.67221 21.9178C5.28387 22.0001 6.04769 22 6.93417 22L11.9039 22C12.4011 22 12.8301 22 13.184 21.9727C13.5572 21.9439 13.9292 21.8804 14.2905 21.7082C14.9117 21.4122 15.4122 20.9117 15.7082 20.2905C15.9005 19.887 15.9622 19.442 15.9843 18.9999Z"></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
