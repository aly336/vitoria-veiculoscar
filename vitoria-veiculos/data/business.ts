export const business = { name: 'Vitória Veículos', whatsapp: '5531939115170', phoneDisplay: '(31) 93911-5170', address: 'Retiro, Contagem - MG, 32050-480', email: null };
export function whatsappHref(message: string): string {
 return 'https://wa.me/' + business.whatsapp + '?text=' + encodeURIComponent(message);
}
