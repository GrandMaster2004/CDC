import React from "react";
import "./About.css";
import { FiGithub } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { motion, useScroll } from "framer-motion";
import { fadeIn } from "../variants";
import { DiLinux } from "react-icons/di";
import { IoCodeSlashOutline } from "react-icons/io5";
// import { motion } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="about_main"
    >
      <h1>About Us</h1>
      <div className="icons_icon">
        <motion.span
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <IoCodeSlashOutline className="icon icon_box" />
        </motion.span>
        <motion.span
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <DiLinux className="icon icon_box" />
        </motion.span>
        <img
          className="git_img"
          src="https://www.copsiitbhu.co.in/static/assets/img/landing/avatar.jpg"
          alt="img"
        />
        <motion.span
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <DiLinux className="icon icon_box" />
        </motion.span>
        <motion.span
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <IoCodeSlashOutline className="icon icon_box" />
        </motion.span>
      </div>

      <p>Coders & Developer Club || MMMUT Gorakhapur</p>
      <motion.div
        // variants={fadeIn("right", 0.2)}
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{ once: false, amount: 0.7 }}
        className="icons"
      >
        <div>
          <FiGithub className="li_item" />
        </div>
        <div>
          <FaFacebook className="li_item" />
        </div>
        <div>
          <FaLinkedinIn className="li_item" />
        </div>
        <div>
          <FaXTwitter className="li_item" />
        </div>
        <div>
          <FaGoogle />
        </div>
      </motion.div>
      <p className="about_text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ad
        placeat consequuntur assumenda excepturi quae earum aperiam, eaque
        facere iure. Magnam corporis error delectus numquam quasi unde et quia
        est repudiandae blanditiis reprehenderit tempore libero voluptas aperiam
        ipsum rerum, maiores quam aliquid exercitationem quidem ab sapiente
        modi. Mollitia illo qui, doloribus impedit molestiae laboriosam natus
        debitis magni necessitatibus laudantium facere ad recusandae similique
        reprehenderit commodi, in et nostrum quisquam ea distinctio repellat
        expedita officiis quo maiores.
        <br />
        Dolor ullam suscipit et beatae nesciunt laborum quasi repellat quidem ad
        nihil aut dolores culpa dicta deleniti natus perferendis, aliquam id.
        Voluptate culpa quisquam molestias blanditiis labore pariatur
        perferendis earum sint, optio ex soluta veritatis cumque non beatae
        laborum. Fugit quia magni consequatur dolorem voluptas minus eligendi
        quod sed natus dignissimos laboriosam fuga cupiditate ipsa saepe modi
        rerum veniam, consequuntur culpa quisquam autem aspernatur, qui
        necessitatibus. Autem, repudiandae impedit fugiat veniam ea officia ut
        rerum repellendus voluptas et, nisi animi ratione dolore esse vero
        numquam quisquam sint magnam corrupti quae rem? Reiciendis delectus eos
        dolorem accusamus. Labore amet, praesentium facilis dolorem impedit
        quidem exercitationem autem similique! Tempora praesentium ducimus modi
        pariatur doloribus tenetur fuga, qui enim quis optio quo sunt provident.
        <br />
        <br />
        Accusamus tempore optio officiis, distinctio maxime voluptate
        consequuntur nisi quisquam ea. Quis quidem deleniti sunt odit doloremque
        ipsa, laudantium ipsam molestias temporibus pariatur provident debitis
        quas, reprehenderit nemo. Quisquam earum inventore perferendis molestiae
        explicabo, dolorum recusandae? Labore soluta illum nulla obcaecati.
        Iusto consectetur libero quia, provident distinctio, voluptas nesciunt
        molestiae quas enim est cupiditate dolorum nostrum voluptatem, veniam
        excepturi? Officiis quos est atque laudantium tenetur labore, error
        voluptate inventore placeat corporis nam eveniet cumque incidunt autem
        culpa asperiores harum, minus delectus pariatur tempora! Possimus neque
        debitis adipisci ipsam natus voluptatem dolor ad cumque id ab inventore
        eos aliquam voluptates repudiandae non laboriosam, provident doloribus
        voluptas porro optio et ex. Doloribus, in sint quidem illo minus, omnis
        possimus harum doloremque amet itaque optio facere delectus adipisci
        fugiat, voluptatem nobis similique impedit repellat reiciendis excepturi
        laudantium architecto. Quod suscipit quam dicta soluta voluptate ea,
        sunt quae fugit atque sint in culpa aliquid dolor sed ducimus delectus
        consequuntur impedit tempora nihil cumque quibusdam nulla eum dolorum.
        Expedita aperiam fugiat, aspernatur tempora quisquam alias sunt ad,
        debitis odit ipsum omnis nulla iusto obcaecati tenetur! Molestiae
        facere, sit illum eius amet nostrum dolore et velit dicta laborum magnam
        ea, adipisci voluptate consequuntur quam facilis illo esse beatae totam,
        delectus nihil quo provident pariatur. Harum, corporis vitae dolore
        distinctio adipisci reiciendis est? Temporibus voluptatum quibusdam
        atque ea deserunt! Architecto, corporis. Quo vitae aspernatur minus
        tempora maxime a nemo dolorum aut obcaecati voluptatem quam, ut maiores
        corporis possimus est adipisci voluptatum fuga animi ad labore harum
        quibusdam fugit! Quisquam eveniet dignissimos amet labore reprehenderit
        omnis tempore inventore laborum esse sed minus non blanditiis deserunt
        aliquid vel sint iure, qui facere neque, dicta laboriosam consectetur
        modi nihil! Quae exercitationem animi odit hic nam provident beatae
        magni, ad reiciendis, a, delectus ex consectetur rem veritatis. Nesciunt
        rerum in delectus dolorem ea veniam!
      </p>
    </motion.div>
  );
};

export default About;
