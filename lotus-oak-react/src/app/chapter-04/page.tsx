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
      
      <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
        We provide bespoke philanthropy guidance through a personal, four-step process 
        designed to align your values with meaningful impact.
      </p>
      
      <div className="space-y-6 max-w-2xl mx-auto text-left">
        <div>
          <h3 className="font-serif text-lg text-accent mb-2">1. Discovery & Alignment</h3>
          <p className="text-sm text-secondary leading-relaxed">
            Values exploration and mission clarification through thoughtful conversation 
            and collaborative visioning.
          </p>
        </div>
        
        <div>
          <h3 className="font-serif text-lg text-accent mb-2">2. Strategic Investment Stewardship</h3>
          <p className="text-sm text-secondary leading-relaxed">
            Mission-aligned portfolio management with regenerative investment philosophy 
            and integrated resource stewardship.
          </p>
        </div>
        
        <div>
          <h3 className="font-serif text-lg text-accent mb-2">3. Collaborative Grantmaking</h3>
          <p className="text-sm text-secondary leading-relaxed">
            High-impact grant coordination with compliance support, due diligence, 
            and strategic partnership facilitation.
          </p>
        </div>
        
        <div>
          <h3 className="font-serif text-lg text-accent mb-2">4. Ongoing Partnership</h3>
          <p className="text-sm text-secondary leading-relaxed">
            Regular engagement, impact reporting, and multi-generational legacy planning 
            with white-glove administration.
          </p>
        </div>
      </div>
    </ChapterLayout>
  );
}