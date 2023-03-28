import dynamic from 'next/dynamic';

const DefaultTemplate = dynamic(() => import('./default/DefaultTemplate'), {
  ssr: false,
});
const DashboardTemplate = dynamic(
  () => import('./dashboard/DashboardTemplate'),
  { ssr: false },
);

export const Templates = {
  default: DefaultTemplate,
  dashboard: DashboardTemplate,
};

export type TemplateKeys = keyof typeof Templates;
