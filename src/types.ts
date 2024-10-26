import { LucideIcon } from 'lucide-react';

export interface Technology {
  id: number;
  name: string;
  description: string;
  icon: LucideIcon;
  level: number;
  requirements: string[];
}