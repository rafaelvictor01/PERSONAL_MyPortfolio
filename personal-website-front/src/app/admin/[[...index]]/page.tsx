"use client";

import { NextStudio } from "next-sanity/studio";

import sanityConfig from "../../../../sanity.config";

export default function AdminPage(): React.ReactNode {
  return <NextStudio config={sanityConfig} />;
}
