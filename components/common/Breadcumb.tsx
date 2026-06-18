type BreadcumbProps = {
  title: string;
  tagline?: string;
};

export default function Breadcumb({
  title,
  tagline = "Because Clean Feels Better",
}: BreadcumbProps) {
  return (
    <div className="breadcumb-area box-style">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcumb-wrap">
              <h2>{tagline}</h2>
              <h3>{title}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
