import ChapterLayout from '@/components/ChapterLayout';
import LotusOakSwirl from '@/components/LotusOakSwirl';

export default function Home() {
  return (
    <ChapterLayout 
      chapterNumber="intro" 
      animation={<LotusOakSwirl />}
      nextChapter="/chapter-01"
    >
      <h1 className="text-5xl font-serif mb-6">Lotus Oak Foundation</h1>
      <p className="text-xl text-secondary italic mb-8 max-w-2xl mx-auto">
        Enabling transformative impact through values-aligned philanthropy and regenerative stewardship
      </p>
      
      <div className="poetry text-lg max-w-xl mx-auto mb-6">
        The oak stands firm,<br />
        While the lotus blooms—it swiftly fades.<br /><br />
        Endurance and ephemerality,<br />
        A dance of strength and grace.
      </div>
      
      <p className="text-base text-muted max-w-lg mx-auto">
        Every relationship begins with a conversation.<br />
        Let us explore how your values can flourish through purposeful giving.
      </p>
    </ChapterLayout>
  );
}