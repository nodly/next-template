import { ExternalLinkIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <div
          className={cn(
            'flex',
            'min-h-[calc(100vh---spacing(40))]',
            'flex-col',
            'text-center',
            'items-center',
            'justify-center',
          )}
        >
          <h1 className="text-2xl font-semibold sm:text-3xl">
            Nodly Next Template
          </h1>
          <p className="mx-auto mt-4 max-w-3xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            maxime voluptatum officia accusantium fugiat temporibus animi
            molestiae quos ducimus! Corrupti minima, odio vero eius molestiae
            debitis molestias maxime distinctio mollitia?
          </p>
          <a
            href="#"
            className="mt-8 flex items-center gap-2 text-sky-600 underline transition-colors hover:text-sky-700"
          >
            <span>Read more</span>
            <ExternalLinkIcon className="size-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
