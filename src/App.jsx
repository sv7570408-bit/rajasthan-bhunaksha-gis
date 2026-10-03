import { useMemo, useState } from 'react';
import { MapContainer, TileLayer, Polygon, Circle, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const center = [25.3526, 71.3045];
const villageBoundary = [
  [25.359, 71.282],
  [25.349, 71.271],
  [25.336, 71.292],
  [25.341, 71.310],
  [25.355, 71.318],
  [25.367, 71.301],
  [25.359, 71.282],
];

const customLayers = [
  { id: 'wms', title: 'WMS link', icon: '▣', description: 'Connect a WMS map service using its URL.', accent: 'gold' },
  { id: 'image', title: 'Image / PDF', icon: '🖼', description: 'Choose a JPG, PNG, or PDF from your device.', accent: 'sage' },
  { id: 'website', title: 'Website Overlay', label: 'MOST USED', badge: 'INDIA', description: 'Open a map website and capture it as an overlay.', accent: 'green' },
  { id: 'bhunaksha', title: 'Bhunaksha Overlay', label: 'MOST USED', badge: 'INDIA', description: 'Choose a verified state portal and create a whole-map cadastral overlay.', accent: 'sage' },
  { id: 'camera', title: 'Camera', icon: '📷', description: 'Take a photo, then add it as an image or drawing.', accent: 'gold' },
];

function App() {
  const [activeScreen, setActiveScreen] = useState('home');
  const [selectedLayer, setSelectedLayer] = useState('website');

  const mapTileLayer = useMemo(
    () => 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    []
  );

  const openSourcePanel = () => setActiveScreen('source');
  const openWebsiteMethod = () => setActiveScreen('websiteMethod');
  const openCaptureType = () => setActiveScreen('captureType');
  const goHome = () => setActiveScreen('home');

  return (
    <div className="app-shell">
      <div className="phone-frame">
        <div className="status-bar">
          <span>4:07</span>
          <div className="signal-group">
            <span className="signal-dot" />
            <span className="signal-dot" />
            <span className="signal-dot" />
          </div>
          <div className="network-box">1 device</div>
          <div className="status-right">
            <span>4G+</span>
            <span className="battery" />
          </div>
        </div>

        <main className="map-app">
          <div className="top-toolbar">
            <button className="icon-button menu-btn" aria-label="Menu">☰</button>
            <div className="title-block">
              <h1>GeoKhet</h1>
              <p>Switch map styles, jump to...</p>
            </div>
            <div className="toolbar-actions">
              <button className="icon-button square-btn">✓</button>
              <button className="icon-button square-btn">▾</button>
            </div>
          </div>

          <div className="map-region">
            <MapContainer center={center} zoom={15} minZoom={10} maxZoom={20} scrollWheelZoom={false} className="leaflet-map">
              <TileLayer url={mapTileLayer} attribution="" />
              <Polygon positions={villageBoundary} pathOptions={{ color: '#0a4d8f', weight: 2, opacity: 0.9, fillColor: '#2d6aa9', fillOpacity: 0.12 }} />
              <Circle center={[25.348, 71.290]} radius={180} pathOptions={{ color: '#2c9eff', fillOpacity: 0.15 }} />
              <Marker position={[25.348, 71.290]} icon={L.divIcon({ className: 'map-pin', html: '<span>S</span>', iconSize: [30, 30], iconAnchor: [15, 15] })}>
                <Popup>बावरला</Popup>
              </Marker>
            </MapContainer>

            <div className="map-floating-ui">
              <div className="compass-card">
                <span className="compass-letter">N</span>
                <span className="compass-letter">W</span>
                <span className="compass-letter">E</span>
                <span className="compass-letter">S</span>
                <span className="compass-letter">S</span>
              </div>

              <div className="location-tag">
                <div className="location-icon">◉</div>
                <div className="location-label">
                  <strong>Bawarla</strong>
                  <span>बावरला</span>
                </div>
              </div>

              <div className="right-controls">
                <button className="layer-control">▤</button>
                <button className="layer-control">⌖</button>
              </div>
            </div>
          </div>

          {activeScreen === 'home' && (
            <div className="bottom-panel action-panel">
              <button className="create-button" onClick={openSourcePanel}>
                <span className="plus">＋</span> Create New
              </button>
            </div>
          )}

          {activeScreen === 'source' && (
            <div className="bottom-sheet light-sheet custom-source-sheet">
              <div className="sheet-top-line" />
              <div className="sheet-body">
                <p className="eyebrow">CHOOSE A SOURCE</p>
                <h2>Add Custom layer</h2>
                <p className="subtitle">Add a WMS service, image/PDF, website capture, or camera photo over the current map.</p>

                <div className="option-list">
                  {customLayers.map((layer) => (
                    <button
                      key={layer.id}
                      className={`option-item ${selectedLayer === layer.id ? 'selected' : ''}`}
                      onClick={() => {
                        setSelectedLayer(layer.id);
                        if (layer.id === 'website' || layer.id === 'bhunaksha') {
                          openWebsiteMethod();
                        }
                      }}
                    >
                      <div className={`option-icon ${layer.accent}`}>
                        {layer.icon || '◫'}
                      </div>
                      <div className="option-copy">
                        <div className="option-title-row">
                          <span className="option-title">{layer.title}</span>
                          {layer.label && <span className="mini-badge">{layer.label}</span>}
                          {layer.badge && <span className="mini-badge alt">{layer.badge}</span>}
                        </div>
                        <span>{layer.description}</span>
                      </div>
                    </button>
                  ))}
                </div>

                <button className="cancel-btn" onClick={goHome}>Cancel</button>
              </div>
            </div>
          )}

          {activeScreen === 'websiteMethod' && (
            <div className="bottom-sheet light-sheet website-sheet">
              <div className="sheet-body">
                <h2>Website overlay method</h2>
                <p>Choose manual alignment or use Bhunaksha points for automatic placement.</p>

                <button className="method-card" onClick={openCaptureType}>
                  <div className="method-icon">✎</div>
                  <div>
                    <h3>Manual Overlay</h3>
                    <span>Keep the current capture flow and align the image or drawing yourself.</span>
                  </div>
                  <div className="arrow">›</div>
                </button>

                <button className="method-card premium" onClick={openCaptureType}>
                  <div className="method-icon">✦</div>
                  <div>
                    <h3>Auto Overlay</h3>
                    <div className="inline-badges">
                      <span className="mini-badge alt">AI</span>
                      <span className="mini-badge premium-pill">PREMIUM</span>
                      <span className="mini-badge success">FREE UNTIL 11 NOV</span>
                    </div>
                    <span>Promotional access is free through 11 Nov 2026; Premium is required after that.</span>
                  </div>
                  <div className="arrow">›</div>
                </button>

                <button className="cancel-btn" onClick={goHome}>Cancel</button>
              </div>
            </div>
          )}

          {activeScreen === 'captureType' && (
            <div className="bottom-sheet light-sheet capture-sheet">
              <div className="sheet-body">
                <h2>Choose capture type</h2>
                <p>Add the whole website screenshot or extract only the cadastral drawing as a transparent overlay.</p>

                <button className="capture-card">
                  <div className="capture-icon">🖼</div>
                  <div>
                    <h3>Add Image</h3>
                    <span>Current screenshot layer with all existing scale, rotate, opacity, and warp controls.</span>
                  </div>
                  <div className="arrow">›</div>
                </button>

                <button className="capture-card dim">
                  <div className="capture-icon">▭</div>
                  <div>
                    <h3>Add Draw</h3>
                    <span>Smartly extract only parcel lines, plot numbers, and cadastral drawing on transparent overlay.</span>
                  </div>
                  <div className="arrow">›</div>
                </button>

                <button className="cancel-btn" onClick={goHome}>Cancel</button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
