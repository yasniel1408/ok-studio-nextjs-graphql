import { Spinner } from 'reactstrap';

export default function PageChange({ path }: { path: string }) {
  return (
    <div className="page-transition-wrapper-div">
      <div className="page-transition-icon-wrapper mb-3">
        <Spinner color="blue" style={{ width: '6rem', height: '6rem', borderWidth: '.3rem' }} />
      </div>
      <h4 className="title text-white">Loading page contents for: {path}</h4>
    </div>
  );
}
