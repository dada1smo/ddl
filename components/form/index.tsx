'use client';

import {
  Children,
  FormEventHandler,
  FunctionComponent,
  ReactNode,
} from 'react';
import { Control, FieldErrors } from 'react-hook-form';
import Row from '../flex/row';

interface FormProps {
  children: ReactNode;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  control: Control<Object, any>;
  errors: FieldErrors;
  noValidate?: boolean;
}

const Form: FunctionComponent<FormProps> = ({
  handleSubmit,
  control,
  errors,
  noValidate = true,
  children,
}) => {
  const formChildren = Children.toArray(children).map((child) => {
    if (typeof child !== 'object') {
      return child;
    }

    if ('props' in child) {
      if ('fieldName' in child.props) {
        return {
          ...child,
          props: { ...child.props, control: control, errors: errors },
        };
      }
    }

    return child;
  });

  return (
    <form noValidate={noValidate} onSubmit={handleSubmit}>
      <Row>
        {formChildren.map((child) => {
          return child;
        })}
      </Row>
    </form>
  );
};

export default Form;
