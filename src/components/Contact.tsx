'use client';

import { useState } from 'react';
import { TextAnimate } from './magicui/text-animate';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('Sending...');

    const formData = new FormData();
    formData.append('access_key', '0a3dde5a-f41c-4b97-82b9-e1579fc6ccfa');
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('message', form.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('✅ Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus(data.message || '❌ Submission failed.');
      }
   } catch (error) {
  console.error(error);
  setStatus('❌ Network error. Try again later');
}
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 px-6 py-20   dark:text-white"
    >
      <div className="max-w-3xl mx-auto">
        <TextAnimate
          animation="blurInUp"
          by="character"
          once
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
        >
          CONTACT
        </TextAnimate>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-white dark:bg-black p-8 rounded-2xl shadow-xl border dark:border-white/10"
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Your Name</label>
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-white dark:bg-zinc-800 border dark:border-white/20"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Email Address</label>
            <Input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              type="email"
              className="bg-white dark:bg-zinc-800 border dark:border-white/20"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Message</label>
            <Textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Type your message..."
              className="bg-white dark:bg-zinc-800 border dark:border-white/20"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-sm rounded-xl cursor-pointer transition"
          >
            Send Message
          </Button>

          {status && (
            <p className="text-sm text-center text-green-500 dark:text-green-400 mt-2">
              {status}
            </p>
          )}
        </form>
      </div>
  <h3 className="mt-12 text-center text-sm opacity-80 dark:text-white">
  Made with ❤️ by <span className="font-semibold">Bharat Khatwani</span>
</h3>


    </section>
  );
}
