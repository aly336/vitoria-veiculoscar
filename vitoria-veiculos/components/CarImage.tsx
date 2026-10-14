import { media, type AngleId } from '@/data/angles';
export function CarImage({id,alt,className='',priority=false}: {id:AngleId;alt:string;className?:string;priority?:boolean}) {
 return <img className={className} src={media(id)} srcSet={media(id,800)+' 800w, '+media(id)+' 1680w'} sizes="(max-width: 767px) 100vw, 100vw" width={id==='front-perspective'?1536:1680} height={id==='front-perspective'?1024:945} alt={alt} loading={priority?'eager':'lazy'} fetchPriority={priority?'high':'auto'} decoding="async"/>;
}
