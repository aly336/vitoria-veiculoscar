import type { Metadata } from 'next';
import { VehicleCatalog } from '@/components/VehicleCatalog';
export const metadata:Metadata={title:'Veículos',description:'Busque por categoria e consulte a disponibilidade de veículos com a Vitória Veículos em Contagem.'};
export default function VehiclesPage(){return <main id="conteudo" className="inner-page chapter"><div className="page-intro"><p className="eyebrow">VITÓRIA VEÍCULOS / COLEÇÃO</p><h1>SEU PRÓXIMO<br/>CARRO. SUA<br/>PRÓXIMA HISTÓRIA.</h1><p>Todos os tipos. Uma escolha que é sua.<br/>Explore as categorias e consulte o atendimento.</p></div><VehicleCatalog/></main>;}
