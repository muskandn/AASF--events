import React from 'react';
import './teammembers.css';
import TeamMemberCard from '../teamMemberCard/TeamMemberCard';
import TeamMemberList from './TeamMemberData.json';

function TeamMembers() {
  return (
    <div className='teamMemberCards'>
      {TeamMemberList.map((member) => (
        <TeamMemberCard
          key={member.Name}
          name={member.Name}
          batch={member.Batch}
          designation={member.Designation}
          image={member.image}
          instagram={member.Instagram}
          facebook={member.Facebook}
          twitter={member.Twitter}
          linkedIn={member.LinkedIn}
          medium={member.Medium}
        />
      ))}
    </div>
  );
}

export default TeamMembers;
