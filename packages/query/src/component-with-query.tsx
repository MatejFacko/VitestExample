import { useQuery } from '@tanstack/react-query';

export const ComponentWithQuery = () => {
  const { data } = useQuery({ queryKey: ['hello'], queryFn: () => 'hello' });

  return <>{data}</>;
};
