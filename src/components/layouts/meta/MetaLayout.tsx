import Head from 'next/head';
import { NextSeo } from 'next-seo';
import React from 'react';

import { AppConfig } from '@/utils/AppConfig';

export interface IMetaProps {
  title: string;
  description: string;
  canonical?: string;
}

const MetaLayout: React.FC<IMetaProps> = (props: IMetaProps) => {
  const favicons: Array<React.ComponentPropsWithoutRef<'link'>> = [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicon/apple-touch-icon.png',
      key: 'apple',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon/favicon-32x32.png',
      key: 'icon32',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon/favicon-16x16.png',
      key: 'icon16',
    },
    {
      rel: 'manifest',
      href: '/favicon/site.webmanifest',
      key: 'manifest',
    },
    {
      rel: 'mask-icon',
      href: '/favicon/safari-pinned-tab.svg',
      color: '#00e887',
      key: 'safariPinnedTab',
    },
    {
      rel: 'shortcut icon',
      href: '/favicon.ico',
      key: 'icon',
    },
  ];

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        {favicons.map((linkProps) => (
          <link key={linkProps.key} {...linkProps} />
        ))}
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  );
};
export default MetaLayout;
