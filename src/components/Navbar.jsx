import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("null");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="select-none bg-black flex justify-around items-center max-sm:py-1.5 py-4 max-sm:px-6">
      <div className="flex flex-wrap max-sm:px-12">
        <div className="my-auto m-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="180"
            height="26"
            fill="none"
          >
            <path
              d="M18.115 11.405c.249.729.385 1.506.385 2.316 0 3.51-2.5 6.437-5.811 7.094v5.09l8.913-5.146c.57-.329.922-.938.922-1.603v-10.3l-4.409 2.549ZM5.843 8.943a7.217 7.217 0 0 1 5.419-2.452c2.156 0 4.096.954 5.418 2.452l4.41-2.548-8.906-5.147a1.862 1.862 0 0 0-1.852 0L1.42 6.395l4.408 2.548h.016Zm-1.819 4.778c0-.81.136-1.587.385-2.316L0 8.855v10.293c0 .657.353 1.274.922 1.603l8.913 5.146v-5.09a7.227 7.227 0 0 1-5.811-7.094v.008Zm10.861-.001a3.62 3.62 0 0 1-3.623 3.624 3.62 3.62 0 0 1-3.623-3.623 3.62 3.62 0 0 1 3.623-3.623 3.62 3.62 0 0 1 3.623 3.623ZM118.664 1.272v4.922h-5.795a23.04 23.04 0 0 0-3.712.305c-1.971.32-3.19 2.156-3.358 3.984a33.528 33.528 0 0 0 0 6.476c.168 1.828 1.387 3.655 3.358 3.984 1.235.2 2.461.304 3.712.304 3.198 0 6.396.009 9.594.017V1.272h-3.799Zm0 16.954h-4.665c-4.04 0-4.561-.513-4.561-4.513s.521-4.513 4.561-4.513h4.665v9.026Zm23.63-7.751c-.168-1.828-1.386-3.656-3.358-3.984a23.038 23.038 0 0 0-3.712-.305h-5.795V1.272h-3.799v19.976c3.198 0 6.396-.009 9.594-.017 1.251 0 2.477-.096 3.712-.304 1.972-.32 3.19-2.156 3.358-3.984a33.53 33.53 0 0 0 0-6.477v.009Zm-8.2 7.75h-4.665V9.2h4.665c4.04 0 4.561.513 4.561 4.513s-.521 4.513-4.561 4.513Zm-42.699-7.822c-.225-2.052-1.836-3.688-3.912-3.984a30.594 30.594 0 0 0-8.64 0c-2.077.288-3.688 1.932-3.912 3.984a30.69 30.69 0 0 0 0 6.645c.224 2.052 1.835 3.687 3.911 3.984 2.91.408 5.731.408 8.641 0 2.076-.29 3.687-1.932 3.912-3.984a30.69 30.69 0 0 0 0-6.645Zm-3.751 5.747c-.08.834-.393 1.339-1.13 1.755-.562.329-1.139.321-1.748.353-1.339.08-2.661.056-4-.056-.906-.08-1.419-.417-1.836-1.21-.28-.53-.272-1.067-.304-1.62a27.966 27.966 0 0 1 .056-4.096c.08-.833.393-1.338 1.13-1.755.561-.32 1.138-.32 1.748-.353a27.764 27.764 0 0 1 4 .056c.905.08 1.418.417 1.835 1.21.28.53.273 1.067.305 1.62a29.11 29.11 0 0 1-.056 4.096Zm73.688-5.747c-.225-2.052-1.836-3.688-3.912-3.984a30.595 30.595 0 0 0-8.641 0c-2.076.288-3.687 1.932-3.912 3.984a30.754 30.754 0 0 0 0 6.645c.225 2.052 1.836 3.687 3.912 3.984 2.91.408 5.731.408 8.641 0 2.076-.29 3.687-1.932 3.912-3.984.24-2.173.24-4.473 0-6.645Zm-3.752 5.747c-.08.834-.393 1.339-1.13 1.755-.561.329-1.138.321-1.747.353a27.82 27.82 0 0 1-4-.056c-.906-.08-1.419-.417-1.836-1.21-.28-.53-.272-1.067-.304-1.62a27.73 27.73 0 0 1 .056-4.096c.08-.833.392-1.338 1.13-1.755.561-.32 1.138-.32 1.747-.353a27.765 27.765 0 0 1 4 .056c.906.08 1.419.417 1.836 1.21.28.53.272 1.067.304 1.62.08 1.314.056 2.79-.056 4.096ZM100.1 9.312c-.289.048-.57.12-.85.28a3.098 3.098 0 0 0-.497.354c-.2.184-.353.4-.457.649-.136.32-.168.665-.192 1.01-.064.737-.048 1.475-.048 2.22v7.415h-3.864v-7.527c0-1.082.056-2.156.177-3.238 0-.505.232-1.083.456-1.523.233-.465.553-.89.93-1.25a4.79 4.79 0 0 1 1.339-.883c.609-.256 1.266-.352 1.916-.44a15.412 15.412 0 0 1 1.603-.12c1.066-.04 3.671-.097 3.671-.097v3.022s-2.998-.064-4.184.128Zm-64.983 0c-.289.048-.57.12-.85.28a3.094 3.094 0 0 0-.497.354c-.2.184-.353.4-.457.649-.136.32-.168.665-.192 1.01-.064.737-.048 1.475-.048 2.22v7.415h-3.864v-7.527c0-1.082.056-2.156.177-3.238 0-.505.232-1.083.457-1.523a4.58 4.58 0 0 1 .93-1.25 4.79 4.79 0 0 1 1.338-.883c.61-.256 1.266-.352 1.916-.44a15.242 15.242 0 0 1 1.603-.12c1.066-.04 3.671-.097 3.671-.097v3.022s-2.998-.064-4.184.128Zm31.613 4.409 7.647-7.527h-4.2l-5.603 6.02h-.4v-6.02H60.35v15.054h3.824V15.22h.392l5.611 6.028h4.2l-7.654-7.527h.008ZM180 6.194h-4.2l-4.81 5.243-4.817-5.243h-4.2l6.909 7.527-6.909 7.527h4.2l4.817-5.242 4.81 5.242h4.2l-6.91-7.527L180 6.194ZM57.312 16.815h-3.815c-.032.112-.096.32-.096.32-.233.65-.586.922-1.275 1.002a27.925 27.925 0 0 1-6.124 0 1.517 1.517 0 0 1-1.347-1.322 30.491 30.491 0 0 1-.168-2.421h12.985v-.449a29.333 29.333 0 0 0-.176-3.559c-.224-2.052-1.835-3.687-3.911-3.984a30.594 30.594 0 0 0-8.641 0c-2.076.289-3.688 1.932-3.912 3.984a30.69 30.69 0 0 0 0 6.645c.224 2.052 1.836 3.687 3.912 3.984 2.91.409 5.73.409 8.64 0 .193-.024.377-.064.562-.112.184-.048.36-.113.537-.177a4.564 4.564 0 0 0 1.395-.89c.136-.128.264-.256.376-.4a4.312 4.312 0 0 0 .601-.922c.12-.24.217-.489.289-.745.072-.257.112-.521.144-.786 0-.048.016-.096.016-.152l.008-.016Zm-12.648-6.22a1.516 1.516 0 0 1 1.346-1.323 27.935 27.935 0 0 1 6.124 0c.705.08 1.267.625 1.347 1.322.056.514.104 1.019.136 1.532h-9.082a19.38 19.38 0 0 1 .137-1.531h-.008Z"
              fill="#fff"
            />
          </svg>
        </div>
        <div className="my-2 text-center">
          <p className="text-neutral-50 text-sm md:ml-10 max-sm:m-auto ">
            Web app for DJs to convert Rekordbox .CUE files into tracklists and
            setlists.
          </p>
        </div>
      </div>
      <div className="flex cursor-pointer mr-2	hover:animate-pulse">
        <svg // light/darkmode toggle
          width="20px"
          height="20px"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          onClick={handleThemeSwitch}
        >
          <path
            fill="#ffffff"
            stroke="#ffffff"
            fillRule="evenodd"
            d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 1.5v13a6.5 6.5 0 100-13z"
            // clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
