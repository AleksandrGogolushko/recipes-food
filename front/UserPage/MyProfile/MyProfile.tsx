import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import './MyProfile.css';
import { motion } from 'framer-motion';

const PageVariants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const MyProfile: React.FunctionComponent = () => (
  <motion.div
    exit="out"
    animate="in"
    initial="out"
    variants={PageVariants}
  >
  </motion.div>
);
