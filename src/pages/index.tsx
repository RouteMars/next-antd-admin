import { useRouter } from 'next/router';

const redirectTo = '/menu1';

const Index = () => {
  const router = useRouter();

  if (typeof window !== 'undefined') {
    void router.push(redirectTo);
    return;
  }

  return <></>;
};

export default Index;
