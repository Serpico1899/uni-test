import styled from 'styled-components';

import { Graph } from 'fr/fr-shared';
import { getCountriesByGraphMethods } from 'fr/fr-stated';

export function Index() {
  return <Graph />;
}

export default Index;

export const getServerSideProps = async () => {
  const countries = await getCountriesByGraphMethods();

  return {
    props: {
      initialZustandState: { countries },
    },
  };
};
