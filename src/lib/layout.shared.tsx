import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const appName = 'مجله ماسا';
export const docsRoute = '/docs';
export const docsContentRoute = '/llms.mdx/docs';

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: 'hamidrezakz',
  repo: 'masa-mag',
  branch: 'master',
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Masa Mag',
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
