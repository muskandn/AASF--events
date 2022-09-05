import React from 'react';
import CustomheaderComponent from '../../components/custom-header-component/CustomheaderComponent';
import TeamMembers from '../../components/TeamMembers/TeamMembers';

function TeamScreen() {
  return (
    <div>
      <CustomheaderComponent
        img='https://res.cloudinary.com/dzerj4bzd/image/upload/v1661948269/AASF%20Website/image_6_q2gikl.png'
        text='Our Team'
      />
      <TeamMembers />
    </div>
  );
}

export default TeamScreen;
