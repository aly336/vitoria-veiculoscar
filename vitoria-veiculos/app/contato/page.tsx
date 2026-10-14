import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { business,whatsappHref } from '@/data/business';
export const metadata:Metadata={title:'Contato',description:'Fale com a Vitória Veículos pelo WhatsApp (31) 93911-5170. Retiro, Contagem — MG.'};
export default function Contact(){return <main id="conteudo" className="inner-page chapter contact-page"><div className="contact-intro"><p className="eyebrow">VAMOS CONVERSAR</p><h1>SUA PRÓXIMA<br/>CONQUISTA<br/>COMEÇA AQUI.</h1><p>Escolher um carro começa<br/>com uma boa conversa.</p><address><span>WhatsApp</span><a href={whatsappHref('Olá, Vitória Veículos! Gostaria de falar com o atendimento.')} target="_blank" rel="noopener noreferrer">{business.phoneDisplay}</a><span>Onde estamos</span><p>{business.address}</p></address><a className="text-button" href="tel:+5531939115170">Ligar para a Vitória Veículos →</a></div><ContactForm/></main>;}
