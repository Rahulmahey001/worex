// components/AdsPopup.tsx
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

interface AdsPopupProps {
  show?: boolean;
  onClose?: () => void;
  delay?: number; // Delay in milliseconds before showing popup
  adClient?: string; // Google AdSense client ID
  adSlot?: string; // Google AdSense slot ID
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  showCloseButton?: boolean;
  closeAfter?: number; // Auto-close after X seconds (0 = disabled)
}

const AdsPopup: React.FC<AdsPopupProps> = ({
  show: externalShow,
  onClose,
  delay = 3000,
  adClient = 'ca-pub-XXXXXXXXXXXXXXX', // Replace with your AdSense client ID
  adSlot = 'XXXXXXXXXX', // Replace with your AdSense slot ID
  adFormat = 'auto',
  showCloseButton = true,
  closeAfter = 0,
}) => {
  const [internalShow, setInternalShow] = useState(false);
  const [countdown, setCountdown] = useState(closeAfter);

  const show = externalShow !== undefined ? externalShow : internalShow;

  useEffect(() => {
    if (delay > 0 && externalShow === undefined) {
      const timer = setTimeout(() => {
        setInternalShow(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [delay, externalShow]);

  useEffect(() => {
    if (show && closeAfter > 0) {
      const countdownInterval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            handleClose();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(countdownInterval);
    }
  }, [show, closeAfter]);

  useEffect(() => {
    // Load Google AdSense script
    const loadAdScript = () => {
      if (show && typeof window !== 'undefined') {
        const scriptId = 'google-ads-script';
        
        if (!document.getElementById(scriptId)) {
          const script = document.createElement('script');
          script.id = scriptId;
          script.async = true;
          script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
          script.onload = () => {
            // Initialize ads after script loads
            try {
              ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
            } catch (error) {
              console.error('Error loading ads:', error);
            }
          };
          document.head.appendChild(script);
        } else {
          // Re-trigger ads if script already loaded
          try {
            ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
          } catch (error) {
            console.error('Error refreshing ads:', error);
          }
        }
      }
    };

    if (show) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(loadAdScript, 100);
      return () => clearTimeout(timer);
    }
  }, [show]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      setInternalShow(false);
    }
  };

  if (!show) return null;

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
      size="lg"
      className="ads-popup-modal"
    >
      <Modal.Header className={showCloseButton ? '' : 'border-0'}>
        {showCloseButton && (
          <Button
            variant="light"
            onClick={handleClose}
            className="position-absolute end-0 top-0 m-2 rounded-circle"
            style={{ width: '40px', height: '40px', zIndex: 1060 }}
            aria-label="Close"
          >
            &times;
          </Button>
        )}
      </Modal.Header>
      
      <Modal.Body className="text-center p-4">
        <div className="mb-3">
          <h5 className="text-muted">Advertisement</h5>
          <p className="text-muted small">Support us by viewing this ad</p>
        </div>
        
        {/* Google AdSense Ad Unit */}
        <div className="ad-container mx-auto" style={{ minHeight: adFormat === 'vertical' ? '600px' : '250px' }}>
          <ins
            className="adsbygoogle"
            style={{
              display: 'block',
              textAlign: 'center',
              minHeight: adFormat === 'vertical' ? '600px' : '250px',
              width: '100%',
            }}
            data-ad-client={adClient}
            data-ad-slot={adSlot}
            data-ad-format={adFormat}
            data-full-width-responsive="true"
          ></ins>
        </div>

        {closeAfter > 0 && countdown > 0 && (
          <div className="mt-3">
            <small className="text-muted">
              This ad will close automatically in {countdown} seconds
            </small>
          </div>
        )}
      </Modal.Body>
      
      <Modal.Footer className="border-0 justify-content-center">
        <small className="text-muted">
          By closing this ad, you help support our free content
        </small>
      </Modal.Footer>
    </Modal>
  );
};

export default AdsPopup;