import { FunctionComponent } from 'react';
import * as RLabel from '@radix-ui/react-label';

interface LabelProps {
  label?: string;
  htmlFor: string;
}

const Label: FunctionComponent<LabelProps> = ({ label, htmlFor }) => {
  if (!label) return null;
  return (
    <RLabel.Root htmlFor={htmlFor} className="text-sm text-primary-500">
      {label}
    </RLabel.Root>
  );
};

export default Label;
