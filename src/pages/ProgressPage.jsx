import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BookSelector from '../components/BookSelector';
import ProgressAdvisor from '../components/ProgressAdvisor';
import { getBooks, getReadingState } from '../lib/books';

export default function ProgressPage() {
  const [searchParams] = useSearchParams();
  const books = getBooks();
  const [bookId, setBookId] = useState(searchParams.get('book') || '');
  const [savedProgress, setSavedProgress] = useState(null);

  const book = books.find((b) => b.id === bookId);

  useEffect(() => {
    if (bookId) {
      const state = getReadingState();
      setSavedProgress(state.progress[bookId] || null);
    }
  }, [bookId]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-serif font-bold text-ink mb-2">阅读进度判断</h1>
      <p className="text-ink-muted text-sm mb-6">
        告诉我你读到哪里了，帮你判断要不要继续、后面有什么值得期待
      </p>

      <div className="bg-card border border-paper-dark/60 rounded-xl p-6 space-y-6">
        <BookSelector books={books} value={bookId} onChange={setBookId} />

        {book && (
          <ProgressAdvisor
            book={book}
            savedProgress={savedProgress}
            onSave={setSavedProgress}
          />
        )}
      </div>
    </div>
  );
}
