"use client";

import { useState } from "react";

const FileInput = ({
  classes,
  iconColor = "primary-green",
  onUpload,
  htmlId,
  fileType,
  required,
}) => {
  const [fileName, setFileName] = useState("Choose File");
  const [file, setFile] = useState(null); // To store the selected file

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
      // Call the onUpload function passed from the parent component
      if (onUpload) {
        onUpload(selectedFile);
      }
    }
  };
  return (
    <div
      className={"mt-4 flex items-center rounded-lg overflow-hidden" + classes}
    >
      <label
        htmlFor={htmlId}
        className="py-2 px-4 flex-grow cursor-pointer text-grey-dark"
      >
        {fileName}
      </label>
      <button
        type="button"
        className={`bg-${iconColor} px-4 py-3 text-white overflow-hidden cursor-pointer`}
      >
        <svg
          width="21"
          height="18"
          viewBox="0 0 21 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 9.64143V8.92131C1 8.34835 1.22273 7.79886 1.6192 7.39371C2.01566 6.98856 2.55338 6.76096 3.11407 6.76096H17.2079C17.7686 6.76096 18.3063 6.98856 18.7027 7.39371C19.0992 7.79886 19.3219 8.34835 19.3219 8.92131V9.64143M11.1569 3.45801L9.16501 1.42247C9.03415 1.28858 8.87875 1.18235 8.7077 1.10986C8.53664 1.03737 8.35329 1.00004 8.16811 1H3.11407C2.55338 1 2.01566 1.22761 1.6192 1.63275C1.22273 2.0379 1 2.5874 1 3.16036V14.6823C1 15.2552 1.22273 15.8047 1.6192 16.2099C2.01566 16.615 2.55338 16.8426 3.11407 16.8426H17.2079C17.7686 16.8426 18.3063 16.615 18.7027 16.2099C19.0992 15.8047 19.3219 15.2552 19.3219 14.6823V6.04084C19.3219 5.46787 19.0992 4.91838 18.7027 4.51323C18.3063 4.10809 17.7686 3.88048 17.2079 3.88048H12.1538C11.7802 3.88014 11.421 3.72818 11.1569 3.45801Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {/* Hidden File Input */}
      <input
        id={htmlId}
        type="file"
        name={htmlId}
        className="hidden"
        accept={fileType}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileInput;
