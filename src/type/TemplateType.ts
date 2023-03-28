import { ComponentType, PropsWithChildren } from 'react';

import { NextComponentType, NextPage, NextPageContext } from 'next';
import { AppProps } from 'next/app';
import { ScriptProps } from 'next/dist/client/script';
import { ExcludeRouterProps } from 'next/dist/client/with-router';

import { TemplateKeys } from '@template/Template';

export type MyPage<P = {}, IP = P> = NextPage<P, IP> & {
  template?: TemplateKeys;
};

export type MyAppProps = AppProps & {
  Component: NextComponentType<NextPageContext, any, any> & {
    template?: TemplateKeys;
  };
};

export type MyDynamicProps = AppProps &
  MyAppProps & {
    Component: ComponentType<
      ExcludeRouterProps<PropsWithChildren<ScriptProps>>
    > & {
      template?: TemplateKeys;
    };
  };
