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
      <div className="text-block">The Lotus Oak Philosophy</div>
      
      <div className="text-block">
        We draw inspiration from two ancient symbols that represent the wholeness 
        of human wisdom and natural resilience.
      </div>
      
      <div className="text-block">
        The Oak — 
        Represents endurance, strength, and deep roots. The masculine principle 
        of stability and long-term thinking that guides sustainable stewardship.
      </div>
      
      <div className="text-block">
        The Lotus — 
        Embodies grace, beauty, and transformation. The feminine principle 
        of adaptability and renewal that inspires innovative approaches.
      </div>
      
      <div className="text-block">
        Neither wholly masculine nor feminine,<br />
        Their virtues transcend boundaries.<br /><br />
        Rooted in the wisdom of ages,<br />
        East and West, ancient and modern,<br />
        Echoing the eternal Tao.
      </div>
    </ChapterLayout>
  );
}