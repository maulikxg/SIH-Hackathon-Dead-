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
import { Button } from "@/components/ui/Button";
import Dropzone from "../Dropzone";


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
} from "@/components/ui/dialog"

export default function NextUIModal() {
  return(<Dialog>
    <DialogTrigger>Open</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Upload the Document</DialogTitle>
        <DialogDescription>
         Let's upload a file for the try and some chat chat..
        </DialogDescription>
      </DialogHeader>
      <Dropzone />
      <DialogFooter>
          <Button type="submit">Upload</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  )
}

