import ChapterLayout from '@/components/ChapterLayout';
import LotusOakSwirl from '@/components/LotusOakSwirl';

export default function Chapter05() {
  return (
    <ChapterLayout 
      chapterNumber="05" 
      animation={<LotusOakSwirl />}
      prevChapter="/chapter-04"
    >
      <h2 className="text-3xl font-serif mb-8">Future Vision</h2>
      
      <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
        As we grow, we explore innovative models for collective stewardship and 
        regenerative finance that can scale our impact while preserving our values.
      </p>
      
      <div className="content-block max-w-2xl mx-auto mb-8">
        <h3 className="font-serif text-xl text-accent mb-4">The Dryad Protocol</h3>
        <p className="text-base text-secondary leading-relaxed mb-4">
          An early-stage initiative exploring decentralized approaches to align 
          global capital with biosphere restoration, cultural resilience, and 
          responsible technology development.
        </p>
        <p className="text-sm text-muted">
          Protecting what is sacred through systems that are transparent, 
          participatory, and adaptive to community needs.
        </p>
      </div>
      
      <p className="text-base text-secondary leading-relaxed mb-6 max-w-xl mx-auto">
        Whether through traditional philanthropy or emerging collaborative models, 
        our commitment remains: thoughtful stewardship for lasting impact.
      </p>
      
      <p className="text-sm text-muted max-w-lg mx-auto">
        <span className="font-serif italic">Contact us</span> to begin the conversation about 
        how your philanthropic vision can contribute to a more regenerative world.
      </p>
    </ChapterLayout>
  );
}