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
      <h2 className="text-3xl font-serif mb-6">The Lotus Oak Philosophy</h2>
      
      <p className="text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
        We draw inspiration from two ancient symbols that represent the wholeness 
        of human wisdom and natural resilience.
      </p>
      
      <div className="space-y-4 max-w-2xl mx-auto text-left mb-6">
        <p className="text-base">
          <span className="font-serif italic text-accent">The Oak</span> — 
          Represents endurance, strength, and deep roots. The masculine principle 
          of stability and long-term thinking that guides sustainable stewardship.
        </p>
        
        <p className="text-base">
          <span className="font-serif italic text-lotus">The Lotus</span> — 
          Embodies grace, beauty, and transformation. The feminine principle 
          of adaptability and renewal that inspires innovative approaches.
        </p>
      </div>
      
      <div className="poetry text-lg max-w-xl mx-auto">
        Neither wholly masculine nor feminine,<br />
        Their virtues transcend boundaries.<br /><br />
        Rooted in the wisdom of ages,<br />
        East and West, ancient and modern,<br />
        Echoing the eternal Tao.
      </div>
    </ChapterLayout>
  );
}