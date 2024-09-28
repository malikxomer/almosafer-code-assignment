import { FC } from "react";

import "./styles.scss";

const Loader: FC = (): JSX.Element => (
  <section data-testid="loader-component" className="loading-spinner-wrapper">
    <span className="loader" />
  </section>
);
export default Loader;
