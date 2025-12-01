
import { useState } from "react";

// hooks/useScrollTrigger.ts
import { useEffect } from 'react';
import { useAdsPopup } from '../components/ads/AdsPopupContext';

interface UseScrollTriggerOptions {
  threshold?: number; // Scroll percentage to trigger (0-100)
  once?: boolean; // Trigger only once
  enabled?: boolean; // Enable/disable the trigger
}

export const useScrollTrigger = (options: UseScrollTriggerOptions = {}) => {
  const { threshold = 70, once = true, enabled = true } = options;
  const { showPopup } = useAdsPopup();
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (!enabled || (once && triggered)) return;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      if (scrollPercentage >= threshold) {
        showPopup({
          delay: 0,
          closeAfter: 20,
        });
        setTriggered(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold, once, enabled, triggered, showPopup]);

  return { triggered };
};