'use client';
import React, { useState, useEffect, useRef } from 'react';

export function useReveal(options: IntersectionObserverInit = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { rootMargin: '-10% 0px', threshold: 0.05, ...options });
    io.observe(el);
    return () => io.disconnect();
  }, [options]);
  return [ref as React.LegacyRef<any>, shown] as const;
}
