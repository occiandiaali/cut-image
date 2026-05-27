// import './style.css'
// import javascriptLogo from './assets/javascript.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
// <section id="center">
//   <div class="hero">
//     <img src="${heroImg}" class="base" width="170" height="179">
//     <img src="${javascriptLogo}" class="framework" alt="JavaScript logo"/>
//     <img src="${viteLogo}" class="vite" alt="Vite logo" />
//   </div>
//   <div>
//     <h1>Get started</h1>
//     <p>Edit <code>src/main.js</code> and save to test <code>HMR</code></p>
//   </div>
//   <button id="counter" type="button" class="counter"></button>
// </section>

// <div class="ticks"></div>

// <section id="next-steps">
//   <div id="docs">
//     <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#documentation-icon"></use></svg>
//     <h2>Documentation</h2>
//     <p>Your questions, answered</p>
//     <ul>
//       <li>
//         <a href="https://vite.dev/" target="_blank">
//           <img class="logo" src="${viteLogo}" alt="" />
//           Explore Vite
//         </a>
//       </li>
//       <li>
//         <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//           <img class="button-icon" src="${javascriptLogo}" alt="">
//           Learn more
//         </a>
//       </li>
//     </ul>
//   </div>
//   <div id="social">
//     <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#social-icon"></use></svg>
//     <h2>Connect with us</h2>
//     <p>Join the Vite community</p>
//     <ul>
//       <li><a href="https://github.com/vitejs/vite" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#github-icon"></use></svg>GitHub</a></li>
//       <li><a href="https://chat.vite.dev/" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#discord-icon"></use></svg>Discord</a></li>
//       <li><a href="https://x.com/vite_js" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#x-icon"></use></svg>X.com</a></li>
//       <li><a href="https://bsky.app/profile/vite.dev" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#bluesky-icon"></use></svg>Bluesky</a></li>
//     </ul>
//   </div>
// </section>

// <div class="ticks"></div>
// <section id="spacer"></section>
// `

// setupCounter(document.querySelector('#counter'))

import "./styles.css";

// import JSZip from "jszip";
// import { saveAs } from "file-saver";

// const upload = document.getElementById("upload");
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// const status = document.getElementById("status");

// let img = new Image();
// let highlights = [];
// let startX,
//   startY,
//   isDrawing = false;

// function updateStatus() {
//   //status.textContent = `${highlights.length} highlight${highlights.length !== 1 ? "s" : ""} selected`;
//   status.textContent = `${highlights.length} highlight${highlights.length !== 1 ? "s" : ""} selected`;
// }

// function resizeCanvas() {
//   if (!img.src) return;
//   const maxWidth = window.innerWidth * 0.9;
//   const scale = img.width > maxWidth ? maxWidth / img.width : 1;
//   canvas.width = img.width * scale;
//   canvas.height = img.height * scale;
//   ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//   redrawHighlights();
// }

// upload.addEventListener("change", (e) => {
//   const file = e.target.files[0];
//   if (!file) return;
//   const reader = new FileReader();
//   reader.onload = (evt) => {
//     img.onload = () => resizeCanvas();
//     img.src = evt.target.result;
//   };
//   reader.readAsDataURL(file);
// });

// function getPos(e) {
//   const rect = canvas.getBoundingClientRect();
//   const clientX = e.touches ? e.touches[0].clientX : e.clientX;
//   const clientY = e.touches ? e.touches[0].clientY : e.clientY;
//   return { x: clientX - rect.left, y: clientY - rect.top };
// }

// function redrawHighlights() {
//   ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//   highlights.forEach((h, i) => {
//     ctx.strokeStyle = h.color;
//     ctx.lineWidth = 2;
//     ctx.strokeRect(h.x, h.y, h.w, h.h);
//     // Numbering indicator
//     ctx.fillStyle = h.color;
//     ctx.font = "16px Arial";
//     ctx.fillText(`${i + 1}`, h.x + 5, h.y + 20);
//   });
//   updateStatus();
// }

// function startDraw(e) {
//   const pos = getPos(e);
//   startX = pos.x;
//   startY = pos.y;
//   isDrawing = true;
// }

// function moveDraw(e) {
//   if (!isDrawing) return;
//   const pos = getPos(e);
//   redrawHighlights();
//   ctx.strokeStyle = document.getElementById("color").value;
//   ctx.lineWidth = 2;
//   ctx.strokeRect(startX, startY, pos.x - startX, pos.y - startY);
// }

// function endDraw(e) {
//   if (!isDrawing) return;
//   const pos = getPos(e);
//   const color = document.getElementById("color").value;
//   highlights.push({
//     x: startX,
//     y: startY,
//     w: pos.x - startX,
//     h: pos.y - startY,
//     color,
//   });
//   isDrawing = false;
//   redrawHighlights();
// }

// canvas.addEventListener("mousedown", startDraw);
// canvas.addEventListener("mousemove", moveDraw);
// canvas.addEventListener("mouseup", endDraw);

// canvas.addEventListener("touchstart", startDraw);
// canvas.addEventListener("touchmove", moveDraw);
// canvas.addEventListener("touchend", endDraw);

// document.getElementById("undo").addEventListener("click", () => {
//   highlights.pop();
//   redrawHighlights();
// });

// document.getElementById("clear").addEventListener("click", () => {
//   highlights = [];
//   redrawHighlights();
// });

// document.getElementById("download").addEventListener("click", () => {
//   if (!highlights.length) return;

//   if (highlights.length <= 3) {
//     highlights.forEach((h, i) => {
//       const tempCanvas = document.createElement("canvas");
//       tempCanvas.width = h.w;
//       tempCanvas.height = h.h;
//       const tempCtx = tempCanvas.getContext("2d");
//       tempCtx.drawImage(
//         img,
//         h.x * (img.width / canvas.width),
//         h.y * (img.height / canvas.height),
//         h.w * (img.width / canvas.width),
//         h.h * (img.height / canvas.height),
//         0,
//         0,
//         h.w,
//         h.h,
//       );
//       const link = document.createElement("a");
//       link.download = `highlight_${i + 1}.png`;
//       link.href = tempCanvas.toDataURL();
//       link.click();
//     });
//   } else {
//     const zip = new JSZip();
//     highlights.forEach((h, i) => {
//       const tempCanvas = document.createElement("canvas");
//       tempCanvas.width = h.w;
//       tempCanvas.height = h.h;
//       const tempCtx = tempCanvas.getContext("2d");
//       tempCtx.drawImage(
//         img,
//         h.x * (img.width / canvas.width),
//         h.y * (img.height / canvas.height),
//         h.w * (img.width / canvas.width),
//         h.h * (img.height / canvas.height),
//         0,
//         0,
//         h.w,
//         h.h,
//       );
//       const data = tempCanvas.toDataURL().split(",")[1];
//       zip.file(`highlight_${i + 1}.png`, data, { base64: true });
//     });
//     zip
//       .generateAsync({ type: "blob" })
//       .then((content) => saveAs(content, "highlights.zip"));
//   }
// });

// window.addEventListener("resize", resizeCanvas);

import JSZip from "jszip";
import { saveAs } from "file-saver";

const upload = document.getElementById("upload");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const status = document.getElementById("status");

let img = new Image();
let highlights = [];
let startX,
  startY,
  isDrawing = false;

function updateStatus() {
  status.textContent = `${highlights.length} highlight${highlights.length !== 1 ? "s" : ""} selected`;
}

function resizeCanvas() {
  if (!img.src) return;
  const maxWidth = window.innerWidth * 0.9;
  const scale = img.width > maxWidth ? maxWidth / img.width : 1;
  canvas.width = img.width * scale;
  canvas.height = img.height * scale;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  redrawHighlights();
}

upload.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (evt) => {
    img.onload = () => resizeCanvas();
    img.src = evt.target.result;
  };
  reader.readAsDataURL(file);
});

function getPos(e) {
  const rect = canvas.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  return { x: clientX - rect.left, y: clientY - rect.top };
}

function redrawHighlights() {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  highlights.forEach((h, i) => {
    ctx.strokeStyle = h.color;
    ctx.lineWidth = 2;
    ctx.strokeRect(h.x, h.y, h.w, h.h);
    ctx.fillStyle = h.color;
    ctx.font = "16px Arial";
    ctx.fillText(`${i + 1}`, h.x + 5, h.y + 20);
  });
  updateStatus();
}

function startDraw(e) {
  e.preventDefault();
  const pos = getPos(e);
  startX = pos.x;
  startY = pos.y;
  isDrawing = true;
}

function moveDraw(e) {
  if (!isDrawing) return;
  e.preventDefault();
  const pos = getPos(e);
  redrawHighlights();
  ctx.strokeStyle = document.getElementById("color").value;
  ctx.lineWidth = 2;
  ctx.strokeRect(startX, startY, pos.x - startX, pos.y - startY);
}

function endDraw(e) {
  if (!isDrawing) return;
  e.preventDefault();
  const pos = e.changedTouches
    ? {
        x: e.changedTouches[0].clientX - canvas.getBoundingClientRect().left,
        y: e.changedTouches[0].clientY - canvas.getBoundingClientRect().top,
      }
    : getPos(e);
  const color = document.getElementById("color").value;
  highlights.push({
    x: startX,
    y: startY,
    w: pos.x - startX,
    h: pos.y - startY,
    color,
  });
  isDrawing = false;
  redrawHighlights();
}

// Desktop events
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", moveDraw);
canvas.addEventListener("mouseup", endDraw);

// Mobile events (with passive:false)
canvas.addEventListener("touchstart", startDraw, { passive: false });
canvas.addEventListener("touchmove", moveDraw, { passive: false });
canvas.addEventListener("touchend", endDraw, { passive: false });

document.getElementById("undo").addEventListener("click", () => {
  highlights.pop();
  redrawHighlights();
});

document.getElementById("clear").addEventListener("click", () => {
  highlights = [];
  redrawHighlights();
});

document.getElementById("download").addEventListener("click", () => {
  if (!highlights.length) return;

  if (highlights.length <= 3) {
    highlights.forEach((h, i) => {
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = h.w;
      tempCanvas.height = h.h;
      const tempCtx = tempCanvas.getContext("2d");
      tempCtx.drawImage(
        img,
        h.x * (img.width / canvas.width),
        h.y * (img.height / canvas.height),
        h.w * (img.width / canvas.width),
        h.h * (img.height / canvas.height),
        0,
        0,
        h.w,
        h.h,
      );
      const link = document.createElement("a");
      link.download = `highlight_${i + 1}.png`;
      link.href = tempCanvas.toDataURL();
      link.click();
    });
  } else {
    const zip = new JSZip();
    highlights.forEach((h, i) => {
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = h.w;
      tempCanvas.height = h.h;
      const tempCtx = tempCanvas.getContext("2d");
      tempCtx.drawImage(
        img,
        h.x * (img.width / canvas.width),
        h.y * (img.height / canvas.height),
        h.w * (img.width / canvas.width),
        h.h * (img.height / canvas.height),
        0,
        0,
        h.w,
        h.h,
      );
      const data = tempCanvas.toDataURL().split(",")[1];
      zip.file(`highlight_${i + 1}.png`, data, { base64: true });
    });
    zip
      .generateAsync({ type: "blob" })
      .then((content) => saveAs(content, "highlights.zip"));
  }
});

window.addEventListener("resize", resizeCanvas);
