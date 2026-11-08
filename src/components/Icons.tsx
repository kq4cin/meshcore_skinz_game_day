import type { SVGProps } from 'react';
import type { WeatherIcon as WeatherKind } from '../lib/weather';

type P = SVGProps<SVGSVGElement>;
const base = (p: P): P => ({ viewBox: '0 0 48 48', 'aria-hidden': true, focusable: false, ...p });

const Star = ({ x, y, r = 3, fill = 'var(--orange)' }: { x: number; y: number; r?: number; fill?: string }) => {
  const pts = Array.from({ length: 10 }, (_, i) => {
    const a = (Math.PI / 5) * i - Math.PI / 2;
    const rr = i % 2 ? r * 0.45 : r;
    return `${(x + rr * Math.cos(a)).toFixed(2)},${(y + rr * Math.sin(a)).toFixed(2)}`;
  }).join(' ');
  return <polygon points={pts} fill={fill} />;
};

/** Game Day crest: the pack's megaphone badge — orange disc, charcoal rim, white megaphone with sound lines. */
export function Crest(p: P) {
  return (
    <svg viewBox="0 0 120 100" aria-hidden focusable={false} {...p}>
      <circle cx="60" cy="50" r="47" fill="var(--char)" stroke="var(--ink)" strokeWidth="3" />
      <circle cx="60" cy="50" r="38" fill="var(--orange)" stroke="var(--ink)" strokeWidth="2.5" />
      <g stroke="var(--ink)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M44 58 L48 72 L56 70 L53 58 Z" fill="var(--char-2)" />
        <rect x="34" y="42" width="14" height="18" rx="3" fill="var(--char-2)" />
        <path d="M48 44 L74 30 V72 L48 58 Z" fill="var(--white)" />
        <ellipse cx="74" cy="51" rx="5" ry="21" fill="var(--white)" />
        <path d="M84 36 L90 30 M86 51 H95 M84 66 L90 72" fill="none" stroke="var(--white)" strokeWidth="3.5" />
      </g>
    </svg>
  );
}

export function MessagesIcon(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M5 6 H31 A3 3 0 0 1 34 9 V25 A3 3 0 0 1 31 28 H16 L8 35 V28 H5 A3 3 0 0 1 2 25 V9 A3 3 0 0 1 5 6 Z" fill="var(--white)" stroke="var(--ink)" strokeWidth="2.5" />
      <rect x="8" y="12" width="20" height="3.2" rx="1.6" fill="var(--orange)" />
      <rect x="8" y="19" width="13" height="3.2" rx="1.6" fill="var(--char-2)" />
      <path d="M22 21 H43 A3 3 0 0 1 46 24 V36 A3 3 0 0 1 43 39 H40 V45 L33 39 H22 A3 3 0 0 1 19 36 V24 A3 3 0 0 1 22 21 Z" fill="var(--char-2)" stroke="var(--ink)" strokeWidth="2.5" />
      <path d="M25 28 H29 L38 24 V38 L29 34 H25 Z" fill="var(--orange)" stroke="var(--ink)" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M40 27 L42.5 25.5 M40.5 31 H43 M40 35 L42.5 36.5" stroke="var(--white)" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** Contacts: the crowd with a pennant from the pack's community icon. */
export function NetworkIcon(p: P) {
  return (
    <svg {...base(p)}>
      <circle cx="12" cy="13" r="5" fill="var(--smoke)" stroke="var(--ink)" strokeWidth="1.5" />
      <circle cx="36" cy="13" r="5" fill="var(--smoke)" stroke="var(--ink)" strokeWidth="1.5" />
      <path d="M2 32 a10 10 0 0 1 20 0 Z M26 32 a10 10 0 0 1 20 0 Z" fill="var(--smoke)" stroke="var(--ink)" strokeWidth="1.5" />
      <circle cx="24" cy="15" r="6.5" fill="var(--white)" stroke="var(--ink)" strokeWidth="2" />
      <path d="M11 40 a13 13 0 0 1 26 0 Z" fill="var(--white)" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
      <line x1="24" y1="27" x2="24" y2="47" stroke="var(--char)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 28 L46 35 L24 42 Z" fill="var(--orange)" stroke="var(--ink)" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M24 31 L30 33 V37 L24 39 Z M36 34.5 V36.5 L42 35 Z" fill="var(--white)" />
    </svg>
  );
}

export function MapIcon(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M6 12l12-5 12 5 12-5v29l-12 5-12-5-12 5z" fill="var(--char-2)" stroke="var(--white)" strokeWidth="2.5" strokeLinejoin="round" />
      <line x1="18" y1="7" x2="18" y2="36" stroke="var(--white)" strokeWidth="2" strokeDasharray="3 2.5" />
      <line x1="30" y1="12" x2="30" y2="41" stroke="var(--white)" strokeWidth="2" strokeDasharray="3 2.5" />
      <path d="M24 33 C19 27 17 23.5 17 20.5 A7 7 0 0 1 31 20.5 C31 23.5 29 27 24 33 Z" fill="var(--orange)" stroke="var(--ink)" strokeWidth="1.8" />
      <circle cx="24" cy="20.5" r="2.6" fill="var(--white)" />
    </svg>
  );
}

/** Settings: the pack's gear + cloud + database tile. */
export function SettingsIcon(p: P) {
  const teeth = Array.from({ length: 8 }, (_, i) => (
    <rect key={i} x="13" y="2" width="5" height="6" rx="1" fill="var(--orange)" transform={`rotate(${i * 45} 15.5 15.5)`} />
  ));
  return (
    <svg {...base(p)}>
      {teeth}
      <circle cx="15.5" cy="15.5" r="9" fill="var(--orange)" stroke="var(--ink)" strokeWidth="1.5" />
      <circle cx="15.5" cy="15.5" r="3.5" fill="var(--char)" />
      <path d="M17 27 A7 7 0 0 1 20 14 A10 10 0 0 1 39 16 A6.5 6.5 0 0 1 40 27 Z" fill="var(--white)" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
      <g stroke="var(--ink)" strokeWidth="1.8">
        <path d="M20 29 V43 A9 3.5 0 0 0 38 43 V29" fill="var(--char-2)" />
        <path d="M20 34 A9 3.5 0 0 0 38 34 M20 38.5 A9 3.5 0 0 0 38 38.5" fill="none" stroke="var(--white)" strokeWidth="1.6" />
        <ellipse cx="29" cy="29" rx="9" ry="3.5" fill="var(--smoke)" />
      </g>
    </svg>
  );
}

export function WeatherTabIcon(p: P) {
  return (
    <svg {...base(p)}>
      <circle cx="17" cy="17" r="9" fill="var(--orange)" stroke="var(--ink)" strokeWidth="1.5" />
      <path d="M14 40 A9 9 0 0 1 15 22 A12 12 0 0 1 37 24 A8 8 0 0 1 38 40 Z" fill="var(--white)" stroke="var(--ink)" strokeWidth="2.5" />
      <path d="M17 30 H27 A5 5 0 1 1 22 36 H17 Z" fill="var(--orange)" stroke="var(--ink)" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="27" cy="34" r="1.6" fill="var(--ink)" />
    </svg>
  );
}

export function WeatherGlyph({ kind, ...p }: P & { kind: WeatherKind }) {
  const cloud = <path d="M12 38 A8 8 0 0 1 13 22 A11 11 0 0 1 34 23 A7.5 7.5 0 0 1 35 38 Z" fill="var(--white)" stroke="var(--ink)" strokeWidth="1.8" strokeLinejoin="round" />;
  const sun = (r = 9, cx = 24, cy = 22) => (
    <g>
      {Array.from({ length: 8 }, (_, i) => (
        <rect key={i} x={cx - 1.5} y={cy - r - 7} width="3" height="5" rx="1.5" fill="var(--orange)" transform={`rotate(${i * 45} ${cx} ${cy})`} />
      ))}
      <circle cx={cx} cy={cy} r={r} fill="var(--orange)" stroke="var(--ink)" strokeWidth="1.5" />
    </g>
  );
  const drops = (color: string) => [14, 22, 30].map((x) => <line key={x} x1={x + 2} y1="40" x2={x} y2="46" stroke={color} strokeWidth="2.5" strokeLinecap="round" />);
  const body = {
    sun: sun(10),
    cloud: <>{sun(7, 32, 16)}{cloud}</>,
    rain: <>{cloud}{drops('#3d8fd6')}</>,
    storm: <>{cloud}<path d="M24 36 L18 46 H24 L21 52 L31 40 H25 L28 36 Z" fill="var(--orange)" stroke="var(--ink)" strokeWidth="1.2" strokeLinejoin="round" /></>,
    snow: <>{cloud}{[14, 22, 30].map((x) => <circle key={x} cx={x + 1} cy="44" r="2.2" fill="#fff" stroke="var(--ink)" strokeWidth="1" />)}</>,
    fog: <>{cloud}{[40, 45].map((y) => <line key={y} x1="10" y1={y} x2="38" y2={y} stroke="var(--smoke)" strokeWidth="2.5" strokeLinecap="round" />)}</>,
    wind: [16, 24, 32].map((y, i) => <path key={y} d={`M6 ${y} H${30 + i * 4} a5 5 0 1 0 -5 -5`} fill="none" stroke="var(--smoke)" strokeWidth="3" strokeLinecap="round" />),
    unknown: <>{cloud}<Star x={24} y={30} r={6} fill="var(--char-2)" /></>,
  }[kind];
  return <svg viewBox="0 0 48 52" aria-hidden focusable={false} {...p}>{body}</svg>;
}

export function StarGlyph(p: P) {
  return <svg viewBox="0 0 10 10" aria-hidden focusable={false} {...p}><Star x={5} y={5.4} r={5} fill="currentColor" /></svg>;
}

export const BackIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...p}><path d="M15 5 L8 12 L15 19" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export const SendIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...p}><path d="M3 11.5 L21 3 L14.5 21 L11.5 13 Z" fill="currentColor" /></svg>
);

export const BluetoothIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...p}><path d="M7 7 L17 16 L12 21 V3 L17 8 L7 17" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export const UsbIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...p}><path d="M12 2 V18 M12 18 m-2.5 0 a2.5 2.5 0 1 0 5 0 a2.5 2.5 0 1 0 -5 0 M12 13 L7 9 V6 M12 11 L17 8 V5 M5.5 4 H8.5 V7 H5.5 Z M17 3 l1.5 2.5 h-3 Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
);

export const RefreshIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...p}><path d="M20 11 A8 8 0 0 0 5.5 6.5 L4 8 M4 13 A8 8 0 0 0 18.5 17.5 L20 16 M4 3 V8 H9 M20 21 V16 H15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export const BroadcastIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...p}><circle cx="12" cy="12" r="2.5" fill="currentColor" /><path d="M7.8 7.8 a6 6 0 0 0 0 8.4 M16.2 7.8 a6 6 0 0 1 0 8.4 M4.9 4.9 a10 10 0 0 0 0 14.2 M19.1 4.9 a10 10 0 0 1 0 14.2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
);

export const ShareIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...p}><path d="M12 15 V3 M7 8 L12 3 L17 8 M5 13 V20 H19 V13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export const AddPersonIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...p}><circle cx="9" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="2.2" /><path d="M2 21 a7 7 0 0 1 14 0 M19 8 V14 M16 11 H22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
);
