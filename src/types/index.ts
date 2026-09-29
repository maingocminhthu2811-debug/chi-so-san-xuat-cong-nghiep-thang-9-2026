export type LayoutId =
  | 'dashboard'
  | 'landing'
  | 'ecommerce'
  | 'mobile'
  | 'documentation'
  | 'portfolio'
  | 'bento';

export type DeviceViewport = 'fluid' | 'desktop' | 'laptop' | 'tablet' | 'mobile';

export type CanvasBackground = 'dots' | 'grid' | 'pure' | 'warm';

export type StudioTab = 'layouts' | 'elements' | 'icons';

export interface LayoutMeta {
  id: LayoutId;
  title: string;
  category: string;
  description: string;
  screens: string[];
  tags: string[];
  suggestedViewport: DeviceViewport;
}

export interface UIElementCategory {
  id: string;
  name: string;
  count: number;
}
