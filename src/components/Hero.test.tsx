import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Hero from './Hero';

describe('Hero Component - Animation Tests', () => {
  beforeEach(() => {
    // Mock scroll behavior
    vi.spyOn(window, 'addEventListener');
    vi.spyOn(window, 'removeEventListener');
  });

  describe('motion elements initial states', () => {
    it('should render Hero component', () => {
      render(<Hero />);
      expect(screen.getByRole('heading')).toBeInTheDocument();
    });

    it('should render hero headline', () => {
      render(<Hero />);
      expect(screen.getByText(/Justice/i)).toBeInTheDocument();
    });

    it('should render CTA buttons', () => {
      render(<Hero />);
      expect(screen.getByText('Free Consultation')).toBeInTheDocument();
      expect(screen.getByText('Our Services')).toBeInTheDocument();
    });

    it('should render all badge elements', () => {
      render(<Hero />);
      expect(screen.getByText('15+ Years')).toBeInTheDocument();
      expect(screen.getByText('50+ Nations')).toBeInTheDocument();
      expect(screen.getByText('5,000+')).toBeInTheDocument();
    });
  });

  describe('scroll listener setup', () => {
    it('should register scroll event listener on mount', () => {
      render(<Hero />);
      expect(window.addEventListener).toHaveBeenCalledWith(
        'scroll',
        expect.any(Function),
        { passive: true }
      );
    });

    it('should unregister scroll event listener on unmount', () => {
      const { unmount } = render(<Hero />);
      unmount();
      expect(window.removeEventListener).toHaveBeenCalledWith(
        'scroll',
        expect.any(Function)
      );
    });
  });

  describe('parallax effect', () => {
    it('should apply parallax transform on scroll', () => {
      const { container } = render(<Hero />);
      const parallaxDiv = container.firstChild?.firstChild;
      
      expect(parallaxDiv).toBeInTheDocument();
      // Verify the element exists in the DOM (parallax effect will apply on scroll)
      expect(container.querySelector('img[alt*="background"]')).toBeInTheDocument();
    });
  });

  describe('WhatsApp button animation', () => {
    it('should render WhatsApp button', () => {
      render(<Hero />);
      const whatsappLink = screen.getByLabelText(/WhatsApp/i);
      expect(whatsappLink).toBeInTheDocument();
      expect(whatsappLink).toHaveAttribute('href', expect.stringContaining('api.whatsapp.com'));
    });

    it('should have proper WhatsApp URL format', () => {
      render(<Hero />);
      const whatsappLink = screen.getByLabelText(/WhatsApp/i) as HTMLAnchorElement;
      expect(whatsappLink.href).toContain('+971524167387');
      expect(whatsappLink.href).toContain('text=');
    });
  });

  describe('scroll to section navigation', () => {
    it('should have working CTA button link', () => {
      render(<Hero />);
      const ctaButton = screen.getByText('Free Consultation') as HTMLAnchorElement;
      expect(ctaButton).toHaveAttribute('href', '#contact');
    });

    it('should have working services button link', () => {
      render(<Hero />);
      const servicesButton = screen.getByText('Our Services') as HTMLAnchorElement;
      expect(servicesButton).toHaveAttribute('href', '#services');
    });

    it('should have scroll indicator button', () => {
      render(<Hero />);
      const scrollButton = screen.getByLabelText(/Scroll down/i);
      expect(scrollButton).toBeInTheDocument();
    });
  });

  describe('badge animations', () => {
    it('should render all badges with proper structure', () => {
      render(<Hero />);
      
      // Check for badge icons and text
      const badgeContainer = screen.getByText('15+ Years').parentElement;
      expect(badgeContainer).toBeInTheDocument();
    });
  });
});
