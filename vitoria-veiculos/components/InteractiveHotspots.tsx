'use client';
import { useState, type CSSProperties } from 'react';
import { type Hotspot } from '@/data/angles';
import { Icon } from './Icon';
export function InteractiveHotspots({points,prefix='details'}:{points:Hotspot[];prefix?:string}){
 const [selected,setSelected]=useState<number|null>(null);
 return <><div className="hotspots">{points.map((point,i)=><button key={point.label} className={'hotspot '+(selected===i?'active':'')} style={{left:point.x+'%',top:point.y+'%'} as CSSProperties} aria-label={'Explorar '+point.label} aria-expanded={selected===i} aria-controls={prefix+'-description'} onClick={()=>setSelected(selected===i?null:i)}><Icon name={selected===i?'minus':'plus'}/></button>)}</div><div id={prefix+'-description'} className={'hotspot-description '+(selected!==null?'is-visible':'')} aria-live="polite">{selected!==null&&<><span className="eyebrow">OLHAR DE PERTO</span><h3>{points[selected].label}</h3><p>{points[selected].description}</p><button className="text-button" onClick={()=>setSelected(null)}>Fechar detalhe <Icon name="close"/></button></>}</div></>;
}
