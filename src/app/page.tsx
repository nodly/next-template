import clsx from 'clsx';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  };
}

export default function Home() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <div
          className={clsx(
            'flex',
            'min-h-[calc(100vh-theme(space.40))]',
            'flex-col',
            'space-y-2',
            'text-center',
            'items-center',
            'justify-center',
          )}
        >
          <h1 className="text-2xl font-semibold sm:text-3xl">
            @nodly/next-template
          </h1>
          <p className="mx-auto max-w-3xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            maxime voluptatum officia accusantium fugiat temporibus animi
            molestiae quos ducimus! Corrupti minima, odio vero eius molestiae
            debitis molestias maxime distinctio mollitia?
          </p>
        </div>
      </div>
    </div>
  );
}
