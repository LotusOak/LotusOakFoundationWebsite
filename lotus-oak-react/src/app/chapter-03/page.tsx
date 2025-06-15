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
      <h2 className="text-3xl font-serif mb-8">Focus Areas</h2>
      
      <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto text-left">
        <div>
          <h3 className="font-serif text-xl mb-2 text-accent">Education</h3>
          <p className="text-sm text-secondary">
            Fostering learning and knowledge sharing across communities.
          </p>
        </div>
        
        <div>
          <h3 className="font-serif text-xl mb-2 text-accent">Healthcare</h3>
          <p className="text-sm text-secondary">
            Supporting holistic solutions honoring tradition and innovation.
          </p>
        </div>
        
        <div>
          <h3 className="font-serif text-xl mb-2 text-accent">Environment</h3>
          <p className="text-sm text-secondary">
            Protecting our world through regenerative approaches.
          </p>
        </div>
        
        <div>
          <h3 className="font-serif text-xl mb-2 text-accent">Culture</h3>
          <p className="text-sm text-secondary">
            Preserving heritage while fostering understanding.
          </p>
        </div>
      </div>
    </ChapterLayout>
  );
}