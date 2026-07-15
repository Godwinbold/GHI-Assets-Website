import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Plane, Award, ShieldCheck } from "lucide-react";
import Wrapper from "./Wrapper";
import { fadeInUp, defaultViewport } from "../../lib/animations";

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    const end = value;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad function
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * end);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-mono text-4xl sm:text-5xl font-bold tracking-tight text-brand">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

function StatCard({ value, suffix, label, description, icon }: StatItemProps) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="flex flex-col p-6 sm:p-8 rounded-lg border border-slate-100 bg-white shadow-xs hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand/5 text-brand">
          {icon}
        </div>
      </div>
      <div className="flex items-baseline gap-1 mb-2">
        <Counter value={value} suffix={suffix} />
      </div>
      <h3 className="font-semibold text-slate-900 text-base mb-1">{label}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function AviationStats() {
  const stats: StatItemProps[] = [
    {
      value: 5,
      suffix: "",
      label: "Partner Carriers",
      description: "Represented across West and Central African hubs.",
      icon: <Plane className="h-6 w-6" strokeWidth={1.5} />,
    },
    {
      value: 6,
      suffix: "",
      label: "Continents Connected",
      description: "Global cargo operations reaching international hubs.",
      icon: <Globe className="h-6 w-6" strokeWidth={1.5} />,
    },
    {
      value: 100,
      suffix: "k+",
      label: "Tons Handled",
      description: "Yearly cargo capacity routed through partner channels.",
      icon: <Award className="h-6 w-6" strokeWidth={1.5} />,
    },
    {
      value: 99,
      suffix: ".9%",
      label: "Operational Reliability",
      description: "Precision turnaround and ground handling dispatch.",
      icon: <ShieldCheck className="h-6 w-6" strokeWidth={1.5} />,
    },
  ];

  return (
    <Wrapper className="py-20 bg-slate-50/50 flex flex-col md:grid overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={fadeInUp}
        className="max-w-3xl mb-12"
      >
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 mb-2">Operational Scope</p>
        <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl">
          GHI in Numbers
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
      >
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </motion.div>
    </Wrapper>
  );
}
