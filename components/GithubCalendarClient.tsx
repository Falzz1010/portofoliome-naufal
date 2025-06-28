"use client";
import dynamic from "next/dynamic";
import React from "react";

const GitHubCalendar = dynamic(() => import("react-github-calendar"), {
  ssr: false,
  loading: () => <div className="text-zinc-400 text-center py-4">Loading GitHub Calendar...</div>,
});

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(_error: unknown, _errorInfo: unknown) {
    // You can log error here if needed
  }
  render() {
    if (this.state.hasError) {
      return <div className="text-red-500 text-center py-4">Failed to load GitHub Calendar.</div>;
    }
    return this.props.children;
  }
}

export default function GithubCalendarClient(props: import("react-github-calendar").Props) {
  return (
    <ErrorBoundary>
      <GitHubCalendar {...props} />
    </ErrorBoundary>
  );
} 