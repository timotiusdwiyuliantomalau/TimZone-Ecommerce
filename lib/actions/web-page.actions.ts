"use server";

import { revalidatePath } from "next/cache";

import { connectToDatabase } from "@/lib/db";
import WebPage, { IWebPage } from "@/lib/db/models/web-page.model";
import { formatError } from "@/lib/utils";

import { WebPageInputSchema, WebPageUpdateSchema } from "../validator";
import { z } from "zod";


// CREATE
export async function createWebPage(data: z.infer<typeof WebPageInputSchema>) {
  try {
    const webPage = WebPageInputSchema.parse(data);
    await connectToDatabase();
    await WebPage.create(webPage);
    revalidatePath("/admin/web-pages");
    return {
      success: true,
      message: "WebPage created successfully",
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

// UPDATE
export async function updateWebPage(data: z.infer<typeof WebPageUpdateSchema>) {
  try {
    const webPage = WebPageUpdateSchema.parse(data);
    await connectToDatabase();
    await WebPage.findByIdAndUpdate(webPage._id, webPage);
    revalidatePath("/admin/web-pages");
    return {
      success: true,
      message: "WebPage updated successfully",
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}
// DELETE
export async function deleteWebPage(id: string) {
  try {
    await connectToDatabase();
    const res = await WebPage.findByIdAndDelete(id);
    if (!res) throw new Error("WebPage not found");
    revalidatePath("/admin/web-pages");
    return {
      success: true,
      message: "WebPage deleted successfully",
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

// GET ALL
export async function getAllWebPages() {
  await connectToDatabase();
  const webPages = await WebPage.find();
  return JSON.parse(JSON.stringify(webPages)) as IWebPage[];
}
export async function getWebPageById(webPageId: string) {
  await connectToDatabase();
  const webPage = await WebPage.findById(webPageId);
  return JSON.parse(JSON.stringify(webPage)) as IWebPage;
}

// GET ONE PAGE BY SLUG
export async function getWebPageBySlug(slug: string) {
  console.log(slug);
  await connectToDatabase();
  const webPage = await WebPage.findOne({ slug, isPublished: true });
  if(webPage&&slug=="about-us") webPage.content="Welcome to TimZone, your trusted destination for quality products and exceptional service. Our journey began with a mission to bring you the best shopping experience by offering a wide range of products at competitive prices, all in one convenient platform.";
  if(webPage&&slug=="customer-service"){ 
    webPage.content=`We’re here to help! If you have any questions, concerns, or feedback, please don’t hesitate to reach out to us. Our team is ready to assist you and ensure you have the best shopping experience.
**Customer Support**
For inquiries about orders, products, or account-related issues, contact our customer support team:
- **Email:** xii8a.timotiusdym20@gmail.com
- **Phone:** +620723842321
- **Live Chat:** Available on our website from 9 AM to 6 PM (Monday to Friday).

**Head Office**
For corporate or business-related inquiries, reach out to our headquarters:
- **Address:** GPP, Permai 19 Blok N Num.3, Cirebon, West java
- **Phone:** +1 (987) 654-3210

We look forward to assisting you! Your satisfaction is our priority.
`;}
  if (!webPage) throw new Error("WebPage not found");
  return JSON.parse(JSON.stringify(webPage)) as IWebPage;
}
