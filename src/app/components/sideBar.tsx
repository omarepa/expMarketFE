export default function SideBar() {
  return (
    <div className="relative grid min-h-screen grid-cols-[1fr_2.5rem_auto_2.5rem_1fr] grid-rows-[1fr_1px_auto_1px_1fr] bg-white [--pattern-fg:var(--color-gray-950)]/5 dark:bg-gray-950 dark:[--pattern-fg:var(--color-white)]/10">
      <ul className="space-y-3">
        <li className="flex">
          <svg
            className="h-[1lh] w-5.5 shrink-0"
            viewBox="0 0 22 22"
            fill="none"
            stroke-linecap="square"
          >
            <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
            <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
            <path
              d="M8 11.5L10.5 14L14 8"
              className="stroke-sky-800 dark:stroke-sky-300"
            />
          </svg>
          <p className="ml-3">
            Customizing your theme with
            <code className="font-mono font-medium text-gray-950 dark:text-white">
              @theme
            </code>
          </p>
        </li>
        <li className="flex">
          <svg
            className="h-[1lh] w-5.5 shrink-0"
            viewBox="0 0 22 22"
            fill="none"
            stroke-linecap="square"
          >
            <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
            <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
            <path
              d="M8 11.5L10.5 14L14 8"
              className="stroke-sky-800 dark:stroke-sky-300"
            />
          </svg>
          <p className="ml-3">
            Adding custom utilities with
            <code className="font-mono font-medium text-gray-950 dark:text-white">
              @utility
            </code>
          </p>
        </li>
        <li className="flex">
          <svg
            className="h-[1lh] w-5.5 shrink-0"
            viewBox="0 0 22 22"
            fill="none"
            stroke-linecap="square"
          >
            <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
            <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
            <path
              d="M8 11.5L10.5 14L14 8"
              className="stroke-sky-800 dark:stroke-sky-300"
            />
          </svg>
          <p className="ml-3">
            Adding custom variants with
            <code className="font-mono font-medium text-gray-950 dark:text-white">
              @variant
            </code>
          </p>
        </li>
        <li className="flex">
          <svg
            className="h-[1lh] w-5.5 shrink-0"
            viewBox="0 0 22 22"
            fill="none"
            stroke-linecap="square"
          >
            <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
            <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
            <path
              d="M8 11.5L10.5 14L14 8"
              className="stroke-sky-800 dark:stroke-sky-300"
            />
          </svg>
          <p className="ml-3">Code completion with instant preview</p>
        </li>
        <li className="flex">
          <svg
            className="h-[1lh] w-5.5 shrink-0"
            viewBox="0 0 22 22"
            fill="none"
            stroke-linecap="square"
          >
            <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
            <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
            <path
              d="M8 11.5L10.5 14L14 8"
              className="stroke-sky-800 dark:stroke-sky-300"
            />
          </svg>
          <p className="ml-3">Others</p>
        </li>
      </ul>
    </div>
  );
}
