import {Heading1} from '../../shared-components/typography/Heading1';

export const TailwindExample = () => {
  return (
    <div className="text-center rounded bg-gray-200 border-gray-600 border-2 max-w-lg mx-auto p-5">
      <Heading1>This is a Tailwind CSS Example component</Heading1>
      <p className="text-lg text-gray-900 ">This is for utility-first fans. You apply pre-defined classes directly in your JSX. It's like having a huge set of utility classes at your disposal for almost every CSS property.</p>
    </div>
  );
};