'use client';
import Link from 'next/link';
import { CarImage } from './CarImage';
import { angles } from '@/data/angles';
import { Icon } from './Icon';
export function CinematicFooter(){return <section className="final-act chapter" aria-labelledby="final-title"><p className="eyebrow">08 / MAKE YOUR MOVE</p><h2 id="final-title" className="final-lines"><span>NÃO ESPERE PELO EXTRAORDINÁRIO.</span><span>APROXIME-SE DELE.</span><span>VIVA SUA PRÓXIMA CONQUISTA.</span></h2><div className="final-image"><CarImage id="front" alt={angles[4].alt}/></div><div className="final-signature"><span className="signature">VITÓRIA VEÍCULOS</span><Link href="/veiculos/" className="button button-primary">Encontre seu próximo carro <Icon name="arrow"/></Link><button className="text-button replay-button" onClick={()=>{window.scrollTo({top:0,behavior:'instant'});window.dispatchEvent(new Event('vv:replay'));}}>Reiniciar experiência <Icon name="reset"/></button></div></section>;}
