import React, { useEffect, useRef, useCallback, useState } from "react";
import "./PacManEasterEgg.css";
import logoSvg from "src/assets/logo_text_llh.svg";

// ─── Constants ────────────────────────────────────────────────
const TS = 26;
const COLS = 21;
const ROWS = 23;
const CW = TS * COLS; // 546
const CH = TS * ROWS; // 598

const PAC_SPEED = 7;
const GHOST_SPEED = 5;
const SCARE_SPEED = 3;
const POWER_DUR = 8;

const WALL = 0,
  DOT = 1,
  POWER = 2,
  EMPTY = 3,
  DOOR = 4,
  GHOUSE = 5;
const W = WALL,
  D = DOT,
  P = POWER,
  E = EMPTY,
  H = DOOR,
  G = GHOUSE;

// ─── Maze (21×23) ─────────────────────────────────────────────
const MAZE_TPL = [
  [W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W], // 0
  [W, D, D, D, D, D, D, D, D, D, W, D, D, D, D, D, D, D, D, D, W], // 1
  [W, P, W, W, D, W, W, W, D, W, W, W, D, W, W, W, D, W, W, P, W], // 2
  [W, D, W, W, D, W, W, W, D, W, W, W, D, W, W, W, D, W, W, D, W], // 3
  [W, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, W], // 4
  [W, D, W, W, D, W, D, W, W, W, W, W, W, W, D, W, D, W, W, D, W], // 5
  [W, D, D, D, D, W, D, D, D, W, W, W, D, D, D, W, D, D, D, D, W], // 6
  [W, W, W, W, D, W, W, W, D, E, E, E, D, W, W, W, D, W, W, W, W], // 7
  [E, E, E, E, D, W, D, D, D, W, H, W, D, D, D, W, D, E, E, E, E], // 8
  [E, E, E, E, D, W, D, W, G, G, G, G, G, W, D, W, D, E, E, E, E], // 9
  [E, E, E, E, D, E, D, W, G, G, G, G, G, W, D, E, D, E, E, E, E], // 10  ← tunnel
  [E, E, E, E, D, W, D, W, G, G, G, G, G, W, D, W, D, E, E, E, E], // 11
  [E, E, E, E, D, W, D, D, D, W, W, W, D, D, D, W, D, E, E, E, E], // 12
  [W, W, W, W, D, W, W, W, D, W, W, W, D, W, W, W, D, W, W, W, W], // 13
  [W, D, D, D, D, D, D, D, D, D, W, D, D, D, D, D, D, D, D, D, W], // 14
  [W, D, W, W, D, W, W, W, D, W, W, W, D, W, W, W, D, W, W, D, W], // 15
  [W, P, W, E, D, D, D, D, D, D, E, D, D, D, D, D, D, E, W, P, W], // 16
  [W, W, D, E, D, W, D, W, W, W, W, W, W, W, D, W, D, E, D, W, W], // 17
  [W, D, D, D, D, W, D, D, D, W, W, W, D, D, D, W, D, D, D, D, W], // 18
  [W, D, W, W, D, W, D, W, D, D, D, D, D, W, D, W, D, W, W, D, W], // 19
  [W, D, D, D, D, D, D, D, D, D, E, D, D, D, D, D, D, D, D, D, W], // 20
  [W, D, W, W, W, W, D, W, W, W, W, W, W, W, D, W, W, W, W, D, W], // 21
  [W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W], // 22
];

const GHOST_COLORS = ["#FF7430", "#FFB870", "#52C8FF", "#FFD966"];

// ─── Helpers ──────────────────────────────────────────────────
const wrap = (c) => (c < 0 ? COLS - 1 : c >= COLS ? 0 : c);

function isPacWall(maze, col, row) {
  if (row < 0 || row >= ROWS) return true;
  const nc = wrap(col);
  const v = maze[row][nc];
  return v === WALL || v === DOOR || v === GHOUSE;
}

function isGhostWall(maze, col, row, state) {
  if (col < 0 || col >= COLS || row < 0 || row >= ROWS) return true;
  const v = maze[row][col];
  if (v === WALL) return true;
  if (v === GHOUSE && state !== "house" && state !== "exiting") return true;
  return false;
}

// ─── Game state factory ───────────────────────────────────────
function mkGhost(id, col, row, rel) {
  return {
    id,
    col,
    row,
    dir: { dc: id % 2 === 0 ? 1 : -1, dr: 0 },
    progress: 0,
    state: rel === 0 ? "exiting" : "house",
    releaseTimer: rel,
  };
}

function newGame() {
  const maze = MAZE_TPL.map((r) => [...r]);
  let total = 0;
  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++)
      if (maze[r][c] === DOT || maze[r][c] === POWER) total++;
  return {
    maze,
    total,
    eaten: 0,
    score: 0,
    lives: 3,
    power: false,
    powerT: 0,
    ghostMul: 1,
    state: "ready",
    stateT: 2.5,
    pac: {
      col: 10,
      row: 20,
      dir: { dc: 0, dr: 0 },
      next: { dc: -1, dr: 0 },
      prog: 0,
      moving: false,
      mouth: 0.25,
      mouthOpen: true,
    },
    ghosts: [
      mkGhost(0, 10, 9, 0),
      mkGhost(1, 10, 10, 5),
      mkGhost(2, 9, 10, 10),
      mkGhost(3, 11, 10, 15),
    ],
  };
}

function resetActors(gs) {
  gs.pac = {
    col: 10,
    row: 20,
    dir: { dc: 0, dr: 0 },
    next: { dc: -1, dr: 0 },
    prog: 0,
    moving: false,
    mouth: 0.25,
    mouthOpen: true,
  };
  gs.ghosts = [
    mkGhost(0, 10, 9, 0),
    mkGhost(1, 10, 10, 5),
    mkGhost(2, 9, 10, 10),
    mkGhost(3, 11, 10, 15),
  ];
  gs.power = false;
  gs.powerT = 0;
  gs.ghostMul = 1;
}

// ─── Update ───────────────────────────────────────────────────
function update(gs, dt) {
  if (gs.state === "ready") {
    gs.stateT -= dt;
    if (gs.stateT <= 0) gs.state = "playing";
    return;
  }
  if (gs.state === "dying") {
    gs.stateT -= dt;
    if (gs.stateT <= 0) {
      gs.lives--;
      if (gs.lives <= 0) gs.state = "gameover";
      else {
        resetActors(gs);
        gs.state = "ready";
        gs.stateT = 1.5;
      }
    }
    return;
  }
  if (gs.state !== "playing") return;

  if (gs.power) {
    gs.powerT -= dt;
    if (gs.powerT <= 0) {
      gs.power = false;
      gs.ghostMul = 1;
      gs.ghosts.forEach((g) => {
        if (g.state === "frightened") g.state = "chase";
      });
    }
  }

  gs.ghosts.forEach((g) => {
    if (g.state === "house") {
      g.releaseTimer -= dt;
      if (g.releaseTimer <= 0) {
        g.state = "exiting";
        g.progress = 0;
        g.dir =
          g.col !== 10 ? { dc: g.col < 10 ? 1 : -1, dr: 0 } : { dc: 0, dr: -1 };
      }
    }
  });

  updatePac(gs, dt);
  gs.ghosts.forEach((g) => updateGhost(gs, g, dt));
  checkHits(gs);
  if (gs.eaten >= gs.total) gs.state = "won";
}

function updatePac(gs, dt) {
  const p = gs.pac;
  const spd = p.moving ? 3.5 : 0;
  if (p.moving) {
    p.mouth += (p.mouthOpen ? 1 : -1) * spd * dt;
    if (p.mouth >= 0.28) {
      p.mouthOpen = false;
    }
    if (p.mouth <= 0.01) {
      p.mouthOpen = true;
    }
  }
  if (!p.moving) {
    const nd = p.next,
      nc = wrap(p.col + nd.dc);
    if (!isPacWall(gs.maze, nc, p.row + nd.dr)) {
      p.dir = { ...nd };
      p.moving = true;
    }
    return;
  }
  p.prog += PAC_SPEED * dt;
  while (p.prog >= 1) {
    p.prog -= 1;
    p.col = wrap(p.col + p.dir.dc);
    p.row += p.dir.dr;
    const cell = gs.maze[p.row]?.[p.col];
    if (cell === DOT) {
      gs.maze[p.row][p.col] = EMPTY;
      gs.score += 10;
      gs.eaten++;
    } else if (cell === POWER) {
      gs.maze[p.row][p.col] = EMPTY;
      gs.score += 50;
      gs.eaten++;
      gs.power = true;
      gs.powerT = POWER_DUR;
      gs.ghostMul = 1;
      gs.ghosts.forEach((g) => {
        if (g.state === "chase" || g.state === "scatter")
          g.state = "frightened";
      });
    }
    const nd = p.next,
      nc = wrap(p.col + nd.dc);
    if (!isPacWall(gs.maze, nc, p.row + nd.dr)) p.dir = { ...nd };
    if (isPacWall(gs.maze, wrap(p.col + p.dir.dc), p.row + p.dir.dr)) {
      p.moving = false;
      p.dir = { dc: 0, dr: 0 };
      p.prog = 0;
      break;
    }
  }
}

const DIRS = [
  { dc: 0, dr: -1 },
  { dc: 1, dr: 0 },
  { dc: 0, dr: 1 },
  { dc: -1, dr: 0 },
];

function updateGhost(gs, g, dt) {
  const spd = g.state === "frightened" ? SCARE_SPEED : GHOST_SPEED;
  if (g.state === "house") {
    g.progress += spd * 0.3 * dt;
    if (g.progress >= 1) {
      g.progress = 0;
      g.dir.dc *= -1;
      const nc = g.col + g.dir.dc;
      if (nc >= 8 && nc <= 12) g.col = nc;
      else {
        g.dir.dc *= -1;
      }
    }
    return;
  }
  if (g.state === "exiting") {
    g.progress += spd * dt;
    if (g.progress >= 1) {
      g.progress -= 1;
      g.col += g.dir.dc;
      g.row += g.dir.dr;
      if (g.row > 7) {
        if (g.col !== 10) g.dir = { dc: g.col < 10 ? 1 : -1, dr: 0 };
        else g.dir = { dc: 0, dr: -1 };
      } else {
        g.state = "chase";
        g.dir = { dc: -1, dr: 0 };
      }
    }
    return;
  }
  if (g.state === "eaten") return;

  g.progress += spd * dt;
  while (g.progress >= 1) {
    g.progress -= 1;
    g.col = wrap(g.col + g.dir.dc);
    g.row += g.dir.dr;
    const newDir =
      g.state === "frightened"
        ? randGhostDir(gs.maze, g)
        : chaseDir(gs.maze, g, getTarget(gs, g));
    if (newDir) g.dir = newDir;
  }
}

function getTarget(gs, g) {
  const p = gs.pac;
  if (g.id === 1)
    return { col: p.col + p.dir.dc * 2, row: p.row + p.dir.dr * 2 };
  if (g.id === 3 && Math.abs(g.col - p.col) + Math.abs(g.row - p.row) < 8)
    return { col: 0, row: ROWS - 1 };
  return { col: p.col, row: p.row };
}

function chaseDir(maze, g, t) {
  const rev = { dc: -g.dir.dc, dr: -g.dir.dr };
  let best = null,
    bd = Infinity;
  for (const d of DIRS) {
    if (d.dc === rev.dc && d.dr === rev.dr) continue;
    const nc = g.col + d.dc,
      nr = g.row + d.dr;
    if (isGhostWall(maze, nc, nr, g.state)) continue;
    const dist = (nc - t.col) ** 2 + (nr - t.row) ** 2;
    if (dist < bd) {
      bd = dist;
      best = d;
    }
  }
  return best || rev;
}

function randGhostDir(maze, g) {
  const rev = { dc: -g.dir.dc, dr: -g.dir.dr };
  const valid = DIRS.filter(
    (d) =>
      !(d.dc === rev.dc && d.dr === rev.dr) &&
      !isGhostWall(maze, g.col + d.dc, g.row + d.dr, g.state),
  );
  return valid.length ? valid[Math.floor(Math.random() * valid.length)] : rev;
}

function checkHits(gs) {
  for (const g of gs.ghosts) {
    if (g.state === "eaten") continue;
    const gpx = (g.col + g.dir.dc * g.progress) * TS + TS / 2;
    const gpy = (g.row + g.dir.dr * g.progress) * TS + TS / 2;
    const ppx = (gs.pac.col + gs.pac.dir.dc * gs.pac.prog) * TS + TS / 2;
    const ppy = (gs.pac.row + gs.pac.dir.dr * gs.pac.prog) * TS + TS / 2;
    if (Math.hypot(gpx - ppx, gpy - ppy) < TS * 0.75) {
      if (g.state === "frightened") {
        gs.score += 200 * gs.ghostMul;
        gs.ghostMul *= 2;
        g.state = "eaten";
      } else if (g.state === "chase" || g.state === "scatter") {
        gs.state = "dying";
        gs.stateT = 1.5;
      }
    }
  }
}

// ─── Draw ─────────────────────────────────────────────────────
const time = () => Date.now() / 1000;

function draw(ctx, gs) {
  ctx.fillStyle = "#080305";
  ctx.fillRect(0, 0, CW, CH);
  drawMaze(ctx, gs.maze);
  if (gs.state === "dying") drawPacDead(ctx, gs.pac, gs.stateT);
  else drawPac(ctx, gs.pac, gs.state);
  gs.ghosts.forEach((g) => drawGhost(ctx, g, gs.power, gs.powerT));
  drawOverlay(ctx, gs);
}

function drawMaze(ctx, maze) {
  const t = time();
  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++) {
      const v = maze[r][c];
      const x = c * TS,
        y = r * TS;
      if (v === WALL) {
        ctx.fillStyle = "#1c0903";
        ctx.fillRect(x, y, TS, TS);
        ctx.strokeStyle = "#FF7430";
        ctx.lineWidth = 1.5;
        ctx.strokeRect(x + 1, y + 1, TS - 2, TS - 2);
        ctx.fillStyle = "#120502";
        ctx.fillRect(x + 3, y + 3, TS - 6, TS - 6);
      } else if (v === DOOR) {
        ctx.fillStyle = "rgba(255,184,112,0.8)";
        ctx.fillRect(x + 1, y + TS * 0.38, TS - 2, TS * 0.24);
      } else if (v === DOT) {
        ctx.beginPath();
        ctx.arc(x + TS / 2, y + TS / 2, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#FFCF9A";
        ctx.fill();
      } else if (v === POWER) {
        const pulse = Math.sin(t * 4) * 0.4 + 0.6;
        const pr = 5 * pulse;
        const grd = ctx.createRadialGradient(
          x + TS / 2,
          y + TS / 2,
          0,
          x + TS / 2,
          y + TS / 2,
          pr * 2.5,
        );
        grd.addColorStop(0, "rgba(255,116,48,0.5)");
        grd.addColorStop(1, "rgba(255,116,48,0)");
        ctx.beginPath();
        ctx.arc(x + TS / 2, y + TS / 2, pr * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x + TS / 2, y + TS / 2, pr, 0, Math.PI * 2);
        ctx.fillStyle = "#FF7430";
        ctx.fill();
      }
    }
}

function drawPac(ctx, p, state) {
  const px = (p.col + p.dir.dc * p.prog) * TS + TS / 2;
  const py = (p.row + p.dir.dr * p.prog) * TS + TS / 2;
  const r = TS / 2 - 1;
  let base = 0;
  if (p.dir.dc === -1) base = Math.PI;
  else if (p.dir.dr === -1) base = -Math.PI / 2;
  else if (p.dir.dr === 1) base = Math.PI / 2;
  const mouth = p.mouth * Math.PI;
  const grd = ctx.createRadialGradient(
    px - r * 0.3,
    py - r * 0.3,
    0,
    px,
    py,
    r,
  );
  grd.addColorStop(0, "#FFE566");
  grd.addColorStop(1, "#FFB800");
  ctx.beginPath();
  ctx.moveTo(px, py);
  ctx.arc(px, py, r, base + mouth, base + Math.PI * 2 - mouth);
  ctx.closePath();
  ctx.fillStyle = grd;
  ctx.fill();
  // Eye
  const ex = px + Math.cos(base - Math.PI / 3) * r * 0.45;
  const ey = py + Math.sin(base - Math.PI / 3) * r * 0.45;
  ctx.beginPath();
  ctx.arc(ex, ey, 1.8, 0, Math.PI * 2);
  ctx.fillStyle = "#333";
  ctx.fill();
}

function drawPacDead(ctx, p, t) {
  const px = p.col * TS + TS / 2,
    py = p.row * TS + TS / 2;
  const r = TS / 2 - 1;
  const prog = Math.max(0, 1 - t / 1.5);
  const mouth = (0.5 + prog * 0.5) * Math.PI;
  ctx.beginPath();
  ctx.moveTo(px, py);
  ctx.arc(px, py, r, mouth, Math.PI * 2 - mouth);
  ctx.closePath();
  ctx.fillStyle = "#FFB800";
  ctx.fill();
}

function drawGhost(ctx, g, powerMode, powerT) {
  if (g.state === "eaten") return;
  const px = (g.col + g.dir.dc * g.progress) * TS + TS / 2;
  const py = (g.row + g.dir.dr * g.progress) * TS + TS / 2;
  const r = TS / 2 - 1;
  let color;
  if (g.state === "frightened") {
    color =
      powerT < 2 && Math.floor(Date.now() / 250) % 2 === 0
        ? "#ffffff"
        : "#2233CC";
  } else {
    color = GHOST_COLORS[g.id];
  }
  // Body
  ctx.beginPath();
  ctx.arc(px, py - 1, r, Math.PI, 0);
  ctx.lineTo(px + r, py + r - 1);
  const ww = (r * 2) / 3;
  ctx.quadraticCurveTo(
    px + r - ww * 0.5,
    py + r * 0.6,
    px + r - ww,
    py + r - 1,
  );
  ctx.quadraticCurveTo(
    px + r - ww * 1.5,
    py + r * 1.25,
    px + r - ww * 2,
    py + r - 1,
  );
  ctx.quadraticCurveTo(px + r - ww * 2.5, py + r * 0.6, px - r, py + r - 1);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  // Eyes
  if (g.state !== "frightened") {
    [[-1, 1]]
      .flat()
      .map((_, i) => i * 2 - 1)
      .forEach((side) => {
        const ex = px + side * (r * 0.35),
          ey = py - r * 0.1,
          er = r * 0.26;
        ctx.beginPath();
        ctx.arc(ex, ey, er, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(
          ex + g.dir.dc * er * 0.5,
          ey + g.dir.dr * er * 0.5,
          er * 0.5,
          0,
          Math.PI * 2,
        );
        ctx.fillStyle = "#0033BB";
        ctx.fill();
      });
  } else {
    ctx.fillStyle = "white";
    [[-r * 0.3, r * 0.28]].flat().forEach((_, i) => {
      const ox = i === 0 ? -r * 0.3 : r * 0.3;
      ctx.beginPath();
      ctx.arc(px + ox, py - r * 0.15, r * 0.13, 0, Math.PI * 2);
      ctx.fill();
    });
  }
}

function drawOverlay(ctx, gs) {
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  if (gs.state === "ready") {
    ctx.font = "bold 22px Inter,sans-serif";
    ctx.fillStyle = "#FFD700";
    ctx.fillText("READY!", CW / 2, CH * 0.58);
  }
  if (gs.state === "gameover") {
    ctx.fillStyle = "rgba(0,0,0,0.65)";
    ctx.fillRect(0, 0, CW, CH);
    ctx.font = "bold 28px Inter,sans-serif";
    ctx.fillStyle = "#FF7430";
    ctx.fillText("GAME OVER", CW / 2, CH / 2 - 22);
    ctx.font = "14px Inter,sans-serif";
    ctx.fillStyle = "rgba(255,200,150,0.85)";
    ctx.fillText("SPACE o TOCA per tornar a jugar", CW / 2, CH / 2 + 18);
  }
  if (gs.state === "won") {
    ctx.fillStyle = "rgba(0,0,0,0.65)";
    ctx.fillRect(0, 0, CW, CH);
    ctx.font = "bold 26px Inter,sans-serif";
    ctx.fillStyle = "#FFD700";
    ctx.fillText("🎉 HAS GUANYAT! 🎉", CW / 2, CH / 2 - 22);
    ctx.font = "16px Inter,sans-serif";
    ctx.fillStyle = "#FF7430";
    ctx.fillText(`Puntuació: ${gs.score}`, CW / 2, CH / 2 + 18);
    ctx.font = "13px Inter,sans-serif";
    ctx.fillStyle = "rgba(255,200,150,0.75)";
    ctx.fillText("SPACE o TOCA per jugar de nou", CW / 2, CH / 2 + 46);
  }
}

// ─── Scan-line effect ─────────────────────────────────────────
function drawScanLines(ctx) {
  ctx.save();
  for (let y = 0; y < CH; y += 4) {
    ctx.fillStyle = "rgba(0,0,0,0.08)";
    ctx.fillRect(0, y, CW, 2);
  }
  ctx.restore();
}

// ─── React Component ──────────────────────────────────────────
export default function PacManEasterEgg() {
  const [open, setOpen] = useState(false);
  const [hud, setHud] = useState({ score: 0, lives: 3, state: "ready" });
  const [gameScale, setGameScale] = useState(1);
  const canvasRef = useRef(null);
  const gsRef = useRef(null);
  const animRef = useRef(null);
  const hudPrev = useRef({ score: -1, lives: -1, state: "" });

  const startGame = useCallback(() => {
    gsRef.current = newGame();
    document.documentElement.classList.add("no-scroll");
    setOpen(true);
  }, []);

  const closeGame = useCallback(() => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    document.documentElement.classList.remove("no-scroll");
    setOpen(false);
  }, []);

  const setDir = useCallback((dir) => {
    if (gsRef.current) {
      gsRef.current.pac.next = { ...dir };
    }
  }, []);

  const handleScreenTap = useCallback(() => {
    const gs = gsRef.current;
    if (gs && (gs.state === "gameover" || gs.state === "won")) {
      gsRef.current = newGame();
    }
  }, []);

  // Escala responsive: ajusta el joc a la pantalla
  useEffect(() => {
    if (!open) return;
    const computeScale = () => {
      const HUD_H = 65; // aprox alçada del HUD
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
      const DPAD_H = hasFinePointer ? 0 : 190; // 190px d'alçada pel D-Pad si estem en tàctil

      const sw = (window.innerWidth - 16) / CW;
      const sh = (window.innerHeight - 16) / (CH + HUD_H + DPAD_H);
      setGameScale(Math.min(1, sw, sh));
    };
    computeScale();
    window.addEventListener("resize", computeScale);
    return () => window.removeEventListener("resize", computeScale);
  }, [open]);

  // Keyboard
  useEffect(() => {
    if (!open) return;
    const MAP = {
      ArrowUp: { dc: 0, dr: -1 },
      ArrowDown: { dc: 0, dr: 1 },
      ArrowLeft: { dc: -1, dr: 0 },
      ArrowRight: { dc: 1, dr: 0 },
      w: { dc: 0, dr: -1 },
      s: { dc: 0, dr: 1 },
      a: { dc: -1, dr: 0 },
      d: { dc: 1, dr: 0 },
    };
    const onKey = (e) => {
      if (MAP[e.key]) {
        e.preventDefault();
        setDir(MAP[e.key]);
      }
      if (e.key === " " || e.key === "Enter") {
        const gs = gsRef.current;
        if (gs && (gs.state === "gameover" || gs.state === "won"))
          gsRef.current = newGame();
      }
      if (e.key === "Escape") closeGame();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setDir, closeGame]);

  // Game loop
  useEffect(() => {
    if (!open) return;
    let last = null;
    const loop = (ts) => {
      const dt = last ? Math.min((ts - last) / 1000, 0.05) : 0;
      last = ts;
      const gs = gsRef.current;
      const cv = canvasRef.current;
      if (gs && cv) {
        const ctx = cv.getContext("2d");
        update(gs, dt);
        draw(ctx, gs);
        drawScanLines(ctx);
        // HUD sync
        const p = hudPrev.current;
        if (
          gs.score !== p.score ||
          gs.lives !== p.lives ||
          gs.state !== p.state
        ) {
          hudPrev.current = {
            score: gs.score,
            lives: gs.lives,
            state: gs.state,
          };
          setHud({ score: gs.score, lives: gs.lives, state: gs.state });
        }
      }
      animRef.current = requestAnimationFrame(loop);
    };
    animRef.current = requestAnimationFrame(loop);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [open]);

  return (
    <>
      {/* FAB: Pac-Man quan tancat, logo LleidaHack quan obert */}
      {!open ? (
        <button
          className="pacman-fab"
          onClick={startGame}
          title="Juga a Pac-Man! 🕹️"
          aria-label="Obrir joc Pac-Man"
        >
          <PacIcon />
        </button>
      ) : (
        <button
          className="pacman-fab pacman-fab--close"
          onClick={closeGame}
          title="Tornar a la web"
          aria-label="Tancar joc i tornar a la web"
        >
          <img src={logoSvg} alt="LleidaHack" className="pacman-fab-logo" />
        </button>
      )}

      {/* Game overlay */}
      {open && (
        <div
          className="pacman-overlay"
          role="dialog"
          aria-label="Joc Pac-Man"
          onClick={handleScreenTap}
        >
          <div
            className="pacman-game-wrapper"
            style={{
              transform: `scale(${gameScale})`,
              transformOrigin: "center",
            }}
          >
            {/* HUD */}
            <div className="pacman-hud">
              <div className="pacman-hud-block">
                <span className="pacman-hud-label">PUNTS</span>
                <span className="pacman-hud-score">{hud.score}</span>
              </div>
              <img src={logoSvg} alt="LleidaHack" className="pacman-hud-logo" />
              <div
                className="pacman-hud-block"
                style={{ alignItems: "flex-end" }}
              >
                <span className="pacman-hud-label">VIDES</span>
                <div className="pacman-hud-lives">
                  {Array.from({ length: Math.max(0, hud.lives) }).map(
                    (_, i) => (
                      <HeartIcon key={i} />
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Canvas */}
            <canvas
              ref={canvasRef}
              width={CW}
              height={CH}
              className={`pacman-canvas${hud.state === "playing" && gsRef.current?.power ? " pacman-canvas--powered" : ""}`}
            />

            {/* Mobile D-Pad */}
            <div className="pacman-dpad">
              <button
                className="pacman-dpad-btn pacman-dpad-btn--up"
                onTouchStart={(e) => {
                  e.preventDefault();
                  setDir({ dc: 0, dr: -1 });
                }}
              >
                ▲
              </button>
              <button
                className="pacman-dpad-btn pacman-dpad-btn--left"
                onTouchStart={(e) => {
                  e.preventDefault();
                  setDir({ dc: -1, dr: 0 });
                }}
              >
                ◀
              </button>
              <button
                className="pacman-dpad-btn pacman-dpad-btn--right"
                onTouchStart={(e) => {
                  e.preventDefault();
                  setDir({ dc: 1, dr: 0 });
                }}
              >
                ▶
              </button>
              <button
                className="pacman-dpad-btn pacman-dpad-btn--down"
                onTouchStart={(e) => {
                  e.preventDefault();
                  setDir({ dc: 0, dr: 1 });
                }}
              >
                ▼
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ─── Icons ────────────────────────────────────────────────────
function PacIcon() {
  return (
    <svg viewBox="0 0 40 40" width="28" height="28" className="pacman-fab-icon">
      <path d="M20,20 L38,12 A20,20 0 1,0 38,28 Z" fill="#FFD700" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
               2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
               C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5
               c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="#FF7430"
      />
    </svg>
  );
}
