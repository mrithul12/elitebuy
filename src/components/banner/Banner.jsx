import React, { useEffect, useState, useMemo } from "react";
import "./Banner.css";
import BannerData from "../product/Product";
import { AnimatePresence, motion } from 'framer-motion';

const Banner = () => {
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBannerIndex((prev) => (prev === BannerData.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearTimeout(timer);
  }, [bannerIndex]);

  const item = useMemo(() => BannerData[bannerIndex], [bannerIndex]);

  return (
    <AnimatePresence initial={false} mode="wait">
      <div className="banner overflow-hidden d-flex">
        <div className="banner-details col-8 d-flex flex-column justify-content-center ps-md-5">
          <div className="product-title">
            <motion.h4
              layout
              key={item.id}
              initial={{ x: -200, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="m-0 p-0"
            >
              {item.title}
            </motion.h4>
          </div>
          <div className="product-brand">
            <motion.h1
              layout
              key={item.id + "brand"}
              initial={{ x: -200, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
              className=" m-0"
            >
              {item.brand}
            </motion.h1>
          </div>
          <div className="product-category text-nowrap">
            <motion.h1
              layout
              key={item.id + "category"}
              initial={{ x: -200, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
              className="m-0"
            >
              {item.category}
            </motion.h1>
          </div>
          <div className="banner-button">
            <motion.button
              layout
              key={item.id + "button"}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            >
              more info
            </motion.button>
          </div>
        </div>
        <div className="banner-image col-5 d-flex align-items-center p-sm-5">
          <motion.div
            layout
            key={item.id + "image"}
            initial={{ x: 200, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className="product-image"
          >
            <img className="img-fluid" src={item.image} alt={item.title} />
          </motion.div>
        
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Banner;
