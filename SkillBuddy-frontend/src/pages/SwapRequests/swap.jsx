import React, { useState, useEffect } from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import SwapCard from '../../components/Swap-RequestCard/swap-card';
import SentRequestCard from '../../components/Swap-RequestCard/swap-request';

function Swap() {
  const [key, setKey] = useState('swap');
    return(
      <Container className="py-5">
      <Tabs
        id="swap-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-4"
        fill
        justify
      >
        <Tab eventKey="swap" title="Recieved Requests">
          <SwapCard />
          <SwapCard />
          <SwapCard />
        </Tab>

        <Tab eventKey="sent" title="Sent Requests">
          <SentRequestCard />
          <SentRequestCard />
        </Tab>
      </Tabs>
    </Container>
    );
}

export default Swap;