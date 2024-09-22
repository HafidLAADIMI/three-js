const Button = ({ title, isBeam, containerStyles }) => {
  return (
    <div className={`btn ${containerStyles}`}>
      {isBeam && (
        <span className=" flex  h-3 w-3 relative">
          <span className="btn-ping" />
          <span className="btn-ping_dot"/>
        </span>
      )}
      {title}
    </div>
  );
};

export default Button;
