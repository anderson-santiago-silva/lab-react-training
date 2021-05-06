import React from 'react';

import './IdCard.css';

const genderEnum = {
  female: 'female',
  male: 'male',
};

const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {

  const birthDate = (date) => date.toString().split(' ', 4).join(' ');

  const getGender = gender => genderEnum[gender] ? genderEnum[gender] : 'unknown';
  const getHight = height => height / 100;

  return (
    <div className="container-card">
      <img src={picture} alt={`${firstName} ${lastName} profile`}/>
      
      <div>
        <p><strong>First name:</strong> {firstName}</p>
        <p><strong>Last name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {getGender(gender)}</p>
        <p><strong>Height:</strong> {getHight(height)}m</p>
        <p><strong>Birth:</strong> {birthDate(birth)}</p>
      </div>
    </div>
  );
};

export default IdCard;