'use client';

import React, { createContext, useContext } from 'react';

const TranslationContext = createContext<any>({});

export function TranslationProvider({ children, dictionary }: { children: React.ReactNode, dictionary: any }) {
  return (
    <TranslationContext.Provider value={dictionary}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  return useContext(TranslationContext);
}
