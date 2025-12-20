/**
 * Test component to verify TypeScript path aliases
 */
import type { BaseComponentProps } from '@/types';

export default function TestComponent({ className, children }: BaseComponentProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
