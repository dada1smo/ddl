import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { FunctionComponent } from 'react';

const supportTextVariants = cva('text-xs px-2', {
  variants: {
    variant: {
      info: 'text-primary-500',
      danger: 'text-danger-500',
    },
    defaultVariants: {
      variant: 'danger',
    },
  },
});

interface SupportTextProps extends VariantProps<typeof supportTextVariants> {
  infoText?: string;
  errorText?: string;
}

const SupportText: FunctionComponent<SupportTextProps> = ({
  variant,
  infoText,
  errorText,
}) => {
  if (errorText) {
    return (
      <div className={cn(supportTextVariants({ variant }))}>{errorText}</div>
    );
  }

  if (infoText) {
    return (
      <div className={cn(supportTextVariants({ variant }))}>{infoText}</div>
    );
  }

  return null;
};

export default SupportText;
