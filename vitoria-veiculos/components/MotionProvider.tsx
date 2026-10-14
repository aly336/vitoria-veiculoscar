'use client';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
const MotionContext = createContext({ reduced: true, ready: false, toggle: () => {} });
export const useMotionPreference = () => useContext(MotionContext);
export function MotionProvider({children}: {children: ReactNode}) {
 const [reduced, setReduced] = useState(true);
 const [ready, setReady] = useState(false);
 useEffect(() => {
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  const update = () => { let saved: string | null = null; try { saved = localStorage.getItem('vv-reduced-motion'); } catch {} setReduced(media.matches || saved === 'true'); setReady(true); };
  update(); media.addEventListener('change', update); return () => media.removeEventListener('change', update);
 }, []);
 useEffect(() => { document.documentElement.dataset.motion = reduced ? 'reduced' : 'full'; }, [reduced]);
 const toggle = () => setReduced(value => { try { localStorage.setItem('vv-reduced-motion', String(!value)); } catch {} return !value; });
 return <MotionContext.Provider value={{reduced,ready,toggle}}>{children}</MotionContext.Provider>;
}
