import { zodCustom } from '@/lib/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

interface CustomHookProps {
  validationSchema: zodCustom.ZodObject<
    any,
    zodCustom.UnknownKeysParam,
    zodCustom.ZodTypeAny,
    {
      [x: string]: any;
    },
    {
      [x: string]: any;
    }
  >;
  defaultValues: Object;
}

export default function useCustomHook<T>({
  validationSchema,
  defaultValues,
}: CustomHookProps) {
  const {
    control,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors },
  } = useForm({ resolver: zodResolver(validationSchema), defaultValues });

  return {
    control,
    handleSubmit,
    trigger,
    setValue,
    errors,
  };
}
