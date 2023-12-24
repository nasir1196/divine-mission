"use client";
import { motion } from "framer-motion";
import Container from "../Container";
import FooterList from "./FooterList";
import Link from "next/link";
import { MdFacebook } from "react-icons/md";
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <motion.footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
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
                  Darbar e Gausul Azam
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

              <Link href="https://www.twitter.com/nasir1196" target="_blank">
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

              <Link
                href="https://www.youtube.com/channel/UCmd6uAf2brkxxe16TA9gZzA"
                target="_blank"
              >
                <motion.div
                  className="cursor-pointer md:py-5 py-0 text-center"
                  initial={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.2, color: "red" }}
                >
                  <AiFillYoutube size={24} />
                </motion.div>
              </Link>
            </motion.div>

            <motion.div className="flex md:flex-row sm:flex-col md:gap-3 gap-0 my-4">
              <Link href="/about">
                <motion.div
                  initial={{ scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.2, color: "#02949b" }}
                >
                  {" "}
                  About Us
                </motion.div>
              </Link>

              <Link href="/contact">
                <motion.div
                  initial={{ scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.2, color: "#02949b" }}
                >
                  {" "}
                  Contact Us
                </motion.div>
              </Link>
            </motion.div>

            <motion.div className="flex md:flex-row sm:flex-col md:gap-3 gap-0 my-2">
              <Link href="/divine/disclaimer">
                <motion.div
                  initial={{ scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.2, color: "#02949b" }}
                >
                  {" "}
                  Disclaimer
                </motion.div>
              </Link>

              <Link href="/divine/privacy-policy">
                <motion.div
                  initial={{ scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.2, color: "#02949b" }}
                >
                  Privacy Policy
                </motion.div>
              </Link>
            </motion.div>
          </FooterList>
        </motion.div>
      </Container>

      <motion.footer>
        <motion.p
          className="cursor-pointer md:py-5 py-0 text-center"
          initial={{ x: 0 }}
          transition={{ duration: 0.4 }}
          whileHover={{ color: "#02949b" }}
        >
          &copy; {new Date().getFullYear()} - {new Date().getMonth() + 1} -{" "}
          {new Date().getDate()} G.A Divine Mission All rights reserved.
        </motion.p>
      </motion.footer>
    </motion.footer>
  );
};

export default Footer;
