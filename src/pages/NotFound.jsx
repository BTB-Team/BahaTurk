import React from "react"
import { useEffect, useState } from "react";

export default function NotFoundPage() {
    const [drawn, setDrawn] = useState(false);

    useEffect(() => {
        // trigger the blueprint-sketch animation once, after mount
        const id = requestAnimationFrame(() => setDrawn(true));
        return () => cancelAnimationFrame(id);
    }, []);

    return (
        <main className="relative min-h-screen overflow-hidden bg-background flex items-center justify-center px-6">

            {/* Blueprint grid backdrop */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(#EAF6FC 1px, transparent 1px), linear-gradient(90deg, #EAF6FC 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
                    WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
                }}
            />

            <div className="relative z-10 flex flex-col items-center text-center max-w-md">

                {/* Outlined "404", sketched in on load like a technical drawing */}
                <svg
                    viewBox="0 0 320 140"
                    className="w-64 md:w-80 h-auto mb-4"
                    role="img"
                    aria-label="404"
                >
                    <text
                        x="50%"
                        y="112"
                        textAnchor="middle"
                        fontFamily="Montserrat, sans-serif"
                        fontWeight="800"
                        fontSize="120"
                        fill="none"
                        stroke="#2AA9E0"
                        strokeWidth="2"
                        strokeDasharray="1400"
                        strokeDashoffset={drawn ? 0 : 1400}
                        style={{
                            transition: "stroke-dashoffset 1.4s ease-out",
                        }}
                    >
                        404
                    </text>
                </svg>

                {/* Location pin icon, matching the site's icon-circle language */}
                <div className="icon-circle mb-5">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Z" />
                        <circle cx="12" cy="10" r="2.5" />
                    </svg>
                </div>

                <h1 className="heading mb-2">Page not found</h1>

                <p className="muted mb-8 leading-relaxed">
                    The page you're looking for isn't part of our site map. It may have
                    moved, or the link may be out of date.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                    <a href="/" className="btn-primary">
                        Back to homepage
                    </a>
                    <a href="/contact" className="btn-ghost">
                        Contact us
                    </a>
                </div>
            </div>
        </main>
    );
}