"use client";
// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
//   useDisclosure,
// } from "@nextui-org/react";

// export default function NextUIModal() {
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();

//   return (
//     <>
//       <Button onPress={onOpen}>Open Modal</Button>
//       {/* <Button
//         onPress={onOpen}
//         variant={"default"}
//         size={"default"}
//         className="w-40"
//       >
//         Upload
//       </Button> */}
//       <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
//         <ModalContent>
//           {(onClose) => (
//             <>
//               <ModalHeader className="flex flex-col gap-1">
//                 Upload Document
//               </ModalHeader>
//               <ModalBody>
//                 <Dropzone />
//               </ModalBody>
//               <ModalFooter>
//                 <Button color="danger" variant="light" onPress={onClose}>
//                   Cancel
//                 </Button>
//                 <Button color="primary" onPress={onClose}>
//                   Upload
//                 </Button>
//               </ModalFooter>
//             </>
//           )}
//         </ModalContent>
//       </Modal>
//     </>
//   );

// }
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import axios, { AxiosError } from "axios";
import { useState, FormEvent } from "react";
import Dropzone from "../Dropzone";
import { Button } from "./Button";

export default function Modal() {
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Inside");

    try {
      if (uploadedFile) {
        const formData = new FormData();
        formData.set("file", uploadedFile);
        formData.set("name", "nisu");

        const { data } = await axios.post("/api/uploadFile", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        console.log(data);
        setUploadedFile(null);
      }
    } catch (error) {
      if (error instanceof AxiosError)
        console.log("Error occured", error.message);
    }
  };

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  return (
    <Dialog>
      <DialogTrigger className="bg-black text-while px-4 py-2 font-semibold text-white w-[200px] hover:bg-gray-900 rounded-lg">
        Upload
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload the Document</DialogTitle>
          <DialogDescription>
            Let's upload a file for the try and some chat chat..
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} encType="multipart/form-data">
          <Dropzone
            uploadedFile={uploadedFile}
            setUploadedFile={setUploadedFile}
          />
          <DialogFooter>
            <Button type="submit">Upload From Modal</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
