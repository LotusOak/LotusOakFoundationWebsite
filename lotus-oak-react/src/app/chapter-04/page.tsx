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
      <div className="text-block">Our Approach</div>
      
      <div className="text-block">
        We provide bespoke philanthropy guidance through a personal, four-step process 
        designed to align your values with meaningful impact.
      </div>
      
      <div className="text-block">
        Discovery & Alignment — 
        Values exploration and mission clarification through thoughtful conversation 
        and collaborative visioning.
      </div>
      
      <div className="text-block">
        Strategic Investment Stewardship — 
        Mission-aligned portfolio management with regenerative investment philosophy 
        and integrated resource stewardship.
      </div>
      
      <div className="text-block">
        Collaborative Grantmaking — 
        High-impact grant coordination with compliance support, due diligence, 
        and strategic partnership facilitation.
      </div>
      
      <div className="text-block">
        Ongoing Partnership — 
        Regular engagement, impact reporting, and multi-generational legacy planning 
        with white-glove administration.
      </div>
    </ChapterLayout>
  );
}