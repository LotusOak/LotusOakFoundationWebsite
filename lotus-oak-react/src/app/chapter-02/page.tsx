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
      <div className="text-block">Our Mission</div>
      
      <div className="text-block">
        We blend traditional philanthropy with innovative social venture approaches, 
        enabling projects in education, healthcare, environmental conservation, and 
        cultural renewal to flourish through values-aligned giving.
      </div>
      
      <div className="text-block">
        Collaborative Solutions — 
        Address systemic challenges through partnership and research-based approaches.
      </div>
      
      <div className="text-block">
        Regenerative Stewardship — 
        Responsible resource management that honors ecological and cultural resilience.
      </div>
      
      <div className="text-block">
        Personal Partnership — 
        High-touch, relational approach to donor engagement and impact creation.
      </div>
      
      <div className="text-block">
        Our core mission is ensuring the greatest possible impact on community well-being 
        through thoughtful alignment of values with philanthropic action.
      </div>
    </ChapterLayout>
  );
}