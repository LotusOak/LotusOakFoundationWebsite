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
      <h2 className="text-3xl font-serif mb-6">Focus Areas</h2>
      
      <p className="text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
        We support transformative initiatives across four interconnected domains, 
        each essential for thriving communities and a regenerative future.
      </p>
      
      <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto text-left">
        <div>
          <h3 className="font-serif text-xl mb-3 text-accent">Education</h3>
          <p className="text-sm text-secondary leading-relaxed">
            Fostering learning environments that honor diverse ways of knowing, 
            supporting educational innovation, and cultivating wisdom across generations.
          </p>
        </div>
        
        <div>
          <h3 className="font-serif text-xl mb-3 text-accent">Healthcare</h3>
          <p className="text-sm text-secondary leading-relaxed">
            Supporting integrative and holistic health solutions that bridge 
            traditional healing wisdom with modern medical innovation.
          </p>
        </div>
        
        <div>
          <h3 className="font-serif text-xl mb-3 text-accent">Environmental Conservation</h3>
          <p className="text-sm text-secondary leading-relaxed">
            Protecting and restoring ecological systems through regenerative practices 
            that heal the land and support biodiversity.
          </p>
        </div>
        
        <div>
          <h3 className="font-serif text-xl mb-3 text-accent">Cultural Renewal</h3>
          <p className="text-sm text-secondary leading-relaxed">
            Preserving cultural heritage while fostering innovation, strengthening 
            community bonds, and celebrating diverse traditions.
          </p>
        </div>
      </div>
    </ChapterLayout>
  );
}