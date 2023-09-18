"use client";
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
import { useMutation } from "@tanstack/react-query";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

export default function Modal() {
  const router = useRouter();
  const { mutate: handleSubmit, isLoading } = useMutation({
    mutationFn: async () => {
      // try {
      if (uploadedFile) {
        const formData = new FormData();
        formData.set("file", uploadedFile);
        formData.set("name", "nisu");

        const { data } = await axios.post("/api/uploadFile", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        console.log(data);
        setUploadedFile(null);
      } else {
        console.log("File Not Uploaded");
      }
      // }
      // } catch (error) {
      // if (error instanceof AxiosError)
      //   console.log("Error occured", error.message);
      // console.log("Something went wrong", error);
      // }
    },
    onError: (err) => {
      if (err instanceof AxiosError) console.log("Error occured", err.message);
      console.log("Something went wrong", err);
    },
    onSuccess: () => {
      router.push("/questions");
      console.log("Data Uploaded");
    },
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("Inside");
    handleSubmit();

    // try {
    //   if (uploadedFile) {
    //     const formData = new FormData();
    //     formData.set("file", uploadedFile);
    //     formData.set("name", "nisu");

    //     const { data } = await axios.post("/api/uploadFile", formData, {
    //       headers: { "Content-Type": "multipart/form-data" },
    //     });

    //     console.log(data);
    //     setUploadedFile(null);
    //   }
    // } catch (error) {
    //   if (error instanceof AxiosError)
    //     console.log("Error occured", error.message);
    //   console.log("Something went wrong", error);
    // }
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
            <Button
              type="submit"
              disabled={isLoading}
              className="disabled:bg-red-900"
            >
              {isLoading ? <>Loading...</> : <>Upload</>}
              {/* Upload */}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
