'use client'
import Image from 'next/image'
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { useState } from 'react'
import { useEffect } from 'react'
import { useInView } from "react-intersection-observer";
import Hero from '@/components/Hero/hero'
import Proud from '@/components/Proudus/proud'
import Nutshell from '@/components/Nutshell/nutshell'
import CompulsoryTrack from '@/components/compulsory/compulsoryTrack'
import SpecializedTrack from '@/components/Specialized/specialized'
import Outcome from '@/components/Outcome/outcome'

const Home = () => {
  let boxes :string =''
  return (
    <>
    <Hero/>
    <Proud/>
    <Nutshell/>
    <CompulsoryTrack/>
    <SpecializedTrack/>
    <Outcome/>
    </>
  )
}

export default Home