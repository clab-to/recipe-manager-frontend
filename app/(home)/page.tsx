'use client';

import SideScrollArea from '@/components/SideScrollArea';

const Page = () => {
  return (
    <>
      <a>よく見られているレシピ</a>
      <SideScrollArea />
      <a>過去に見たレシピ</a>
      <SideScrollArea />
    </>
  );
};
export default Page;
