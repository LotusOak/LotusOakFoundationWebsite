import ChapterLayout from '@/components/ChapterLayout';
import LotusOakSwirl from '@/components/LotusOakSwirl';

export default function Chapter03() {
  return (
    <ChapterLayout 
      chapterNumber="03" 
      animation={<LotusOakSwirl />}
      prevChapter="/chapter-02"
      nextChapter="/chapter-04"
    >
      <div className="text-block">Focus Areas</div>
      
      <div className="text-block">
        We support transformative initiatives across four interconnected domains, 
        each essential for thriving communities and a regenerative future.
      </div>
      
      <div className="text-block">
        Education — 
        Fostering learning environments that honor diverse ways of knowing, 
        supporting educational innovation, and cultivating wisdom across generations.
      </div>
      
      <div className="text-block">
        Healthcare — 
        Supporting integrative and holistic health solutions that bridge 
        traditional healing wisdom with modern medical innovation.
      </div>
      
      <div className="text-block">
        Environmental Conservation — 
        Protecting and restoring ecological systems through regenerative practices 
        that heal the land and support biodiversity.
      </div>
      
      <div className="text-block">
        Cultural Renewal — 
        Preserving cultural heritage while fostering innovation, strengthening 
        community bonds, and celebrating diverse traditions.
      </div>
    </ChapterLayout>
  );
}