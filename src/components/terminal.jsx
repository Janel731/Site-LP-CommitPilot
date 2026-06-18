import * as React from "react"
import { motion } from "framer-motion";

export function Terminal({
    lines: initialLines
}) {
    const [lines, setLines] = React.useState([])
    const [input, setInput] = React.useState("")

 const defaultLines = [
    { text: "commitpilot start", type: "cmd" },
    { text: "⚡ Initializing CommitPilot...", type: "output" },
    { text: "✓ Git repository detected", type: "success" },
    { text: "✓ 12 modified files analyzed", type: "success" },
    { text: "🤖 Generating commit message...", type: "output" },
    { text: 'feat: improve authentication flow', type: "success" },
    { text: "✓ Commit created successfully", type: "success" },
    { text: "🚀 Workflow completed", type: "success" },
];

    React.useEffect(() => {
        const targetLines = initialLines || defaultLines
        let current = 0
        const timer = setInterval(() => {
            if (current < targetLines.length) {
                const lineToAdd = targetLines[current]
                setLines(prev => [...prev, lineToAdd])
                current++
            } else {
                clearInterval(timer)
            }
        }, 600)
        return () => clearInterval(timer);
    }, [])

    return (
        <div
            className="w-full max-w-7xl mx-auto rounded-xl border bg-zinc-950 shadow-2xl overflow-hidden font-mono text-sm">
            {/* Header */}
            <div
                className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800">
                <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/50" />
                    <div className="h-3 w-3 rounded-full bg-amber-500/50" />
                    <div className="h-3 w-3 rounded-full bg-emerald-500/50" />
                </div>
                <div className="text-zinc-500 text-xs">zsh — commitpilot</div>
                <div className="w-10" />
            </div>
            {/* Content */}
            <div className="p-4 h-[300px] overflow-y-auto space-y-1">
                {lines.map((line, i) => {
                    if (!line) return null
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex gap-2">
                            {line.type === "cmd" && <span className="text-emerald-500">$</span>}
                            <span
                                className={
                                    line.type === "error" ? "text-red-400" :
                                        line.type === "success" ? "text-emerald-400" :
                                            line.type === "cmd" ? "text-zinc-200 font-bold" :
                                                "text-zinc-400"
                                }>
                                {line.text}
                            </span>
                        </motion.div>
                    );
                })}
                <div className="flex gap-2 items-center">
                    <span className="text-emerald-500">$</span>
                    <span className="w-2 h-4 bg-emerald-500 animate-pulse" />
                </div>
            </div>
        </div>
    );
}
