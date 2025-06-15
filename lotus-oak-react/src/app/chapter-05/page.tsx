import ChapterLayout from '@/components/ChapterLayout';
import LotusOakSwirl from '@/components/LotusOakSwirl';

export default function Chapter05() {
  return (
    <ChapterLayout 
      chapterNumber="05" 
      animation={<LotusOakSwirl />}
      prevChapter="/chapter-04"
    >
      <div className="text-block">Future Vision</div>
      
      <div className="text-block">
        As we grow, we explore innovative models for collective stewardship and 
        regenerative finance that can scale our impact while preserving our values.
      </div>
      
      <div className="text-block">
        The Dryad Protocol — 
        An early-stage initiative exploring decentralized approaches to align 
        global capital with biosphere restoration, cultural resilience, and 
        responsible technology development.
      </div>
      
      <div className="text-block">
        Protecting what is sacred through systems that are transparent, 
        participatory, and adaptive to community needs.
      </div>
      
      <div className="text-block">
        Whether through traditional philanthropy or emerging collaborative models, 
        our commitment remains: thoughtful stewardship for lasting impact.
      </div>
      
      <div className="text-block">
        Contact us to begin the conversation about 
        how your philanthropic vision can contribute to a more regenerative world.
      </div>
    </ChapterLayout>
  );
}