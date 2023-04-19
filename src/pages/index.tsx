import Meta from '@/components/layouts/meta/Meta';
import Main from '@/components/layouts/main/Main';

import { AppConfig } from '@/utils/AppConfig';

export default function Home() {
  return (
      <Main
          meta={
            <Meta
                title={`${AppConfig.site_name} - 首页`}
                description={AppConfig.site_name}
            />
          }
      >
        Hello World
      </Main>
  )
}
