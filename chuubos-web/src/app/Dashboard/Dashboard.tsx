import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { useState } from 'react';
import { Config } from '../utils/Config'


const Dashboard: React.FunctionComponent = () => {

  const apiUrl = Config.getAPIServerURL() || 'http://localhost:8080';

  const [connected, setConnected] = useState(false);

  fetch( apiUrl + "/hello").then(value => {value.status == 200 ? setConnected(true): console.log("Error!")});

 return ( <PageSection>
    <Title headingLevel="h1" size="lg">{connected?"Connected!":"Not Connected!"}</Title>
  </PageSection>)
}

export { Dashboard };
