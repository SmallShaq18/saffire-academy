import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faCalendar, faUsers, faTrophy, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import BackButton from '../components/BackButton';

const Athletics = () => {

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const [showDetails, setShowDetails] = useState({});
    const [activeTab, setActiveTab] = useState({});

    const toggleDetail = (index) => {
        setShowDetails(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const setTab = (sportIndex, tabName) => {
        setActiveTab(prev => ({
            ...prev,
            [sportIndex]: tabName
        }));
    };

    // Sample roster data
    const basketballRoster = [
        { name: "Marcus Johnson", grade: "12", position: "Point Guard", height: "6'1\"", stats: "15.2 PPG, 6.8 APG" },
        { name: "David Chen", grade: "11", position: "Shooting Guard", height: "6'3\"", stats: "12.5 PPG, 4.2 RPG" },
        { name: "Alex Rivera", grade: "10", position: "Small Forward", height: "6'5\"", stats: "10.8 PPG, 5.1 RPG" },
        { name: "Tyler Washington", grade: "12", position: "Power Forward", height: "6'7\"", stats: "13.4 PPG, 8.6 RPG" },
        { name: "Jordan Smith", grade: "11", position: "Center", height: "6'9\"", stats: "11.2 PPG, 9.3 RPG" }
    ];

    const trackRoster = [
        { name: "Sarah Williams", grade: "12", event: "100m, 200m", pr: "11.85s (100m)" },
        { name: "Emily Rodriguez", grade: "11", event: "400m, 800m", pr: "58.42s (400m)" },
        { name: "Michael Torres", grade: "10", event: "1500m, 3200m", pr: "4:12.8 (1500m)" },
        { name: "Jessica Park", grade: "12", event: "High Jump, Long Jump", pr: "5'6\" (HJ)" },
        { name: "Antonio Davis", grade: "11", event: "Shot Put, Discus", pr: "48'3\" (Shot)" }
    ];

    // Sample schedule data
    const upcomingGames = [
        { date: "Aug 15", opponent: "Lincoln Prep", time: "6:00 PM", location: "Home", sport: "Basketball" },
        { date: "Aug 18", opponent: "Valley High", time: "4:30 PM", location: "Away", sport: "Track" },
        { date: "Aug 22", opponent: "Central Academy", time: "7:00 PM", location: "Home", sport: "Basketball" },
        { date: "Aug 25", opponent: "Riverside School", time: "5:00 PM", location: "Away", sport: "Track" }
    ];

    const recentResults = [
        { date: "Aug 8", opponent: "Metro High", score: "W 78-65", sport: "Basketball" },
        { date: "Aug 5", opponent: "Eastside Prep", score: "W 2nd Place", sport: "Track Meet" },
        { date: "Aug 1", opponent: "North Hills", score: "L 72-76", sport: "Basketball" },
        { date: "Jul 28", opponent: "Regional Meet", score: "3 Gold Medals", sport: "Track" }
    ];

    const sports = [
        {
            title: "Boys/Girls Basketball",
            coach: "Coach Mike Thompson",
            email: "mthompson@saffire.edu",
            phone: "(555) 123-4567",
            season: "Fall/Winter 2024-25",
            description: "Our basketball program emphasizes teamwork, discipline, and academic excellence. We compete in the Metro Conference and have won 3 championships in the last 5 years.",
            achievements: [
                "Metro Conference Champions (2023, 2021, 2019)",
                "State Tournament Semifinals (2023)",
                "15 consecutive winning seasons",
                "12 players received college scholarships (last 3 years)"
            ],
            roster: basketballRoster,
            facilities: "State-of-the-art gymnasium with 1,200 seating capacity, professional-grade hardwood court, video analysis room"
        },
        {
            title: "Boys/Girls Track and Field",
            coach: "Coach Sarah Martinez",
            email: "smartinez@saffire.edu", 
            phone: "(555) 123-4568",
            season: "Spring 2025",
            description: "Track and Field at Saffire develops speed, strength, and endurance while building character. Our athletes compete in sprints, distance, jumps, and throws.",
            achievements: [
                "State Champions - Girls 4x400 Relay (2023)",
                "Regional Champions (2022, 2023)",
                "8 individual state qualifiers (2023)",
                "School records in 6 different events"
            ],
            roster: trackRoster,
            facilities: "8-lane all-weather track, jumping pits, throwing areas, indoor training facility"
        },
        {
            title: "Girls Volleyball",
            coach: "Coach Lisa Chen",
            email: "lchen@saffire.edu",
            phone: "(555) 123-4569", 
            season: "Fall 2024",
            description: "Our volleyball program builds strong fundamentals, teamwork, and competitive spirit. We focus on both individual skill development and team chemistry.",
            achievements: [
                "District Champions (2023)",
                "Conference Tournament Finalists (2022)",
                "10+ year playoff streak",
                "Academic All-Conference Team (5 years running)"
            ],
            roster: [
                { name: "Maya Patel", grade: "12", position: "Outside Hitter", height: "5'9\"" },
                { name: "Isabella Garcia", grade: "11", position: "Setter", height: "5'7\"" },
                { name: "Zoe Thompson", grade: "10", position: "Middle Blocker", height: "6'0\"" }
            ],
            facilities: "Competition gymnasium with professional net systems, video recording capabilities"
        },
        {
            title: "Boys/Girls Cross Country", 
            coach: "Coach Robert Kim",
            email: "rkim@saffire.edu",
            phone: "(555) 123-4570",
            season: "Fall 2024",
            description: "Cross Country builds endurance, mental toughness, and team unity. Our runners train on varied terrain and compete across the region.",
            achievements: [
                "State Qualifiers - 3 runners (2023)",
                "Conference Champions - Girls Team (2022)",
                "Sub-16 minute 5K school record",
                "Team GPA above 3.5 for 8 consecutive years"
            ],
            roster: [
                { name: "Emma Wilson", grade: "12", event: "5K", pr: "18:45" },
                { name: "Ryan Jackson", grade: "11", event: "5K", pr: "15:52" },
                { name: "Sophia Lee", grade: "10", event: "5K", pr: "19:23" }
            ],
            facilities: "Access to 5K course through campus trails, indoor track for winter training"
        },
        {
            title: "Boys/Girls Soccer",
            coach: "Coach Carlos Mendez", 
            email: "cmendez@saffire.edu",
            phone: "(555) 123-4571",
            season: "Spring 2025",
            description: "Soccer at Saffire emphasizes technical skills, tactical awareness, and sportsmanship. We develop well-rounded student-athletes who excel on and off the field.",
            achievements: [
                "Regional Semifinals (2023)",
                "Conference Champions - Boys (2022)",
                "Undefeated home record (2023)",
                "Fair Play Award winners (3 consecutive years)"
            ],
            roster: [
                { name: "Diego Santos", grade: "12", position: "Midfielder", goals: "12 goals, 8 assists" },
                { name: "Aisha Johnson", grade: "11", position: "Forward", goals: "15 goals" },
                { name: "Kevin O'Brien", grade: "10", position: "Defender", goals: "2 goals, 5 assists" }
            ],
            facilities: "Full-size grass field with professional goals, practice fields, equipment storage"
        }
    ];

    const TabContent = ({ sport, sportIndex, activeTab }) => {
        const currentTab = activeTab[sportIndex] || 'overview';
        
        switch(currentTab) {
            case 'roster':
                return (
                  
                    <div className="tab-content">
                        <h5 className="mb-3">Team Roster</h5>
                        <div className="row">
                            {sport.roster.map((player, index) => (
                                <div key={index} className="col-md-6 mb-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <h6 className="card-title">{player.name}</h6>
                                            <p className="card-text mb-1"><strong>Grade:</strong> {player.grade}</p>
                                            <p className="card-text mb-1"><strong>Position/Event:</strong> {player.position || player.event}</p>
                                            {player.height && <p className="card-text mb-1"><strong>Height:</strong> {player.height}</p>}
                                            {player.stats && <p className="card-text mb-1"><strong>Stats:</strong> {player.stats}</p>}
                                            {player.pr && <p className="card-text mb-1"><strong>Personal Record:</strong> {player.pr}</p>}
                                            {player.goals && <p className="card-text mb-1"><strong>Season Stats:</strong> {player.goals}</p>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'schedule':
                return (
                    <div className="tab-content">
                        <div className="row">
                            <div className="col-md-6">
                                <h5 className="mb-3">Upcoming Games</h5>
                                {upcomingGames.filter(game => {
    const sportName = sport.title.toLowerCase();
    const gameSport = game.sport.toLowerCase();
    return sportName.includes(gameSport);
}).map((game, index) => (
                                    <div key={index} className="card mb-2">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className=' schedule-content'>
                                                    <h6 className="mb-1 text-white"> vs {game.opponent}</h6>
                                                    <small className="text-light  ">{game.date} at {game.time}</small>
                                                </div>
                                                <span className={`badge ${game.location === 'Home' ? 'bg-success' : 'bg-primary'}`}>
                                                    {game.location}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md-6">
                                <h5 className="mb-3">Recent Results</h5>
                                {recentResults.filter(result => result.sport.includes(sport.title.split('/')[0]) || sport.title.includes(result.sport)).map((result, index) => (
                                    <div key={index} className="card mb-2">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className='schedule-content'>
                                                    <h6 className="mb-1 text-white">vs {result.opponent}</h6>
                                                    <small className="text-light">{result.date}</small>
                                                </div>
                                                <span className={`badge ${result.score.startsWith('W') ? 'bg-success' : result.score.includes('Gold') || result.score.includes('Place') ? 'bg-warning' : 'bg-danger'}`}>
                                                    {result.score}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'achievements':
                return (
                    <div className="tab-content">
                        <h5 className="mb-3">Program Achievements</h5>
                        <ul className="list-group list-group-flush">
                            {sport.achievements.map((achievement, index) => (
                                <li key={index} className="list-group-item d-flex align-items-center">
                                    <FontAwesomeIcon icon={faTrophy} className="text-warning me-2" />
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4">
                            <h6>Facilities</h6>
                            <p>{sport.facilities}</p>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="tab-content">
                        <div className="row">
                            <div className="col-md-8">
                                <p>{sport.description}</p>
                                <div className="mt-3">
                                    <h6>Season: {sport.season}</h6>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h6 className="mb-0">Contact Coach</h6>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text mb-2"><strong>{sport.coach}</strong></p>
                                        <p className="card-text mb-1">
                                            <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                                            <a href={`mailto:${sport.email}`}>{sport.email}</a>
                                        </p>
                                        <p className="card-text mb-0">
                                            <FontAwesomeIcon icon={faPhone} className="me-2" />
                                            {sport.phone}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
      <main>

        <section className="container-fluid athletics-header p-5">
            <div className="bg-image">
                <div className="p-5 dark-overlay d-flex align-items-center justify-content-center">
                    <div>
                        <BackButton />
                        <h1 className="text-white fw-bold text-center">Athletics</h1><br/>
                        <p className="text-white text-center">Welcome to Athletics at Saffire Academy!</p>
                        <p className="text-white text-center">Our Athletic Department's mission is to instill a sense of accomplishment and sportsmanship through a number of sports for both middle and high school. for high school, we are a part of the Reude Island Interscholastic League.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="container-fluid athletics-body p-5">
            
            <div className="row p-3 responrow">
                <div className="col-md-6">
                    <img src="images/3.jpg" width="100%" height="auto" loading='lazy' />
                </div>
                <div className="col-md-6 py-5">
                    <div style={{ border: "4px solid maroon", width: "20%" }}></div>
                    <h1 className="pt-2" style={{ color: "maroon" }}>MIDDLE SCHOOL ATHLETICS</h1>
                    <div className="py-3">
                        <p>Building fundamentals, character, and team spirit in grades 6-8. Our middle school athletics program focuses on skill development, sportsmanship, and preparing students for high school competition.</p>
                        <ul>
                            <li>Emphasis on participation and skill building</li>
                            <li>Modified competition schedules appropriate for age</li>
                            <li>Character development through sports</li>
                            <li>Preparation for high school athletics</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row p-3 responrow">
                <div className="col-md-6 py-5 order-2 order-md-1">
                    <div style={{ border: "4px solid maroon", width: "20%" }}></div>
                    <h1 className="pt-2" style={{ color: "maroon" }}>HIGH SCHOOL ATHLETICS</h1>
                    <div className="py-3">
                        <p>Competitive excellence and character development for grades 9-12. Our high school athletes compete at the highest levels while maintaining academic excellence and embodying school values.</p>
                        <ul>
                            <li>Varsity and JV competition levels</li>
                            <li>College recruitment opportunities</li>
                            <li>Academic and athletic scholarships</li>
                            <li>Leadership development programs</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 order-1 order-md-2">
                    <img src="images/29.jpg" width="100%" height="auto" loading='lazy' />
                </div>
            </div>

            {/* Athletic Department Stats */}
            <div className="row py-4">
                <div className="col-md-3 text-center p-2">
                    <div className="card text-white" style={{ background: "maroon" }}>
                        <div className="card-body">
                            <h3 className="card-title">15+</h3>
                            <p className="card-text">Sports Programs</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-center p-2">
                    <div className="card text-white" style={{ background: "maroon" }}>
                        <div className="card-body">
                            <h3 className="card-title">200+</h3>
                            <p className="card-text">Student Athletes</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-center p-2">
                    <div className="card text-white" style={{ background: "maroon" }}>
                        <div className="card-body">
                            <h3 className="card-title">12</h3>
                            <p className="card-text">Conference Titles</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-center p-2">
                    <div className="card text-white" style={{ background: "maroon" }}>
                        <div className="card-body">
                            <h3 className="card-title">3.4</h3>
                            <p className="card-text">Average GPA</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-3 rect-container d-flex align-items-center justify-content-center">
                <div className="">
                    {sports.map((sport, index) => (
                        <div className="rect p-2" key={index}>
                            <div className="d-flex rect-summary p-2" onClick={() => toggleDetail(index)} style={{ cursor: 'pointer' }}>
                                <FontAwesomeIcon className="fa px-3" icon={showDetails[index] ? faCaretUp : faCaretDown} />
                                <p className="mb-0">{sport.title}</p>
                            </div>
                            {showDetails[index] && (
                                <div className="rect-deets p-3">
                                    {/* Tab Navigation */}
                                    <nav className="nav nav-tabs mb-3">
                                        <button 
                                            className={`nav-link text-secondary ${(!activeTab[index] || activeTab[index] === 'overview') ? 'active' : ''}`}
                                            onClick={() => setTab(index, 'overview')}
                                        >
                                            Overview
                                        </button>
                                        <button 
                                            className={`nav-link text-secondary ${activeTab[index] === 'roster' ? 'active' : ''}`}
                                            onClick={() => setTab(index, 'roster')}
                                        >
                                            <FontAwesomeIcon icon={faUsers} className="me-1" />
                                            Roster
                                        </button>
                                        <button 
                                            className={`nav-link text-secondary ${activeTab[index] === 'schedule' ? 'active' : ''}`}
                                            onClick={() => setTab(index, 'schedule')}
                                        >
                                            <FontAwesomeIcon icon={faCalendar} className="me-1" />
                                            Schedule
                                        </button>
                                        <button 
                                            className={`nav-link text-secondary ${activeTab[index] === 'achievements' ? 'active' : ''}`}
                                            onClick={() => setTab(index, 'achievements')}
                                        >
                                            <FontAwesomeIcon icon={faTrophy} className="me-1" />
                                            Achievements
                                        </button>
                                    </nav>
                                    
                                    <TabContent sport={sport} sportIndex={index} activeTab={activeTab} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>   
            </div>

            {/* Registration CTA */}
            <div className="row py-5">
                <div className="col-12 text-center">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h3 className="card-title" style={{ color: "maroon" }}>Interested in Joining a Team?</h3>
                            <p className="card-text">Tryouts for fall sports begin in August. Contact our Athletic Director for more information about eligibility requirements and tryout dates.</p>
                            <button className="btn btn-primary btn-lg" style={{ backgroundColor: "maroon", borderColor: "maroon" }}>
                                Contact Athletic Director
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
      </main>    
    );
};

export default Athletics;


