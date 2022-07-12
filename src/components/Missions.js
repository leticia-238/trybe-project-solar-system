import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <section data-testid="missions" className="container-missions">
        <Title headline="Missões" />
        <div className=" container">
          {missions.map(({ name, year, country, destination }, index) => (
            <MissionCard
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
              key={ index }
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Missions;
