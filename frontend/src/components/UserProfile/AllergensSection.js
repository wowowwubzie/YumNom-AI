import React from 'react';
import '../../styles/UserProfile.css';

const allergens = [
  { name: 'Avocado', file: 'avacado_allergy.png' },
  { name: 'Peanut', file: 'nut_allergy.png' },
  { name: 'Mushroom', file: 'mushroom_allergy.png' },
];

const dietaryPrefs = [
    { name: 'Vegetarian', file: 'vegatarian.png' },
    ];
    
const editPref = [
    { name: 'Add Preference', file: 'add_pref_icon.png' },
  ];
  
const addAllergen = [
    { name: 'Add Allergen', file: 'add_pref_icon.png' },
  ];
  

const AllergensSection = () => {
  return (
    <div className="inline-section">
        <h4>Dietary Prefrences</h4>
    <div className="white-box">
      <div className="dietary-two-column">
        <div className="dietary-column">
          <p>Allergens</p>
          <div className="dietary-pill-container">
            {allergens.map((item) => (
              <div className="dietary-pill-icon" key={item.name}>
                <img src={`/${item.file}`} alt={item.name} />
                <span>{item.name}</span>
              </div>
            ))}
            {addAllergen.map((item) => (
                <div className="dietary-pill-icon" key={item.name}>
                    <img src={`/${item.file}`} alt={item.name} />
                    <span>{item.name}</span>
                </div>
                ))}
          </div>
        </div>

    <div className="dietary-divider" />
        <div className="dietary-column">
            <p>Dietary Preference</p>
            <div className="dietary-pill-container">
                {dietaryPrefs.map((item) => (
                <div className="dietary-pill-icon" key={item.name}>
                    <img src={`/${item.file}`} alt={item.name} />
                    <span>{item.name}</span>
                </div>
                ))}
                {editPref.map((item) => (
                <div className="dietary-pill-icon" key={item.name}>
                    <img src={`/${item.file}`} alt={item.name} />
                    <span>{item.name}</span>
                </div>
                ))}

            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default AllergensSection;
