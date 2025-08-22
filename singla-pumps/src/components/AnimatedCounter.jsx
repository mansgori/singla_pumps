import React, { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({ start = 0, end, duration = 5000 }) => {
  const [count, setCount] = useState(start);
  const startTimeRef = useRef(null);

  useEffect(() => {
    const step = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      const progressPercent = Math.min(progress / duration, 1);
      const currentCount = Math.floor(start + progressPercent * (end - start));
      setCount(currentCount);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);

    return () => {
      startTimeRef.current = null;
    };
  }, [start, end, duration]);

  return <>{count.toLocaleString()}</>;
};

export default AnimatedCounter;
