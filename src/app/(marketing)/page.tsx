import Hero from '@/components/Hero';
import { SocialProof } from '@/components/SocialProof';
import { ValueProps } from '@/components/ValueProps';
import CTA from './_PageSections/CTA';

export default function Landing() {
  return (
    <div>
      <Hero />
      <SocialProof />
      <ValueProps />
      <CTA />
    </div>
  );
}
