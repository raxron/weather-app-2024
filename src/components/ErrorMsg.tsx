import Image from "next/image";
import { Button, Progress } from "@nextui-org/react";
import Link from "next/link";
export default function ErrorMsg() {

  return (
    <div className="flex flex-col items-center gap-12">
      <div>
      <h1>You will be directed in few seconds...</h1>
      <Progress
        size="md"
        isIndeterminate
        aria-label="Loading..."
        classNames={{
          base: "max-w-md",
          track: "drop-shadow-md border border-default bg-sky-200",
          indicator: "bg-gradient-to-r from-blue-500 to-green-500",
          label: "tracking-wider font-medium text-default-600",
        }}
      />
      </div>
      
      <Link href="/">   
      <Button
      className="bg-gradient-to-tr from-blue-500 to-emerald-500 text-white shadow-lg font-bold"
      >Go Back to Home</Button></Link>
    </div>
  );
}
