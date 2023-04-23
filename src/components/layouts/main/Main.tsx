import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <>
    {props.meta}
    <main className="text-xl md:py-5 lg:px-3 xl:px-1">{props.children}</main>
  </>
);

export default Main;
