"use client";
import { motion } from "framer-motion";
import Container from "../components/Container";
import Link from "next/link";
import FooterList from "./../components/footer/FooterList";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const AboutDetails = () => {
  return (
    <div className="p-5">
      <Container>
        <motion.div className="mt-24">
          <motion.h1 className="text-4xl font-bold py-3">About Us</motion.h1>
          <motion.p className="text-slate-400 py-5">
            G.A Divine Mission (G.A Divine Mission) is created by human research
            and human mind read. The main objective of Divine Mission is to
            deliver the latest information to our fans in the fastest way. Many
            expert philosopher work tirelessly day and night to create this
            theoretically & health tips for daily life hacks.
          </motion.p>

          <motion.p className="text-slate-400 py-5">
            The main objective of Divine Mission is to create a loyal base of
            its readers who watch online news on web and mobile. We are
            committed to provide fast and accurate news covering national,
            international, user interest information, lifestyle news etc.
          </motion.p>

          <motion.p className="text-slate-400 py-5">
            At the time of planning of this website, all the owners and writers
            were completely sure as to why this news website was created. Social
            Media News and Technology User satisfaction is our priority, this
            was the only reason why this brain child took almost a year to take
            shape.
          </motion.p>

          <motion.p className="text-slate-400 py-5">
            G.A Divine Mission aims to provide users with information that helps
            them in daily life, as well as content that provides entertainment
            and satisfies the desire to read.
          </motion.p>
          <motion.p className="text-slate-400 py-5">
            You will get every type of information on this website –
          </motion.p>
          <motion.div>
            <motion.div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
              <FooterList>
                <motion.h3
                  initial={{
                    opacity: 0.9,
                    color: "#02949b",
                    fontWeight: "bold",
                  }}
                  animate={{
                    x: [0, -100, 0],
                    opacity: 1,
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.3,
                  }}
                >
                  Learn Divine Mission
                </motion.h3>
                <Link href="/divine/psychology">
                  <motion.div
                    initial={{ scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ scale: 1.2, color: "#02949b" }}
                  >
                    Psychology
                  </motion.div>
                </Link>
                <Link href="/divine/meditation">
                  <motion.div
                    initial={{ scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ scale: 1.2, color: "#02949b" }}
                  >
                    Meditation
                  </motion.div>
                </Link>
                <Link href="/divine/exercise">
                  <motion.div
                    initial={{ scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ scale: 1.2, color: "#02949b" }}
                  >
                    Exercise
                  </motion.div>
                </Link>
                <Link href="/divine/mind-fresh">
                  <motion.div
                    initial={{ scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ scale: 1.2, color: "#02949b" }}
                  >
                    Mind Fresh Idea
                  </motion.div>
                </Link>
                <Link href="/divine/change-life">
                  <motion.div
                    initial={{ scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ scale: 1.2, color: "#02949b" }}
                  >
                    Change-Life
                  </motion.div>
                </Link>
                <Link href="/divine/divine-power">
                  <motion.div
                    initial={{ scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ scale: 1.2, color: "#02949b" }}
                  >
                    Divine Power
                  </motion.div>
                </Link>
              </FooterList>

              <FooterList>
                <motion.h3
                  initial={{
                    opacity: 0.9,
                    color: "#02949b",
                    fontWeight: "bold",
                  }}
                  animate={{
                    x: [0, -100, 0],
                    opacity: 1,
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.3,
                  }}
                >
                  Devotional Service
                </motion.h3>
                <Link href="/divine/archeology">
                  <motion.div
                    initial={{ scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ scale: 1.2, color: "#02949b" }}
                  >
                    Archeology
                  </motion.div>
                </Link>
                <Link href="/divine/spiritual-education">
                  <motion.div
                    initial={{ scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ scale: 1.2, color: "#02949b" }}
                  >
                    Spiritual Education{" "}
                  </motion.div>
                </Link>
                <Link href="/divine/anthropology">
                  <motion.div
                    initial={{ scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ scale: 1.2, color: "#02949b" }}
                  >
                    Anthropology
                  </motion.div>
                </Link>
                <Link href="/divine/murshid-theory">
                  <motion.div
                    initial={{ scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ scale: 1.2, color: "#02949b" }}
                  >
                    Murshid Theory
                  </motion.div>
                </Link>
                <Link href="/divine/factorAction">
                  <motion.div
                    initial={{ scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ scale: 1.2, color: "#02949b" }}
                  >
                    FAQs
                  </motion.div>
                </Link>
              </FooterList>

              <FooterList>
                <motion.div className="w-full mb-6 md:mb-0">
                  <motion.h3
                    initial={{
                      opacity: 0.9,
                      color: "#02949b",
                      fontWeight: "bold",
                    }}
                    animate={{
                      x: [0, -100, 0],
                      opacity: 1,
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 2,
                      delay: 0.3,
                    }}
                  >
                    About Us
                  </motion.h3>
                  <motion.div className="cursor-pointer">
                    <motion.p
                      initial={{ scale: 0.85 }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ scale: 1, color: "#02949b" }}
                    >
                      Darbar e Gausol Azam
                    </motion.p>
                  </motion.div>
                </motion.div>
              </FooterList>

              <FooterList>
                <motion.h3
                  initial={{
                    opacity: 0.9,
                    color: "#02949b",
                    fontWeight: "bold",
                  }}
                  animate={{
                    x: [0, -100, 0],
                    opacity: 1,
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.3,
                  }}
                >
                  Follow Us
                </motion.h3>
                <motion.div className="flex gap-2">
                  <Link href="https://www.facebook.com/NT1196" target="_blank">
                    <motion.div
                      className="cursor-pointer md:py-5 py-0 text-center"
                      initial={{ x: 0 }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ scale: 1.2, color: "red" }}
                    >
                      <MdFacebook size={24} />
                    </motion.div>
                  </Link>

                  <Link
                    href="https://www.twitter.com/nasir1196"
                    target="_blank"
                  >
                    <motion.div
                      className="cursor-pointer md:py-5 py-0 text-center"
                      initial={{ x: 0 }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ scale: 1.2, color: "red" }}
                    >
                      <AiFillTwitterCircle size={24} />
                    </motion.div>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/nasir1196"
                    target="_blank"
                  >
                    <motion.div
                      className="cursor-pointer md:py-5 py-0 text-center"
                      initial={{ x: 0 }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ scale: 1.2, color: "red" }}
                    >
                      <AiFillLinkedin size={24} />
                    </motion.div>
                  </Link>

                  <Link href="https://github.com/nasir1196" target="_blank">
                    <motion.div
                      className="cursor-pointer md:py-5 py-0 text-center"
                      initial={{ x: 0 }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ scale: 1.2, color: "red" }}
                    >
                      <AiFillGithub size={24} />
                    </motion.div>
                  </Link>
                </motion.div>
              </FooterList>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default AboutDetails;
