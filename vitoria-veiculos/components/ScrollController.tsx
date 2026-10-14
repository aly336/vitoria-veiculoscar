'use client';
import { useEffect,useRef,type ReactNode } from 'react';
import { useMotionPreference } from './MotionProvider';
export function ScrollController({children}:{children:ReactNode}){
 const root=useRef<HTMLDivElement>(null);const {reduced,ready}=useMotionPreference();
 useEffect(()=>{if(!ready||reduced||!root.current)return;let active=true;let dispose:(()=>void)|undefined;import('@/lib/motion').then(({createCinematicMotion})=>{if(active&&root.current)dispose=createCinematicMotion(root.current);});return()=>{active=false;dispose?.();};},[reduced,ready]);
 return <div ref={root} className="cinematic-root">{children}</div>;
}
