import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YihengOS | 李毅恒",
  description: "李毅恒的个人操作系统入口：项目、Skill、经历与 163 个行业探索。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
