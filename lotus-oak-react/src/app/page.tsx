import ChapterLayout from '@/components/ChapterLayout';
import LotusOakSwirl from '@/components/LotusOakSwirl';

export default function Home() {
  return (
    <ChapterLayout 
      chapterNumber="intro" 
      animation={<LotusOakSwirl />}
      nextChapter="/chapter-01"
    >
      <h1 className="text-5xl font-serif mb-8">Lotus Oak Foundation</h1>
      <p className="text-xl text-secondary italic mb-12 max-w-2xl mx-auto">
        Blending traditional philanthropy with innovative social venture approaches
      </p>
      
      <div className="poetry text-lg max-w-xl mx-auto">
        The oak stands firm,<br />
        While the lotus blooms—it swiftly fades.<br /><br />
        Endurance and ephemerality,<br />
        A dance of strength and grace.
      </div>
    </ChapterLayout>
  );
}