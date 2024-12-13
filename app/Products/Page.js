"use client";

import React, { useState, useEffect } from "react";
import styles from "./Products.module.css";
import FilterComponent from "../../components/Filter";
import LikeButton from "@/components/LikeButton";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    idealFor: "All",
    occasion: "All",
    work: "All",
    fabric: "All",
    sort: "recommended", 
  });
  const [filtershow, setFilterShow] = useState(false); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); 
      }
    };
    fetchProducts();
  }, []);

  const handleFilterChange = (category, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [category]: value }));
  };

  useEffect(() => {
    let updatedProducts = [...products];

    
    if (filters.idealFor !== "All") {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === filters.idealFor
      );
    }

    
    if (filters.sort === "low-high") {
      updatedProducts = updatedProducts.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "high-low") {
      updatedProducts = updatedProducts.sort((a, b) => b.price - a.price);
    } else if (filters.sort === "new") {
      updatedProducts = updatedProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (filters.sort === "popular") {
      updatedProducts = updatedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    }

    setFilteredProducts(updatedProducts);
  }, [filters, products]);

  return (
    <div>
    <div className={styles.tabbar}>
   
            <div className={styles.leftbar}>
            
            <span>{filteredProducts.length} ITEMS</span>
                <div className={styles.filterbutton}>
                <button  onClick={() => setFilterShow(!filtershow)} aria-label={filtershow ? "Hide Filters" : "Show Filters"}>
                                        {filtershow ? "HIDE FILTERS" : "SHOW FILTERS"}
                                    </button>
                </div>
                    

                    
            </div>
            <div className={styles.rightbar}>
            <select
                        onChange={(e) => handleFilterChange("sort", e.target.value)}
                        value={filters.sort}
                        aria-label="Sort products by"
                    >
                        <option value="recommended">RECOMMENDED</option>
                        <option value="new">NEWEST FIRST</option>
                        <option value="popular">POPULAR</option>
                        <option value="low-high">PRICE: LOW TO HIGH</option>
                        <option value="high-low">PRICE: HIGH TO LOW</option>
                    </select>
            </div>
    </div>
      {loading ? (
        <div className={styles.loader}></div> 
      ) : (
        <div className={styles.productPage}>
          <div className={`${styles.productFilters} ${filtershow ? "" : styles.filterHidden}`}>
            {filtershow && (
              <FilterComponent
                filters={filters}
                onFilterChange={handleFilterChange}
              />
            )}
          </div>

          <div className={styles.productGrid}>
            {filteredProducts.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.imageContainer}>
                  <img src={product.image} alt={product.title} />
                </div>
                <div className={styles.productInfo}>
                  <h3 className={styles.productTitle}>{product.title}</h3>
                  <div className={styles.product2nd}>
                        <p className={styles.productPrice}>
                            Sign in or Create an account to see pricing
                        </p>
                        <div className={styles.likeButtonWrapper}>
                            <LikeButton />
                        </div>
                    </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
