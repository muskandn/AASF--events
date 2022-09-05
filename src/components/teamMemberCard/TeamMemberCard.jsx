import React from 'react';
import './teamMemberCard.css';
import CondiontalRender from '../condtionalRender/ConditionalRender';
import * as FaIcons from 'react-icons/fa';
const TeamMemberCard = ({
  name,
  batch,
  designation,
  image,
  instagram,
  facebook,
  twitter,
  linkedIn,
  medium,
}) => {
  return (
    <div className='team'>
      <div className='teamMemberCard'>
        <div className='teamMemberCard__image'>
          <img src={image} alt='' />
        </div>
        <div className='teamMemberCard__name'>
          <h3>{name}</h3>
        </div>
        <div className='socialicons-designation'>
          <div className='teammemberCard__socialIcons'>
            <CondiontalRender condition={instagram}>
              <a
                href={instagram}
                target='_blank'
                className='teamCard__socialicon'
                aria-hidden='true'
                rel='noreferrer'
              >
                <FaIcons.FaInstagram></FaIcons.FaInstagram>
              </a>
            </CondiontalRender>

            <CondiontalRender condition={linkedIn}>
              <a
                href={linkedIn}
                target='_blank'
                className='teamCard__socialicon'
                aria-hidden='true'
                rel='noreferrer'
              >
                <FaIcons.FaLinkedinIn></FaIcons.FaLinkedinIn>
              </a>
            </CondiontalRender>

            <CondiontalRender condition={facebook}>
              <a
                href={facebook}
                target='_blank'
                className='teamCard__socialicon'
                aria-hidden='true'
                rel='noreferrer'
              >
                <FaIcons.FaFacebookF></FaIcons.FaFacebookF>
              </a>
            </CondiontalRender>
            <CondiontalRender condition={twitter}>
              <a
                href={twitter}
                target='_blank'
                className='teamCard__socialicon'
                aria-hidden='true'
                rel='noreferrer'
              >
                <FaIcons.FaTwitter></FaIcons.FaTwitter>
              </a>
            </CondiontalRender>
            <CondiontalRender condition={medium}>
              <a
                href={medium}
                target='_blank'
                className='teamCard__socialicon'
                aria-hidden='true'
                rel='noreferrer'
              >
                <FaIcons.FaMediumM></FaIcons.FaMediumM>
              </a>
            </CondiontalRender>
          </div>
          <div className='teamMemberCard__designation'>
            {batch}
            <br />
            {designation}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
