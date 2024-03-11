'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@nextui-org/react';

interface FormButtonProps {
  children: React.ReactNode;
}

export default function FormButton({ children }: FormButtonProps) {
  const { pending } = useFormStatus();
  // checks the first parent form of parent and returns the stata of that form

  return (
    <Button type='submit' isLoading={pending}>
      {children}
    </Button>
  );
}
