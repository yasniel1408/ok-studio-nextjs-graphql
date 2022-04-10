import Link from 'next/link';

const index = () => {
  return (
    <div>
      <Link href="login"> login</Link>
      <Link href="dashboard"> Dashboard</Link>
    </div>
  );
};

export default index;
