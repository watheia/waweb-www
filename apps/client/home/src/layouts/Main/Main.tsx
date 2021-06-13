import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Divider } from '@material-ui/core';
import { Topbar, Footer, Sidebar } from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
}));

interface Props {
  children: React.ReactNode;
  themeToggler: Function;
  themeMode: string;
}

const Main = ({ children, themeToggler, themeMode }: Props): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const pages = {
    landings: {
      title: 'Demos',
      id: 'demo-pages',
      children: {
        services: {
          groupTitle: 'Examples',
          pages: [
            {
              title: 'Coworking',
              href: '/materials/coworking',
            },
            {
              title: 'Rental',
              href: '/materials/rental',
            },
            {
              title: 'Job Listing',
              href: '/materials/job-listing',
            },
            {
              title: 'E-Learning',
              href: '/materials/e-learning',
            },
            {
              title: 'E-commerce',
              href: '/materials/e-commerce',
            },
            {
              title: 'Expo',
              href: '/materials/expo',
            },
          ],
        },
        apps: {
          groupTitle: 'Apps',
          pages: [
            {
              title: 'Desktop App',
              href: '/materials/desktop-app',
            },
            {
              title: 'Mobile App',
              href: '/materials/mobile-app',
            },
          ],
        },
        web: {
          groupTitle: 'Web',
          pages: [
            {
              title: 'Marketing',
              href: '/materials/',
            },
            {
              title: 'Overview',
              href: '/materials/home',
            },
            {
              title: 'Basic',
              href: '/materials/web-basic',
            },
            {
              title: 'Service',
              href: '/materials/service',
            },
            {
              title: 'Startup',
              href: '/materials/startup',
            },
            {
              title: 'Enterprise',
              href: '/materials/enterprise',
            },
            {
              title: 'Cloud Hosting',
              href: '/materials/cloud-hosting',
            },
            {
              title: 'Agency',
              href: '/materials/agency',
            },
            {
              title: 'Design Company',
              href: '/materials/design-company',
            },
            {
              title: 'Logistics',
              href: '/materials/logistics',
            },
          ],
        },
      },
    },
    pages: {
      title: 'Pages',
      id: 'supported-pages',
      children: {
        career: {
          groupTitle: 'Career',
          pages: [
            {
              title: 'Lising',
              href: '/materials/career-listing',
            },
            {
              title: 'Lising Minimal',
              href: '/materials/career-listing-minimal',
            },
            {
              title: 'Opening',
              href: '/materials/career-opening',
            },
          ],
        },
        helpCenter: {
          groupTitle: 'Help center',
          pages: [
            {
              title: 'Overview',
              href: '/materials/help-center',
            },
            {
              title: 'Article',
              href: '/materials/help-center-article',
            },
          ],
        },
        company: {
          groupTitle: 'Company',
          pages: [
            {
              title: 'About',
              href: '/materials/about',
            },
            {
              title: 'About (Cover)',
              href: '/materials/about-side-cover',
            },
            {
              title: 'Pricing',
              href: '/materials/pricing',
            },
            {
              title: 'Terms',
              href: '/materials/company-terms',
            },
          ],
        },
        contact: {
          groupTitle: 'Contact',
          pages: [
            {
              title: 'Reach View',
              href: '/materials/contact-page',
            },
            {
              title: 'Sidebar Map',
              href: '/materials/contact-sidebar-map',
            },
            {
              title: 'Cover',
              href: '/materials/contact-page-cover',
            },
          ],
        },
        blog: {
          groupTitle: 'Blog',
          pages: [
            {
              title: 'Newsroom',
              href: '/materials/blog-newsroom',
            },
            {
              title: 'Reach View',
              href: '/materials/blog-reach-view',
            },
            {
              title: 'Search',
              href: '/materials/blog-search',
            },
            {
              title: 'Article',
              href: '/materials/blog-article',
            },
          ],
        },
        portfolio: {
          groupTitle: 'Portfolio',
          pages: [
            {
              title: 'Basic',
              href: '/materials/portfolio-page',
            },
            {
              title: 'Masonry',
              href: '/materials/portfolio-masonry',
            },
            {
              title: 'Grid View',
              href: '/materials/portfolio-grid',
            },
            {
              title: 'Parallax Effect',
              href: '/materials/agency',
            },
          ],
        },
      },
    },
    account: {
      title: 'Account',
      id: 'account',
      children: {
        settings: {
          groupTitle: 'Settings',
          pages: [
            {
              title: 'General',
              href: '/materials/account/?pid=general',
            },
            {
              title: 'Security',
              href: '/materials/account/?pid=security',
            },
            {
              title: 'Notifications',
              href: '/materials/account/?pid=notifications',
            },
            {
              title: 'Billing',
              href: '/materials/account/?pid=billing',
            },
          ],
        },
        signup: {
          groupTitle: 'Sign up',
          pages: [
            {
              title: 'Simple',
              href: '/materials/signup-simple',
            },
            {
              title: 'Cover',
              href: '/materials/signup-cover',
            },
          ],
        },
        signin: {
          groupTitle: 'Sign in',
          pages: [
            {
              title: 'Simple',
              href: '/materials/signin-simple',
            },
            {
              title: 'Cover',
              href: '/materials/signin-cover',
            },
          ],
        },
        password: {
          groupTitle: 'Password reset',
          pages: [
            {
              title: 'Simple',
              href: '/materials/password-reset-simple',
            },
            {
              title: 'Cover',
              href: '/materials/password-reset-cover',
            },
          ],
        },
        error: {
          groupTitle: 'Error',
          pages: [
            {
              title: 'Simple',
              href: '/materials/not-found',
            },
            {
              title: 'Cover',
              href: '/materials/not-found-cover',
            },
          ],
        },
      },
    },
  };

  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const handleSidebarOpen = (): void => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = (): void => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Topbar
        onSidebarOpen={handleSidebarOpen}
        pages={pages}
        themeMode={themeMode}
        themeToggler={themeToggler}
      />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>
        <Divider />
        {children}
      </main>
      <Footer pages={pages} />
    </div>
  );
};

export default Main;
