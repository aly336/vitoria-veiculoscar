'use client';
import { useEffect,useRef,useState } from 'react';
import { useMotionPreference } from './MotionProvider';
import { Icon } from './Icon';
export function VideoStage() {
 const video=useRef<HTMLVideoElement>(null);const {reduced,ready}=useMotionPreference();const [playing,setPlaying]=useState(false);const [failed,setFailed]=useState(false);const intended=useRef(true);const visible=useRef(true);
 useEffect(()=>{
  const v=video.current;if(!v||!ready)return;intended.current=!reduced;
  const sync=()=>{if(visible.current&&!document.hidden&&intended.current&&!reduced)v.play().catch(()=>setPlaying(false));else v.pause();};
  const observer=new IntersectionObserver(([entry])=>{visible.current=entry.isIntersecting;sync();},{threshold:.12});observer.observe(v);document.addEventListener('visibilitychange',sync);sync();
  const restart=()=>{v.currentTime=0;if(!reduced){intended.current=true;v.play().catch(()=>{});}};window.addEventListener('vv:replay',restart);
  return()=>{v.pause();observer.disconnect();document.removeEventListener('visibilitychange',sync);window.removeEventListener('vv:replay',restart);};
 },[ready,reduced]);
 async function toggle(){const v=video.current;if(!v)return;if(!v.paused){intended.current=false;v.pause();}else{intended.current=true;try{await v.play();setFailed(false);}catch{setFailed(true);}}}
 return <><div className="hero-media"><video ref={video} src={failed?undefined:'/media/film.mp4'} poster="/media/front-perspective-1680.webp" muted loop playsInline preload="none" aria-label="Filme conceitual do supercarro grafite em estúdio" onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)} onError={()=>setFailed(true)}/><div className="hero-vignette"/></div><div className="video-controls">{failed?<span role="status">Filme indisponível. Explore as fotografias.</span>:<button className="video-button" onClick={toggle} aria-label={playing?'Pausar filme':'Reproduzir filme'}><span className="video-symbol"><Icon name={playing?'pause':'play'}/></span><span>{playing?'Pausar filme':'Reproduzir filme'}</span></button>}</div></>;
}
