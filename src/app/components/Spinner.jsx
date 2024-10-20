import ClipLoader from 'react-spinners/ClipLoader'; // Import your desired spinner

const Spinner = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Full viewport height for centering
      position: 'fixed', // Fixed position
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
      zIndex: 9999 // Ensure spinner is on top of other elements
    }}>
      <ClipLoader color="#3498db" size={50} /> {/* Change color and size as needed */}
    </div>
  );
};

export default Spinner;
