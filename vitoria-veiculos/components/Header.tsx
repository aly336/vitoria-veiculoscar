'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useMotionPreference } from './MotionProvider';
import { Icon } from './Icon';
export function Brand() { return <span className="brand"><svg viewBox="0 0 42 36" aria-hidden="true"><path d="M2 4h8l11 21L32 4h8L21 36Z" fill="currentColor"/><path d="m16 4 5 10 5-10" fill="none" stroke="currentColor" strokeWidth="2"/></svg><span>VITÓRIA<small>VEÍCULOS</small></span></span>; }
export function Header() {
 const pathname = usePathname(); const [open,setOpen] = useState(false); const button = useRef<HTMLButtonElement>(null); const nav = useRef<HTMLElement>(null); const {reduced,toggle} = useMotionPreference();
 useEffect(() => { setOpen(false); }, [pathname]);
 useEffect(() => {
  if (!open) return;
  const previous = document.body.style.overflow; document.body.style.overflow = 'hidden'; nav.current?.querySelector<HTMLAnchorElement>('a')?.focus();
  const close = (e: KeyboardEvent) => {
   if (e.key === 'Escape') { setOpen(false); button.current?.focus(); }
   if (e.key === 'Tab') { const links = Array.from(nav.current?.querySelectorAll<HTMLElement>('a,button') || []); const items = [button.current!, ...links]; const first=items[0], last=items[items.length-1]; if(e.shiftKey && document.activeElement===first){e.preventDefault();last.focus();} else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus();} }
  }; document.addEventListener('keydown',close); return () => { document.body.style.overflow = previous; document.removeEventListener('keydown',close); };
 }, [open]);
 const links=[['/','Experiência'],['/veiculos/','Veículos'],['/sobre/','Sobre'],['/contato/','Contato']];
 return <><a className="skip-link" href="#conteudo">Ir para o conteúdo</a><header className={'site-header ' + (pathname==='/'?'over-hero':'solid')}><Link href="/" aria-label="Vitória Veículos — início"><Brand/></Link><button ref={button} className="menu-toggle icon-button" aria-expanded={open} aria-controls="navigation" aria-label={open?'Fechar menu':'Abrir menu'} onClick={()=>setOpen(!open)}><Icon name={open?'close':'menu'}/></button><nav ref={nav} id="navigation" aria-label="Navegação principal" className={open?'is-open':''}>{links.map(([href,label])=><Link key={href} href={href} aria-current={pathname===href?'page':undefined} onClick={()=>setOpen(false)}>{label}</Link>)}<button className="motion-switch" aria-pressed={reduced} onClick={toggle}><span aria-hidden="true" className={'motion-dot '+(reduced?'off':'')}/>{reduced?'Movimento reduzido':'Modo cinema'}</button></nav></header></>;
}
