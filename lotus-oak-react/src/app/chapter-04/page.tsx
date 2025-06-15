import ChapterLayout from '@/components/ChapterLayout';
import LotusOakSwirl from '@/components/LotusOakSwirl';

export default function Chapter04() {
  return (
    <ChapterLayout 
      chapterNumber="04" 
      animation={<LotusOakSwirl />}
      prevChapter="/chapter-03"
      nextChapter="/chapter-05"
    >
      <h2 className="text-3xl font-serif mb-8">Our Approach</h2>
      
      <p className="text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
        Collaborative solutions, research-based impact, and sustainable development 
        guide everything we do.
      </p>
      
      <div className="space-y-4 max-w-2xl mx-auto text-left">
        <p className="text-base">
          <span className="font-serif italic text-accent">Collaborative Solutions</span> — 
          Partnering with communities at all levels.
        </p>
        
        <p className="text-base">
          <span className="font-serif italic text-accent">Research-Based Impact</span> — 
          Data-driven decision making and continuous improvement.
        </p>
        
        <p className="text-base">
          <span className="font-serif italic text-accent">Sustainable Development</span> — 
          Long-term planning and environmental stewardship.
        </p>
      </div>
    </ChapterLayout>
  );
}