import { CinematicHero } from '@/components/CinematicHero';
import { ScrollStorytelling,Manifesto } from '@/components/ScrollStorytelling';
import { CarAngleExplorer } from '@/components/CarAngleExplorer';
import { Car3DViewer } from '@/components/Car3DViewer';
import { HorizontalGallery } from '@/components/HorizontalGallery';
import { CollectionSection } from '@/components/CollectionSection';
import { CinematicFooter } from '@/components/CinematicFooter';
import { ScrollController } from '@/components/ScrollController';
import { ContextCursor } from '@/components/ContextCursor';
export default function Home(){return <main id="conteudo"><ScrollController><CinematicHero/><ScrollStorytelling/><Car3DViewer fallback={<CarAngleExplorer/>}/><Manifesto/><HorizontalGallery/><CollectionSection/><CinematicFooter/></ScrollController><ContextCursor/></main>;}
