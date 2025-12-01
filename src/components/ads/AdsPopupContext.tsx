// context/AdsPopupContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import dynamic from 'next/dynamic';

const AdsPopup = dynamic(() => import('.././ads/[id]/AdsPopup'), { ssr: false });

interface AdsPopupContextType {
  showPopup: (options?: Partial<AdsPopupOptions>) => void;
  hidePopup: () => void;
}

interface AdsPopupOptions {
  delay: number;
  adClient: string;
  adSlot: string;
  adFormat: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  closeAfter: number;
}

const defaultOptions: AdsPopupOptions = {
  delay: 0,
  adClient: 'ca-pub-XXXXXXXXXXXXXXX',
  adSlot: 'XXXXXXXXXX',
  adFormat: 'auto',
  closeAfter: 0,
};

const AdsPopupContext = createContext<AdsPopupContextType | undefined>(undefined);

export const useAdsPopup = () => {
  const context = useContext(AdsPopupContext);
  if (!context) {
    throw new Error('useAdsPopup must be used within AdsPopupProvider');
  }
  return context;
};

interface AdsPopupProviderProps {
  children: ReactNode;
  defaultAdClient?: string;
  defaultAdSlot?: string;
}

export const AdsPopupProvider: React.FC<AdsPopupProviderProps> = ({
  children,
  defaultAdClient,
  defaultAdSlot,
}) => {
  const [show, setShow] = useState(false);
  const [options, setOptions] = useState<AdsPopupOptions>({
    ...defaultOptions,
    adClient: defaultAdClient || defaultOptions.adClient,
    adSlot: defaultAdSlot || defaultOptions.adSlot,
  });

  const showPopup = (customOptions?: Partial<AdsPopupOptions>) => {
    setOptions(prev => ({
      ...prev,
      ...customOptions,
    }));
    setShow(true);
  };

  const hidePopup = () => {
    setShow(false);
  };

  return (
    <AdsPopupContext.Provider value={{ showPopup, hidePopup }}>
      {children}
      <AdsPopup
        show={show}
        onClose={hidePopup}
        delay={options.delay}
        adClient={options.adClient}
        adSlot={options.adSlot}
        adFormat={options.adFormat}
        closeAfter={options.closeAfter}
      />
    </AdsPopupContext.Provider>
  );
};