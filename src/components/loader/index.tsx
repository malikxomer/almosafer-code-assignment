import { FC } from "react";

import "./styles.scss";

const Loader: FC = (): JSX.Element => (
  <section className="loading-spinner-wrapper">
    <span className="loader" />
  </section>
);
export default Loader;
