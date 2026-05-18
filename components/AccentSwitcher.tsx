'use client';

import { useState, useEffect } from 'react';

const accentColors = [
  { name: 'Warm Orange', color: '#E66A3A', description: 'Default Mercury vibe' },
  { name: 'Trust Blue', color: '#2A6FDB', description: 'Professional' },
  { name: 'Sage Green', color: '#1F8A5B', description: 'Natural' },
  { name: 'Terracotta', color: '#C2410C', description: 'Earthy' },
  { name: 'Plum Purple', color: '#7A5AE0', description: 'Creative' },
  { name: 'Mono B&W', color: '#0F172A', description: 'Minimalist' }
];

export default function AccentSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentAccent, setCurrentAccent] = useState(accentColors[0]);

  useEffect(() => {
    // Load saved accent color from localStorage
    const saved = localStorage.getItem('accent-color');
    if (saved) {
      const foundColor = accentColors.find(c => c.color === saved);
      if (foundColor) {
        setCurrentAccent(foundColor);
        updateAccentColor(saved);
      }
    }
  }, []);

  const updateAccentColor = (color: string) => {
    document.documentElement.style.setProperty('--accent', color);
    // Update accent-soft dynamically
    const accentSoft = `color-mix(in oklab, ${color} 22%, transparent)`;
    document.documentElement.style.setProperty('--accent-soft', accentSoft);
  };

  const handleColorChange = (colorObj: typeof accentColors[0]) => {
    setCurrentAccent(colorObj);
    updateAccentColor(colorObj.color);
    localStorage.setItem('accent-color', colorObj.color);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Color Picker Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full border-2 border-ink shadow-lg flex items-center justify-center transition-transform hover:scale-110"
        style={{ backgroundColor: currentAccent.color }}
        aria-label="Change accent color"
      >
        <span className="text-white text-2xl">🎨</span>
      </button>

      {/* Color Options Panel */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 wf-box wf-box-thick p-4 w-72 bg-paper shadow-xl">
          <div className="wf-mono mb-3">ACCENT COLOR</div>
          <div className="wf-body text-sm mb-4">
            Choose your preferred color scheme
          </div>

          <div className="grid grid-cols-3 gap-3">
            {accentColors.map((colorObj) => (
              <button
                key={colorObj.color}
                onClick={() => handleColorChange(colorObj)}
                className={`group relative aspect-square rounded-lg border-2 transition-all hover:scale-105 ${
                  currentAccent.color === colorObj.color
                    ? 'border-ink border-4'
                    : 'border-ink-2'
                }`}
                style={{ backgroundColor: colorObj.color }}
                aria-label={`${colorObj.name} - ${colorObj.description}`}
              >
                {currentAccent.color === colorObj.color && (
                  <span className="absolute inset-0 flex items-center justify-center text-white text-2xl">
                    ✓
                  </span>
                )}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 left-1/2 transform -translate-x-1/2 wf-mono text-xs whitespace-nowrap bg-ink text-paper px-2 py-1 rounded">
                  {colorObj.name}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-ink-3">
            <div className="wf-body text-xs text-ink-3">
              Current: <span className="wf-accent font-bold">{currentAccent.name}</span>
              <br />
              <span className="text-ink-3">{currentAccent.description}</span>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="mt-3 w-full wf-btn wf-btn-sm wf-btn-ghost text-sm"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
