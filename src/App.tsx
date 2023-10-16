import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/layout/theme-provider';
import Layout from './layout/Layout';
import { Theme } from '@radix-ui/themes';
import { sidebarNavItems } from './pages/nav-items';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Theme accentColor='orange'>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Layout>
              <Routes>
                {sidebarNavItems.map((item, index) => (
                  <Route
                    key={index}
                    path={item.href}
                    element={React.createElement(item.component)}
                  />
                ))}
              </Routes>
            </Layout>
          </Router>{' '}
        </QueryClientProvider>
      </Theme>
    </ThemeProvider>
  );
}
