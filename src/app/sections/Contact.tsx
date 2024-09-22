"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
interface PropsItem {
  target: {
    name: string;
    value: string;
  };
}
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const handleChange = ({ target: { name, value } }: PropsItem) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs
        .send(
          "service_qacarkp",
          "template_k7v49d1",
          {
            from_name: form.name,
            to_name: "Hafid",
            from_email: form.email,
            to_email: "hafidlaadimi2003@gmail.com",
            message: form.message,
          },

          "u4ocT-ZhbF625GaDz"
        )

        .then(
          () => {
            console.log("SUCCESS!");
            alert(
              "Thank you for your message. I will get back to you as soon as possible."
            );
            setForm({ name: "", email: "", message: "" });
            setLoading(false);
          },
          (error) => {
            console.log("FAILED...", error);
            alert("I did not received your message");
            setLoading(false);
          }
        );
    } catch (error: any) {
      console.log(error);
      throw new Error("Error", error.message);
    }
  };
  return (
    <section className="c-space mt-20">
      <div className="flex items-center justify-center flex-col relative min-h-screen">
        <Image
          height={1000}
          width={600}
          alt="bg_image"
          src="/assets/terminal.png"
          className="absolute min-h-screen inset-0 w-full z-10"
        />
        <div className="contact-container">
          <h3 className="head-text z-40 mt-10">Let us talk</h3>
          <p className="text-lg text-white-600 mt-3 z-40">
            Whether you are looking to build a new website, improve your
            existing platform, or bring a unique project to life, I am here to
            help.
          </p>

          <form className="mt-12 flex flex-col space-y-7">
            <label className="space-y-2">
              <span className="field-label">Full name</span>
              <input
                className="field-input"
                name="name"
                value={form.name}
                required
                placeholder="ex. , Hafid LAADIMI"
                onChange={handleChange}
              />
            </label>
            <label className="space-y-2">
              <span className="field-label">Email</span>
              <input
                className="field-input"
                name="email"
                value={form.email}
                required
                placeholder="ex. , contact@example.com"
                onChange={handleChange}
              />
            </label>
            <label className="space-y-2">
              <span className="field-label">Full name</span>
              <textarea
                className="field-input"
                name="message"
                value={form.message}
                required
                rows={6}
                placeholder="Hey Hafid , I wanna hire you"
                onChange={handleChange}
              />
            </label>
            <button
              disabled={loading}
              className="field-btn"
              type="submit"
              onClick={handleSubmit}
            >
              {loading ? "Sending ..." : "Send message"}
              <Image
                height={50}
                width={50}
                alt="image_btn"
                src="/assets/arrow-up.png"
                className="field-btn_arrow h-10 w-10 object-contain "
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
