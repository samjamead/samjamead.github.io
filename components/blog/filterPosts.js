export default function ({ categories, filterPosts }) {
  function handleChange() {
    let category = document.getElementById("category-select").value;
    filterPosts(category);
  }

  return (
    <select id="category-select" onChange={handleChange}>
      <option value="All">All</option>
      {categories.map((category) => {
        return (
          <option key={category} value={category}>
            {category}
          </option>
        );
      })}
    </select>
  );
}
