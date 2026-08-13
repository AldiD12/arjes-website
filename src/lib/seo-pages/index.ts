import { deDriverPage } from './de-driver';
import { deFamilyPage } from './de-family';
import { deGuidePage } from './de-guide';
import { deSelfDrivePage } from './de-self-drive';
import { deTiranaPage } from './de-tirana';
import { enDriverPage } from './en-driver';
import { enItinerary10Page } from './en-itinerary-10';
import { enItinerary14Page } from './en-itinerary-14';
import { enSelfDrivePage } from './en-self-drive';
import { enTiranaPage } from './en-tirana';
import type { SeoLandingPage } from './types';

export const seoLandingPages: SeoLandingPage[] = [
  deTiranaPage,
  deGuidePage,
  deDriverPage,
  deSelfDrivePage,
  deFamilyPage,
  enTiranaPage,
  enDriverPage,
  enSelfDrivePage,
  enItinerary10Page,
  enItinerary14Page,
];

export function getSeoLandingPage(lang: string, slug: string) {
  return seoLandingPages.find((page) => page.locale === lang && page.slug === slug);
}

export type { SeoLandingPage } from './types';
