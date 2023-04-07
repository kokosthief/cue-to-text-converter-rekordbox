export default function DragDrop() {
  return (
    <div className="text-center w-full h-80 mt-6 mb-6 bg-gray-200 border-dashed hover:border-solid border-4 border-gray-300 rounded-lg hover:border-indigo-700">
      <form>
        <label className=" cursor-pointer">
          <input type="file" name="file" accept=".cue" className="hidden" />
          <svg
            className="mt-3 mx-auto w-2/5 h-2/5"
            fill="rgb(156 163 175"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <p className=" text-3xl  text-gray-600 font-extrabold ">
            Drag and drop or click upload
          </p>
          <p className=" mt-3 text-1xl  text-gray-400 font-normal">
            to upload your .csv file from Rekordbox
          </p>
        </label>
      </form>
    </div>
  );
}
