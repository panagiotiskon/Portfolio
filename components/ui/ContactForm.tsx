'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { texts } from '@/app/data';
import { Input } from './FancyInput';
import { Label } from './FancyLabel';
import { TextArea } from './FancyTextArea';
import Image from 'next/image';

export const ContactForm: React.FC<{
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}> = ({ handleSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const maxMessageLength = 200;

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target as HTMLInputElement | HTMLTextAreaElement;

    setFormData({ ...formData, [id]: value });

    if (id === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setErrors({ ...errors, email: 'Invalid email address.' });
    } else {
      setErrors({ ...errors, [id]: '' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = { ...errors };

    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof typeof formData]) {
        newErrors[key as keyof typeof errors] = 'This field is required.';
      }
    });

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    handleSubmit(e);
  };

  return (
    <div className="shadow-input mx-auto w-full p-4 rounded-xl md:p-8 bg-black border border-white/[0.2]">
      <h2 className="text-xl font-bold text-neutral-200 mb-1">
        {texts.CONTACT}{' '}
      </h2>
      <p className="text-sm text-neutral-300">
        Weather you have a question or simply want to connect, my inbox is
        always open.
      </p>
      <form className="my-8" onSubmit={handleFormSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer className="mb-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              autoComplete="on"
              placeholder="Your Name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="peer"
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name}</p>
            )}
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              autoComplete="on"
              placeholder="your@email.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="peer"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Your Message</Label>
          <TextArea
            id="message"
            name="message"
            autoComplete="on"
            placeholder="Your message"
            value={formData.message}
            maxLength={maxMessageLength}
            className="peer"
            onChange={handleChange}
          />
          {errors.message && (
            <p className="text-red-500 text-xs">{errors.message}</p>
          )}
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            {formData.message.length}/{maxMessageLength} characters
          </p>
        </LabelInputContainer>
        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <Image
                src="/loader.svg"
                alt="loading"
                width={20}
                height={20}
                className="animate-spin"
              />
            </div>
          ) : (
            'Submit'
          )}
          <BottomGradient />
        </button>
        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-lightBlue to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('flex w-full flex-col space-y-2', className)}>
      {children}
    </div>
  );
};
