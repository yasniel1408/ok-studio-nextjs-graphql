import Link from 'next/link';
import { Spinner } from 'reactstrap';

const index = () => {
  return (
    <div>
      <Link href={'login'}> login</Link>
      <Spinner color="white" style={{ width: '6rem', height: '6rem', borderWidth: '.3rem' }} />
    </div>
  );
};

export default index;
