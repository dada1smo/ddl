import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ElementType, FunctionComponent, ReactNode } from 'react';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-4xl font-bold lg:text-5xl font-archivo',
      p: 'leading-7 [&:not(:first-child)]:mt-6',
    },
    align: {
      center: 'text-center',
      right: 'text-right',
      left: 'text-left',
    },
  },
  defaultVariants: {
    variant: 'p',
    align: 'left',
  },
});

interface TypographyProps extends VariantProps<typeof typographyVariants> {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  children: ReactNode;
  className?: string;
}

const Typography: FunctionComponent<TypographyProps> = ({
  as: Tag = 'p',
  variant,
  align,
  children,
  className,
}) => {
  return (
    <Tag className={cn(typographyVariants({ variant, align, className }))}>
      {children}
    </Tag>
  );
};

export default Typography;
