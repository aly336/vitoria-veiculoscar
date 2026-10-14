export function Icon({name, className = ''}: {name: 'arrow' | 'pause' | 'play' | 'plus' | 'minus' | 'reset' | 'close' | 'menu' | 'chevron'; className?: string}) {
 const paths = {arrow:'M4 12h16M13 5l7 7-7 7',pause:'M9 5v14M15 5v14',play:'m8 5 11 7-11 7Z',plus:'M12 5v14M5 12h14',minus:'M5 12h14',reset:'M4 10a8 8 0 1 1 1 8M4 4v6h6',close:'m6 6 12 12M6 18 18 6',menu:'M4 8h16M4 16h16',chevron:'m9 5 7 7-7 7'};
 return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true"><path d={paths[name]}/></svg>;
}
