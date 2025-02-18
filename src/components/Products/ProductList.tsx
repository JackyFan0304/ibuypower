import React from "react";
import { products } from "./data/products";
import styles from './ProductList.module.css';

const ProductList: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Best Selling Gaming PC</h1>
        <p className={styles.subtitle}>Prebuilt & Custom</p>
      </div>
      
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <span className={styles.productType}>
              {product.type} PC
            </span>
            
            <div className={styles.imageWrapper}>
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className={styles.productImage} 
              />
              <button className={styles.videoButton}>
                <span>View Video</span>
              </button>
            </div>

            <h2 className={styles.productName}>{product.name}</h2>
            
            <div className={styles.specList}>
              <div className={styles.specItem}>
                <img src="/icons/windows.svg" alt="OS" />
                <span>{product.os}</span>
              </div>
              <div className={styles.specItem}>
                <img src="/icons/cpu.svg" alt="CPU" />
                <span>{product.cpu}</span>
              </div>
              <div className={styles.specItem}>
                <img src="/icons/gpu.svg" alt="GPU" />
                <span>{product.gpu}</span>
              </div>
              <div className={styles.specItem}>
                <img src="/icons/motherboard.svg" alt="Motherboard" />
                <span>{product.motherboard}</span>
              </div>
              <div className={styles.specItem}>
                <img src="/icons/ram.svg" alt="RAM" />
                <span>{product.ram}</span>
              </div>
              <div className={styles.specItem}>
                <img src="/icons/storage.svg" alt="Storage" />
                <span>{product.storage}</span>
              </div>
            </div>

            <div className={styles.rewardPoints}>
              Reward Points Earn <span className={styles.pointsValue}>{product.rewards.points} points</span>
            </div>

            <div className={styles.shipping}>
              Free Shipping {product.shipping.type} - {product.shipping.date}
            </div>

            <div className={styles.priceSection}>
            <span className={styles.saveTag}>
                {product.discount.save}
            </span>
            <span className={styles.price}>${product.price.current}</span>
            <span className={styles.originalPrice}>${product.price.original}</span>
            </div>

            <div className={styles.installment}>
                Starting at ${product.payment.monthly}/mo with {product.payment.provider}
            </div>

            <button className={styles.button}>
              {product.type === 'Custom PC' ? 'Customize' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
