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
      <div className="banner d-flex justify-content-between overflow-hidden">
        <div className="banner-details d-flex flex-column justify-content-center ps-5">
          <div className="product-title">
            <motion.h4
              layout
              key={item.id}
              initial={{ x: -200, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="fw-bold m-0"
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
              className="fw-bolder m-0"
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
          <div className="banner-button mt-2">
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
        <div className="banner-image d-flex justify-content-center position-relative pe-5">
          <motion.div
            layout
            key={item.id + "image"}
            initial={{ x: 200, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className="product-image m-0 d-flex justify-content-center align-content-center"
          >
            <img className="object-fit-contain" src={item.image} alt={item.title} />
          </motion.div>
          <div className="banner-description position-absolute bottom-0 text-end pe-3 d-sm-none">
            <motion.p
              layout
              key={item.id + "description"}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            >
              {item.description}
            </motion.p>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Banner;
