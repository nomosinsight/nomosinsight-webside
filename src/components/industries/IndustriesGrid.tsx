import { useState } from 'react';
import { industries } from '../../data/industries';
import IndustryCard from './IndustryCard';
import IndustryModal from './IndustryModal';
import type { Industry } from '../../types/industry';

export default function IndustriesGrid() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((industry) => (
          <IndustryCard
            key={industry.id}
            industry={industry}
            onClick={() => setSelectedIndustry(industry)}
          />
        ))}
      </div>

      <IndustryModal
        industry={selectedIndustry}
        onClose={() => setSelectedIndustry(null)}
      />
    </>
  );
}