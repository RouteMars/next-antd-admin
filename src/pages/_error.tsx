import { GetServerSidePropsContext } from 'next';

import ErrorLayout from '@layout/error/ErrorLayout';

import { MyPage } from '@type/TemplateType';

interface ErrorProps {
  statusCode: number;
}

const Error: MyPage<ErrorProps> = (props: ErrorProps) => {
  return <ErrorLayout statusCode={props.statusCode} />;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const code = context.res.statusCode ?? 404;
  return { props: { statusCode: code } };
}

Error.template = 'default';
export default Error;
