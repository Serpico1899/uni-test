/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { graphqlClient } from '../../../graphRequest';
import { store } from '../../../nextStore';
import { RestApiRequest } from '../../../restApiRequest';

export const getCountriesByGraphMethods = async () => {
  const str = store;

  str &&
    str.setState((states) => ({
      ...states,
      countries: {
        ...states.countries,
        loader: true,
      },
    }));

  const gql = `{
    getFiftyCitiesOfCountry( pageNumber:1, limit:50){
      name,
      abb,
      population,
      provinces{
        name,
        abb,
          population,
        cities{
          id,
          name,
          abb,
          population,
        }
    }
    }
  }`;

  try {
    const res: any = await graphqlClient.request(gql);
    console.log(res);

    str &&
      str.setState((states) => ({
        ...states,
        countries: {
          ...states.countries,
          data: res.getFiftyCitiesOfCountry,
          loader: false,
        },
      }));

    return {
      data: res?.getFiftyCitiesOfCountry,
      error: null,
      loader: false,
    };
  } catch (error: any) {
    str &&
      str.setState((states) => ({
        countries: {
          ...states.countries,
          error: error.message ? error.message : 'we have problem',
          loader: false,
        },
      }));

    return {
      data: [],
      error: error.message ? error.message : 'we have problem',
      loader: false,
    };
  }
};
