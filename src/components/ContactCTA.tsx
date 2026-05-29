"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import EmailContactModal from "@/components/EmailContactModal";
import MagneticButton from "@/components/MagneticButton";
import { portfolio } from "@/data/portfolio";

export default function ContactCTA() {
  const { contact, socialLinks, actions } = portfolio;
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  
  // Stateful terminal log feed
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const time = new Date().toLocaleTimeString();
    setLogs([
      `[${time}] SYSTEM_BOOT: CONSOLE_ONLINE`,
      `[${time}] LINKING GATEWAY DIRECTIVE...`,
      `[${time}] TARGET_OPERATIVE: KARAN_SAINI`
    ]);

    const sysActions = [
      "BULLMQ_WORKER: ACTIVE_JOBS: 0",
      "POSTGRES_POOL: STATUS_STABLE",
      "VERCEL_EDGE: CACHE_HIT_INDEX",
      "REDIS_PERSISTENCE: DATA_SYNCED",
      "PRISMA_CLIENT: INTEGRITY_PASS"
    ];

    const interval = setInterval(() => {
      const now = new Date().toLocaleTimeString();
      const randomAction = sysActions[Math.floor(Math.random() * sysActions.length)];
      setLogs((prev) => [...prev.slice(-4), `[${now}] SYSTEM_DECK: ${randomAction}`]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const addInteractiveLog = (actionName: string) => {
    const now = new Date().toLocaleTimeString();
    setLogs((prev) => [...prev.slice(-4), `[${now}] PROBE_INTERACT: hover_${actionName.toLowerCase()}`]);
  };

  return (
    <>
      <section id="contact" className="relative px-5 py-16 sm:py-24">
        <motion.div
          className="glow-border glass-panel mx-auto max-w-4xl overflow-hidden rounded-[2.25rem] p-6 text-center sm:p-8 relative"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Top bezel detail bar */}
          <div className="absolute inset-x-0 top-0 h-8 flex items-center justify-between px-6 border-b border-white/5 bg-white/[0.015] select-none font-mono text-[0.45rem] sm:text-[0.55rem] tracking-[0.16em] sm:tracking-[0.24em] text-slate-500">
            <span>TERMINAL_OUTPUT: CONSOLE_LOGS</span>
            <span>ENCRYPTION: SECURE_LINK</span>
          </div>

          <div className="mx-auto max-w-2xl pt-6">
            <p className="font-mono text-[0.55rem] sm:text-[0.6rem] uppercase tracking-[0.28em] sm:tracking-[0.34em] text-sky-400/80">// TELEMETRY OUTPUT GATEWAY //</p>
            <h2 className="mt-4 text-balance text-2xl sm:text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {contact.title}
            </h2>
            <p className="mt-3.5 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-400">
              {contact.subtext}
            </p>

            {/* Real-time Interaction Console Logs */}
            <div className="mt-5 font-mono text-left bg-black/45 rounded-xl border border-white/5 p-3.5 sm:p-4 text-[0.58rem] sm:text-[0.65rem] leading-5 text-sky-300 min-h-[110px] select-none relative overflow-hidden">
              <div className="absolute top-2 right-3 font-mono text-[0.45rem] sm:text-[0.5rem] text-slate-650 tracking-wider hidden sm:block">
                LIVE_FEED_STREAM
              </div>
              <div className="space-y-1 break-all">
                {logs.map((log, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-slate-600 mt-[2px] flex-none">❯</span>
                    <span>{log}</span>
                  </div>
                ))}
              </div>
              <div className="mt-1.5 flex items-center gap-1.5 text-slate-500">
                <span className="h-1.5 w-1 bg-sky-400 animate-pulse flex-none" />
                <span className="text-[0.55rem] sm:text-[0.6rem]">AWAITING OPERATIVE DIRECTIVES...</span>
              </div>
            </div>

            {/* Action Buttons styled like CLI commands */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
              <div onMouseEnter={() => addInteractiveLog("EMAIL")}>
                <MagneticButton ariaLabel={actions.email} onClick={() => setIsEmailOpen(true)} variant="primary" className="!text-[0.68rem] sm:!text-xs !px-3 sm:!px-4.5 !min-h-9 sm:!min-h-11 font-mono tracking-wider">
                  [ SEND_EMAIL ]
                </MagneticButton>
              </div>
              <div onMouseEnter={() => addInteractiveLog("GITHUB")}>
                <MagneticButton href={socialLinks.github} ariaLabel={actions.github} className="!text-[0.68rem] sm:!text-xs !px-3 sm:!px-4.5 !min-h-9 sm:!min-h-11 font-mono tracking-wider">
                  [ OPEN_GITHUB ]
                </MagneticButton>
              </div>
              <div onMouseEnter={() => addInteractiveLog("LINKEDIN")}>
                <MagneticButton href={socialLinks.linkedin} ariaLabel={actions.linkedin} className="!text-[0.68rem] sm:!text-xs !px-3 sm:!px-4.5 !min-h-9 sm:!min-h-11 font-mono tracking-wider">
                  [ SYS_LINKEDIN ]
                </MagneticButton>
              </div>
              {socialLinks.x && (
                <div onMouseEnter={() => addInteractiveLog("X_PROFILE")}>
                  <MagneticButton href={socialLinks.x} ariaLabel="X" className="!text-[0.68rem] sm:!text-xs !px-3 sm:!px-4.5 !min-h-9 sm:!min-h-11 font-mono tracking-wider">
                    [ CONNECT_ON_X ]
                  </MagneticButton>
                </div>
              )}
              <div onMouseEnter={() => addInteractiveLog("RESUME")}>
                <MagneticButton href={socialLinks.resume} ariaLabel="Resume" className="!text-[0.68rem] sm:!text-xs !px-3 sm:!px-4.5 !min-h-9 sm:!min-h-11 font-mono tracking-wider">
                  {socialLinks.resume ? "[ LOAD_RESUME ]" : "[ RESUME_PENDING ]"}
                </MagneticButton>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <EmailContactModal email={socialLinks.email} isOpen={isEmailOpen} onClose={() => setIsEmailOpen(false)} />
    </>
  );
}
