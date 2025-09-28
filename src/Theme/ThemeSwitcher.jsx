// src/components/ThemeSwitcher.jsx
import React from 'react';
import themes from './themes';

export default function ThemeSwitcher({ className = '' }) {
  const { themeKey, switchTheme } = useTheme();

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <label className="text-sm">Theme</label>
      <select
        value={themeKey}
        onChange={(e) => switchTheme(e.target.value)}
        className="px-2 py-1 border rounded"
      >
        {Object.keys(themes).map((k) => (
          <option key={k} value={k}>
            {themes[k].name}
          </option>
        ))}
      </select>
    </div>
  );
}