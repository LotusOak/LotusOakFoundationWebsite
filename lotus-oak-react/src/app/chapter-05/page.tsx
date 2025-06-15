import ChapterLayout from '@/components/ChapterLayout';
import LotusOakSwirl from '@/components/LotusOakSwirl';

export default function Chapter05() {
  return (
    <ChapterLayout 
      chapterNumber="05" 
      animation={<LotusOakSwirl />}
      prevChapter="/chapter-04"
    >
      <h2 className="text-3xl font-serif mb-8">Future Vision</h2>
      
      <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
        As we grow, we explore new models for collective stewardship. 
        One such initiative—still in development—is the{' '}
        <span className="font-serif italic text-accent">Dryad Protocol</span>.
      </p>
      
      <p className="text-base text-secondary leading-relaxed mb-8 max-w-xl mx-auto">
        A vision to align global capital with biosphere restoration, 
        cultural resilience, and AI alignment.
      </p>
      
      <p className="text-sm text-muted max-w-lg mx-auto">
        Protecting what is sacred through systems that are transparent, 
        participatory, and adaptive.
      </p>
    </ChapterLayout>
  );
}