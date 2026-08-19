/** @format */

'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import GlassCard from '@/components/ui/GlassCard';
import {
  Label,
  Input,
  Textarea,
  FormError,
  FormField,
} from '@/components/ui/Field';
import { practiceAreas } from '@/data/practiceAreas';
import { practiceAreaIcons as iconMap } from '@/lib/practiceAreaIcons';
import { cn } from '@/lib/utils';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      situation: '',
      message: '',
      consent: false,
    },
  });

  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <GlassCard
        tone='dark'
        blur='strong'
        className='flex flex-col items-center gap-4 p-10 text-center'>
        <CheckCircle2
          className='h-10 w-10 text-accent-300'
          aria-hidden='true'
        />
        <span className='font-display text-2xl text-warm-white'>
          Message received.
        </span>
        <p className='max-w-md text-sm leading-relaxed text-warm-white/70'>
          Thank you for reaching out.
        </p>
      </GlassCard>
    );
  }

  return (
    <GlassCard
      tone='light'
      blur='strong'
      className='p-6 sm:p-8 lg:p-10'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className='flex flex-col gap-6'>
        <div className='grid gap-6 sm:grid-cols-2'>
          <FormField
            label='Full Name'
            htmlFor='name'
            error={errors.name?.message}>
            <Input
              id='name'
              autoComplete='name'
              {...register('name', { required: 'Please share your name.' })}
            />
          </FormField>
          <FormField
            label='Email'
            htmlFor='email'
            error={errors.email?.message}>
            <Input
              id='email'
              type='email'
              autoComplete='email'
              {...register('email', {
                required: 'Please share an email address.',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please enter a valid email address.',
                },
              })}
            />
          </FormField>
        </div>

        <FormField
          label='Phone (Optional)'
          htmlFor='phone'>
          <Input
            id='phone'
            type='tel'
            autoComplete='tel'
            {...register('phone')}
          />
        </FormField>

        <Controller
          control={control}
          name='situation'
          rules={{ required: 'Please select the situation closest to yours.' }}
          render={({ field }) => (
            <div className='flex flex-col gap-3'>
              <Label>What happened?</Label>
              <div className='grid grid-cols-2 gap-2 sm:grid-cols-4'>
                {practiceAreas.map((area) => {
                  const Icon = iconMap[area.icon];
                  const isSelected = field.value === area.slug;

                  return (
                    <button
                      key={area.slug}
                      type='button'
                      aria-pressed={isSelected}
                      onClick={() => field.onChange(area.slug)}
                      className={cn(
                        'flex flex-col items-center gap-2 rounded-2xl border px-3 py-4 text-center text-xs font-medium transition-all duration-300 ease-premium',
                        isSelected ?
                          'border-ink-950 bg-ink-950 text-warm-white'
                        : 'border-ink-950/10 bg-white/60 text-ink-900 hover:-translate-y-0.5',
                      )}>
                      <Icon
                        className='h-5 w-5'
                        aria-hidden='true'
                      />
                      {area.short}
                    </button>
                  );
                })}
              </div>
              <FormError>{errors.situation?.message}</FormError>
            </div>
          )}
        />

        <FormField
          label='Tell us what happened'
          htmlFor='message'
          error={errors.message?.message}>
          <Textarea
            id='message'
            rows={5}
            {...register('message', {
              required: 'Please share a few details about your situation.',
            })}
          />
        </FormField>

        <div className='flex flex-col gap-2'>
          <label className='flex items-start gap-3 text-sm text-gray-600'>
            <input
              type='checkbox'
              {...register('consent', {
                required: 'Please confirm you agree before submitting.',
              })}
              className='mt-0.5 h-4 w-4 shrink-0 rounded border-ink-950/20 text-ink-950 focus:ring-2 focus:ring-ink-950/20'
            />
            <span>
              I understand this form does not create an attorney-client
              relationship, and I agree to be contacted about my inquiry.
            </span>
          </label>
          <FormError>{errors.consent?.message}</FormError>
        </div>

        <Button
          type='submit'
          icon={ArrowRight}
          disabled={isSubmitting}
          className='self-start'>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </GlassCard>
  );
}
