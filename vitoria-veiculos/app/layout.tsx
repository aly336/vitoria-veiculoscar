import type { Metadata,Viewport } from 'next';
import './globals.css';
import { MotionProvider } from '@/components/MotionProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
export const metadata:Metadata={title:{default:'Vitória Veículos | Uma nova perspectiva',template:'%s | Vitória Veículos'},description:'Explore uma experiência automotiva cinematográfica e encontre seu próximo carro com a Vitória Veículos, em Retiro, Contagem — MG.',openGraph:{title:'Vitória Veículos — Uma nova perspectiva',description:'Design que impressiona. Presença que transforma.',locale:'pt_BR',type:'website',images:[{url:'/media/front-perspective-1680.webp',width:1536,height:1024,alt:'Supercarro conceitual grafite em estúdio'}]},robots:{index:true,follow:true},icons:{icon:'/icon.svg'}};
export const viewport:Viewport={width:'device-width',initialScale:1,themeColor:'#000000'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><head><link rel="preload" href="/fonts/barlow-condensed-700.ttf" as="font" type="font/ttf" crossOrigin="anonymous"/><link rel="preload" href="/fonts/geist-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/></head><body><MotionProvider><Header/>{children}<Footer/></MotionProvider></body></html>;}
