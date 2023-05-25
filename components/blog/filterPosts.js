export default function ({ activeCategory, categories, filterPosts }) {
  function handleChange(event) {
    filterPosts(event.target.value);
  }

  return (
    <div className="container post-filter-wrapper">
      <div className="radio-wrapper" key="All">
        <input
          type="radio"
          id="All"
          name="radioGroup"
          value="All"
          checked={activeCategory === "All"}
          onChange={handleChange}
        />
        <label htmlFor="All">All</label>
      </div>
      {categories.map((category) => {
        return (
          <div className="radio-wrapper" key={category}>
            <input
              type="radio"
              id={category}
              name="radioGroup"
              value={category}
              checked={category === activeCategory}
              onChange={handleChange}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        );
      })}
    </div>
  );
}
