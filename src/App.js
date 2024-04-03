

import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling
import './responsive.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State declaration for search query

  // team members
  const teamMembers = [
    {
      id: 1,
      name: 'Davis George',
      position: 'CEO',
      image: 'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png',
      featureText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      socialLinks: {
        twitter: 'https://www.twitter.com',
        facebook: 'https://www.facebook.com'
      }
    },
    {
      id: 2,
      name: 'John Doe',
      position: 'CTO',
      image: 'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png',
      featureText: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      socialLinks: {
        twitter: 'https://www.twitter.com',
        facebook: 'https://www.facebook.com'
      }
    },
   
    {
      id: 3,
      name: 'Alice Smith',
      position: 'Lead Developer',
      
      image: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.14.png",
      featureText: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      socialLinks: {
        twitter: 'https://www.twitter.com/alicesmith',
        facebook: 'https://www.facebook.com/alicesmith'
      }
    },
    {
      id: 4,
      name: 'Bob Johnson',
      position: 'Marketing Manager',
      image: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.15.png",
      featureText: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      socialLinks: {
        twitter: 'https://www.twitter.com/bobjohnson',
        facebook: 'https://www.facebook.com/bobjohnson'
      }
    }
  ];

  // Filtered team members based on search query
  const filteredTeamMembers = teamMembers.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to handle search form submission
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // You can perform additional actions here if needed
  };

  return (
    <div className='container'>
      <div className='header'>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand">Navbar</a>
        <form className="form-inline" onSubmit={handleSearch}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Updating searchQuery state on input change
          />
          {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
        </form>
      </nav>
      </div>
   

      <div className="responsive-container-block outer-container">
        {filteredTeamMembers.length > 0 ? (
          filteredTeamMembers.map(member => (
            <div key={member.id} className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img className="team-member-image" src={member.image} alt={member.name}></img>
                </div>
                <p className="text-blk name">{member.name}</p>
                <p className="text-blk position">{member.position}</p>
                <p className="text-blk feature-text">{member.featureText}</p>
                <div className="social-icons">
                  <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <img className="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg" alt="Twitter"></img>
                  </a>
                  <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                    <img className="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg" alt="Facebook"></img>
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No match found</p>
        )}
      </div>
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import './App.css'; // Import CSS file for styling
// import './responsive.css';

// const App = () => {
//   const [searchQuery, setSearchQuery] = useState(''); // State declaration for search query
//   const [filters, setFilters] = useState({
//     domain: [],
//     gender: [],
//     availability: []
//   }); // State declaration for filters

//   // team members
//   const teamMembers = [
//     {
//       id: 1,
//       name: 'Davis George',
//       position: 'CEO',
//       domain: 'Technology',
//       gender: 'Male',
//       availability: 'Available',
//       image: 'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png',
//       featureText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       socialLinks: {
//         twitter: 'https://www.twitter.com',
//         facebook: 'https://www.facebook.com'
//       }
//     },
//     // Add more team members here
//   ];

//   // Function to handle search form submission
//   const handleSearch = (e) => {
//     e.preventDefault(); // Prevent default form submission behavior
//     // You can perform additional actions here if needed
//   };

//   // Function to handle filter selection
//   const handleFilterSelection = (filterType, value) => {
//     // Update the selected filter values
//     setFilters(prevFilters => ({
//       ...prevFilters,
//       [filterType]: prevFilters[filterType].includes(value)
//         ? prevFilters[filterType].filter(item => item !== value)
//         : [...prevFilters[filterType], value]
//     }));
//   };

//   // Function to check if a team member matches the selected filters
//   const matchesFilters = (member) => {
//     return (
//       (filters.domain.length === 0 || filters.domain.includes(member.domain)) &&
//       (filters.gender.length === 0 || filters.gender.includes(member.gender)) &&
//       (filters.availability.length === 0 || filters.availability.includes(member.availability))
//     );
//   };

//   return (
//     <div className='container'>
//       <div className='header'>
//         <nav className="navbar navbar-light bg-light justify-content-between">
//           <a className="navbar-brand">Navbar</a>
//           <form className="form-inline" onSubmit={handleSearch}>
//             <input
//               className="form-control mr-sm-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)} // Updating searchQuery state on input change
//             />
//             {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
//           </form>
//         </nav>
//       </div>

//       <div className="filters">
//         <h3>Filters</h3>
//         <div>
//           <label>
//             <input type="checkbox" value="Technology" onChange={(e) => handleFilterSelection('domain', e.target.value)} /> Technology
//           </label>
//           <label>
//             <input type="checkbox" value="Finance" onChange={(e) => handleFilterSelection('domain', e.target.value)} /> Finance
//           </label>
//           {/* Add more domain options here */}
//         </div>
//         <div>
//           <label>
//             <input type="checkbox" value="Male" onChange={(e) => handleFilterSelection('gender', e.target.value)} /> Male
//           </label>
//           <label>
//             <input type="checkbox" value="Female" onChange={(e) => handleFilterSelection('gender', e.target.value)} /> Female
//           </label>
//           {/* Add more gender options here */}
//         </div>
//         <div>
//           <label>
//             <input type="checkbox" value="Available" onChange={(e) => handleFilterSelection('availability', e.target.value)} /> Available
//           </label>
//           <label>
//             <input type="checkbox" value="Not Available" onChange={(e) => handleFilterSelection('availability', e.target.value)} /> Not Available
//           </label>
//           {/* Add more availability options here */}
//         </div>
//       </div>

//       <div className="responsive-container-block outer-container">
//         {teamMembers.filter(matchesFilters).map(member => (
//           <div key={member.id} className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
//             <div className="card">
//               <div className="team-image-wrapper">
//                 <img className="team-member-image" src={member.image} alt={member.name}></img>
//               </div>
//               <p className="text-blk name">{member.name}</p>
//               <p className="text-blk position">{member.position}</p>
//               <p className="text-blk feature-text">{member.featureText}</p>
//               <div className="social-icons">
//                 <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
//                   <img className="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg" alt="Twitter"></img>
//                 </a>
//                 <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
//                   <img className="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg" alt="Facebook"></img>
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
