"use client";

import { useEffect, useRef } from "react";

function isIntersecting(donutRect: DOMRect, textRect: DOMRect) {
  return !(
    donutRect.right < textRect.left ||
    donutRect.left > textRect.right ||
    donutRect.bottom < textRect.top ||
    donutRect.top > textRect.bottom
  );
}

export function SpinningDonut() {
  const ref = useRef<HTMLPreElement | null>(null);

  useEffect(() => {
    const textElements = document.querySelectorAll(".text-content");

    let A = 0, B = 0;
    let posX = 0, posY = 0;
    let velocityX = 1, velocityY = 1;

    const renderFrame = () => {
      const z = new Array(1760).fill(0);
      const b = new Array(1760).fill(" ");
      for (let j = 0; j < 6.28; j += 0.07) {
        for (let i = 0; i < 6.28; i += 0.02) {
          const c = Math.sin(i);
          const d = Math.cos(j);
          const e = Math.sin(A);
          const f = Math.sin(j);
          const g = Math.cos(A);
          const h = d + 2;
          const D = 1 / (c * h * e + f * g + 5);
          const l = Math.cos(i);
          const m = Math.cos(B);
          const n = Math.sin(B);
          const t = c * h * g - f * e;
          const x = Math.floor(40 + 30 * D * (l * h * m - t * n));
          const y = Math.floor(12 + 15 * D * (l * h * n + t * m));
          const o = x + 80 * y;
          const N = Math.floor(
            8 *
              ((f * e - c * d * g) * m -
                c * d * e -
                f * g -
                l * d * n)
          );
          if (22 > y && y > 0 && x > 0 && 80 > x && D > z[o]) {
            z[o] = D;
            b[o] = ".,-~:;=!*#$@"[Math.max(0, N)];
          }
        }
      }
      let output = "";
      for (let k = 0; k < 1760; k++) {
        output += k % 80 ? b[k] : "\n";
      }

      if (ref.current) {
        ref.current.textContent = output;

        // Update position for floating
        posX += velocityX;
        posY += velocityY;

        // Reverse direction on boundaries
        const parentWidth = window.innerWidth;
        const parentHeight = window.innerHeight;

        if (posX + ref.current.offsetWidth > parentWidth || posX < 0) {
          velocityX *= -1;
        }
        if (posY + ref.current.offsetHeight > parentHeight || posY < 0) {
          velocityY *= -1;
        }

        // Apply transform for floating
        ref.current.style.transform = `translate(${posX}px, ${posY}px)`;
        const donutRect = ref.current.getBoundingClientRect();

      // Blur background of intersecting text elements
      textElements.forEach((element) => {
        const textRect = element.getBoundingClientRect();
        if (isIntersecting(donutRect, textRect)) {
          console.log('Intersecting');
          element.classList.add("blurred-background");
        } else {
          console.log('Not intersecting');
          element.classList.remove("blurred-background");
        }
      });
      
      }

      A += 0.04;
      B += 0.02;
    };

    const frame = setInterval(renderFrame, 30);
    return () => clearInterval(frame);
  }, []);

  return (
    <pre
      ref={ref}
      style={{
        lineHeight: "12px",
        whiteSpace: "pre",
        zIndex: -1,
        pointerEvents: "none",
      }}
    className=" absolute text-xs text-dracula-orange dark:text-dracula-green"></pre>
  );
}