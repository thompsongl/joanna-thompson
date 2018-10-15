import React from "react";
import Link from './Link';

const Social = props => (
    <React.Fragment>
        {props.businessData.acf.instagram && <Link href={props.businessData.acf.instagram} target="_blank"><img src={`https:icon.now.sh/instagram/${props.theme.iconColor}`} alt='Follow me on Instagram' /></Link>}
        {props.businessData.acf.facebook && <Link href={props.businessData.acf.facebook} target="_blank"><img src={`https:icon.now.sh/facebook/${props.theme.iconColor}`} alt='Friend me on Facbook' /></Link>}
        {props.businessData.acf.twitter && <Link href={props.businessData.acf.twitter} target="_blank"><img src={`https:icon.now.sh/twitter/${props.theme.iconColor}`} alt='Follow me on Twitter' /></Link>}
        {props.businessData.acf.pinterest && <Link href={props.businessData.acf.pinterest} target="_blank"><img src={`https:icon.now.sh/pinterest/${props.theme.iconColor}`} alt='Follow me on Pinterest' /></Link>}
    </React.Fragment>
)

export default Social;
