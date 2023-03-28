import React, { PropsWithChildren, useState } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

import { useRouter } from 'next/router';

import { Breadcrumb, Layout } from 'antd';
import { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb';

import BaseProgressTemplate from '@template/_base/BaseProgressTemplate';
import DashboardHeader from '@component/header/DashboardHeader';
import DashboardSideMenu from '@component/menu/DashboardSideMenu';

import StyleProperty from '@util/StyleProperty';

const routesMaker = (pathSplit: string[]): BreadcrumbItemType[] => {
  const routes: BreadcrumbItemType[] = [];
  routes.push({ title: 'home', href: '/' });
  for (let v of pathSplit) {
    if (v.length > 0) routes.push({ title: v });
  }
  return routes;
};

const DashboardTemplate = (props: PropsWithChildren) => {
  const router = useRouter();
  const handle = useFullScreenHandle();

  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  const routes = routesMaker(router.pathname.split('/'));

  const renderContent = () => (
    <Layout.Content style={styles.content}>
      <Breadcrumb style={styles.contentBreadcrumb} items={routes} />
      {props.children}
    </Layout.Content>
  );

  return (
    <BaseProgressTemplate>
      <FullScreen handle={handle}>
        <Layout style={styles.layout}>
          <DashboardHeader
            fullScreenHandle={handle}
            isMenuCollapsed={isMenuCollapsed}
            onMenuCollapsed={setIsMenuCollapsed}
          />
          <Layout>
            <DashboardSideMenu
              isCollapsed={isMenuCollapsed}
              onCollapsed={setIsMenuCollapsed}
            />
            {renderContent()}
          </Layout>
        </Layout>
      </FullScreen>
    </BaseProgressTemplate>
  );
};

const styles = StyleProperty.create({
  layout: {
    height: '100vh',
  },
  content: {
    overflow: 'auto',
  },
  contentBreadcrumb: {
    margin: 8,
  },
});

export default DashboardTemplate;
