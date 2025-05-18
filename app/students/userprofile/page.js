import React from 'react';

function UserProfile() {
  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div style={styles.profileHeader}>
          <div style={styles.profileIcon}>
            
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4zm0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" />
            </svg>
          </div>
          <div style={styles.welcomeText}>
            Welcome,<br />
            <span style={styles.boldText}>JOHN DOE</span>
          </div>
        </div>
        <ul style={styles.navigation}>
          <li style={styles.navItem}>DASHBOARD</li>
          <li style={styles.navItem}>ENROLLMENT</li>
          <li style={styles.navItem}>COURSES</li>
          <li style={styles.navItem}>TASKS</li>
          <li style={styles.navItem}>GRADES</li>
          <li style={styles.navItem}>FEES</li>
          <li style={styles.navItem}>ANNOUNCEMENTS</li>
        </ul>
      </div>
      <div style={styles.mainContent}>
        <h2 style={styles.profileTitle}>USER PROFILE</h2>
        <div style={styles.profileCard}>
          <h3>{`JOHN DOE`}</h3>
          <p>STUDENT ID: 2025-00102</p>
          <hr style={styles.divider} />
          <h4>Basic Information</h4>
          <div style={styles.infoRow}>
            <span style={styles.infoLabel}>Email:</span>
            <span>SomethingSomething@email.com</span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.infoLabel}>Phone Number:</span>
            <span>123467890</span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.infoLabel}>Date Of Birth:</span>
            <span>01/01/2000</span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.infoLabel}>Gender:</span>
            <span>Appachi Helicopter</span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.infoLabel}>Status:</span>
            <span>Active</span>
          </div>
          <button style={styles.editButton}>Edit</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    fontFamily: 'sans-serif',
  },
  sidebar: {
    backgroundColor: '#3498db',
    color: '#fff',
    width: '250px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  profileHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px',
  },
  profileIcon: {
    backgroundColor: '#fff',
    color: '#3498db',
    borderRadius: '50%',
    padding: '15px',
    fontSize: '2em',
    marginRight: '15px',
  },
  welcomeText: {
    fontSize: '1.1em',
  },
  boldText: {
    fontWeight: 'bold',
  },
  navigation: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    width: '100%',
  },
  navItem: {
    padding: '15px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    borderRadius: '5px',
    marginBottom: '5px',
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: '30px',
  },
  profileTitle: {
    color: '#333',
    marginBottom: '20px',
  },
  profileCard: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
  },
  divider: {
    border: '1px solid #eee',
    margin: '20px 0',
  },
  infoRow: {
    display: 'flex',
    marginBottom: '10px',
    alignItems: 'center',
  },
  infoLabel: {
    fontWeight: 'bold',
    width: '150px',
    color: '#555',
  },
  editButton: {
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
  },
};

export default UserProfile;