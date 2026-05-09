'use client';
import React from 'react';

interface Photo {
  key: string;
  src: string;
}

export function TweaksPanel({ editMode, photoKey, onPhotoChange, photos }: { editMode: boolean, photoKey: string, onPhotoChange: (key: string) => void, photos: Photo[] }) {
  if (!editMode) return null;
  return (
    <div className="tweaks">
      <div className="tweaks-head mono">Tweaks · Hero photo</div>
      <div className="tweaks-grid">
        {photos.map(p => (
          <button key={p.key}
                  className={`tweaks-swatch ${photoKey === p.key ? 'is-on' : ''}`}
                  onClick={() => onPhotoChange(p.key)}>
            <span className="tweaks-sw-img" style={{backgroundImage:`url(${p.src})`}} />
            <span className="mono tweaks-sw-label">{p.key}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
