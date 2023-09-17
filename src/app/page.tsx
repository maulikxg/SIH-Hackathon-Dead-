import Dropzone from "@/components/Dropzone";
import { Button } from "@/components/ui/Button";
import NextUIModal from "@/components/ui/Modal";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center">
      Hey There
      <Dropzone />
      {/* <NextUIModal /> */}
      <Button variant={"default"} size={"default"} className="w-40">
        Upload
      </Button>
    </div>
  );
}
