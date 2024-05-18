import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function ButtonWithTooltip({ tooltipClass,tooltipText, children,className,placement }) {
  return (
    <OverlayTrigger
      placement={placement} // You can change the placement as per your preference
      overlay={<Tooltip className={tooltipClass}>{tooltipText}</Tooltip>}
    >
      <button className={`border-0 ${className}`}>
        {children}
      </button>
    </OverlayTrigger>
  );
}

export default ButtonWithTooltip;
