import ChapterLayout from '@/components/ChapterLayout';
import LotusOakSwirl from '@/components/LotusOakSwirl';

export default function Chapter02() {
  return (
    <ChapterLayout 
      chapterNumber="02" 
      animation={<LotusOakSwirl />}
      prevChapter="/chapter-01"
      nextChapter="/chapter-03"
    >
      <h2 className="text-3xl font-serif mb-8">Our Mission</h2>
      
      <p className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
        We blend traditional philanthropy with innovative social venture approaches, 
        enabling projects in education, healthcare, environmental conservation, and 
        cultural renewal to flourish through values-aligned giving.
      </p>
      
      <div className="space-y-4 max-w-2xl mx-auto text-left mb-8">
        <p className="text-base">
          <span className="font-serif italic text-accent">Collaborative Solutions</span> — 
          Address systemic challenges through partnership and research-based approaches
        </p>
        
        <p className="text-base">
          <span className="font-serif italic text-accent">Regenerative Stewardship</span> — 
          Responsible resource management that honors ecological and cultural resilience
        </p>
        
        <p className="text-base">
          <span className="font-serif italic text-accent">Personal Partnership</span> — 
          High-touch, relational approach to donor engagement and impact creation
        </p>
      </div>
      
      <p className="text-base text-secondary leading-relaxed max-w-2xl mx-auto">
        Our core mission is ensuring the greatest possible impact on community well-being 
        through thoughtful alignment of values with philanthropic action.
      </p>
    </ChapterLayout>
  );
}