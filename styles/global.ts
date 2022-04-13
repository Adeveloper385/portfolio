import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, ::before, ::after{
    box-sizing: inherit;
  }

  ::-webkit-scrollbar {
    width: 5px
  }

  ::-webkit-scrollbar-track {

  }

  ::-webkit-scrollbar-thumb {
    background: var(--slate);
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--green);
  }

  ::selection {
    background-color: var(--lightest-navy);
    color: var(--lightest-slate);
  }

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  body {
    margin: 0px;
    width: 100%;
    min-heigth: 100%;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    background: #0B1114;
    color: #bbb;
    font-family: sans-serif;
    font-size: 20px;
    line-height: 1.3;
  }

  section {
    margin: 0px auto;
    padding: 100px 0px;
    max-width: 1000px;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0px 0px 10px;
    font-weight: 600;
    color: var(--lightest-slate);
    line-height: 1.1;
  }

  p {
    margin: 20px 0 0;
    max-width: 700px;
    color: var(--slate);
  }

  #root {
    min-height 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  :root {
    --background: #0B1114;
    --dark-navy: #020c1b;
    --navy: #0a192f;
    --light-navy: #112240;
    --lightest-navy: #233554;
    --navy-shadow: rgba(2,12,27,0.7);
    --dark-slate: #495670;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #e6f1ff;
    --green: #01E776;
    --green-tint: rgba(100,255,218,0.1);
    --pink: #f57dff;
    --blue: #57cbff;
    --font-sans: "Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
    --font-mono: "SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace;
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;
    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;
    --tab-height: 42px;
    --tab-width: 120px;
    --easing: cubic-bezier(0.645,0.045,0.355,1);
    --transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    --hamburger-width: 30px;
    --ham-before: top 0.1s ease-in 0.25s,opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out,opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s,transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19);
    --ham-after-active: bottom 0.1s ease-out,transform 0.22s cubic-bezier(0.215,0.61,0.355,1) 0.12s;
  }
`;
