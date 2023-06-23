'use client';
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import TextField from '@/components/molecules/TextField/TextField';
import Button from '@/components/atoms/Button/Button';
import TextAreaField from '@/components/molecules/TextAreaField/TextAreaField';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { INITIAL_STATE, LINKEDIN_REGEX } from './lib';
import { formText as mockedFormText } from './mockedProps';
import es from '@/dictionaries/es';
import en from '@/dictionaries/en';
import { getLocalePartsFrom } from '@/i18n';
import { usePathname } from 'next/navigation';

interface ContactFormProps {
  page?: 'default' | 'awards' | 'careers';
  renderModal?: (open: boolean, closeModal: () => void) => JSX.Element;
}

const schema = z.object({
  name: z
    .string()
    .min(1, { message: 'Must be at least 1 character long' })
    .max(100, { message: 'Must be max 100 characters long' }),
  email: z.string().email(),
  message: z.string().min(1).max(350),
  linkedin: z.string().min(20).max(250).regex(new RegExp(LINKEDIN_REGEX, 'g')),
});

type FormData = z.infer<typeof schema>;

function Form({ renderModal, page = 'default' }: ContactFormProps) {
  const pathname = usePathname();
  const { lang } = getLocalePartsFrom({ pathname });
  const dictionary = lang === 'es' ? es : en;

  let innerSchema =
    page === 'awards'
      ? schema.omit({ message: true, linkedin: true })
      : page === 'careers'
      ? schema
      : schema.omit({ linkedin: true });

  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onTouched',
    shouldUseNativeValidation: false,
    resolver: zodResolver(innerSchema),
    defaultValues: INITIAL_STATE,
  });

  const onSubmit = async (data: FormData) => {
    try {
      // const response = await fetch('/api/contactss/', {
      // 	method: 'POST',
      // 	body: JSON.stringify(data),
      // });
      const response = { ok: true };
      if (response.ok) {
        onSuccesfullSubmit(response);
        setOpen(true);
      } else {
        setOpen(true);
      }
    } catch (error) {
      // TODO: manejo de errores
    }
  };

  const onSuccesfullSubmit = (response: any) => {
    // TODO: mostrar popup de exito
  };
  const onErrorSubmit = (_error: any) => console.log(_error);

  return (
    <>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('name')}
          inputId="text-field"
          defaultText=""
          label={'Name'}
          hasError={!!errors.name?.message}
          errorText={'name error'}
          type="text"
          required
        />
        <TextField
          {...register('email')}
          inputId="email-field"
          defaultText=""
          label={'Email'}
          hasError={!!errors.email?.message}
          errorText={'error'}
          type="email"
          required
        />
        {page === 'careers' && (
          <TextField
            {...register('linkedin')}
            inputId="url-field"
            defaultText=""
            label={'Linkedin'}
            hasError={!!errors.linkedin?.message}
            errorText={'linkedin error'}
            type="url"
            required
          />
        )}
        {page !== 'awards' && (
          <TextAreaField
            {...register('message')}
            label="Message"
            hasError={!!errors.message?.message}
            errorText={'text area error'}
            defaultText=""
            inputId="message-field"
            required
          />
        )}
        <Button variant="primary" type="submit" className="min-w-[14rem] self-center">
          Submit
        </Button>
      </form>
      {renderModal && renderModal(open, () => setOpen(false))}
    </>
  );
}

// const DynamicContactForm = dynamic(() => Promise.resolve(Form), { ssr: false });

export default Form;
