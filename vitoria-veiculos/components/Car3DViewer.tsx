import type { ReactNode } from 'react';
export type CameraPose = { position: [number,number,number]; target: [number,number,number]; fov: number };
export type CarModelAdapter = { modelUrl: string; initialPose: CameraPose; render: (mode: 'interactive' | 'scroll') => ReactNode };
/** Extension boundary: an actual model adapter must supply geometry and functional controls.
 * No placeholder mesh or static photo is labelled as a completed 3D viewer. */
export function Car3DViewer({adapter,fallback}:{adapter?:CarModelAdapter;fallback:ReactNode}){
 return adapter ? adapter.render('interactive') : fallback;
}
