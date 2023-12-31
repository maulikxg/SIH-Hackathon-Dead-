"use client";

// import { useCallback, useEffect, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import Icon from "./Icons";
// // import { ArrowUpTrayIcon, XMarkIcon } from "@heroicons/react/24/solid";
// // import { getSignature, saveToDatabase } from "../_actions";

// const Dropzone = ({ className }: { className: string }) => {
//   const [files, setFiles] = useState<File[]>([]);
//   const [rejected, setRejected] = useState([]);

//   const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: File[]) => {
//     if (acceptedFiles?.length) {
//       setFiles((previousFiles: File[]) => [
//         // If allowing multiple files
//         ...previousFiles,
//         ...acceptedFiles.map((file) =>
//           Object.assign(file, { preview: URL.createObjectURL(file) })
//         ),
//       ]);
//     }

//     // if (rejectedFiles?.length) {
//     //   setRejected((previousFiles: File) => [
//     //     ...previousFiles,
//     //     ...rejectedFiles,
//     //   ]);
//     // }
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     accept: {
//       "*": [],
//     },
//     maxSize: 1024 * 1000,
//     maxFiles: 1,
//     onDrop,
//   });

//   useEffect(() => {
//     // Revoke the data uris to avoid memory leaks
//     return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
//   }, [files]);

//   // const removeFile = (name: string) => {
//   //   setFiles((files) => files.filter((file) => file.name !== name));
//   // };

//   const removeAll = () => {
//     setFiles([]);
//     setRejected([]);
//   };

//   // const removeRejected = (name: string) => {
//   //   setRejected((files) => files.filter(({ file }) => file.name !== name));
//   // };

//   async function action() {
//     const file = files[0];
//     if (!file) return;

//     // get a signature using server action
//     // const { timestamp, signature } = await getSignature();

//     // upload to cloudinary using the signature
//     const formData = new FormData();

//     formData.append("file", file);
//     // formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
//     // formData.append("signature", signature);
//     // formData.append("timestamp", timestamp);
//     formData.append("folder", "next");

//     // const endpoint = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL;
//     // const data = await fetch(endpoint, {
//     //   method: "POST",
//     //   body: formData,
//     // }).then((res) => res.json());

//     // write to database using server actions
//     // await saveToDatabase({
//     //   version: data?.version,
//     //   signature: data?.signature,
//     //   public_id: data?.public_id,
//     // });
//   }

//   return (
//     <form action={action}>
//       <div
//         {...getRootProps({
//           className: className,
//         })}
//       >
//         <input {...getInputProps({ name: "file" })} />
//         <div className="flex flex-col items-center justify-center gap-4">
//           <Icon.upload className="h-5 w-5 fill-current" />
//           {isDragActive ? (
//             <p>Drop the files here ...</p>
//           ) : (
//             <p>Drag & drop files here, or click to select files</p>
//           )}
//         </div>
//       </div>

//       {/* Preview */}
//       <section className="mt-10">
//         <div className="flex gap-4">
//           <h2 className="title text-3xl font-semibold">Preview</h2>
//           <button
//             type="button"
//             onClick={removeAll}
//             className="mt-1 rounded-md border border-rose-400 px-3 text-[12px] font-bold uppercase tracking-wider text-stone-500 transition-colors hover:bg-rose-400 hover:text-white"
//           >
//             Remove all files
//           </button>
//           <button
//             type="submit"
//             className="ml-auto mt-1 rounded-md border border-purple-400 px-3 text-[12px] font-bold uppercase tracking-wider text-stone-500 transition-colors hover:bg-purple-400 hover:text-white"
//           >
//             Upload to Cloudinary
//           </button>
//         </div>

//         {/* Accepted files */}
//         <h3 className="title mt-10 border-b pb-3 text-lg font-semibold text-stone-600">
//           Accepted Files
//         </h3>
//         <ul className="mt-6 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
//           {files.map((file) => {
//             return <li>{file.name}</li>;
//           })}
//           {/* <p>{files.file[0]?.name}</p> */}
//           {/* {files.map((file: File) => (
//             <li key={file.name} className="relative h-32 rounded-md shadow-lg">
//               <Image
//                 src={file.preview}
//                 alt={file.name}
//                 width={100}
//                 height={100}
//                 onLoad={() => {
//                   URL.revokeObjectURL(file.preview);
//                 }}
//                 className="h-full w-full rounded-md object-contain"
//               />
//               <button
//                 type="button"
//                 className="absolute -right-3 -top-3 flex h-7 w-7 items-center justify-center rounded-full border border-rose-400 bg-rose-400 transition-colors hover:bg-white"
//                 onClick={() => removeFile(file.name)}
//               >
//                 <Icon.close className="h-5 w-5 fill-white transition-colors hover:fill-rose-400" />
//               </button>
//               <p className="mt-2 text-[12px] font-medium text-stone-500">
//                 {file.name}
//               </p>
//             </li>
//           ))} */}
//         </ul>

//         {/* Rejected Files */}
//         {/* <h3 className="title mt-24 border-b pb-3 text-lg font-semibold text-stone-600">
//           Rejected Files
//         </h3>
//         <ul className="mt-6 flex flex-col">
//           {rejected.map(({ file, errors }) => (
//             <li key={file.name} className="flex items-start justify-between">
//               <div>
//                 <p className="mt-2 text-sm font-medium text-stone-500">
//                   {file.name}
//                 </p>
//                 <ul className="text-[12px] text-red-400">
//                   {errors.map((error) => (
//                     <li key={error.code}>{error.message}</li>
//                   ))}
//                 </ul>
//               </div>
//               <button
//                 type="button"
//                 className="mt-1 rounded-md border border-rose-400 px-3 py-1 text-[12px] font-bold uppercase tracking-wider text-stone-500 transition-colors hover:bg-rose-400 hover:text-white"
//                 onClick={() => removeRejected(file.name)}
//               >
//                 remove
//               </button>
//             </li>
//           ))}
//         </ul> */}
//       </section>
//     </form>
//   );
// };

// export default Dropzone;

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import Icon from "./Icons";
type DropZoneProps = {
  uploadedFile: File | null;
  setUploadedFile: React.Dispatch<File | null>;
};

const Dropzone = ({ uploadedFile, setUploadedFile }: DropZoneProps) => {
  // const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setUploadedFile(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "*": [] }, // Allow all types of files
    multiple: false, // Allow only a single file to be uploaded
  });

  const filePreview = uploadedFile ? (
    <div className="file-preview">
      {/* <h2>Uploaded File:</h2> */}
      {/* <p>Filename: {uploadedFile.name}</p> */}
      {/* <p>File Size: {uploadedFile.size} bytes</p> */}
      {/* {uploadedFile.type === "application/pdf" && (
        <embed
          src={URL.createObjectURL(uploadedFile)}
          width="100%"
          height="150px"
          title="PDF Preview"
        ></embed>
      )} */}
    </div>
  ) : null;

  return (
    <div className="container flex flex-col gap-4 my-4">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <motion.div
          className="border-2 border-dashed border-black/30 flex flex-col gap-8 justify-center max-w-2xl py-28 w-full m-auto items-center rounded-lg text-xs md:text-md px-4"
          whileTap={{ scale: 0.8 }}
        >
          <Icon.upload className="h-12 w-12" />
          {isDragActive ? (
            <p> Now, You can have rid of that click :) </p>
          ) : (
            <p>
              {uploadedFile ? (
                <p>{uploadedFile.name}</p>
              ) : (
                <p>
                  {" "}
                  Drag & drop a file here, or click to{" "}
                  <span className="text-blue-700 cursor-pointer">
                    select a file
                  </span>
                </p>
              )}
            </p>
          )}
        </motion.div>
        {/* {filePreview} */}
      </div>
    </div>
  );
};

export default Dropzone;
