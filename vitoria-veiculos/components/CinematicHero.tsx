'use client';
import { useEffect,useState } from 'react';
import { VideoStage } from './VideoStage';
import { MagneticLink } from './MagneticLink';
import { Icon } from './Icon';
import { useMotionPreference } from './MotionProvider';
export function CinematicHero() {
 const {reduced,ready}=useMotionPreference();const [prelude,setPrelude]=useState(false);
 useEffect(()=>{if(!ready||reduced)return;let seen=false;try{seen=sessionStorage.getItem('vv-prelude')==='seen';sessionStorage.setItem('vv-prelude','seen');}catch{}if(seen)return;setPrelude(true);const timer=setTimeout(()=>setPrelude(false),2500);return()=>clearTimeout(timer);},[ready,reduced]);
 useEffect(()=>{const replay=()=>{if(!reduced){setPrelude(true);setTimeout(()=>setPrelude(false),2500);}};window.addEventListener('vv:replay',replay);return()=>window.removeEventListener('vv:replay',replay);},[reduced]);
 return <section className="hero" aria-labelledby="hero-title" id="inicio"><div className="hero-stage"><VideoStage/><div className="hero-content"><p className="eyebrow hero-kicker"><span className="small-line"/> THE MACHINE IS THE MASTERPIECE</p><h1 id="hero-title"><span>A VELOCIDADE TEM</span><span>UMA NOVA</span><span>PERSPECTIVA.</span></h1><p className="hero-description">Design que impressiona.<br/>Presença que transforma.</p><div className="hero-actions"><MagneticLink href="#showroom">Explorar a experiência <Icon name="arrow"/></MagneticLink><MagneticLink href="/veiculos/" secondary>Conhecer os veículos <Icon name="arrow"/></MagneticLink></div></div><div className="hero-bottom"><a href="#revelacao" className="scroll-cue"><span className="scroll-stem"/> Role para revelar</a><span className="concept-label">FILME CONCEITUAL · VEÍCULO ILUSTRATIVO</span></div><div className="hero-index" aria-hidden="true">01<span>/ 08</span></div>{prelude&&!reduced&&<div className="prelude" aria-hidden="true"><div className="prelude-line"/><p>NÃO É APENAS UM CARRO.<br/><strong>É UMA DECLARAÇÃO.</strong></p></div>}</div></section>;
}
