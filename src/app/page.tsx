import { ExternalLinkIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <div className="flex min-h-[calc(100dvh---spacing(40))] flex-col items-center justify-center gap-6 text-center">
          <h1 className="text-2xl font-semibold sm:text-3xl">
            Nodly Next Template
          </h1>
          <p className="mx-auto mt-4 max-w-3xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            maxime voluptatum officia accusantium fugiat temporibus animi
            molestiae quos ducimus! Corrupti minima, odio vero eius molestiae
            debitis molestias maxime distinctio mollitia?
          </p>
          <Button>
            <span>Read more</span>
            <ExternalLinkIcon data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </div>
  );
}
