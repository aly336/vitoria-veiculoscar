export type Vehicle = { slug: string; brand: string; model: string; version: string; year: number; category: 'SUV' | 'Sedã' | 'Hatch' | 'Picape' | 'Esportivo'; images: string[]; available: boolean; price?: number; mileage?: number; description?: string };
// Adicione apenas veículos e informações confirmadas pela Vitória Veículos.
export const vehicles: Vehicle[] = [];
export function filterVehicles(items: Vehicle[], query: string, category: string, availableOnly: boolean) {
 const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
 const search = normalize(query.trim());
 return items.filter(v => (!search || normalize(v.brand + ' ' + v.model + ' ' + v.version).includes(search)) && (!category || v.category === category) && (!availableOnly || v.available));
}
