import ChapterLayout from '@/components/ChapterLayout';
import LotusOakSwirl from '@/components/LotusOakSwirl';

export default function Chapter01() {
  return (
    <ChapterLayout 
      chapterNumber="01" 
      animation={<LotusOakSwirl />}
      prevChapter="/"
      nextChapter="/chapter-02"
    >
      <h2 className="text-3xl font-serif mb-12">The Philosophy</h2>
      
      <div className="poetry text-lg max-w-2xl mx-auto">
        Neither wholly masculine nor feminine,<br />
        Their virtues transcend boundaries.<br /><br />
        Rooted in the wisdom of ages,<br />
        East and West, ancient and modern,<br />
        Echoing the eternal Tao.
      </div>
    </ChapterLayout>
  );
}