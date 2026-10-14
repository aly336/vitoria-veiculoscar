'use client';
import Link from 'next/link';
import { useRef, type ReactNode } from 'react';
import { useMotionPreference } from './MotionProvider';
export function MagneticLink({href,children,secondary=false}: {href:string;children:ReactNode;secondary?:boolean}) {
 const ref=useRef<HTMLAnchorElement>(null);const {reduced}=useMotionPreference();
 return <Link ref={ref} href={href} className={'button '+(secondary?'button-ghost':'button-primary')} onPointerMove={e=>{if(reduced||e.pointerType!=='mouse')return; const r=e.currentTarget.getBoundingClientRect(); e.currentTarget.style.transform='translate('+((e.clientX-r.left-r.width/2)*.045)+'px,'+((e.clientY-r.top-r.height/2)*.09)+'px)';}} onPointerLeave={()=>{if(ref.current)ref.current.style.transform='';}} onBlur={()=>{if(ref.current)ref.current.style.transform='';}}>{children}</Link>;
}
