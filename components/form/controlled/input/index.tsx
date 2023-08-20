'use client';

import Column from '@/components/flex/column';
import { ChangeEvent, FunctionComponent } from 'react';
import { Control, Controller, FieldErrors, FieldValues } from 'react-hook-form';
import { Input } from '../../base/input';

type ColProps = 0 | 1 | 6 | 12 | 2 | 3 | 4 | 5 | 7 | 8 | 9 | 10 | 11 | null;

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fieldName: string;
  label?: string;
  control?: Control<any>;
  errors?: FieldErrors;
  info?: string;
  onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  xl?: ColProps;
  lg?: ColProps;
  md?: ColProps;
  sm?: ColProps;
  xs?: ColProps;
}

const FormInput: FunctionComponent<FormInputProps> = ({
  fieldName,
  label,
  control,
  errors,
  info,
  onInputChange,
  xl = 12,
  lg = 12,
  md = 12,
  sm = 12,
  xs = 12,
  ...props
}) => {
  const error = errors
    ? errors[fieldName as keyof typeof errors]?.message?.toString()
    : undefined;

  return (
    <Column xl={xl} lg={lg} md={md} sm={sm} xs={xs}>
      <Controller
        name={fieldName}
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Input
            name={fieldName}
            label={label}
            value={value}
            error={error}
            info={info}
            onChange={(e) => {
              if (onInputChange) onInputChange(e);
              onChange(e);
            }}
            onBlur={onBlur}
            ref={ref}
            {...props}
          />
        )}
      />
    </Column>
  );
};

export default FormInput;
