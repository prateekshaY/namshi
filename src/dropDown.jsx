const Dropdown = ({ onSelect }) => {
    const options = [
      { value: "us", label: "United State of America" },
      { value: "ind", label: "India" },
      { value: "pak", label: "Pakistan" }
    ];
  
    return (
      <select className="dropDown"
        onChange={(event) => {
          onSelect(event.target.value);
        }}
      >
        {options.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </select>
    );
  };
  
  export default Dropdown;
  