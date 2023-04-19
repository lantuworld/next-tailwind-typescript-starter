import Link from 'next/link';
import type { ReactNode } from 'react';

type IMainProps = {
    meta: ReactNode;
    children: ReactNode;
};

const Main = (props: IMainProps) => (
    <>
        {props.meta}
        <main className="content md:py-5 lg:px-3 xl:px-1 text-xl">{props.children}</main>
    </>
);

export default Main;
