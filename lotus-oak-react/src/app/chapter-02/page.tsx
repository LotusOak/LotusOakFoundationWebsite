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
        other crucial impact areas to flourish.
      </p>
      
      <p className="text-base text-secondary leading-relaxed max-w-2xl mx-auto">
        Our core mission is to address systemic challenges through collaboration, 
        research-based solutions, and responsible stewardship of resources.
      </p>
    </ChapterLayout>
  );
}