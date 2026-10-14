import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export const entrances = { up: {y:32}, down:{y:-24}, left:{x:-32}, right:{x:32}, scale:{scale:.96}, blur:{filter:'blur(6px)',y:12} };
export function createCinematicMotion(root: HTMLElement) {
 const match = gsap.matchMedia();
 const cleanups: Array<() => void> = [];
 const context = gsap.context(() => {
  gsap.from('.hero-content h1 span', {y:28,opacity:0,clipPath:'inset(0 0 100% 0)',duration:1,stagger:.1,ease:'power3.out',delay:.15});
  gsap.utils.toArray<HTMLElement>('[data-reveal]',root).forEach(el=>{const variant=(el.dataset.reveal||'up') as keyof typeof entrances;gsap.from(el,{...entrances[variant],opacity:0,duration:.75,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 92%',toggleActions:'play none none reverse'}});});
  const reveal = root.querySelector('.reveal-scene');
  if(reveal){const tl=gsap.timeline({scrollTrigger:{trigger:reveal,start:'top 85%',end:'bottom 10%',scrub:true}});tl.fromTo('.reveal-car',{scale:.94,y:40},{scale:1.04,y:-32,ease:'none'},0).fromTo('.reveal-title-1',{x:-32},{x:24,ease:'none'},0).fromTo('.reveal-title-2',{x:48,opacity:.2},{x:0,opacity:1,ease:'none'},.25).fromTo('.technical-line',{scaleX:.2},{scaleX:1,ease:'none'},0);}
  const words=gsap.utils.toArray<HTMLElement>('.manifesto-word',root);if(words.length)gsap.fromTo(words,{backgroundSize:'0% 100%'},{backgroundSize:'100% 100%',stagger:.22,ease:'none',scrollTrigger:{trigger:'.manifesto-title',start:'top 78%',end:'bottom 45%',scrub:true}});
  const manifesto = root.querySelector('.manifesto-media');if(manifesto)gsap.fromTo(manifesto,{clipPath:'inset(12% 12% 12% 12%)'},{clipPath:'inset(0% 0% 0% 0%)',ease:'none',scrollTrigger:{trigger:manifesto,start:'top 95%',end:'top 20%',scrub:true}});
  gsap.from('.final-lines span',{opacity:.18,y:24,stagger:.3,ease:'none',scrollTrigger:{trigger:'.final-act',start:'top 75%',end:'top 5%',scrub:true}});
  match.add('(min-width: 900px)',()=>{
   gsap.timeline({scrollTrigger:{trigger:'.hero',pin:'.hero-stage',start:'top top',end:()=>'+='+Math.round(innerHeight*.65),scrub:true,invalidateOnRefresh:true}}).to('.hero-media',{scale:1.08,clipPath:'inset(3% 0% 3% 0%)',ease:'none'},0).to('.hero-content',{y:-70,opacity:.2,ease:'none'},0).to('.hero-bottom',{opacity:0,ease:'none'},0);
   gsap.timeline({scrollTrigger:{trigger:'.details-scene',pin:'.details-stage',start:'top top',end:()=>'+='+Math.round(innerHeight*.9),scrub:true,invalidateOnRefresh:true}}).to('.details-image-wrap',{scale:1.08,xPercent:-3,ease:'none'},0).fromTo('.detail-secondary',{y:48,opacity:.2},{y:0,opacity:1,ease:'none'},.2).fromTo('.detail-tertiary',{y:56,opacity:.15},{y:0,opacity:1,ease:'none'},.6);
   const windowEl=root.querySelector<HTMLElement>('.gallery-window');const track=root.querySelector<HTMLElement>('.gallery-track');if(windowEl&&track){let lastIndex=-1;const journey=()=>Math.max(0,track.scrollWidth-windowEl.clientWidth);const tween=gsap.to(track,{x:()=>-journey(),ease:'none',scrollTrigger:{id:'vv-gallery',trigger:'.gallery-scene',pin:'.gallery-stage',start:'top top',end:()=>'+='+journey(),scrub:true,invalidateOnRefresh:true,onUpdate:self=>{const index=Math.min(5,Math.round(self.progress*5));if(index!==lastIndex){lastIndex=index;window.dispatchEvent(new CustomEvent('vv:gallery-index',{detail:index}));}}}});const go=(e:Event)=>{const detail=(e as CustomEvent<{index:number;instant:boolean}>).detail;const st=tween.scrollTrigger;if(st)window.scrollTo({top:st.start+detail.index/5*(st.end-st.start),behavior:detail.instant?'instant':'smooth'});};window.addEventListener('vv:gallery-go',go);return()=>window.removeEventListener('vv:gallery-go',go);}
  });
 },root);
 const refresh=()=>ScrollTrigger.refresh();document.fonts.ready.then(refresh);window.addEventListener('load',refresh);cleanups.push(()=>window.removeEventListener('load',refresh));
 return()=>{cleanups.forEach(fn=>fn());match.revert();context.revert();};
}
