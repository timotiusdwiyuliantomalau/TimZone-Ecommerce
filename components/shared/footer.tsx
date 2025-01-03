"use client";
import { ChevronUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import useSettingStore from "@/hooks/use-setting-store";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { i18n } from "@/i18n-config";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const {
    setting: { site, availableCurrencies, currency },
    setCurrency,
  } = useSettingStore();
  const { locales } = i18n;

  const locale = useLocale();
  const t = useTranslations();
  return (
    <footer className="bg-black  text-white underline-link">
      <div className="w-full">
        <Button
          variant="ghost"
          className="bg-gray-800 w-full  rounded-none "
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ChevronUp className="mr-2 h-4 w-4" />
          {t("Footer.Back to top")}
        </Button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
          <div>
            <h3 className="font-bold mb-2">{t("Footer.Get to Know Us")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/page/careers">{t("Footer.Careers")}</Link>
              </li>
              <li>
                <Link href="/page/blog">{t("Footer.Blog")}</Link>
              </li>
              <li>
                <Link href="/page/about-us">
                  {t("Footer.About name", { name: "TimZone" })}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">{t("Footer.Make Money with Us")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/page/sell">
                  {t("Footer.Sell products on", { name: "TimZone" })}
                </Link>
              </li>
              <li>
                <Link href="/page/become-affiliate">
                  {t("Footer.Become an Affiliate")}
                </Link>
              </li>
              <li>
                <Link href="/page/advertise">
                  {t("Footer.Advertise Your Products")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">{t("Footer.Let Us Help You")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/page/shipping">
                  {t("Footer.Shipping Rates & Policies")}
                </Link>
              </li>
              <li>
                <Link href="/page/returns-policy">
                  {t("Footer.Returns & Replacements")}
                </Link>
              </li>
              <li>
                <Link href="/page/help">{t("Footer.Help")}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-center  gap-3 text-sm">
          <Link href="/page/conditions-of-use">
            {t("Footer.Conditions of Use")}
          </Link>
          <Link href="/page/privacy-policy">{t("Footer.Privacy Notice")}</Link>
          <Link href="/page/help">{t("Footer.Help")}</Link>
        </div>
        <div className="flex justify-center text-sm">
          <p> © Timotius Malau | 2024</p>
        </div>
        <div className="mt-8 flex justify-center text-sm text-gray-400">
          Indonesia | +6280233243
        </div>
      </div>
    </footer>
  );
}
