'use client';

import { cn } from '@/lib/utils';
import { forwardRef, useState } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import Label from '../label';
import { FormField, FormFieldRoot, FormInput } from '../styles';
import SupportText from '../support-text';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
  info?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, className, type, error, info, ...props }, ref) => {
    return (
      <div className={cn(FormFieldRoot)}>
        <Label htmlFor={name} label={label} />
        <div className={cn(FormField)} data-error={error ? true : false}>
          <input
            name={name}
            id={name}
            type={type}
            className={cn(FormInput)}
            ref={ref}
            {...props}
          />
        </div>
        <SupportText
          variant={error ? 'danger' : 'info'}
          errorText={error}
          infoText={info}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
