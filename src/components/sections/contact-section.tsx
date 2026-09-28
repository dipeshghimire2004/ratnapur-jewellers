'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Phone, MapPin, Mail, Smartphone, CheckCircle, ShieldCheck } from 'lucide-react';

// Zod Validation Schema
export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters.' }),
  mobileNo: z
    .string()
    .min(7, { message: 'Please enter a valid mobile number.' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address.' }),
  message: z
    .string()
    .min(10, { message: 'Your message must be at least 10 characters long.' }),
  captcha: z
    .boolean()
    .refine((val) => val === true, {
      message: 'Please check the verification box.',
    }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      mobileNo: '',
      email: '',
      message: '',
      captcha: false,
    },
  });

  const captchaValue = watch('captcha');

  const onSubmit = (data: ContactFormData) => {
    console.log('Submitted Contact Form:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 6000);
  };

  return (
    <section className="relative z-20 w-full bg-white text-gray-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full space-y-12">
        {/* Top Title & Introductory Text */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight font-normal">
            Contact Us
          </h1>
          <p className="font-body text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xl mx-auto">
            Thank you for your interest in Ratnapur Jewellers fine jewelry creations. We value your trust and are committed to providing exceptional customer service. If our website leaves any question unanswered, please do not hesitate to get in touch with us. We look forward to serving you and creating memorable experiences with Ratnapur Jewellers.
          </p>
        </div>

        {/* Top Info Card Grid */}
        <div className="bg-contact-card rounded-sm p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center border border-gray-200/80 shadow-sm">
          {/* Left: Diamond Sketch Image */}
          <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-white border border-gray-200 shadow-inner">
            <Image
              src="/images/contact-sketch.png"
              alt="Diamond Craftsmanship Sketch"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Right: Contact Details */}
          <div className="space-y-4 text-xs font-sans text-gray-700">
            {/* Showroom */}
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-gray-900 block mb-0.5">Showroom:</span>
                <p className="text-gray-600">+977 1 4257814</p>
                <p className="text-gray-600">+977 1 4257850</p>
              </div>
            </div>

            {/* Walk-in Floor */}
            <div className="flex items-start gap-3 pt-2">
              <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-gray-900 block mb-0.5">Lalitpur Walk-in Floor:</span>
                <p className="text-gray-600">+977 9801053894</p>
              </div>
            </div>

            {/* Mobile / WhatsApp */}
            <div className="flex items-start gap-3 pt-2">
              <Smartphone className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-gray-900 block mb-0.5">Mobile &amp; WhatsApp:</span>
                <p className="text-gray-600">+977 9851082975</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 pt-2">
              <Mail className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-gray-900 block mb-0.5">Email:</span>
                <a href="mailto:info@ratnapurjewellers.com" className="text-brand-gold hover:underline font-medium">
                  info@ratnapurjewellers.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Have a Question? */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch pt-4">
          {/* Form Column */}
          <div className="flex flex-col justify-between space-y-6">
            <h2 className="font-heading text-2xl sm:text-3xl text-gray-900 font-normal">
              Have a Question?
            </h2>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-sm text-xs font-sans space-y-2 animate-in fade-in">
                <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm">
                  <CheckCircle className="w-5 h-5" /> Message Received!
                </div>
                <p className="text-emerald-700">
                  Thank you for reaching out to Ratnapur Jewellers. Our bespoke team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 font-sans text-xs">
                {/* Full Name */}
                <div className="space-y-1">
                  <input
                    type="text"
                    placeholder="Full Name"
                    {...register('fullName')}
                    className={`w-full py-2.5 px-3 bg-transparent border-b text-gray-900 placeholder:text-gray-400 focus:outline-none transition-colors ${
                      errors.fullName
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 focus:border-brand-gold'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-[11px] pt-0.5">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Mobile No */}
                <div className="space-y-1">
                  <input
                    type="text"
                    placeholder="Mobile no."
                    {...register('mobileNo')}
                    className={`w-full py-2.5 px-3 bg-transparent border-b text-gray-900 placeholder:text-gray-400 focus:outline-none transition-colors ${
                      errors.mobileNo
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 focus:border-brand-gold'
                    }`}
                  />
                  {errors.mobileNo && (
                    <p className="text-red-500 text-[11px] pt-0.5">{errors.mobileNo.message}</p>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <input
                    type="email"
                    placeholder="Email Address"
                    {...register('email')}
                    className={`w-full py-2.5 px-3 bg-transparent border-b text-gray-900 placeholder:text-gray-400 focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 focus:border-brand-gold'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-[11px] pt-0.5">{errors.email.message}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <textarea
                    rows={3}
                    placeholder="Your Message for us"
                    {...register('message')}
                    className={`w-full py-2.5 px-3 bg-transparent border-b text-gray-900 placeholder:text-gray-400 focus:outline-none resize-none transition-colors ${
                      errors.message
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 focus:border-brand-gold'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-[11px] pt-0.5">{errors.message.message}</p>
                  )}
                </div>

                {/* Captcha Box */}
                <div className="space-y-1 pt-1">
                  <div
                    onClick={() => setValue('captcha', !captchaValue, { shouldValidate: true })}
                    className={`flex items-center justify-between p-3 border rounded-sm bg-[#FAFAFA] cursor-pointer select-none transition-colors ${
                      errors.captcha ? 'border-red-400 bg-red-50/50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-sm border flex items-center justify-center transition-colors ${
                          captchaValue
                            ? 'bg-brand-gold border-brand-gold text-white'
                            : 'border-gray-400 bg-white'
                        }`}
                      >
                        {captchaValue && <CheckCircle className="w-3.5 h-3.5" />}
                      </div>
                      <span className="text-[11px] text-gray-700">I&apos;m not a robot</span>
                    </div>

                    <div className="flex items-center gap-1 text-[9px] text-gray-400 uppercase tracking-tighter">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                      <span>reCAPTCHA</span>
                    </div>
                  </div>
                  {errors.captcha && (
                    <p className="text-red-500 text-[11px] pt-0.5">{errors.captcha.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-brand-gold hover:bg-brand-gold-light text-white font-sans text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200 rounded-sm shadow-sm disabled:opacity-50"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </form>
            )}
          </div>

          {/* Right Image Column */}
          <div className="relative w-full min-h-[280px] sm:min-h-[340px] rounded-sm overflow-hidden border border-gray-200 shadow-sm bg-gray-100">
            <Image
              src="/images/contact-question.png"
              alt="Ratnapur Jewellers Inquiry Assistance"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
