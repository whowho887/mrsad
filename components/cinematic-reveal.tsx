"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Volume2, VolumeX, Play, Pause, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

const VIDEO_HD =
  "https://res.cloudinary.com/dxshrigz4/video/upload/q_auto:best,f_auto,w_1920/v1775851883/mrsad_video_ninbgy.mp4";
const VIDEO_SD =
  "https://res.cloudinary.com/dxshrigz4/video/upload/q_auto,f_auto,w_1280/v1775851883/mrsad_video_ninbgy.mp4";
const POSTER =
  "https://res.cloudinary.com/dxshrigz4/video/upload/q_auto,f_auto,w_1280,so_0/v1775851883/mrsad_video_ninbgy.jpg";

/**
 * Cinematic video section — bordered glass vault with corner accents,
 * scanline overlay, custom controls (play/mute/fullscreen), and loading
 * state. Auto-plays muted in-viewport, pauses when scrolled away.
 */
export function CinematicReveal() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const vidRef = useRef<HTMLVideoElement | null>(null);
  const inView = useInView(rootRef, { margin: "-20% 0px -20% 0px", once: false });

  const [ready, setReady] = useState(false);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Auto-play when in view, pause when out
  useEffect(() => {
    const v = vidRef.current;
    if (!v) return;
    if (inView) {
      const p = v.play();
      if (p && typeof p.then === "function") {
        p.catch(() => {
          /* autoplay blocked — that's fine, user can click */
        });
      }
    } else {
      v.pause();
    }
  }, [inView]);

  const togglePlay = () => {
    const v = vidRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  const toggleMute = () => {
    const v = vidRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const enterFullscreen = () => {
    const v = vidRef.current;
    if (!v) return;
    if (v.requestFullscreen) v.requestFullscreen().catch(() => {});
  };

  return (
    <section
      id="reveal"
      ref={rootRef}
      className="relative mx-auto max-w-[1600px] px-4 py-24 md:px-8 md:py-32"
    >
      {/* Section label */}
      <div className="mb-10 flex items-center gap-4">
        <div className="h-px w-10 bg-cyan/40" />
        <span className="font-mono text-[10px] uppercase tracking-[0.46em] text-cyan/55">
          Cinematic Dossier
        </span>
        <span className="font-arabic text-[11px] text-cyan/35">
          ملف سينمائي
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-cyan/25 to-transparent" />
      </div>

      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-center">
        {/* Video frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "relative aspect-video w-full overflow-hidden",
            "bg-black crt-flicker",
            "border border-cyan/25 shadow-cyan-lg",
          )}
        >
          {/* Corner accents */}
          <span className="pointer-events-none absolute left-0 top-0 z-20 h-5 w-5 border-l-2 border-t-2 border-cyan/70" />
          <span className="pointer-events-none absolute right-0 top-0 z-20 h-5 w-5 border-r-2 border-t-2 border-cyan/70" />
          <span className="pointer-events-none absolute bottom-0 left-0 z-20 h-5 w-5 border-b-2 border-l-2 border-cyan/70" />
          <span className="pointer-events-none absolute bottom-0 right-0 z-20 h-5 w-5 border-b-2 border-r-2 border-cyan/70" />

          {/* Inner gradient wash */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.5)_100%)]" />

          {/* Loading state */}
          {!ready && (
            <div className="absolute inset-0 z-30 flex items-center justify-center bg-black">
              <div className="flex flex-col items-center gap-4">
                <div className="relative h-16 w-16">
                  <div className="absolute inset-0 animate-spin rounded-full border border-cyan/10 border-t-cyan/80" />
                  <div
                    className="absolute inset-2 animate-spin rounded-full border border-cyan/0 border-b-cyan/50"
                    style={{ animationDuration: "2.6s", animationDirection: "reverse" }}
                  />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.36em] text-cyan/50">
                  Buffering <span className="live-pulse">▌</span>
                </div>
                <div className="font-arabic text-[11px] text-cyan/30">
                  جارٍ تحميل البث
                </div>
              </div>
            </div>
          )}

          {/* HUD top bar */}
          <div className="pointer-events-none absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-status-threat live-pulse shadow-[0_0_10px_#ff3355]" />
              <span className="font-mono text-[9px] uppercase tracking-[0.36em] text-status-threat/90">
                REC · SIGNAL LOCKED
              </span>
            </div>
            <div className="hidden items-center gap-4 md:flex">
              <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-cyan/45">
                CH · 01
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-cyan/45">
                ISO · 1600
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-cyan/45">
                24.000 FPS
              </span>
            </div>
          </div>

          {/* HUD bottom bar (progress) */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 px-4 pb-3">
            <div className="h-[2px] w-full bg-white/5">
              <div
                className="h-full bg-gradient-to-r from-cyan/80 to-status-ok/60 shadow-[0_0_10px_#00f0ff]"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-cyan/40">
                T · {formatTime((vidRef.current?.currentTime ?? 0))}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-cyan/40">
                MRSAD · CLASSIFIED REEL
              </span>
            </div>
          </div>

          {/* Scanline overlay */}
          <div className="scanlines z-10" />

          {/* Video */}
          <video
            ref={vidRef}
            className="absolute inset-0 z-[1] h-full w-full object-cover"
            playsInline
            muted={muted}
            autoPlay
            loop
            preload="metadata"
            poster={POSTER}
            onLoadedData={() => setReady(true)}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onTimeUpdate={(e) => {
              const v = e.currentTarget;
              if (v.duration) setProgress(v.currentTime / v.duration);
            }}
          >
            <source media="(min-width: 1024px)" src={VIDEO_HD} type="video/mp4" />
            <source src={VIDEO_SD} type="video/mp4" />
          </video>

          {/* Custom controls tray */}
          <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-cyan/25 bg-black/60 px-4 py-2 backdrop-blur-xl">
            <button
              onClick={togglePlay}
              aria-label={playing ? "Pause" : "Play"}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan/25 text-cyan/80 transition hover:border-cyan hover:bg-cyan/10 hover:text-cyan"
            >
              {playing ? <Pause size={12} /> : <Play size={12} />}
            </button>
            <button
              onClick={toggleMute}
              aria-label={muted ? "Unmute" : "Mute"}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan/25 text-cyan/80 transition hover:border-cyan hover:bg-cyan/10 hover:text-cyan"
            >
              {muted ? <VolumeX size={12} /> : <Volume2 size={12} />}
            </button>
            <div className="mx-1 h-4 w-px bg-cyan/20" />
            <button
              onClick={enterFullscreen}
              aria-label="Fullscreen"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan/25 text-cyan/80 transition hover:border-cyan hover:bg-cyan/10 hover:text-cyan"
            >
              <Maximize2 size={11} />
            </button>
          </div>
        </motion.div>

        {/* Side copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.46em] text-cyan/45">
            Dossier · 001 · Signal Intercept
          </span>
          <h2 className="font-display text-balance text-[clamp(1.9rem,3.2vw,3rem)] font-normal leading-[1.15] text-chrome">
            <em className="not-italic text-cyan">The Sentinel</em> watches
            before the <em className="italic text-white/90">first strike</em>.
          </h2>
          <p className="font-arabic text-right text-[clamp(0.95rem,1.4vw,1.15rem)] leading-[2] text-muted" dir="rtl">
            لقطات مُسرَّبة من مرحلة المعايرة النهائية — منظومة{" "}
            <strong className="text-cyan/80">مرصاد</strong> تعمل في صمت كامل،
            تتسلل إلى طبقة وقت التشغيل حيث تتشكّل التهديدات، وتُنفّذ القرار في
            ميكروثانية — دون انتظار أمر بشري.
          </p>

          <div className="mt-2 flex flex-wrap gap-2" dir="ltr">
            {["Falco · eBPF", "NATS · JetStream", "OPA · Rego", "PostgreSQL · Forensic"].map(
              (chip) => (
                <span
                  key={chip}
                  className="border border-cyan/15 bg-cyan/[0.02] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/55 transition hover:border-cyan/40 hover:text-cyan/80"
                >
                  {chip}
                </span>
              ),
            )}
          </div>

          <div className="mt-4 border-t border-cyan/10 pt-4">
            <div className="grid grid-cols-3 gap-4">
              <Stat label="Decision Latency" value="0.42" unit="ms" ar="زمن القرار" />
              <Stat label="Signals / sec" value="24K" unit="evt" ar="إشارة/ث" />
              <Stat label="Coverage" value="99.997" unit="%" ar="التغطية" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  unit,
  ar,
}: {
  label: string;
  value: string;
  unit: string;
  ar: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-[8.5px] uppercase tracking-[0.3em] text-cyan/40">
        {label}
      </span>
      <span className="font-display text-[clamp(1.1rem,2vw,1.8rem)] leading-none text-chrome">
        {value}
        <span className="ml-1 font-mono text-[10px] text-cyan/55">{unit}</span>
      </span>
      <span className="font-arabic text-[10px] text-muted" dir="rtl">
        {ar}
      </span>
    </div>
  );
}

function formatTime(sec: number) {
  if (!Number.isFinite(sec) || sec < 0) sec = 0;
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
