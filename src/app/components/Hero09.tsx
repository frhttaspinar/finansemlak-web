'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { playfair } from '../lib/fonts'

export interface Hero09Props {
  title: string
  description: string
  heroImage: string
  heroAlt?: string
  bottomTitle: string
  bottomTitleLine2?: string
  bottomText?: string
  animation?: 'none' | 'subtle'
  variant?: 'standard' | 'compact'
}

const variantStyles = {
  standard: {
    section: 'pb-10 sm:pb-16',
    title: 'text-4xl sm:text-5xl md:text-7xl',
    description: 'max-w-2xl text-lg sm:text-xl',
    header: 'gap-4',
    content: 'gap-2 sm:gap-4',
    media: 'max-w-6xl',
    imageAspect: 'aspect-16/10',
    bottomTitle: 'text-3xl sm:text-4xl md:text-5xl',
    overlap: 'mt-12',
  },
  compact: {
    section: 'py-14 sm:py-20',
    title: 'text-3xl sm:text-4xl md:text-5xl',
    description: 'max-w-md text-base sm:text-lg',
    header: 'gap-6',
    content: 'gap-10 sm:gap-12',
    media: 'max-w-4xl',
    imageAspect: 'aspect-16/11',
    bottomTitle: 'text-2xl sm:text-3xl md:text-4xl',
    overlap: 'mt-8',
  },
} as const

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 12, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const mediaItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

function Reveal({
  active,
  variants,
  className,
  children,
}: Readonly<{
  active: boolean
  variants?: Variants
  className?: string
  children: React.ReactNode
}>) {
  if (!active) return <div className={className}>{children}</div>

  return (
    <motion.div data-animate variants={variants ?? item} className={className}>
      {children}
    </motion.div>
  )
}

export default function Hero09({
  title,
  description,
  heroImage,
  heroAlt = '',
  bottomTitle,
  bottomTitleLine2,
  bottomText,
  animation = 'none',
  variant = 'standard',
}: Readonly<Hero09Props>) {
  const reduce = useReducedMotion()
  const animate = animation === 'subtle' && !reduce
  const vs = variantStyles[variant]

  const titleElement = title && (
    <h1
      className={`${playfair.className} text-slate-900 font-medium tracking-tight text-balance ${vs.title}`}
    >
      {title}
    </h1>
  )

  const descriptionElement = description && (
    <p className={`text-slate-600 font-medium text-balance mt-4 ${vs.description}`}>
      {description}
    </p>
  )

  const mediaElement = heroImage && (
    <div className={`relative mx-auto w-full max-w-7xl px-2 sm:px-4 lg:px-6 mt-2`}>
      {/*
        LCP görseli: next/image ile optimize edilir, sabit en-boy oranı
        sayesinde layout shift (CLS) oluşmaz.
      */}
      <div
        className={`relative w-full aspect-[16/11] sm:aspect-video`}
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskComposite: 'source-in',
          maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          maskComposite: 'intersect'
        }}
      >
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          priority
          fetchPriority="high"
          quality={65}
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 95vw, 1280px"
          className="object-cover object-center"
        />
      </div>
    </div>
  )

  const bottomElement = (bottomTitle || bottomText) && (
    <div
      className={`grid grid-cols-1 items-end gap-6 lg:grid-cols-2 ${vs.overlap}`}
    >
      {bottomTitle && (
        <h2
          className={`${playfair.className} text-slate-900 font-medium tracking-tight text-balance ${vs.bottomTitle}`}
        >
          {bottomTitle}
          {bottomTitleLine2 && (
            <>
              <br />
              <span className="text-slate-900">{bottomTitleLine2}</span>
            </>
          )}
        </h2>
      )}
      {bottomText && (
        <p className="text-slate-600 max-w-sm text-lg lg:justify-self-end font-medium">
          {bottomText}
        </p>
      )}
    </div>
  )

  return (
    <section className="bg-slate-50 relative isolate w-full overflow-hidden pt-28 md:pt-28">
      <motion.div
        className={`relative z-10 mx-auto flex w-full flex-col ${vs.section} ${vs.content}`}
        variants={animate ? container : undefined}
        initial={animate ? 'hidden' : false}
        whileInView={animate ? 'visible' : undefined}
        viewport={{ once: true, margin: '-80px' }}
      >
        <Reveal
          active={animate}
          className={`mx-auto flex w-full max-w-7xl flex-col items-center text-center px-6 ${vs.header}`}
        >
          {titleElement}
          {descriptionElement}
        </Reveal>

        <Reveal active={animate} variants={mediaItem} className="w-full">
          {mediaElement}
        </Reveal>

        <Reveal active={animate} className="w-full max-w-7xl mx-auto px-6">
          {bottomElement}
        </Reveal>
      </motion.div>
    </section>
  )
}
