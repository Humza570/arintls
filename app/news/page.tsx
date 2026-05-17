import NewsHero from '@/components/news/NewsHero';
import NewsGrid from '@/components/news/NewsGrid';
import NewsletterSignup from '@/components/news/NewsletterSignup';

export const metadata = {
  title: 'News & Insights | ARINTLS',
  description: 'Market intelligence, regulatory updates, and strategic perspectives for leaders navigating international expansion in South and Southeast Asia.',
};

export default function NewsPage() {
  return (
    <main>
      <NewsHero />
      <NewsGrid />
      <NewsletterSignup />
    </main>
  );
}
