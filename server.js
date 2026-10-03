:root {
  --bg-dark: #0d2e2a;
  --dark-green: #163c37;
  --panel-green: #dfeee5;
  --panel-soft: #f4f7f4;
  --text-main: #173f3d;
  --text-muted: #617d79;
  --teal: #0d6a5c;
  --teal-strong: #197861;
  --line: rgba(23, 63, 61, 0.18);
  --shadow: rgba(10, 31, 32, 0.18);
  --button-green: #0d5763;
  --gold: #e3b866;
  --green-pill: #12a88e;
  --danger: #d84a4a;
}

* {
  box-sizing: border-box;
}

html, body, #root {
  margin: 0;
  height: 100%;
  font-family: 'Inter', sans-serif;
  background: #dfe5e3;
}

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  border: none;
  font: inherit;
}

.app-shell {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #dcdedd 0%, #d5d7d6 100%);
}

.phone-frame {
  width: 100%;
  max-width: 450px;
  height: 100vh;
  max-height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.01));
}

.status-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  z-index: 15;
  color: white;
  font-size: 14px;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0,0,0,0.35);
}

.signal-group {
  display: flex;
  gap: 4px;
  align-items: center;
}

.signal-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(255,255,255,0.9);
}

.network-box {
  background: rgba(24, 32, 39, 0.85);
  border-radius: 999px;
  padding: 6px 18px;
  font-weight: 700;
  letter-spacing: 0.2px;
}

.status-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.battery {
  width: 23px;
  height: 12px;
  border-radius: 3px;
  border: 2px solid white;
  position: relative;
  display: inline-block;
}

.battery::after {
  content: '';
  position: absolute;
  right: -4px;
  top: 3px;
  width: 2px;
  height: 5px;
  border-radius: 1px;
  background: white;
}

.map-app {
  position: relative;
  width: 100%;
  height: 100%;
  background: #d9d5d0;
}

.top-toolbar {
  position: absolute;
  top: 38px;
  left: 18px;
  right: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 12;
}

.icon-button {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(18, 39, 32, 0.45);
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.16);
}

.square-btn {
  border-radius: 26px;
  width: 46px;
  height: 46px;
}

.title-block {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  color: #f2f2f2;
  text-shadow: 0 2px 8px rgba(0,0,0,0.38);
}

.title-block h1 {
  margin: 0;
  font-size: clamp(1.9rem, 2vw, 2.4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
}

.title-block p {
  margin: 2px 0 0;
  font-size: 16px;
  color: rgba(255,255,255,0.88);
  font-weight: 400;
}

.toolbar-actions {
  display: flex;
  gap: 10px;
  align-items: center;
}

.map-region {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.leaflet-map {
  width: 100%;
  height: 100%;
  filter: saturate(0.86) contrast(1.04) brightness(0.86);
}

.map-floating-ui {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 11;
}

.compass-card {
  position: absolute;
  left: 16px;
  top: 180px;
  width: 82px;
  height: 82px;
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.8);
  background: rgba(8, 28, 25, 0.28);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  font-size: 18px;
  color: #eaf1ed;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.15);
}

.compass-letter {
  opacity: 0.75;
}

.right-controls {
  position: absolute;
  right: 18px;
  top: 250px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  pointer-events: auto;
}

.layer-control {
  width: 58px;
  height: 58px;
  border-radius: 18px;
  background: rgba(255,255,255,0.88);
  color: var(--text-main);
  font-size: 34px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.18);
}

.location-tag {
  position: absolute;
  left: 12px;
  bottom: 210px;
  display: flex;
  gap: 10px;
  align-items: center;
  background: rgba(255,255,255,0.4);
  padding: 10px 12px 10px 8px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  backdrop-filter: blur(4px);
  pointer-events: auto;
}

.location-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #0b85dc;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.location-label {
  color: #0b2d2a;
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.location-label strong {
  font-weight: 800;
  letter-spacing: -0.02em;
}

.location-label span {
  font-size: 14px;
}

.bottom-panel {
  position: absolute;
  left: 50%;
  bottom: 38px;
  transform: translateX(-50%);
  width: min(86%, 360px);
  z-index: 14;
}

.action-panel {
  display: flex;
  justify-content: center;
}

.create-button {
  width: 100%;
  background: linear-gradient(180deg, rgba(22, 69, 62, 0.94), rgba(15, 60, 57, 0.95));
  color: white;
  border-radius: 18px;
  padding: 20px 18px;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  box-shadow: 0 8px 22px rgba(7, 45, 41, 0.26);
}

.plus {
  font-size: 1.8rem;
  margin-right: 10px;
  vertical-align: middle;
}

.bottom-sheet {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  border-radius: 30px 30px 0 0;
  background: rgba(236, 241, 236, 0.97);
  border-top: 1px solid rgba(0,0,0,0.06);
  box-shadow: 0 -10px 26px rgba(0,0,0,0.12);
}

.light-sheet {
  padding: 18px 18px 24px;
}

.sheet-top-line {
  margin: 0 auto 10px;
  width: 70px;
  height: 4px;
  border-radius: 999px;
  background: rgba(12, 48, 42, 0.2);
}

.sheet-body {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.eyebrow {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-size: 14px;
  color: var(--teal-strong);
  font-weight: 700;
}

.sheet-body h2 {
  margin: 0;
  color: var(--text-main);
  font-size: clamp(2.3rem, 4vw, 3.3rem);
  line-height: 1;
  letter-spacing: -0.06em;
  font-weight: 800;
}

.subtitle,
.sheet-body p {
  margin: 0;
  color: var(--text-main);
  line-height: 1.45;
  font-size: 1.08rem;
  font-weight: 500;
}

.option-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 6px;
}

.option-item {
  width: 100%;
  background: rgba(255,255,255,0.13);
  border-radius: 18px;
  border: 1px solid rgba(23, 63, 61, 0.12);
  padding: 16px 14px;
  display: flex;
  align-items: center;
  gap: 14px;
  color: var(--text-main);
  text-align: left;
}

.option-item.selected {
  background: rgba(255,255,255,0.34);
  box-shadow: inset 0 0 0 1px rgba(17, 69, 58, 0.18);
}

.option-icon {
  width: 52px;
  height: 52px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background: #edd9ad;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.04);
}

.option-icon.sage {
  background: #d7e5d7;
}

.option-icon.green {
  background: #d6e7d8;
}

.option-copy {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.option-title-row {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.option-title {
  font-size: 1.06rem;
  font-weight: 800;
  letter-spacing: -0.04em;
}

.option-copy span {
  font-size: 0.96rem;
  line-height: 1.4;
  font-weight: 500;
  color: rgba(23, 63, 61, 0.9);
}

.mini-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 999px;
  background: rgba(13, 96, 85, 0.14);
  color: var(--dark-green);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.mini-badge.alt {
  background: rgba(34, 122, 111, 0.14);
}

.mini-badge.success {
  background: rgba(19, 168, 142, 0.15);
  color: #116b4a;
}

.mini-badge.premium-pill {
  background: rgba(227, 184, 102, 0.26);
  color: #947129;
}

.cancel-btn {
  width: 100%;
  margin-top: 12px;
  background: rgba(255,255,255,0.28);
  border: 1px solid rgba(22, 60, 55, 0.18);
  border-radius: 18px;
  padding: 18px 16px;
  color: var(--dark-green);
  font-size: 1.08rem;
  font-weight: 700;
}

.website-sheet h2,
.capture-sheet h2 {
  font-size: clamp(2.1rem, 4vw, 3.2rem);
}

.method-card,
.capture-card {
  width: 100%;
  background: rgba(255,255,255,0.18);
  border-radius: 22px;
  border: 1px solid rgba(17, 69, 58, 0.14);
  padding: 18px 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  text-align: left;
  color: var(--text-main);
}

.method-card h3,
.capture-card h3 {
  margin: 0 0 8px;
  font-size: clamp(1.1rem, 2vw, 1.7rem);
  font-weight: 800;
  letter-spacing: -0.04em;
}

.method-card span,
.capture-card span {
  font-size: 0.92rem;
  line-height: 1.45;
  color: rgba(23, 63, 61, 0.84);
}

.method-icon,
.capture-icon {
  width: 56px;
  height: 56px;
  border-radius: 18px;
  background: rgba(39, 121, 109, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--text-main);
}

.inline-badges {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.arrow {
  margin-left: auto;
  font-size: 2rem;
  color: rgba(23, 63, 61, 0.7);
}

.premium {
  background: rgba(219, 237, 223, 0.58);
}

.dim {
  background: rgba(255,255,255,0.08);
}

.map-pin {
  background: #1a7bd8;
  border: 3px solid rgba(255,255,255,0.9);
  border-radius: 50%;
  width: 24px !important;
  height: 24px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.2);
}

.map-pin span {
  color: white;
  font-size: 0.78rem;
  font-weight: 800;
}

@media (max-width: 420px) {
  .status-bar {
    padding: 0 14px;
  }

  .top-toolbar {
    left: 10px;
    right: 10px;
  }

  .title-block h1 {
    font-size: 1.7rem;
  }

  .title-block p {
    font-size: 13px;
  }

  .option-item {
    padding: 14px 10px;
  }

  .sheet-body h2 {
    font-size: 2.1rem;
  }
}
