"use client";
import { Button } from "@/components/ui/Button";
import Dropzone from "../Dropzone";
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

