import Hero from '@/components/Hero';
import { SocialProof } from '@/components/SocialProof';
import { ValueProps } from '@/components/ValueProps';
import { Promise } from '@/components/Promise';
import CTA from './_PageSections/CTA';

export default function Landing() {
  return (
    <div>
      <Hero />
      <SocialProof />
      <ValueProps />
      <Promise />
      <CTA />
    </div>
  );
}
