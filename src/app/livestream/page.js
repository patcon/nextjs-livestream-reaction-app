import { redirect } from "next/navigation";
import { DEFAULT_VIDEO_ID } from "@/lib/constants";

export default function Page() {
  redirect(`/livestream/${DEFAULT_VIDEO_ID}`)
}