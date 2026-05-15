import { useEffect, useState } from "react";

export function LiveClock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const update = () => {
      const d = new Date();
      const time = d.toLocaleTimeString("en-IN", {
        hour: "2-digit", minute: "2-digit", second: "2-digit",
        timeZone: "Asia/Kolkata", hour12: false,
      });
      setT(time);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="font-mono tabular-nums">{t}</span>;
}
