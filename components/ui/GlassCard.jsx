/** @format */

import { cn } from '@/lib/utils';

const toneClasses = {
  light: 'border-white/50 bg-glass-light text-ink-950',
  dark: 'border-white/10 bg-black text-warm-white',
};

const blurClasses = {
  soft: 'backdrop-blur-md',
  strong: 'backdrop-blur-xl',
};

export default function GlassCard({
  as: Tag = 'div',
  tone = 'light',
  blur = 'soft',
  hover = false,
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn(
        'rounded-3xl border shadow-glass-sm',
        toneClasses[tone],
        blurClasses[blur],
        hover &&
          'transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-white/70 hover:shadow-glass-lg',
        className,
      )}
      {...props}>
      {children}
    </Tag>
  );
}
