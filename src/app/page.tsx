import Dropzone from "@/components/Dropzone";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center">
      Hey There
      <div className="border border-red-400">
        <Dropzone className="w-[400px]" />
      </div>
      <Button variant={"default"} size={"default"} className="w-40">
        Upload
      </Button>
    </div>
  );
}
