import React from "react";
import styles from "./Filter.module.css";

const FilterComponent = ({ filters, onFilterChange }) => {
  return (
    <div className={styles.filterContainer}>
      
      <div className={styles.filterItem}>
        <input
          type="checkbox"
          id="customizable"
          onChange={(e) =>
            onFilterChange("customizable", e.target.checked ? "Yes" : "No")
          }
        />
        <label htmlFor="customizable">Customizable</label>
      </div>

      {/* Dropdowns for filters */}
      <div className={styles.filterItem}>
        <label>Ideal For</label>
        <select
          value={filters.idealFor}
          onChange={(e) => onFilterChange("idealFor", e.target.value)}
        >
          <option value="All">All</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>
      </div>

      <div className={styles.filterItem}>
        <label>Occasion</label>
        <select
          value={filters.occasion}
          onChange={(e) => onFilterChange("occasion", e.target.value)}
        >
          <option value="All">All</option>
          <option value="Work">Work</option>
          <option value="Casual">Casual</option>
          <option value="Party">Party</option>
        </select>
      </div>

      <div className={styles.filterItem}>
        <label>work</label>
        <select
          value={filters.occasion}
          onChange={(e) => onFilterChange("occasion", e.target.value)}
        >
          <option value="All">All</option>
          <option value="Work">Work</option>
          <option value="Casual">Casual</option>
          <option value="Party">Party</option>
        </select>
      </div>

      <div className={styles.filterItem}>
        <label>
    fabric</label>
        <select
          value={filters.occasion}
          onChange={(e) => onFilterChange("occasion", e.target.value)}
        >
          <option value="All">All</option>
          <option value="Work">Work</option>
          <option value="Casual">Casual</option>
          <option value="Party">Party</option>
        </select>
      </div>

      <div className={styles.filterItem}>
        <label>Sort</label>
        <select
          value={filters.occasion}
          onChange={(e) => onFilterChange("occasion", e.target.value)}
        >
          <option value="All">All</option>
          <option value="Work">Work</option>
          <option value="Casual">Casual</option>
          <option value="Party">Party</option>
        </select>
      </div>
    </div>
  );
};

export default FilterComponent;
