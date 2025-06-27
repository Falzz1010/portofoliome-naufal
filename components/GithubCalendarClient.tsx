"use client";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(() => import("react-github-calendar"), { ssr: false });

export default function GithubCalendarClient(props: import("react-github-calendar").Props) {
  return <GitHubCalendar {...props} />;
} 