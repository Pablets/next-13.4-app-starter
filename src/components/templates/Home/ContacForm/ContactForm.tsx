'use client';
import Container from '@/components/organisms/Container/Container';
import Form from '@/components/organisms/Form/Form';
import React from 'react';

const ContactForm = async () => {
  return (
    <Container lastChild>
      <div className="col-span-12 self-center sm:col-span-10 sm:col-start-2">
        <Form
          renderModal={(open, closeModal) => (
            <div className="flex h-full w-full items-center justify-center">
              <h1 className="text-white">sadaskdsajldaksdjalkdsj</h1>
            </div>
          )}
        />
      </div>
    </Container>
  );
};

export default ContactForm;
