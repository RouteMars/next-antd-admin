import { Layout, Typography } from 'antd';

interface ErrorLayoutProps {
  statusCode: number;
}

const ErrorLayout = (props: ErrorLayoutProps) => {
  const { statusCode } = props;

  return (
    <Layout>
      <Typography.Text>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on axiosClient'}
      </Typography.Text>
    </Layout>
  );
};

export default ErrorLayout;
