import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useGSAP } from "@gsap/react";
import { FaCircleArrowDown } from "react-icons/fa6";
import { SplitText } from "gsap/SplitText";
import { SocialIcon } from "react-social-icons";

const LandingPage = () => {
  useGSAP(() => {
    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(DrawSVGPlugin);
    let split2;
    let animation = gsap.timeline({});
    gsap.set("#wrapper", { autoAlpha: 1 });

    split2 = new SplitText("#heading2", {
      type: "chars",
    });

    animation
      .fromTo(
        "#TLsvg path",
        { drawSVG: "0% 0%", fillOpacity: 0 },
        { delay: 1, duration: 2, drawSVG: "100%", autoAlpha: 1, stagger: 0.2 }
      )
      .add(() => {
        // Reveal the fill by setting fill-opacity to 1
        gsap.to("#TLsvg path", {
          fillOpacity: 1,
          duration: 0.1,
          stagger: 0.05,
        });
      })
      .from(split2.chars, {
        duration: 1.2,
        opacity: 0,
        y: -100,
        ease: "bounce.out",
        stagger: 0.1,
      })
      .fromTo(
        "#arrow_path",
        { drawSVG: "0", fillOpacity: 0 },
        { delay: 0.25, duration: 0.5, drawSVG: "100%", autoAlpha: 1 }
      )
      .from(
        "#icons-container",
        {
          duration: 1,
          scale: 0.5, // Start from half size
          autoAlpha: 0, // Start from fully transparent
          ease: "bounce.out", // Use "bounce.out" for a bounce effect
        },
        "<"
      );
  }, []);

  return (
    <div className="h-full w-full">
      <div className="relative flex flex-col justify-center items-center min-h-screen z-0">
        <div id="wrapper" className="relative justify-center mt-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="500"
            viewBox="0 100 354 120"
            height="200"
            preserveAspectRatio="xMinYMin meet"
            version="1.0"
            id="TLsvg"
          >
            <defs>
              <g />
            </defs>
            <g>
              <g transform="translate(50.105529, 198.31462)">
                <g>
                  <path
                    id="path1"
                    stroke="#DC2626"
                    fill="#DC2626"
                    d="M 14.640625 -31.109375 L 5.09375 -30.671875 C 4.707031 -30.671875 4.296875 -30.941406 3.859375 -31.484375 C 3.429688 -32.023438 3.21875 -32.488281 3.21875 -32.875 C 3.21875 -33.257812 3.890625 -33.484375 5.234375 -33.546875 C 6.578125 -33.609375 11.070312 -33.640625 18.71875 -33.640625 C 21.1875 -33.640625 23.4375 -33.359375 25.46875 -32.796875 C 27.5 -32.242188 28.515625 -31.679688 28.515625 -31.109375 C 28.515625 -30.785156 28.03125 -30.625 27.0625 -30.625 C 26.101562 -30.625 24.703125 -30.695312 22.859375 -30.84375 C 21.023438 -30.988281 19.179688 -31.078125 17.328125 -31.109375 C 17.421875 -30.753906 17.46875 -30.429688 17.46875 -30.140625 C 17.46875 -28.128906 16.253906 -22.691406 13.828125 -13.828125 C 13.472656 -12.578125 12.988281 -10.6875 12.375 -8.15625 C 11.769531 -5.632812 11.289062 -3.800781 10.9375 -2.65625 C 10.59375 -1.519531 10.289062 -0.953125 10.03125 -0.953125 C 9.675781 -0.953125 9.304688 -1.164062 8.921875 -1.59375 C 8.546875 -2.03125 8.359375 -2.617188 8.359375 -3.359375 C 8.359375 -4.097656 9.347656 -8.265625 11.328125 -15.859375 C 13.304688 -23.460938 14.410156 -28.546875 14.640625 -31.109375 Z M 14.640625 -31.109375 "
                  />
                </g>
              </g>
            </g>
            <g>
              <g transform="translate(74.585481, 198.31462)">
                <g>
                  <path
                    id="path2"
                    stroke="#DC2626"
                    fill="#DC2626"
                    d="M 7.109375 -35.765625 C 7.109375 -36.460938 7.171875 -36.929688 7.296875 -37.171875 C 7.421875 -37.410156 7.691406 -37.53125 8.109375 -37.53125 C 8.523438 -37.53125 8.957031 -37.175781 9.40625 -36.46875 C 9.851562 -35.769531 10.078125 -35.035156 10.078125 -34.265625 C 10.078125 -31.710938 9.617188 -27.800781 8.703125 -22.53125 C 7.796875 -17.269531 6.382812 -11.9375 4.46875 -6.53125 C 8.269531 -13.1875 11.210938 -17.773438 13.296875 -20.296875 C 15.378906 -22.828125 17.171875 -24.09375 18.671875 -24.09375 C 19.441406 -24.09375 20.328125 -23.457031 21.328125 -22.1875 C 22.335938 -20.925781 22.84375 -19.53125 22.84375 -18 C 22.84375 -16.46875 22.332031 -14.09375 21.3125 -10.875 C 20.289062 -7.65625 19.382812 -5.171875 18.59375 -3.421875 C 17.8125 -1.679688 17.070312 -0.8125 16.375 -0.8125 C 15.851562 -0.8125 15.59375 -1.09375 15.59375 -1.65625 C 15.59375 -2.21875 15.738281 -2.953125 16.03125 -3.859375 C 16.320312 -4.773438 16.738281 -5.984375 17.28125 -7.484375 C 19.101562 -12.441406 20.015625 -15.976562 20.015625 -18.09375 C 20.015625 -18.800781 19.796875 -19.398438 19.359375 -19.890625 C 18.929688 -20.390625 18.523438 -20.640625 18.140625 -20.640625 C 17.210938 -20.640625 16.164062 -19.914062 15 -18.46875 C 13.832031 -17.03125 12.609375 -15.34375 11.328125 -13.40625 C 10.046875 -11.476562 9.347656 -10.429688 9.234375 -10.265625 C 9.128906 -10.109375 8.992188 -9.898438 8.828125 -9.640625 C 8.671875 -9.390625 8.382812 -8.953125 7.96875 -8.328125 C 7.550781 -7.703125 6.878906 -6.640625 5.953125 -5.140625 C 4.160156 -2.253906 3.164062 -0.8125 2.96875 -0.8125 C 2.65625 -0.8125 2.289062 -1.039062 1.875 -1.5 C 1.457031 -1.96875 1.25 -2.398438 1.25 -2.796875 C 1.25 -3.203125 1.441406 -4.125 1.828125 -5.5625 C 3.390625 -11.070312 4.476562 -15.394531 5.09375 -18.53125 C 6.4375 -25.34375 7.109375 -31.085938 7.109375 -35.765625 Z M 7.109375 -35.765625 "
                  />
                </g>
              </g>
            </g>
            <g>
              <g transform="translate(98.681438, 198.31462)">
                <g>
                  <path
                    id="path3"
                    stroke="#DC2626"
                    fill="#DC2626"
                    d="M 12.375 -5.78125 C 13.851562 -7.300781 14.96875 -9.019531 15.71875 -10.9375 C 16.46875 -12.863281 16.84375 -14.5625 16.84375 -16.03125 C 16.84375 -17.5 16.59375 -18.753906 16.09375 -19.796875 C 15.601562 -20.835938 14.941406 -21.550781 14.109375 -21.9375 C 11.453125 -21.425781 9.273438 -19.710938 7.578125 -16.796875 C 5.890625 -13.890625 5.046875 -10.851562 5.046875 -7.6875 C 5.046875 -5.28125 5.859375 -3.789062 7.484375 -3.21875 C 9.273438 -3.40625 10.90625 -4.257812 12.375 -5.78125 Z M 3.734375 -15.625 C 4.796875 -18.039062 6.242188 -20.054688 8.078125 -21.671875 C 9.921875 -23.285156 11.78125 -24.09375 13.65625 -24.09375 C 15.53125 -24.09375 17.003906 -23.300781 18.078125 -21.71875 C 19.148438 -20.132812 19.6875 -18.285156 19.6875 -16.171875 C 19.6875 -12.398438 18.453125 -8.894531 15.984375 -5.65625 C 13.515625 -2.425781 10.664062 -0.8125 7.4375 -0.8125 C 5.84375 -0.8125 4.5625 -1.53125 3.59375 -2.96875 C 2.632812 -4.414062 2.15625 -6.28125 2.15625 -8.5625 C 2.15625 -10.851562 2.679688 -13.207031 3.734375 -15.625 Z M 3.734375 -15.625 "
                  />
                </g>
              </g>
            </g>
            <g>
              <g transform="translate(119.417399, 198.31462)">
                <g>
                  <path
                    id="path4"
                    stroke="#DC2626"
                    fill="#DC2626"
                    d="M 32.015625 -24.09375 C 32.847656 -24.09375 33.613281 -23.515625 34.3125 -22.359375 C 35.019531 -21.210938 35.375 -19.445312 35.375 -17.0625 C 35.375 -14.675781 34.691406 -11.367188 33.328125 -7.140625 C 31.972656 -2.921875 30.734375 -0.8125 29.609375 -0.8125 C 29.097656 -0.8125 28.84375 -1.128906 28.84375 -1.765625 C 28.84375 -2.410156 29.15625 -3.539062 29.78125 -5.15625 C 30.40625 -6.769531 31.035156 -8.6875 31.671875 -10.90625 C 32.316406 -13.132812 32.640625 -15.351562 32.640625 -17.5625 C 32.640625 -19.769531 32.222656 -20.875 31.390625 -20.875 C 30.910156 -20.875 30.460938 -20.695312 30.046875 -20.34375 C 29.628906 -20 29.289062 -19.695312 29.03125 -19.4375 C 28.78125 -19.1875 28.46875 -18.800781 28.09375 -18.28125 C 27.726562 -17.769531 27.398438 -17.320312 27.109375 -16.9375 C 26.828125 -16.5625 26.445312 -16.003906 25.96875 -15.265625 C 25.488281 -14.523438 25.078125 -13.898438 24.734375 -13.390625 C 24.398438 -12.878906 23.9375 -12.148438 23.34375 -11.203125 C 22.757812 -10.265625 22.289062 -9.535156 21.9375 -9.015625 C 21.582031 -8.503906 21.019531 -7.515625 20.25 -6.046875 C 18.457031 -2.554688 17.304688 -0.8125 16.796875 -0.8125 C 16.546875 -0.8125 16.273438 -0.972656 15.984375 -1.296875 C 15.691406 -1.617188 15.546875 -1.960938 15.546875 -2.328125 C 15.546875 -2.691406 15.769531 -3.453125 16.21875 -4.609375 C 16.664062 -5.765625 17.171875 -6.976562 17.734375 -8.25 C 18.296875 -9.53125 18.800781 -11.097656 19.25 -12.953125 C 19.695312 -14.816406 19.921875 -16.5625 19.921875 -18.1875 C 19.921875 -18.925781 19.703125 -19.554688 19.265625 -20.078125 C 18.835938 -20.609375 18.460938 -20.875 18.140625 -20.875 C 17.816406 -20.875 17.535156 -20.828125 17.296875 -20.734375 C 17.054688 -20.640625 16.789062 -20.472656 16.5 -20.234375 C 16.21875 -19.992188 15.945312 -19.738281 15.6875 -19.46875 C 15.4375 -19.195312 15.125 -18.816406 14.75 -18.328125 C 14.382812 -17.847656 14.050781 -17.398438 13.75 -16.984375 C 13.445312 -16.578125 13.070312 -16.023438 12.625 -15.328125 C 12.175781 -14.640625 11.765625 -14.023438 11.390625 -13.484375 C 11.023438 -12.941406 10.554688 -12.222656 9.984375 -11.328125 C 9.410156 -10.429688 8.84375 -9.566406 8.28125 -8.734375 C 7.71875 -7.898438 6.972656 -6.734375 6.046875 -5.234375 C 4.222656 -2.285156 3.195312 -0.8125 2.96875 -0.8125 C 2.625 -0.8125 2.25 -1.039062 1.84375 -1.5 C 1.445312 -1.96875 1.25 -2.351562 1.25 -2.65625 C 1.25 -2.96875 1.285156 -3.3125 1.359375 -3.6875 C 1.441406 -4.070312 1.5625 -4.5625 1.71875 -5.15625 C 1.882812 -5.75 2.046875 -6.332031 2.203125 -6.90625 C 2.679688 -8.351562 3.191406 -10.039062 3.734375 -11.96875 C 4.285156 -13.90625 4.664062 -15.96875 4.875 -18.15625 C 5.082031 -20.351562 5.207031 -21.898438 5.25 -22.796875 C 5.300781 -23.691406 5.519531 -24.140625 5.90625 -24.140625 C 6.351562 -24.140625 6.800781 -23.84375 7.25 -23.25 C 7.695312 -22.664062 7.921875 -22.035156 7.921875 -21.359375 C 7.921875 -17.929688 6.769531 -12.925781 4.46875 -6.34375 C 8.332031 -13.15625 11.25 -17.816406 13.21875 -20.328125 C 15.1875 -22.835938 16.941406 -24.09375 18.484375 -24.09375 C 19.210938 -24.09375 20.070312 -23.476562 21.0625 -22.25 C 22.0625 -21.019531 22.5625 -19.660156 22.5625 -18.171875 C 22.5625 -16.679688 22.222656 -14.785156 21.546875 -12.484375 C 23.984375 -16.835938 25.992188 -19.859375 27.578125 -21.546875 C 29.160156 -23.242188 30.640625 -24.09375 32.015625 -24.09375 Z M 32.015625 -24.09375 "
                  />
                </g>
              </g>
            </g>
            <g>
              <g transform="translate(156.041328, 198.31462)">
                <g>
                  <path
                    id="path5"
                    stroke="#DC2626"
                    fill="#DC2626"
                    d="M 13.203125 -24.09375 C 14.867188 -24.09375 16.15625 -23.40625 17.0625 -22.03125 C 17.976562 -20.65625 18.4375 -19.414062 18.4375 -18.3125 C 18.4375 -17.207031 18.082031 -16.175781 17.375 -15.21875 C 17.664062 -14.894531 17.8125 -14.476562 17.8125 -13.96875 C 17.8125 -11.914062 17.640625 -9.976562 17.296875 -8.15625 C 16.960938 -6.332031 16.75 -4.875 16.65625 -3.78125 C 16.5625 -2.695312 16.457031 -1.929688 16.34375 -1.484375 C 16.226562 -1.035156 16.03125 -0.8125 15.75 -0.8125 C 15.195312 -0.8125 14.84375 -1.332031 14.6875 -2.375 C 14.53125 -3.414062 14.453125 -5.023438 14.453125 -7.203125 C 13.453125 -5.441406 12.191406 -3.9375 10.671875 -2.6875 C 9.160156 -1.4375 7.675781 -0.8125 6.21875 -0.8125 C 4.757812 -0.8125 3.359375 -1.367188 2.015625 -2.484375 C 0.671875 -3.609375 0 -4.84375 0 -6.1875 C 0 -8.238281 0.707031 -10.679688 2.125 -13.515625 C 3.550781 -16.347656 5.335938 -18.816406 7.484375 -20.921875 C 9.628906 -23.035156 11.535156 -24.09375 13.203125 -24.09375 Z M 15.9375 -15.796875 C 15.90625 -16.015625 15.890625 -16.546875 15.890625 -17.390625 C 15.890625 -18.242188 15.703125 -19.101562 15.328125 -19.96875 C 14.960938 -20.832031 14.414062 -21.265625 13.6875 -21.265625 C 12.46875 -21.265625 11 -20.34375 9.28125 -18.5 C 7.570312 -16.664062 6.09375 -14.539062 4.84375 -12.125 C 3.59375 -9.707031 2.96875 -7.710938 2.96875 -6.140625 C 2.96875 -5.441406 3.296875 -4.847656 3.953125 -4.359375 C 4.609375 -3.878906 5.304688 -3.640625 6.046875 -3.640625 C 7.710938 -3.640625 9.410156 -4.710938 11.140625 -6.859375 C 12.867188 -9.003906 14.179688 -11.644531 15.078125 -14.78125 C 15.171875 -15.320312 15.457031 -15.660156 15.9375 -15.796875 Z M 15.9375 -15.796875 "
                  />
                </g>
              </g>
            </g>
            <g>
              <g transform="translate(176.537294, 198.31462)">
                <g>
                  <path
                    id="path6"
                    stroke="#DC2626"
                    fill="#DC2626"
                    d="M 14.5 -24.09375 C 15.519531 -24.09375 16.453125 -23.554688 17.296875 -22.484375 C 18.148438 -21.410156 18.578125 -20.578125 18.578125 -19.984375 C 18.578125 -19.398438 18.382812 -19.109375 18 -19.109375 C 17.613281 -19.109375 17.050781 -19.457031 16.3125 -20.15625 C 15.582031 -20.863281 14.816406 -21.21875 14.015625 -21.21875 C 13.210938 -21.21875 11.945312 -20.664062 10.21875 -19.5625 C 8.488281 -18.457031 7.625 -17.359375 7.625 -16.265625 C 7.625 -15.503906 8.695312 -14.4375 10.84375 -13.0625 C 11.738281 -12.476562 12.632812 -11.851562 13.53125 -11.1875 C 15.675781 -9.582031 16.75 -8.007812 16.75 -6.46875 C 16.75 -4.9375 15.929688 -3.609375 14.296875 -2.484375 C 12.671875 -1.367188 10.769531 -0.8125 8.59375 -0.8125 C 6.414062 -0.8125 4.46875 -1.351562 2.75 -2.4375 C 1.039062 -3.53125 0.1875 -4.507812 0.1875 -5.375 C 0.1875 -5.664062 0.273438 -5.90625 0.453125 -6.09375 C 0.628906 -6.289062 0.835938 -6.390625 1.078125 -6.390625 C 1.316406 -6.390625 1.722656 -6.144531 2.296875 -5.65625 C 4.128906 -4.25 6.019531 -3.546875 7.96875 -3.546875 C 11.738281 -3.546875 13.625 -4.539062 13.625 -6.53125 C 13.625 -7.394531 13.148438 -8.25 12.203125 -9.09375 C 11.265625 -9.945312 10.234375 -10.675781 9.109375 -11.28125 C 7.992188 -11.882812 6.960938 -12.648438 6.015625 -13.578125 C 5.078125 -14.503906 4.609375 -15.453125 4.609375 -16.421875 C 4.609375 -18.078125 5.816406 -19.769531 8.234375 -21.5 C 10.648438 -23.226562 12.738281 -24.09375 14.5 -24.09375 Z M 14.5 -24.09375 "
                  />
                </g>
              </g>
            </g>
            <g>
              <g transform="translate(194.969262, 198.31462)">
                <g />
              </g>
            </g>
            <g>
              <g transform="translate(213.689231, 198.31462)">
                <g>
                  <path
                    id="path7"
                    stroke="#DC2626"
                    fill="#DC2626"
                    d="M 9.84375 -32.5 C 9.84375 -33.039062 9.890625 -33.40625 9.984375 -33.59375 C 10.078125 -33.789062 10.304688 -33.890625 10.671875 -33.890625 C 11.046875 -33.890625 11.460938 -33.550781 11.921875 -32.875 C 12.390625 -32.207031 12.625 -31.488281 12.625 -30.71875 C 12.625 -28.539062 11.609375 -23.972656 9.578125 -17.015625 C 7.546875 -10.054688 6.53125 -6.238281 6.53125 -5.5625 C 6.53125 -4.894531 6.679688 -4.414062 6.984375 -4.125 C 7.285156 -3.84375 7.660156 -3.703125 8.109375 -3.703125 C 12.078125 -3.703125 16.253906 -4.351562 20.640625 -5.65625 C 22.078125 -6.070312 22.914062 -6.28125 23.15625 -6.28125 C 23.394531 -6.28125 23.546875 -6.253906 23.609375 -6.203125 C 23.679688 -6.160156 23.71875 -6.03125 23.71875 -5.8125 C 23.71875 -4.851562 22.003906 -3.785156 18.578125 -2.609375 C 15.148438 -1.441406 11.929688 -0.859375 8.921875 -0.859375 C 7.453125 -0.859375 6.179688 -1.234375 5.109375 -1.984375 C 4.035156 -2.742188 3.5 -3.695312 3.5 -4.84375 C 3.5 -6 4.554688 -10.351562 6.671875 -17.90625 C 8.785156 -25.457031 9.84375 -30.320312 9.84375 -32.5 Z M 9.84375 -32.5 "
                  />
                </g>
              </g>
            </g>
            <g>
              <g transform="translate(238.937185, 198.31462)">
                <g>
                  <path
                    id="path8"
                    stroke="#DC2626"
                    fill="#DC2626"
                    d="M 18.859375 -23.328125 C 18.859375 -23.835938 19.097656 -24.09375 19.578125 -24.09375 C 19.960938 -24.09375 20.363281 -23.796875 20.78125 -23.203125 C 21.195312 -22.609375 21.40625 -21.992188 21.40625 -21.359375 C 21.40625 -21.171875 19.660156 -14.992188 16.171875 -2.828125 C 15.785156 -1.484375 15.335938 -0.8125 14.828125 -0.8125 C 14.128906 -0.8125 13.78125 -1.335938 13.78125 -2.390625 C 13.78125 -3.453125 14.304688 -5.644531 15.359375 -8.96875 C 14.046875 -6.445312 12.550781 -4.457031 10.875 -3 C 9.195312 -1.539062 7.617188 -0.8125 6.140625 -0.8125 C 4.671875 -0.8125 3.429688 -1.378906 2.421875 -2.515625 C 1.410156 -3.648438 0.90625 -4.890625 0.90625 -6.234375 C 0.90625 -8.222656 1.34375 -10.664062 2.21875 -13.5625 C 3.101562 -16.457031 4.097656 -18.9375 5.203125 -21 C 6.304688 -23.0625 7.179688 -24.09375 7.828125 -24.09375 C 8.179688 -24.09375 8.492188 -23.90625 8.765625 -23.53125 C 9.035156 -23.164062 9.171875 -22.800781 9.171875 -22.4375 C 9.171875 -22.070312 8.726562 -21.007812 7.84375 -19.25 C 6.96875 -17.488281 6.082031 -15.359375 5.1875 -12.859375 C 4.289062 -10.367188 3.84375 -8.082031 3.84375 -6 C 3.84375 -5.257812 4.070312 -4.640625 4.53125 -4.140625 C 5 -3.648438 5.566406 -3.40625 6.234375 -3.40625 C 7.835938 -3.40625 9.570312 -4.644531 11.4375 -7.125 C 13.3125 -9.601562 14.875 -12.285156 16.125 -15.171875 C 17.375 -17.984375 18.269531 -20.609375 18.8125 -23.046875 C 18.84375 -23.171875 18.859375 -23.265625 18.859375 -23.328125 Z M 18.859375 -23.328125 "
                  />
                </g>
              </g>
            </g>
            <g>
              <g transform="translate(260.969131, 198.31462)">
                <g>
                  <path
                    id="path9"
                    stroke="#DC2626"
                    fill="#DC2626"
                    d="M 18.53125 -24.09375 C 19.363281 -24.09375 20.28125 -23.476562 21.28125 -22.25 C 22.289062 -21.019531 22.796875 -19.734375 22.796875 -18.390625 C 22.796875 -16.367188 22.273438 -13.765625 21.234375 -10.578125 C 20.203125 -7.398438 19.289062 -4.976562 18.5 -3.3125 C 17.71875 -1.644531 16.988281 -0.8125 16.3125 -0.8125 C 15.800781 -0.8125 15.546875 -1.082031 15.546875 -1.625 C 15.546875 -2.175781 15.679688 -2.875 15.953125 -3.71875 C 16.234375 -4.5625 16.644531 -5.722656 17.1875 -7.203125 C 19.070312 -12.222656 20.015625 -15.882812 20.015625 -18.1875 C 20.015625 -18.925781 19.796875 -19.554688 19.359375 -20.078125 C 18.929688 -20.609375 18.566406 -20.875 18.265625 -20.875 C 17.960938 -20.875 17.679688 -20.816406 17.421875 -20.703125 C 17.171875 -20.597656 16.890625 -20.414062 16.578125 -20.15625 C 16.273438 -19.90625 15.988281 -19.640625 15.71875 -19.359375 C 15.445312 -19.085938 15.109375 -18.695312 14.703125 -18.1875 C 14.304688 -17.675781 13.960938 -17.21875 13.671875 -16.8125 C 13.390625 -16.414062 13 -15.859375 12.5 -15.140625 C 12.007812 -14.421875 11.601562 -13.820312 11.28125 -13.34375 C 10 -11.320312 9.035156 -9.835938 8.390625 -8.890625 C 7.753906 -7.953125 6.972656 -6.734375 6.046875 -5.234375 C 4.222656 -2.285156 3.195312 -0.8125 2.96875 -0.8125 C 2.625 -0.8125 2.25 -1.039062 1.84375 -1.5 C 1.445312 -1.96875 1.25 -2.363281 1.25 -2.6875 C 1.25 -3.007812 1.375 -3.585938 1.625 -4.421875 C 2.6875 -7.804688 3.359375 -10.15625 3.640625 -11.46875 C 4.609375 -15.5625 5.09375 -19.035156 5.09375 -21.890625 C 5.09375 -23.390625 5.378906 -24.140625 5.953125 -24.140625 C 6.398438 -24.140625 6.847656 -23.84375 7.296875 -23.25 C 7.742188 -22.664062 7.96875 -21.875 7.96875 -20.875 C 7.96875 -19.882812 7.625 -17.867188 6.9375 -14.828125 C 6.25 -11.785156 5.488281 -9.128906 4.65625 -6.859375 C 8.363281 -13.234375 11.242188 -17.695312 13.296875 -20.25 C 15.347656 -22.8125 17.09375 -24.09375 18.53125 -24.09375 Z M 18.53125 -24.09375 "
                  />
                </g>
              </g>
            </g>
            <g>
              <g transform="translate(285.017104, 198.31462)">
                <g>
                  <path
                    id="path10"
                    stroke="#DC2626"
                    fill="#DC2626"
                    d="M 9.453125 -20.40625 C 8.753906 -17.582031 7.898438 -14.53125 6.890625 -11.25 C 5.878906 -7.976562 5.375 -5.910156 5.375 -5.046875 C 5.375 -4.179688 5.804688 -3.75 6.671875 -3.75 C 8.203125 -3.75 9.769531 -4.078125 11.375 -4.734375 C 12.976562 -5.390625 13.84375 -5.71875 13.96875 -5.71875 C 14.414062 -5.71875 14.640625 -5.523438 14.640625 -5.140625 C 14.640625 -4.367188 13.75 -3.453125 11.96875 -2.390625 C 10.195312 -1.335938 8.582031 -0.8125 7.125 -0.8125 C 5.664062 -0.8125 4.519531 -1.15625 3.6875 -1.84375 C 2.863281 -2.53125 2.453125 -3.320312 2.453125 -4.21875 C 2.453125 -5.113281 2.660156 -6.328125 3.078125 -7.859375 C 3.492188 -9.398438 4.078125 -11.378906 4.828125 -13.796875 C 5.578125 -16.210938 6.160156 -18.222656 6.578125 -19.828125 C 4.816406 -19.503906 3.75 -19.34375 3.375 -19.34375 C 3.007812 -19.34375 2.632812 -19.519531 2.25 -19.875 C 1.875 -20.226562 1.6875 -20.546875 1.6875 -20.828125 C 1.6875 -21.410156 3.554688 -22.066406 7.296875 -22.796875 C 7.835938 -25.453125 8.109375 -27.691406 8.109375 -29.515625 C 8.109375 -30.472656 8.347656 -30.953125 8.828125 -30.953125 C 9.210938 -30.953125 9.664062 -30.6875 10.1875 -30.15625 C 10.71875 -29.632812 10.984375 -29.046875 10.984375 -28.390625 C 10.984375 -27.734375 10.695312 -26.015625 10.125 -23.234375 C 12.363281 -23.554688 13.945312 -23.71875 14.875 -23.71875 C 16.539062 -23.71875 17.375 -23.378906 17.375 -22.703125 C 17.375 -22.316406 16.988281 -22.015625 16.21875 -21.796875 Z M 9.453125 -20.40625 "
                  />
                </g>
              </g>
            </g>
          </svg>
          <h1
            id="heading2"
            className="leading-relaxed text-gray-900 text-3xl md:text-5xl mb-12 md:tracking-widest text-center"
          >
            Full Stack Developer
          </h1>
        </div>
        <div className="block justify-center font-display mt-8" id="button">
          <svg
            id="arrow_svg"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            className="w-10 h-10 mx-auto animate-bounce"
          >
            <path
              id="arrow_path"
              stroke="#111827"
              fill="#111827"
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
            />
          </svg>
        </div>
        <div id="icons-container" className="w-screen mt-auto mb-4">
          <div className="self-end">
            <SocialIcon
              url="https://www.upwork.com/freelancers/~01c8e90f051d0a48bc?viewMode=1"
              className="ml-4 mr-4 border border-gray-200 rounded-full hover:ring-2 hover:ring-gray-200 hover:scale-125"
              target="_blank"
              fgColor="#fff"
            />
            <SocialIcon
              url="https://www.linkedin.com/in/thomas-lunt-cfi-37195098"
              className="mr-4 border border-gray-200 rounded-full hover:ring-2 hover:ring-gray-200 hover:scale-125"
              target="_blank"
              fgColor="#fff"
            />
            <SocialIcon
              url="https://github.com/tlun0911"
              className="mr-4 border border-gray-200 rounded-full hover:ring-2 hover:ring-gray-200 hover:scale-125"
              target="_blank"
              fgColor="#fff"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
