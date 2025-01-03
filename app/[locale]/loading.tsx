import { getTranslations } from "next-intl/server";

export default async function LoadingPage() {
  const t = await getTranslations();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <img className="w-[15em]" src="/icons/loading.gif" alt="" />
    </div>
  );
}
