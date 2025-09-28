// src/theme/themes.js
export const themes = {
  clientA: {
    // friendly name
    name: 'Blue Corporate',
    // colors are CSS custom properties (keys include leading --)
    colors: {
      '--bg-page': '#ffffff',
      '--text-primary': '#0f172a',
      '--heading': '#0b1320',
      '--muted': '#6b7280',
      '--primary': '#0ea5e9',
      '--accent': '#ef4444',
      '--nav-bg': '#0f172a',
      '--nav-text': '#ffffff',
      '--nav-active': '#06b6d4',
      '--nav-muted': '#94a3b8',
      '--footer-bg': '#0f172a',
      '--footer-text': '#ffffff',
      '--card-border': 'rgba(15,23,42,0.08)',
      '--overlay': 'rgba(0,0,0,0.45)'
    },
    fonts: {
      '--font-base': 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
      '--font-heading': '"Times New Roman", serif'
    }
  },

  clientHR: {
  name: 'HR Consultancy',
  colors: {
    '--bg-page': '#ffffff',
    '--text-primary': '#1e293b',   // slate gray text
    '--heading': '#0b1320',        // deep navy headings
    '--muted': '#64748b',          // muted slate
    '--primary': '#1d4ed8',        // strong blue CTA
    '--accent': '#fbbf24',         // golden highlight
    '--nav-bg': '#0a2342',         // navy navbar
    '--nav-text': '#ffffff',       // white nav text
    '--nav-active': '#fbbf24',     // gold active link
    '--nav-muted': '#94a3b8',      // muted link gray
    '--footer-bg': '#0a2342',      // navy footer
    '--footer-text': '#ffffff',    // white footer text
    '--card-border': 'rgba(10,35,66,0.08)',
    '--overlay': 'rgba(0,0,0,0.45)'
  },
  fonts: {
    '--font-base': 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    '--font-heading': '"Times New Roman", serif'
  }
},

  dark: {
    name: 'Elegant Dark',
    colors: {
      '--bg-page': '#0b1220',
      '--text-primary': '#e6eef6',
      '--heading': '#ffffff',
      '--muted': '#9aa6b2',
      '--primary': '#7dd3fc',
      '--accent': '#f97316',
      '--nav-bg': '#071027',
      '--nav-text': '#e6eef6',
      '--nav-active': '#60a5fa',
      '--nav-muted': '#7f9bb0',
      '--footer-bg': '#071027',
      '--footer-text': '#e6eef6',
      '--card-border': 'rgba(226,238,246,0.06)',
      '--overlay': 'rgba(0,0,0,0.6)'
    },
    fonts: {
      '--font-base': 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
      '--font-heading': '"Times New Roman", serif'
    }
  }
};

export default themes;