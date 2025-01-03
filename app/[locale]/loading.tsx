import Image from "next/image";

export default async function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Image className="w-[15em]" src="/icons/loading.gif" alt="" />
    </div>
  );
}
