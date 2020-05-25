import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

import 'components/InfoBar/InfoBar.less';

const InfoBar = () => (
  <Col className="infoBar">
    <Col>
      <FontAwesomeIcon icon={faCircle} />
      {/* <h3>{room}</h3> */}
      roomName
    </Col>
    <Col>
      <FontAwesomeIcon icon={faTimes} className="float-right" />
    </Col>
  </Col>
);

export default InfoBar;