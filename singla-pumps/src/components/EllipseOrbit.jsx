import { useEffect, useRef } from "react";

export default function EllipseOrbit() {
  const ball1Ref = useRef(null);
  const ball2Ref = useRef(null);
  const ball3Ref = useRef(null);

  useEffect(() => {
    const ball1 = ball1Ref.current;
    const ball2 = ball2Ref.current;
    const ball3 = ball3Ref.current;

    let angle = 0;

    const animate = () => {
      angle += 0.5; // speed in degrees

      // Base ellipse radii
      const radiusX = 200;
      const radiusY = 120;

      // Rotation angles for the ellipses (in degrees)
      const tilt1 = 0;
      const tilt2 = 250;
      const tilt3 = 135;

      // Position each ball
      positionBall(ball1, radiusX, radiusY, tilt1, angle);
      positionBall(ball2, radiusX, radiusY, tilt2, angle);
      positionBall(ball3, radiusX, radiusY, tilt3, angle);

      requestAnimationFrame(animate);
    };

    function positionBall(ball, rx, ry, tiltDeg, a) {
      const tilt = (tiltDeg * Math.PI) / 180;
      const rad = (a * Math.PI) / 180;

      const x =
        rx * Math.cos(rad) * Math.cos(tilt) -
        ry * Math.sin(rad) * Math.sin(tilt);
      const y =
        rx * Math.cos(rad) * Math.sin(tilt) +
        ry * Math.sin(rad) * Math.cos(tilt);

      ball.style.transform = `translate(${x}px, ${y}px)`;
    }

    animate();
  }, []);

  return (
    <div className="bg-transparent flex justify-center items-center min-h-screen">
      <div className="relative w-[500px] h-[500px]">
        {/* Elliptical paths */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 500 500"
          fill="none"
        >
          <ellipse
            cx="250"
            cy="250"
            rx="200"
            ry="120"
            stroke="rgba(131, 105, 105, 0.1)" // 50% opacity
            strokeWidth="1"
            transform="rotate(0 250 250)"
            fill="none"
          />
          <ellipse
            cx="250"
            cy="250"
            rx="200"
            ry="120"
            stroke="rgba(131, 105, 105, 0.1)"
            strokeWidth="1"
            transform="rotate(250 250 250)"
            fill="none"
          />
          <ellipse
            cx="250"
            cy="250"
            rx="200"
            ry="120"
            stroke="rgba(131, 105, 105, 0.1)"
            strokeWidth="1"
            transform="rotate(135 250 250)"
            fill="none"
          />
        </svg>

        {/* Balls */}
        <div
          ref={ball1Ref}
          className="absolute top-1/2 left-1/2 w-[14px] h-[14px] bg-gray-400 opacity-50 rounded-full -translate-x-1/2 -translate-y-1/2"
        ></div>
        <div
          ref={ball2Ref}
          className="absolute top-1/2 left-1/2 w-[14px] h-[14px] bg-gray-400 opacity-50 rounded-full -translate-x-1/2 -translate-y-1/2"
        ></div>
        <div
          ref={ball3Ref}
          className="absolute top-1/2 left-1/2 w-[14px] h-[14px] bg-gray-400 opacity-50 rounded-full -translate-x-1/2 -translate-y-1/2"
        ></div>
      </div>
    </div>
  );
}
