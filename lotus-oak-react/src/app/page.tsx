import ChapterLayout from '@/components/ChapterLayout';
import LotusOakSwirl from '@/components/LotusOakSwirl';
import FadeInStagger from '@/components/FadeInStagger';

export default function Home() {
  return (
    <ChapterLayout 
      chapterNumber="intro" 
      animation={<LotusOakSwirl />}
      nextChapter="/chapter-01"
    >
      <FadeInStagger delay={200}>
        <div className="text-block">Lotus Oak Foundation</div>
      </FadeInStagger>
      
      <FadeInStagger delay={400}>
        <div className="text-block">
          Enabling transformative impact through values-aligned philanthropy and regenerative stewardship.
        </div>
      </FadeInStagger>
      
      <FadeInStagger delay={600}>
        <div className="text-block">
          The oak stands firm,<br />
          While the lotus blooms—it swiftly fades.<br /><br />
          Endurance and ephemerality,<br />
          A dance of strength and grace.
        </div>
      </FadeInStagger>
      
      <FadeInStagger delay={800}>
        <div className="text-block">
          Every relationship begins with a conversation.<br />
          Let us explore how your values can flourish through purposeful giving.
        </div>
      </FadeInStagger>
    </ChapterLayout>
  );
}