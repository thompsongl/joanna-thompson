import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

const Social = ({ businessData, theme }) => (
  <React.Fragment>
    {businessData.acf.instagram && <Link href={businessData.acf.instagram} target="_blank" rel="noreferrer"><img src={`https://icon.now.sh/instagram/${theme.iconColor}`} alt="Follow me on Instagram" /></Link>}
    {businessData.acf.facebook && <Link href={businessData.acf.facebook} target="_blank" rel="noreferrer"><img src={`https://icon.now.sh/facebook/${theme.iconColor}`} alt="Friend me on Facbook" /></Link>}
    {businessData.acf.twitter && <Link href={businessData.acf.twitter} target="_blank" rel="noreferrer"><img src={`https://icon.now.sh/twitter/${theme.iconColor}`} alt="Follow me on Twitter" /></Link>}
    {businessData.acf.pinterest && <Link href={businessData.acf.pinterest} target="_blank" rel="noreferrer"><img src={`https://icon.now.sh/pinterest/${theme.iconColor}`} alt="Follow me on Pinterest" /></Link>}
  </React.Fragment>
);
Social.propTypes = {
  businessData: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({}).isRequired,
};

export default Social;
