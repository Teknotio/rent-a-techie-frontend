// Reusable Wireframe Components Library
import React from 'react';

// Arrow component for directional indicators
export function Arrow({
  direction = 'right',
  className = ''
}: {
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}) {
  const arrows = {
    up: '↑',
    down: '↓',
    left: '←',
    right: '→'
  };

  return (
    <span className={`inline-block text-accent text-2xl ${className}`}>
      {arrows[direction]}
    </span>
  );
}

// Annotation component for margin notes
export function Anno({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`wf-mono text-xs text-ink-3 italic transform rotate-2 ${className}`}>
      {children}
    </div>
  );
}

// Divider component
export function Divider({
  variant = 'solid',
  className = ''
}: {
  variant?: 'solid' | 'dotted';
  className?: string;
}) {
  return (
    <div className={`wf-div ${variant === 'dotted' ? 'wf-div-dotted' : ''} ${className}`} />
  );
}

// Section Label component
export function SectionLabel({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`wf-seclabel ${className}`}>
      {children}
    </div>
  );
}

// Image Placeholder component
export function ImagePlaceholder({
  width = '100%',
  height = '300px',
  label = 'IMAGE',
  className = ''
}: {
  width?: string;
  height?: string;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`wf-imgph ${className}`}
      style={{ width, height }}
    >
      {label}
    </div>
  );
}

// Box component with variants
export function Box({
  children,
  variant = 'default',
  tilt = 'none',
  className = ''
}: {
  children: React.ReactNode;
  variant?: 'default' | 'dashed' | 'thin' | 'thick' | 'fill' | 'accent' | 'soft';
  tilt?: 'none' | 'left' | 'right';
  className?: string;
}) {
  const variantClasses = {
    default: '',
    dashed: 'wf-box-dashed',
    thin: 'wf-box-thin',
    thick: 'wf-box-thick',
    fill: 'wf-box-fill',
    accent: 'wf-box-accent',
    soft: 'wf-box-soft'
  };

  const tiltClasses = {
    none: '',
    left: 'wf-box-tilt-l',
    right: 'wf-box-tilt-r'
  };

  return (
    <div className={`wf-box ${variantClasses[variant]} ${tiltClasses[tilt]} ${className}`}>
      {children}
    </div>
  );
}

// Pill component
export function Pill({
  children,
  accent = false,
  className = ''
}: {
  children: React.ReactNode;
  accent?: boolean;
  className?: string;
}) {
  return (
    <span className={`wf-pill ${accent ? 'wf-pill-accent' : ''} ${className}`}>
      {children}
    </span>
  );
}

// Sticky Note component
export function Note({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`wf-note ${className}`}>
      {children}
    </div>
  );
}

// Button component
export function Button({
  children,
  variant = 'default',
  size = 'default',
  href,
  onClick,
  className = ''
}: {
  children: React.ReactNode;
  variant?: 'default' | 'ghost';
  size?: 'default' | 'sm';
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  const classes = `wf-btn ${variant === 'ghost' ? 'wf-btn-ghost' : ''} ${size === 'sm' ? 'wf-btn-sm' : ''} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

// Wavy underline component
export function Wavy({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`wf-wavy ${className}`}>
      {children}
    </span>
  );
}

// Highlight component
export function Highlight({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`wf-hl ${className}`}>
      {children}
    </span>
  );
}
