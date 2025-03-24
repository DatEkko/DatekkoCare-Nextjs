"use client";

import PerfectScrollBar from "react-perfect-scrollbar";

export default function PerfectScrollContainer({ children }: { children: React.ReactNode }) {
    return <PerfectScrollBar>{children}</PerfectScrollBar>;
}