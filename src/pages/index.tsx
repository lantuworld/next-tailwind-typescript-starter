import Main from '@/components/layouts/main/Main';
import MetaLayout from '@/components/layouts/meta/MetaLayout';
import { AppConfig } from '@/utils/AppConfig';

export default function Home() {
  return (
    <Main
      meta={
        <MetaLayout
          title={`${AppConfig.site_name} - 首页`}
          description={AppConfig.site_name}
        />
      }
    >
      Hello World
    </Main>
  );
}
