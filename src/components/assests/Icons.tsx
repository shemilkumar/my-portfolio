import { FC, useRef } from "react";
import React, { useEffect } from "react";

interface IconProps {
  className?: string;
  dark?: boolean;
}

export const GithubIcon: FC<IconProps> = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const LinkedInIcon: FC<IconProps> = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const SunIconMobile: FC<IconProps> = ({ className, ...rest }) => (
  <svg
    enableBackground="new 0 0 512 512"
    height="40"
    width="40"
    id="Layer_1"
    version="1.1"
    viewBox="0 0 512 512"
    // xml:space="preserve"
    xmlns="http://www.w3.org/2000/svg"
    // xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M248.082,263.932c-31.52-31.542-39.979-77.104-26.02-116.542c-15.25,5.395-29.668,13.833-41.854,26.02  c-43.751,43.75-43.751,114.667,0,158.395c43.729,43.73,114.625,43.752,158.374,0c12.229-12.186,20.646-26.604,26.021-41.854  C325.188,303.91,279.604,295.451,248.082,263.932z"
      fill="#fff"
    />
  </svg>
);

export const SunIcon: FC<IconProps> = ({ className, ...rest }) => {
  // const elementRef = useRef<SVGGraphicsElement>(null);

  // useEffect(() => {
  //   if (elementRef.current) {
  //     const animation = elementRef.current.animate(
  //       [{ opacity: 0 }, { opacity: 1 }],
  //       { duration: 500, delay: 500 }
  //     );
  //     return () => animation.cancel();
  //   }
  // }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...rest}
      className={`w-full h-auto`}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <g strokeDasharray="2">
          <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.2s"
              values="4;2"
            />
          </path>
          <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.2s"
              dur="0.2s"
              values="4;2"
            />
          </path>
        </g>
        <path
          fill="currentColor"
          d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
          opacity="0"
        >
          {/* <set attributeName="opacity" begin="0.5s" to="1" /> */}
        </path>
      </g>
      <g fill="currentColor" fillOpacity="0">
        <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
          <animate
            id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
            dur="0.4s"
            values="0;1"
          />
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
            dur="0.4s"
            values="1;0"
          />
        </path>
        <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
            dur="0.4s"
            values="0;1"
          />
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
            dur="0.4s"
            values="1;0"
          />
        </path>
        <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
            dur="0.4s"
            values="0;1"
          />
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
            dur="0.4s"
            values="1;0"
          />
        </path>
        <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
            dur="0.4s"
            values="0;1"
          />
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
            dur="0.4s"
            values="1;0"
          />
        </path>
      </g>
      <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
        <circle cx="12" cy="12" r="12" fill="#fff" />
        <circle cx="22" cy="2" r="3" fill="#fff">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.1s"
            dur="0.4s"
            values="22;18"
          />
          <animate
            fill="freeze"
            attributeName="cy"
            begin="0.1s"
            dur="0.4s"
            values="2;6"
          />
          <animate
            fill="freeze"
            attributeName="r"
            begin="0.1s"
            dur="0.4s"
            values="3;12"
          />
        </circle>
        <circle cx="22" cy="2" r="1">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.1s"
            dur="0.4s"
            values="22;18"
          />
          <animate
            fill="freeze"
            attributeName="cy"
            begin="0.1s"
            dur="0.4s"
            values="2;6"
          />
          <animate
            fill="freeze"
            attributeName="r"
            begin="0.1s"
            dur="0.4s"
            values="1;10"
          />
        </circle>
      </mask>
      <circle
        cx="12"
        cy="12"
        r="6"
        fill="currentColor"
        mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
      >
        {/* <set attributeName="opacity" begin="0.5s" to="0" /> */}
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="6;10"
        />
      </circle>
    </svg>
  );
};

export const MoonIcon: FC<IconProps> = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="25px"
    height="25px"
    className={className}
  >
    <path d="M 14.984375 0.98632812 A 1.0001 1.0001 0 0 0 14 2 L 14 5 A 1.0001 1.0001 0 1 0 16 5 L 16 2 A 1.0001 1.0001 0 0 0 14.984375 0.98632812 z M 5.796875 4.7988281 A 1.0001 1.0001 0 0 0 5.1015625 6.515625 L 7.2226562 8.6367188 A 1.0001 1.0001 0 1 0 8.6367188 7.2226562 L 6.515625 5.1015625 A 1.0001 1.0001 0 0 0 5.796875 4.7988281 z M 24.171875 4.7988281 A 1.0001 1.0001 0 0 0 23.484375 5.1015625 L 21.363281 7.2226562 A 1.0001 1.0001 0 1 0 22.777344 8.6367188 L 24.898438 6.515625 A 1.0001 1.0001 0 0 0 24.171875 4.7988281 z M 15 8 A 7 7 0 0 0 8 15 A 7 7 0 0 0 15 22 A 7 7 0 0 0 22 15 A 7 7 0 0 0 15 8 z M 2 14 A 1.0001 1.0001 0 1 0 2 16 L 5 16 A 1.0001 1.0001 0 1 0 5 14 L 2 14 z M 25 14 A 1.0001 1.0001 0 1 0 25 16 L 28 16 A 1.0001 1.0001 0 1 0 28 14 L 25 14 z M 7.9101562 21.060547 A 1.0001 1.0001 0 0 0 7.2226562 21.363281 L 5.1015625 23.484375 A 1.0001 1.0001 0 1 0 6.515625 24.898438 L 8.6367188 22.777344 A 1.0001 1.0001 0 0 0 7.9101562 21.060547 z M 22.060547 21.060547 A 1.0001 1.0001 0 0 0 21.363281 22.777344 L 23.484375 24.898438 A 1.0001 1.0001 0 1 0 24.898438 23.484375 L 22.777344 21.363281 A 1.0001 1.0001 0 0 0 22.060547 21.060547 z M 14.984375 23.986328 A 1.0001 1.0001 0 0 0 14 25 L 14 28 A 1.0001 1.0001 0 1 0 16 28 L 16 25 A 1.0001 1.0001 0 0 0 14.984375 23.986328 z" />
  </svg>
);

// export const MoonIcon: FC<IconProps> = ({ className, ...rest }) => {
//   const elementRef = useRef<SVGGraphicsElement>(null);

//   useEffect(() => {
//     if (elementRef.current) {
//       const animation = elementRef.current.animate(
//         [{ opacity: 0 }, { opacity: 1 }],
//         { duration: 500, delay: 500 }
//       );
//       return () => animation.cancel();
//     }
//   }, []);

//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       {...rest}
//       className={`w-full h-auto ${className}`}
//     >
//       <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
//       <g
//         fill="none"
//         stroke="currentColor"
//         strokeDasharray="2"
//         strokeDashoffset="2"
//         strokeLinecap="round"
//         strokeWidth="2"
//       >
//         <path d="M0 0">
//           <animate
//             fill="freeze"
//             attributeName="d"
//             begin="1.2s"
//             dur="0.2s"
//             values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
//           />
//           <animate
//             fill="freeze"
//             attributeName="stroke-dashoffset"
//             begin="1.2s"
//             dur="0.2s"
//             values="2;0"
//           />
//         </path>
//         <path d="M0 0">
//           <animate
//             fill="freeze"
//             attributeName="d"
//             begin="1.5s"
//             dur="0.2s"
//             values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
//           />
//           <animate
//             fill="freeze"
//             attributeName="stroke-dashoffset"
//             begin="1.5s"
//             dur="1.2s"
//             values="2;0"
//           />
//         </path>
//         <animateTransform
//           attributeName="transform"
//           dur="30s"
//           repeatCount="indefinite"
//           type="rotate"
//           values="0 12 12;360 12 12"
//         />
//       </g>
//       <g fill="currentColor">
//         <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
//           <animate
//             fill="freeze"
//             attributeName="fill-opacity"
//             dur="0.4s"
//             values="1;0"
//           />
//         </path>
//         <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
//           <animate
//             fill="freeze"
//             attributeName="fill-opacity"
//             begin="0.2s"
//             dur="0.4s"
//             values="1;0"
//           />
//         </path>
//       </g>
//       <g
//         fill="currentColor"
//         stroke="currentColor"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//       >
//         <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
//         {/* <set attributeName="opacity" begin="0.6s" to="0" /> */}
//         {/* <animate attributeName="opacity" begin="0.6s" to="0" /> */}
//       </g>
//       <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
//         <circle cx="12" cy="12" r="12" fill="#fff" />
//         <circle cx="18" cy="6" r="12" fill="#fff">
//           <animate
//             fill="freeze"
//             attributeName="cx"
//             begin="0.6s"
//             dur="0.4s"
//             values="18;22"
//           />
//           <animate
//             fill="freeze"
//             attributeName="cy"
//             begin="0.6s"
//             dur="0.4s"
//             values="6;2"
//           />
//           <animate
//             fill="freeze"
//             attributeName="r"
//             begin="0.6s"
//             dur="0.4s"
//             values="12;3"
//           />
//         </circle>
//         <circle cx="18" cy="6" r="10">
//           <animate
//             fill="freeze"
//             attributeName="cx"
//             begin="0.6s"
//             dur="0.4s"
//             values="18;22"
//           />
//           <animate
//             fill="freeze"
//             attributeName="cy"
//             begin="0.6s"
//             dur="0.4s"
//             values="6;2"
//           />
//           <animate
//             fill="freeze"
//             attributeName="r"
//             begin="0.6s"
//             dur="0.4s"
//             values="10;1"
//           />
//         </circle>
//       </mask>
//       <circle
//         cx="12"
//         cy="12"
//         r="10"
//         fill="currentColor"
//         mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
//         opacity="0"
//       >
//         {/* <set attributeName="opacity" begin="0.6s" to="1" /> */}
//         {/* <animate attributeName="opacity" begin="0.6s" to="1" /> */}
//         <animate
//           fill="freeze"
//           attributeName="r"
//           begin="0.6s"
//           dur="0.4s"
//           values="10;6"
//         />
//       </circle>
//     </svg>
//   );
// };

export const MyCircularText: FC<IconProps> = ({ className, dark, ...rest }) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="1080.000000pt"
    height="1080.000000pt"
    viewBox="0 0 1080.000000 1080.000000"
    preserveAspectRatio="xMidYMid meet"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <metadata>
      Created by potrace 1.16, written by Peter Selinger 2001-2019
    </metadata>
    <g
      transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
      // fill={dark ? "#FFFFFF" : "#000000"}
      stroke="none"
    >
      <path
        d="M5761 9848 c-35 -174 -141 -771 -138 -774 2 -3 28 -5 57 -7 l54 -2
 52 284 c29 155 54 285 57 287 2 2 48 -114 101 -259 54 -144 105 -268 114 -275
 9 -7 24 -11 34 -10 9 2 102 101 207 221 105 120 191 213 191 207 0 -5 -22
 -133 -50 -282 -27 -149 -50 -279 -50 -289 0 -13 13 -20 53 -26 28 -5 53 -6 54
 -3 5 10 151 815 149 817 -2 2 -23 7 -49 12 l-46 8 -198 -230 c-109 -127 -209
 -244 -223 -260 l-25 -29 -62 169 c-141 383 -172 466 -180 473 -4 4 -27 10 -50
 14 l-42 6 -10 -52z"
      />
      <path
        d="M4515 9804 c-11 -3 -96 -21 -190 -41 -93 -20 -171 -37 -173 -38 -4
 -3 169 -807 174 -814 5 -6 88 9 103 18 11 7 8 29 -13 126 -15 65 -25 120 -22
 122 2 3 55 16 116 29 62 13 116 26 121 29 4 3 61 -43 125 -102 124 -115 122
 -114 204 -90 l40 12 -126 114 -125 113 41 35 c64 55 85 103 85 198 -1 132 -53
 219 -162 267 -43 19 -159 32 -198 22z m132 -115 c88 -33 137 -153 99 -243 -18
 -43 -50 -74 -102 -97 -51 -23 -267 -71 -275 -61 -9 9 -81 353 -76 358 2 2 51
 15 108 28 115 26 203 32 246 15z"
      />
      <path
        d="M3593 9512 c-145 -64 -263 -122 -263 -128 0 -11 325 -743 335 -752 4
 -5 509 215 543 237 11 6 9 17 -9 53 l-22 45 -220 -98 c-121 -55 -223 -97 -225
 -94 -6 6 -111 239 -108 242 0 0 84 38 186 83 102 45 187 83 189 85 3 4 -29 95
 -34 95 -1 0 -87 -38 -191 -84 -104 -47 -192 -81 -196 -78 -8 8 -98 212 -98
 222 0 4 93 49 208 100 114 50 209 94 211 95 5 5 -31 95 -38 95 -3 0 -124 -53
 -268 -118z"
      />
      <path
        d="M6936 9508 c-228 -503 -293 -654 -288 -660 9 -9 544 -250 547 -246
 10 12 35 70 35 81 0 9 -82 51 -212 110 -117 53 -214 100 -216 105 -3 9 91 228
 102 239 2 2 88 -35 191 -82 104 -47 189 -84 190 -83 2 2 12 22 24 46 l22 43
 -83 38 c-46 21 -131 59 -190 86 -60 26 -108 51 -108 55 0 24 102 225 112 222
 7 -2 103 -43 212 -93 110 -49 203 -89 206 -89 8 0 44 90 39 94 -9 6 -525 236
 -530 236 -3 0 -27 -46 -53 -102z"
      />
      <path
        d="M7540 8885 c-133 -183 -243 -337 -243 -342 0 -4 20 -23 45 -40 l45
 -33 73 101 c44 61 77 98 85 95 7 -2 57 -35 110 -73 l96 -68 -5 -157 -4 -157
 49 -36 c27 -19 51 -35 54 -35 2 0 6 75 7 168 3 142 5 166 18 164 8 -2 41 -4
 73 -4 86 0 157 38 212 113 88 119 82 252 -16 364 -28 32 -194 161 -325 253
 l-31 21 -243 -334z m371 114 c107 -78 146 -115 170 -161 25 -48 24 -101 -2
 -155 -45 -93 -146 -128 -243 -84 -36 15 -171 106 -235 157 -4 4 212 304 219
 304 4 0 44 -28 91 -61z"
      />
      <path
        d="M5079 9181 c-18 -14 -24 -29 -24 -61 0 -32 6 -47 24 -61 54 -44 131
 -8 131 62 0 68 -78 103 -131 60z"
      />
      <path
        d="M2921 9124 c-55 -20 -91 -42 -255 -161 -72 -52 -130 -99 -129 -104 2
 -6 452 -634 480 -668 4 -6 42 15 75 42 l27 22 -74 102 c-67 92 -72 103 -57
 116 10 7 56 41 103 75 139 99 198 176 215 279 16 102 -58 237 -157 287 -62 31
 -156 35 -228 10z m192 -127 c42 -32 77 -100 77 -151 0 -46 -28 -101 -72 -142
 -45 -43 -200 -155 -209 -152 -4 2 -40 48 -79 103 -40 55 -88 121 -107 147
 l-34 47 88 65 c131 97 176 118 245 114 42 -3 65 -11 91 -31z"
      />
      <path
        d="M8255 8369 c-160 -138 -301 -261 -314 -274 l-24 -24 27 -36 c16 -20
 34 -39 42 -42 8 -3 107 77 240 192 124 108 228 194 231 192 3 -4 -118 -688
 -134 -754 -3 -15 5 -32 29 -59 l35 -37 316 274 316 273 -33 40 c-18 22 -37 41
 -42 43 -6 2 -113 -86 -240 -196 -126 -109 -230 -198 -232 -196 -1 1 30 179 69
 395 l71 392 -33 34 -34 34 -290 -251z"
      />
      <path
        d="M2280 8508 c-181 -28 -347 -198 -380 -388 -31 -182 71 -370 247 -452
 117 -55 277 -49 383 15 134 81 224 215 245 363 35 262 -225 505 -495 462z
 m185 -137 c59 -26 131 -95 163 -156 23 -43 27 -62 27 -140 0 -78 -4 -97 -27
 -140 -101 -191 -322 -249 -484 -126 -150 112 -178 302 -67 454 89 122 253 168
 388 108z"
      />
      <path
        d="M2184 7329 c-54 -100 -103 -188 -109 -195 -8 -11 -76 22 -328 161
 -176 96 -321 175 -323 175 -5 0 -56 -101 -52 -105 10 -9 719 -395 726 -395 5
 0 70 111 145 248 l136 247 -37 22 c-20 13 -42 23 -48 23 -6 0 -55 -82 -110
 -181z"
      />
      <path
        d="M9340 7449 c-25 -12 -193 -82 -375 -156 -181 -75 -333 -139 -338
 -143 -10 -9 137 -362 178 -425 102 -161 285 -230 463 -176 80 24 178 86 216
 136 73 95 103 234 77 355 -11 53 -162 430 -171 429 -3 0 -25 -9 -50 -20z m61
 -269 c45 -107 53 -137 57 -206 4 -72 1 -89 -20 -135 -35 -76 -68 -111 -140
 -149 -78 -42 -188 -53 -253 -26 -108 45 -155 103 -231 285 -52 125 -53 126
 -32 136 109 51 555 230 560 226 4 -3 31 -62 59 -131z"
      />
      <path
        d="M1157 6838 c-47 -145 -87 -271 -89 -282 -3 -16 47 -35 392 -147 217
 -70 396 -126 398 -124 2 2 45 132 96 289 l93 285 -45 16 c-25 8 -49 12 -53 8
 -4 -5 -40 -108 -79 -230 -40 -123 -74 -223 -77 -223 -11 0 -238 74 -245 79 -4
 4 22 95 57 204 42 132 59 199 52 202 -7 2 -27 8 -46 14 -19 6 -35 11 -37 11
 -2 0 -31 -84 -64 -187 -33 -104 -62 -193 -65 -200 -2 -8 -40 0 -120 26 -63 21
 -118 41 -121 44 -3 3 24 94 59 204 35 109 67 208 71 220 6 19 2 25 -19 33 -77
 29 -64 50 -158 -242z"
      />
      <path
        d="M9341 6379 c-217 -38 -396 -71 -399 -73 -4 -4 80 -509 95 -574 5 -21
 9 -22 52 -16 25 4 48 8 50 10 2 1 -15 110 -38 240 -22 131 -39 239 -38 240 5
 5 258 46 262 42 2 -2 18 -86 35 -188 41 -241 33 -221 83 -214 23 4 45 9 48 13
 4 3 -9 96 -28 205 -23 136 -31 201 -24 206 6 3 61 15 122 25 83 14 113 15 118
 7 4 -7 24 -110 44 -229 21 -119 39 -218 41 -220 1 -2 24 0 50 3 l48 7 -4 36
 c-2 20 -24 152 -49 294 -35 205 -47 257 -59 256 -8 -1 -192 -32 -409 -70z"
      />
      <path
        d="M997 6293 c-14 -80 -31 -65 313 -264 176 -101 320 -187 320 -190 0
 -3 -159 -55 -352 -115 l-353 -110 -9 -58 c-4 -31 -6 -60 -2 -63 10 -10 850
 258 864 276 8 9 12 36 10 65 l-3 49 -380 219 c-209 121 -385 222 -391 224 -7
 3 -14 -11 -17 -33z"
      />
      <path
        d="M9450 5521 l-415 -167 -3 -59 -2 -60 402 -193 c222 -106 408 -192
 413 -192 6 0 10 25 10 56 l0 57 -333 160 c-183 88 -329 163 -325 167 4 4 159
 67 343 140 184 72 335 133 336 133 1 1 4 30 7 65 5 46 4 62 -6 61 -6 0 -199
 -76 -427 -168z"
      />
      <path
        d="M1693 5403 c-52 -5 -50 18 -22 -269 12 -119 19 -218 16 -220 -7 -7
 -255 -29 -261 -23 -2 2 -11 85 -20 184 -22 241 -17 225 -71 225 -24 0 -46 -3
 -48 -7 -3 -5 3 -91 14 -193 10 -102 18 -194 19 -206 0 -19 -7 -22 -82 -28 -46
 -3 -103 -9 -128 -12 l-46 -6 -21 232 c-12 128 -24 235 -27 237 -3 3 -26 2 -51
 -1 -39 -6 -45 -10 -45 -31 0 -29 51 -559 54 -562 3 -3 828 76 832 79 1 2 -11
 136 -27 298 -15 162 -29 298 -29 303 0 4 -3 6 -7 5 -5 -1 -27 -3 -50 -5z"
      />
      <path
        d="M8995 4817 c-11 -36 -135 -557 -135 -569 0 -12 88 -45 95 -36 1 2 28
 109 59 239 l57 236 126 -31 c70 -18 128 -37 130 -42 2 -6 -17 -93 -42 -194
 -25 -101 -45 -189 -45 -195 0 -11 89 -41 94 -33 1 2 24 94 51 206 40 164 52
 201 65 197 8 -2 63 -16 123 -31 59 -14 107 -32 107 -38 0 -6 -25 -109 -54
 -229 -29 -120 -50 -220 -45 -222 4 -3 27 -8 51 -11 l43 -6 69 282 c37 155 65
 284 63 287 -3 3 -180 47 -394 99 -213 52 -394 96 -401 99 -7 3 -15 -1 -17 -8z"
      />
      <path
        d="M1465 4588 c-65 -12 -160 -58 -210 -101 -95 -82 -146 -229 -126 -366
 12 -75 127 -441 139 -441 14 0 777 252 784 259 11 10 -115 383 -148 439 -66
 112 -171 191 -283 212 -62 12 -87 11 -156 -2z m211 -137 c52 -23 118 -90 149
 -151 34 -69 98 -271 89 -280 -5 -4 -139 -51 -299 -103 l-290 -95 -44 131 c-70
 207 -62 317 28 420 35 39 120 86 180 98 51 11 137 2 187 -20z"
      />
      <path
        d="M8686 3864 c-64 -141 -115 -258 -114 -259 2 -1 22 -12 45 -24 50 -25
 33 -49 144 196 44 98 84 182 89 187 6 6 549 -231 653 -286 15 -8 21 -1 41 44
 13 29 21 56 18 60 -10 9 -738 338 -750 338 -5 0 -62 -115 -126 -256z"
      />
      <path
        d="M8560 3434 c-123 -33 -236 -133 -299 -264 -35 -72 -36 -79 -36 -185
 0 -104 2 -114 32 -175 18 -36 56 -89 85 -118 222 -223 570 -153 710 144 81
 173 50 354 -83 485 -113 112 -261 152 -409 113z m214 -124 c71 -27 147 -99
 180 -170 56 -119 25 -270 -75 -368 -63 -62 -119 -86 -211 -90 -66 -4 -84 -1
 -135 22 -70 33 -136 94 -171 161 -23 43 -27 62 -27 135 0 73 4 92 28 137 86
 165 248 233 411 173z"
      />
      <path
        d="M2165 3254 c-115 -81 -251 -175 -301 -210 l-91 -63 -82 120 -82 120
 -39 -28 c-22 -16 -40 -32 -40 -36 0 -5 324 -481 386 -565 3 -5 84 50 84 57 0
 4 -36 58 -80 121 -43 63 -78 115 -77 116 1 1 130 90 287 199 157 108 291 203
 299 210 11 11 8 20 -18 59 -18 25 -33 46 -34 46 -1 0 -96 -66 -212 -146z"
      />
      <path
        d="M2500 2976 c0 -13 3 -37 6 -54 6 -27 10 -30 56 -36 106 -14 194 -78
 249 -178 31 -58 34 -70 34 -148 0 -69 -4 -94 -23 -133 -33 -66 -102 -134 -168
 -164 -48 -22 -66 -25 -137 -21 -103 4 -159 31 -232 110 -55 59 -85 125 -85
 185 l0 33 -56 0 -57 0 6 -61 c14 -156 156 -317 326 -369 241 -75 495 85 542
 342 45 243 -181 516 -428 518 -28 0 -33 -4 -33 -24z"
      />
      <path
        d="M7932 2802 l-42 -38 80 -94 c44 -52 79 -98 77 -101 -1 -4 -47 -45
 -103 -92 -148 -126 -194 -201 -194 -317 0 -69 28 -131 83 -188 63 -65 109 -86
 192 -86 81 -1 157 29 234 92 81 65 256 215 258 221 3 6 -525 634 -536 638 -3
 1 -25 -15 -49 -35z m427 -601 c-1 -12 -185 -159 -226 -180 -49 -25 -121 -28
 -162 -7 -41 22 -88 80 -102 126 -10 32 -9 49 1 82 18 62 39 88 151 183 l100
 85 119 -141 c66 -78 120 -144 119 -148z"
      />
      <path
        d="M3105 2538 c-13 -60 -115 -880 -110 -888 3 -6 26 -22 51 -36 l45 -27
 357 239 c196 132 362 243 369 247 10 6 11 2 3 -19 -6 -15 -7 -30 -3 -34 4 -4
 94 -37 198 -75 105 -37 204 -74 222 -80 l31 -13 -45 -124 c-24 -67 -46 -124
 -47 -126 -2 -1 -90 29 -196 68 -107 39 -197 67 -201 63 -9 -10 -32 -83 -27
 -87 1 -2 89 -34 193 -71 105 -38 191 -70 193 -71 1 0 -17 -55 -41 -120 -30
 -80 -49 -118 -58 -117 -8 2 -106 36 -218 78 -112 41 -207 72 -212 69 -12 -7
 -34 -83 -26 -90 8 -9 541 -202 545 -198 2 1 68 178 146 393 119 327 140 391
 127 396 -84 33 -536 196 -549 198 -10 1 -35 13 -56 25 -20 12 -41 22 -45 22
 -4 0 -47 -27 -95 -61 -58 -39 -94 -58 -104 -54 -10 3 -97 56 -195 117 -132 82
 -176 115 -173 127 3 9 10 58 17 108 13 104 13 106 -50 141 l-40 23 -6 -23z
 m220 -469 c81 -50 143 -95 138 -100 -30 -29 -349 -237 -351 -229 -4 11 45 382
 53 408 3 6 6 12 9 12 3 0 71 -41 151 -91z"
      />
      <path
        d="M7105 2209 c-143 -78 -262 -143 -264 -145 -7 -6 33 -76 46 -81 7 -3
 105 45 217 106 113 61 207 111 210 111 4 0 126 -224 126 -233 0 -3 -81 -49
 -180 -102 -99 -53 -180 -100 -180 -105 0 -23 44 -81 57 -76 8 3 89 46 180 96
 91 49 169 90 172 90 7 0 121 -206 121 -218 0 -4 -84 -52 -186 -107 -103 -55
 -194 -105 -202 -111 -15 -11 -14 -16 2 -53 11 -22 24 -41 29 -41 6 0 124 61
 264 136 l253 136 -67 127 c-209 391 -329 611 -333 611 -3 0 -122 -64 -265
 -141z"
      />
      <path
        d="M6662 2003 c-24 -8 -41 -20 -39 -27 14 -37 68 -228 65 -231 -2 -1
 -58 -19 -126 -39 l-122 -36 -119 95 c-65 52 -125 95 -133 95 -22 0 -108 -31
 -107 -38 0 -4 58 -52 129 -107 l129 -99 -40 -44 c-53 -57 -69 -98 -69 -174 0
 -119 60 -222 157 -269 38 -18 65 -23 128 -23 68 0 107 8 260 53 99 29 184 57
 188 61 4 4 -45 185 -110 403 -89 302 -121 397 -133 396 -8 0 -34 -7 -58 -16z
 m112 -535 c26 -86 49 -163 51 -171 7 -17 -230 -87 -296 -87 -106 0 -179 78
 -179 190 0 71 34 124 102 158 71 35 262 90 269 78 4 -6 28 -82 53 -168z"
      />
      <path
        d="M4584 1725 c42 -82 73 -152 69 -156 -5 -3 -24 -12 -43 -18 -55 -17
 -106 -66 -137 -129 -37 -75 -40 -194 -6 -258 42 -78 125 -136 233 -161 59 -14
 369 -57 373 -52 6 7 119 821 115 825 -2 2 -29 6 -59 10 l-55 6 -19 -127 c-17
 -119 -19 -126 -39 -122 -12 3 -64 11 -116 17 -52 7 -102 15 -110 19 -11 6
 -129 217 -152 273 -2 4 -32 10 -67 14 l-64 7 77 -148z m335 -270 c51 -7 95
 -16 98 -19 6 -6 -43 -355 -51 -363 -8 -8 -232 26 -279 43 -76 27 -127 94 -127
 167 0 74 43 145 105 173 39 17 137 17 254 -1z"
      />
      <path
        d="M5603 1778 c-29 -32 -34 -53 -22 -88 13 -35 36 -50 78 -50 69 0 100
 96 45 139 -35 27 -75 27 -101 -1z"
      />
    </g>
  </svg>
);

export const CircularText: FC<IconProps> = ({ className, ...rest }) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="1080.000000pt"
    height="1080.000000pt"
    viewBox="0 0 1080.000000 1080.000000"
    preserveAspectRatio="xMidYMid meet"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <metadata>
      Created by potrace 1.16, written by Peter Selinger 2001-2019
    </metadata>
    <g
      transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path
        d="M5430 9614 c-1 -11 -22 -197 -49 -414 -26 -217 -46 -397 -44 -399 9
-11 105 -17 109 -7 2 6 17 126 34 266 16 140 33 270 36 289 5 31 16 11 124
-229 107 -241 120 -265 146 -272 16 -4 31 -4 35 0 3 4 81 106 174 227 93 121
170 222 172 224 10 13 6 -30 -23 -274 -18 -148 -33 -282 -33 -296 -1 -24 3
-27 51 -32 28 -4 53 -5 55 -3 8 8 101 821 95 827 -4 4 -26 9 -49 12 l-42 5
-203 -269 c-112 -148 -205 -269 -209 -269 -3 0 -65 136 -138 303 -73 166 -136
305 -140 309 -4 4 -28 11 -54 14 -42 6 -47 5 -47 -12z"
      />
      <path
        d="M6667 9397 c-4 -10 -261 -633 -302 -734 l-13 -31 271 -112 c150 -62
277 -114 283 -117 9 -3 44 67 44 89 0 3 -101 47 -224 98 l-224 93 50 121 c27
67 51 123 53 125 2 1 87 -31 189 -73 101 -42 189 -76 194 -76 13 0 45 81 35
90 -4 4 -89 40 -188 80 -99 40 -182 75 -184 77 -7 6 83 225 94 229 6 3 105
-34 220 -81 115 -47 212 -82 216 -78 4 5 14 25 23 45 18 46 45 30 -239 146
-121 50 -236 98 -257 106 -27 12 -37 13 -41 3z"
      />
      <path
        d="M4173 9200 c-53 -30 -83 -65 -107 -120 l-13 -31 -17 46 c-10 25 -23
44 -30 42 -6 -2 -28 -10 -48 -18 -21 -7 -38 -16 -38 -20 0 -9 217 -579 222
-585 9 -9 103 36 100 48 -2 7 -30 84 -62 171 -45 118 -60 170 -60 209 0 71 34
127 97 159 26 13 50 25 52 26 5 3 -31 93 -39 98 -3 2 -29 -9 -57 -25z"
      />
      <path
        d="M7251 8695 c-132 -184 -241 -339 -241 -343 0 -5 20 -23 44 -41 l45
-32 39 53 c21 29 53 75 72 101 20 28 39 46 47 43 7 -3 56 -36 108 -73 l95 -67
0 -158 0 -158 48 -34 47 -35 7 37 c4 20 7 96 7 167 l1 131 65 -4 c85 -6 141
15 199 74 65 65 91 124 91 209 -1 138 -49 193 -366 418 l-67 47 -241 -335z
m375 111 c111 -79 171 -142 180 -191 28 -149 -115 -268 -253 -210 -26 11 -181
114 -242 161 -4 4 212 304 220 304 3 0 46 -29 95 -64z"
      />
      <path
        d="M3515 8903 c-145 -60 -224 -179 -212 -319 9 -119 86 -233 192 -284
77 -37 179 -34 267 7 84 39 154 103 184 168 13 28 24 55 24 60 0 6 -20 17 -45
26 l-44 16 -12 -35 c-28 -84 -146 -162 -243 -162 -72 1 -175 63 -144 87 7 6
106 65 221 133 114 67 207 124 207 127 0 10 -60 90 -87 115 -15 14 -48 37 -73
50 -59 30 -176 36 -235 11z m211 -119 c21 -17 39 -34 41 -40 2 -5 -75 -55
-169 -111 -197 -117 -193 -117 -186 4 3 51 9 69 34 100 48 59 107 85 181 81
51 -3 69 -9 99 -34z"
      />
      <path
        d="M4825 8869 c-47 -27 -61 -88 -27 -128 46 -56 136 -21 136 53 0 59
-62 101 -109 75z"
      />
      <path
        d="M2953 8482 c-131 -47 -220 -154 -222 -266 l-1 -40 -35 34 -35 34 -35
-34 c-19 -19 -35 -37 -35 -42 0 -4 131 -147 291 -318 l290 -310 40 32 c22 18
38 37 37 44 -2 7 -49 62 -105 122 l-102 109 51 6 c104 13 197 79 250 179 33
63 33 204 0 267 -82 154 -250 233 -389 183z m133 -107 c103 -30 181 -137 172
-234 -10 -106 -96 -190 -202 -199 -70 -5 -146 35 -195 102 -29 41 -36 60 -39
112 -7 106 49 188 152 220 53 17 54 17 112 -1z"
      />
      <path
        d="M7938 8157 c-174 -144 -317 -264 -317 -267 0 -3 16 -24 37 -48 l37
-44 235 195 c129 106 236 189 238 183 1 -7 -31 -177 -73 -378 -41 -202 -75
-374 -75 -382 0 -9 13 -30 28 -48 26 -28 31 -30 49 -17 53 38 623 513 623 519
0 4 -17 26 -37 48 l-38 41 -234 -194 c-129 -107 -236 -193 -238 -191 -4 3 140
715 153 758 5 15 -50 89 -65 87 -3 0 -149 -118 -323 -262z"
      />
      <path
        d="M2460 7891 c-95 -19 -184 -91 -237 -193 -24 -46 -28 -64 -28 -143 0
-107 22 -162 93 -227 69 -63 143 -93 232 -93 92 0 152 26 223 97 131 131 139
327 19 452 -51 53 -102 84 -169 101 -61 16 -78 17 -133 6z m134 -126 c93 -39
153 -132 144 -224 -16 -160 -178 -243 -319 -164 -125 69 -159 202 -82 316 55
79 165 110 257 72z"
      />
      <path
        d="M1740 7352 c-11 -25 -19 -49 -18 -54 2 -5 181 -94 398 -198 l395
-190 23 51 c13 28 22 52 20 54 -4 5 -508 247 -695 335 l-103 49 -20 -47z"
      />
      <path
        d="M1965 6926 c-64 -20 -99 -42 -139 -86 -131 -146 -109 -368 47 -474
121 -81 259 -87 367 -14 131 87 198 299 135 429 l-18 37 -36 -15 c-51 -21 -53
-25 -35 -68 37 -88 -11 -233 -94 -286 -43 -27 -121 -47 -140 -35 -5 3 23 110
65 246 40 133 71 245 68 250 -7 11 -97 30 -143 29 -20 0 -55 -6 -77 -13z m111
-113 c-44 -151 -110 -360 -115 -365 -10 -11 -65 31 -91 70 -31 44 -38 128 -16
186 29 75 99 125 179 126 41 0 48 -3 43 -17z"
      />
      <path
        d="M8795 6794 c-214 -52 -391 -97 -393 -99 -9 -9 92 -395 118 -453 40
-86 124 -172 203 -208 158 -72 367 -28 487 103 64 70 92 143 98 256 4 80 0
107 -44 292 -37 158 -52 205 -64 204 -8 0 -190 -43 -405 -95z m377 -169 c54
-215 38 -326 -61 -418 -97 -91 -244 -114 -359 -56 -63 31 -104 74 -139 144
-20 39 -89 303 -82 309 2 2 121 31 264 66 143 34 274 66 290 70 53 15 56 11
87 -115z"
      />
      <path
        d="M1640 6256 l0 -53 235 -133 c130 -73 233 -135 230 -138 -3 -3 -119
-41 -257 -84 -139 -44 -254 -81 -256 -82 -5 -6 -15 -116 -11 -116 8 0 650 208
653 211 2 2 7 29 10 60 l7 56 -296 166 c-162 92 -300 167 -305 167 -6 0 -10
-24 -10 -54z"
      />
      <path
        d="M8807 5890 c-84 -22 -164 -85 -202 -161 -64 -126 -44 -320 40 -399
l25 -24 35 34 c35 34 35 34 15 55 -32 34 -51 94 -51 159 0 98 38 169 111 206
74 38 70 50 70 -235 0 -285 -8 -258 75 -256 110 4 234 94 268 195 21 62 22
168 1 229 -21 62 -93 140 -158 172 -60 29 -166 41 -229 25z m190 -125 c48 -20
71 -41 93 -85 53 -107 18 -230 -80 -280 -22 -11 -48 -20 -60 -20 -19 0 -20 5
-20 200 0 222 -3 214 67 185z"
      />
      <path
        d="M1867 5580 c-106 -18 -190 -79 -239 -173 -31 -59 -32 -201 -1 -268
30 -66 86 -124 151 -156 49 -24 69 -28 142 -27 69 0 95 5 141 26 118 54 182
156 183 293 1 106 -24 182 -80 243 l-42 47 -36 -34 -35 -34 33 -37 c83 -92 81
-257 -6 -337 -28 -26 -98 -57 -98 -44 0 22 -41 448 -46 479 -3 17 -8 31 -12
31 -4 -1 -29 -5 -55 -9z m-7 -112 c8 -49 37 -395 34 -399 -5 -10 -63 5 -102
25 -67 35 -106 135 -88 231 8 42 67 112 111 131 29 13 45 17 45 12z"
      />
      <path
        d="M9010 5131 c-91 -21 -238 -53 -327 -71 l-162 -34 -11 -49 c-5 -26
-10 -53 -10 -60 1 -9 483 -356 555 -399 8 -5 15 10 22 48 l10 55 -223 157
c-123 86 -220 159 -216 163 4 3 122 29 261 58 140 29 258 54 262 57 4 2 10 21
13 41 4 21 9 46 12 56 7 22 10 22 -186 -22z"
      />
      <path
        d="M1908 4845 c-216 -54 -347 -238 -323 -450 6 -51 119 -410 142 -449 6
-10 91 16 398 122 215 74 392 137 394 138 11 9 -135 401 -169 452 -102 159
-272 230 -442 187z m225 -133 c57 -25 119 -87 150 -149 30 -60 103 -270 97
-276 -13 -13 -586 -205 -591 -199 -4 4 -26 66 -50 137 -38 111 -44 141 -44
210 1 67 5 88 27 130 77 146 263 212 411 147z"
      />
      <path
        d="M8519 4557 c-138 -52 -231 -188 -233 -342 -1 -38 5 -84 12 -102 l14
-31 44 15 c44 15 45 16 37 47 -30 118 33 256 139 300 41 17 114 21 122 7 3 -5
-37 -112 -89 -237 -52 -125 -95 -231 -95 -235 0 -13 81 -39 139 -45 154 -17
285 82 327 245 38 149 -35 290 -184 359 -67 30 -178 40 -233 19z m305 -223
c32 -60 28 -139 -10 -200 -32 -53 -89 -91 -139 -94 -54 -4 -85 0 -85 10 0 5
30 80 66 167 36 87 70 169 75 182 l9 23 32 -24 c18 -14 41 -42 52 -64z"
      />
      <path
        d="M8115 3957 c-14 -24 -25 -46 -25 -50 0 -6 743 -457 753 -457 13 0 59
92 51 99 -12 11 -743 451 -749 451 -2 0 -16 -20 -30 -43z"
      />
      <path
        d="M2660 3846 l-21 -35 45 -44 c38 -36 46 -50 46 -80 0 -48 -18 -66
-184 -187 l-139 -102 -19 24 c-10 12 -33 44 -50 70 -18 26 -37 48 -41 48 -5 0
-24 -12 -42 -26 l-35 -26 47 -62 c25 -33 50 -66 55 -73 8 -10 -6 -23 -95 -84
-9 -6 47 -99 59 -99 3 0 29 18 57 40 l52 40 18 -24 c10 -14 25 -34 35 -45 l17
-21 35 29 34 29 -27 41 c-15 22 -27 43 -27 45 0 3 65 52 144 111 158 116 200
157 214 209 21 76 -34 188 -116 234 l-40 22 -22 -34z"
      />
      <path
        d="M7993 3676 c-112 -36 -214 -146 -238 -255 -33 -152 45 -301 194 -369
74 -34 173 -36 244 -4 66 29 151 113 184 181 23 47 27 69 27 136 0 68 -4 88
-27 133 -74 143 -247 223 -384 178z m183 -131 c110 -64 152 -180 103 -282 -41
-84 -141 -142 -221 -126 -129 24 -229 160 -199 269 40 148 190 213 317 139z"
      />
      <path
        d="M2883 3453 c-8 -6 -9 -20 0 -56 l10 -47 49 0 c147 0 250 -161 189
-295 -70 -156 -262 -192 -369 -70 -41 46 -52 74 -52 129 0 43 0 44 -46 55 -31
8 -50 9 -57 2 -5 -5 -8 -36 -5 -68 15 -205 248 -356 440 -283 75 28 150 96
185 168 24 48 28 69 28 137 0 67 -5 89 -28 136 -31 64 -103 136 -168 169 -45
24 -155 38 -176 23z"
      />
      <path
        d="M7376 3407 l-39 -33 96 -126 96 -125 -72 -5 c-82 -5 -120 -22 -184
-81 -70 -65 -96 -117 -101 -206 -6 -108 21 -176 102 -257 71 -71 126 -94 225
-94 52 0 79 6 126 29 74 34 150 115 166 174 22 83 22 83 50 43 l25 -36 43 31
c23 17 41 35 39 40 -7 20 -514 678 -523 678 -5 0 -28 -14 -49 -32z m236 -413
c90 -63 134 -194 93 -275 -45 -89 -118 -133 -211 -127 -76 5 -127 36 -172 103
-75 113 -41 249 78 313 64 34 152 28 212 -14z"
      />
      <path
        d="M3331 2904 c-125 -192 -154 -256 -145 -319 18 -124 180 -250 340
-263 l64 -5 0 50 0 50 -58 5 c-100 10 -210 84 -228 153 -8 34 3 89 24 115 17
21 17 21 112 -41 123 -80 165 -99 223 -99 54 0 90 16 129 57 55 57 62 122 22
201 -44 89 -155 155 -257 154 l-58 0 16 24 c8 13 15 27 15 32 0 8 -73 62 -82
62 -2 0 -54 -79 -117 -176z m254 -25 c60 -15 132 -79 141 -124 12 -68 -49
-124 -116 -105 -31 9 -205 114 -215 130 -10 16 55 89 87 99 45 13 53 13 103 0z"
      />
      <path
        d="M6815 2750 c-101 -22 -196 -84 -244 -159 -38 -59 -39 -76 -3 -89 15
-5 34 -13 43 -16 12 -5 20 1 29 23 42 103 197 168 303 127 49 -18 106 -72 91
-84 -5 -5 -108 -55 -229 -111 -121 -57 -222 -105 -223 -106 -11 -10 59 -113
100 -150 63 -57 130 -79 217 -73 256 19 383 289 239 504 -72 107 -201 161
-323 134z m275 -338 c0 -71 -29 -124 -88 -167 -39 -27 -52 -30 -116 -30 -77 0
-120 19 -158 69 l-17 23 182 85 c100 47 185 83 190 81 4 -2 7 -30 7 -61z"
      />
      <path
        d="M3987 2678 c-47 -13 -53 -25 -33 -73 13 -29 20 -36 33 -30 106 43
266 -23 314 -129 17 -39 26 -116 14 -128 -3 -3 -112 37 -241 88 -130 52 -239
92 -244 89 -4 -3 -16 -34 -25 -70 -42 -152 19 -291 157 -361 170 -86 354 -20
437 155 22 47 26 70 26 141 0 72 -4 92 -27 136 -71 135 -268 223 -411 182z
m108 -369 c99 -40 181 -73 183 -74 10 -9 -36 -59 -72 -79 -56 -32 -96 -39
-148 -26 -88 23 -153 93 -159 170 -3 51 0 80 8 80 4 0 89 -32 188 -71z"
      />
      <path
        d="M6313 2557 c-23 -7 -44 -15 -47 -18 -3 -3 15 -79 39 -170 47 -173 54
-238 31 -294 -16 -38 -82 -90 -127 -100 -25 -6 -28 -10 -23 -33 4 -15 12 -40
18 -55 l11 -29 65 34 c48 25 73 46 96 80 l32 47 11 -44 c6 -25 15 -45 19 -45
21 1 97 29 96 36 -3 15 -144 537 -155 572 -6 17 -14 32 -17 31 -4 -1 -26 -6
-49 -12z"
      />
      <path
        d="M4540 2516 c0 -2 32 -69 70 -150 39 -81 68 -151 65 -155 -2 -5 -18
-11 -33 -14 -51 -10 -115 -67 -147 -132 -26 -52 -30 -71 -30 -140 0 -94 20
-140 84 -198 47 -42 80 -61 141 -77 44 -12 393 -70 397 -66 4 4 130 821 127
825 -5 6 -107 21 -112 17 -2 -2 -12 -57 -22 -121 -10 -64 -21 -119 -23 -121
-2 -2 -60 4 -128 14 l-124 18 -71 139 c-55 107 -77 141 -95 146 -33 8 -99 18
-99 15z m392 -421 c56 -9 104 -18 106 -20 5 -5 -47 -357 -54 -364 -6 -7 -179
19 -244 36 -111 28 -166 94 -158 187 9 114 76 176 190 176 32 0 104 -7 160
-15z"
      />
      <path
        d="M5578 2410 c-25 -26 -29 -36 -24 -62 12 -62 64 -90 115 -64 31 16 41
34 41 71 0 37 -10 55 -41 70 -41 22 -57 19 -91 -15z"
      />
    </g>
  </svg>
);

export const LinkArrow: FC<IconProps> = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);
