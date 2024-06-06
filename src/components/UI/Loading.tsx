import "./Loading.css";
export const Loading = () => {
  return (
    <div data-testid="loading-container" className="spinner-container">
      <div className="spinner"></div>;
    </div>
  );
};
