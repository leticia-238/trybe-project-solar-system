import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <section data-testid="solar-system" className="container-planets">
        <Title headline="Planetas" />
        <div className="container">
          { planets.map(({ name, image }, index) => (
            <PlanetCard
              planetName={ name }
              planetImage={ image }
              key={ index }
            />
          ))}
        </div>
      </section>
    );
  }
}

export default SolarSystem;
