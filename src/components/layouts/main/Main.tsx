import Link from 'next/link';
import type { ReactNode } from 'react';

type IMainProps = {
    meta: ReactNode;
    children: ReactNode;
};

const Main = (props: IMainProps) => (
    <>
        {props.meta}
        <main className="content py-5 text-xl">{props.children}</main>
    </>
);

export default Main;
