'use client';

import PageWrapper from '@/_modules/components/PageWrapper';
import { useEffect } from 'react';

const BASE_WIDTH = 1920;
const MEDIUM_SCREEN = 576;
export const MOBILE_SCREEN = 640;

const onResize = () => {
  const updateScaleVarCss = (value: number) => {
    // console.log('scaleValue', scaleValue);
    document.documentElement.style.setProperty(
      '--scale-width',
      value.toString()
    );
  };
  let scaleValue = 1;

  if (window.innerWidth < MEDIUM_SCREEN) {
    updateScaleVarCss(scaleValue);
    return;
  }

  if (window.innerWidth < BASE_WIDTH) {
    scaleValue =
      window.innerWidth / BASE_WIDTH >= 0.5
        ? window.innerWidth / BASE_WIDTH
        : 0.5;
    updateScaleVarCss(scaleValue);

    return;
  }

  updateScaleVarCss(scaleValue);
};

/**
 * This layout to apply the scale to whole app including
 * Admin and public routes
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  // const { width } = useWindowSize();

  // const isMobile = useMemo(() => width <= MOBILE_SCREEN, [width]);

  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <PageWrapper>{children}</PageWrapper>;
}
