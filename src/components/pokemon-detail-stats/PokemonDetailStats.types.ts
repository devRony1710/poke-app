export interface InfoWrapperProps {
  value?: string;
  statsLabel: string;
  icon?: string;
  hasBorder?: 'right' | 'left' | 'none';
  customChildren?: React.ReactNode;
}
